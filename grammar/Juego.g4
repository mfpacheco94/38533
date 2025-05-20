grammar Juego;

prog: juego+;

// Reglas sintácticas (Parser Rules)
juego: 'juego' nombre '{' escenas '}' ;
escenas: escena* ;
escena : 'escena' ID '{' acciones '}' ;
acciones: accion* ;
accion: imprimir
        | leer
        | condicion
        | saltar ;
imprimir: 'mostrar' texto ';' ;
leer: 'leer' variable ';' ;
condicion: 'si' comparacion 'saltar' nombre ';' ;
comparacion: variable '==' valor ;
saltar: 'saltar' nombre ';' ;

//Lexemas
nombre: ID ;
texto: CADENA ;
variable: ID ;
valor: CADENA | INT ;

ID : [\p{L}_] [\p{L}\p{N}_]* ;
INT: [0-9]+ ;
CADENA: '"' .*? '"' ;

WS: [ \t\r\n]+ -> skip ;
COMMENT: '//' ~[\r\n]* -> skip ; 
