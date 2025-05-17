import antlr4 from 'antlr4';
import JuegoLexer from './grammar/generated/JuegoLexer.js';
import JuegoParser from './grammar/generated/JuegoParser.js';
import JuegoListener from './grammar/generated/JuegoListener.js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// 📂 Leer archivo de entrada desde carpeta input/
const inputFileName = process.argv[2] || 'valido1.txt';
const inputPath = path.join('./input', inputFileName);

if (!fs.existsSync(inputPath)) {
  console.error(`El archivo "${inputPath}" no existe.`);
  process.exit(1);
}

// 📖 Leer contenido del archivo
const input = fs.readFileSync(inputPath, 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new JuegoLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill(); // 👈 NECESARIO para que getTokens() tenga resultados
const parser = new JuegoParser(tokens);
parser.buildParseTrees = true;
const tree = parser.juego();

// ❗ Mostrar errores de sintaxis
if (parser._syntaxErrors > 0) {
  console.error('\n❌ Errores de sintaxis encontrados.');
  process.exit(1);
}

// 🌲 Mostrar árbol sintáctico
console.log("\n🌲 Árbol de análisis sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));

// 🌳 Árbol sintáctico estructurado
function printParseTree(node, indent = '') {
  if (!node.children) return;

  for (let child of node.children) {
    const ruleName = child.ruleIndex >= 0 ? parser.ruleNames[child.ruleIndex] : `'${child.getText()}'`;
    console.log(indent + ruleName);
    printParseTree(child, indent + '  ');
  }
}

console.log("\n🌳 Árbol sintáctico estructurado:");
printParseTree(tree);

// 🎧 Listener personalizado
class JuegoInterpreter extends JuegoListener {
  constructor() {
    super();
    this.output = [];
    this.escenas = []; // 🧠 Guardar nombres de escenas definidas
  }

  enterImprimir(ctx) {
    const texto = ctx.texto().getText().slice(1, -1); // eliminar comillas
    this.output.push(`console.log("${texto}");`);
  }

  enterLeer(ctx) {
    const variable = ctx.variable().getText();
    this.output.push(`let ${variable} = prompt("Ingrese valor para ${variable}:");`);
  }

  enterCondicion(ctx) {
    const variable = ctx.variable().getText();
    const valor = ctx.valor().getText();
    const destino = ctx.nombre().getText();
    this.output.push(`if (${variable} == ${valor}) { ${destino}(); }`);
  }

  enterSaltar(ctx) {
    const destino = ctx.nombre().getText();
    this.output.push(`${destino}();`);
  }

  enterEscena(ctx) {
    const nombre = ctx.ID().getText();
    this.escenas.push(nombre); // guardar el nombre para ejecutarlo luego
    this.output.push(`function ${nombre}() {`);
  }

  exitEscena() {
    this.output.push(`}`);
  }

  enterJuego() {
    this.output.push(`// Código generado desde el lenguaje "juego"\nfunction main() {`);
  }

  exitJuego() {
    // Ejecutar automáticamente la primera escena
    if (this.escenas.length > 0) {
      this.output.push(`  ${this.escenas[0]}();`);
    }
    this.output.push(`}\nmain();`);
  }

  getTranslatedCode() {
    return this.output.join('\n');
  }
}

// ▶️ Ejecutar el listener
const interpreter = new JuegoInterpreter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(interpreter, tree);

// 💻 Mostrar código traducido
const translatedCode = interpreter.getTranslatedCode();
console.log("\n💻 Código traducido a JavaScript:");
console.log(translatedCode);

// 💾 Guardar en carpeta output/
const outputDir = './output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const outputFileName = inputFileName.replace(/\.txt$/, '.js');
const outputPath = path.join(outputDir, outputFileName);
fs.writeFileSync(outputPath, translatedCode, 'utf8');

console.log(`\n✅ Código guardado en: ${outputPath}`);

// Ejecutar automáticamente el código traducido
console.log(`\n🔁 Ejecutando código traducido:`);
try {
  const result = execSync(`node ${outputPath}`, { encoding: 'utf8' });
  console.log(result);
} catch (err) {
  console.error("❌ Error ejecutando el código traducido:");
  console.error(err.message);
}
