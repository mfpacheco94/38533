// Generated from c:/Users/crist/OneDrive/Documentos/Facultad S21/Mati/analizador/grammar/Juego.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JuegoListener from './JuegoListener.js';
import JuegoVisitor from './JuegoVisitor.js';

const serializedATN = [4,1,15,96,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,1,1,1,1,1,1,1,1,
2,5,2,43,8,2,10,2,12,2,46,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,5,4,55,8,4,10,
4,12,4,58,9,4,1,5,1,5,1,5,1,5,3,5,64,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,
12,1,12,1,13,1,13,1,14,1,14,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,0,1,1,0,12,13,86,0,31,1,0,0,0,2,35,1,0,0,0,4,44,1,0,0,0,6,47,1,0,0,
0,8,56,1,0,0,0,10,63,1,0,0,0,12,65,1,0,0,0,14,69,1,0,0,0,16,73,1,0,0,0,18,
79,1,0,0,0,20,83,1,0,0,0,22,87,1,0,0,0,24,89,1,0,0,0,26,91,1,0,0,0,28,93,
1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,
0,0,0,34,1,1,0,0,0,35,36,5,1,0,0,36,37,3,22,11,0,37,38,5,2,0,0,38,39,3,4,
2,0,39,40,5,3,0,0,40,3,1,0,0,0,41,43,3,6,3,0,42,41,1,0,0,0,43,46,1,0,0,0,
44,42,1,0,0,0,44,45,1,0,0,0,45,5,1,0,0,0,46,44,1,0,0,0,47,48,5,4,0,0,48,
49,5,11,0,0,49,50,5,2,0,0,50,51,3,8,4,0,51,52,5,3,0,0,52,7,1,0,0,0,53,55,
3,10,5,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,9,1,
0,0,0,58,56,1,0,0,0,59,64,3,12,6,0,60,64,3,14,7,0,61,64,3,16,8,0,62,64,3,
20,10,0,63,59,1,0,0,0,63,60,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,11,1,
0,0,0,65,66,5,5,0,0,66,67,3,24,12,0,67,68,5,6,0,0,68,13,1,0,0,0,69,70,5,
7,0,0,70,71,3,26,13,0,71,72,5,6,0,0,72,15,1,0,0,0,73,74,5,8,0,0,74,75,3,
18,9,0,75,76,5,9,0,0,76,77,3,22,11,0,77,78,5,6,0,0,78,17,1,0,0,0,79,80,3,
26,13,0,80,81,5,10,0,0,81,82,3,28,14,0,82,19,1,0,0,0,83,84,5,9,0,0,84,85,
3,22,11,0,85,86,5,6,0,0,86,21,1,0,0,0,87,88,5,11,0,0,88,23,1,0,0,0,89,90,
5,13,0,0,90,25,1,0,0,0,91,92,5,11,0,0,92,27,1,0,0,0,93,94,7,0,0,0,94,29,
1,0,0,0,4,33,44,56,63];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JuegoParser extends antlr4.Parser {

    static grammarFileName = "Juego.g4";
    static literalNames = [ null, "'juego'", "'{'", "'}'", "'escena'", "'mostrar'", 
                            "';'", "'leer'", "'si'", "'saltar'", "'=='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "ID", "INT", "CADENA", "WS", 
                             "COMMENT" ];
    static ruleNames = [ "prog", "juego", "escenas", "escena", "acciones", 
                         "accion", "imprimir", "leer", "condicion", "comparacion", 
                         "saltar", "nombre", "texto", "variable", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JuegoParser.ruleNames;
        this.literalNames = JuegoParser.literalNames;
        this.symbolicNames = JuegoParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JuegoParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.juego();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	juego() {
	    let localctx = new JuegoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JuegoParser.RULE_juego);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(JuegoParser.T__0);
	        this.state = 36;
	        this.nombre();
	        this.state = 37;
	        this.match(JuegoParser.T__1);
	        this.state = 38;
	        this.escenas();
	        this.state = 39;
	        this.match(JuegoParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escenas() {
	    let localctx = new EscenasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JuegoParser.RULE_escenas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 41;
	            this.escena();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escena() {
	    let localctx = new EscenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JuegoParser.RULE_escena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(JuegoParser.T__3);
	        this.state = 48;
	        this.match(JuegoParser.ID);
	        this.state = 49;
	        this.match(JuegoParser.T__1);
	        this.state = 50;
	        this.acciones();
	        this.state = 51;
	        this.match(JuegoParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acciones() {
	    let localctx = new AccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JuegoParser.RULE_acciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 928) !== 0)) {
	            this.state = 53;
	            this.accion();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JuegoParser.RULE_accion);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.imprimir();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.leer();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.condicion();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 62;
	            this.saltar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JuegoParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(JuegoParser.T__4);
	        this.state = 66;
	        this.texto();
	        this.state = 67;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JuegoParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(JuegoParser.T__6);
	        this.state = 70;
	        this.variable();
	        this.state = 71;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JuegoParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(JuegoParser.T__7);
	        this.state = 74;
	        this.comparacion();
	        this.state = 75;
	        this.match(JuegoParser.T__8);
	        this.state = 76;
	        this.nombre();
	        this.state = 77;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparacion() {
	    let localctx = new ComparacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JuegoParser.RULE_comparacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.variable();
	        this.state = 80;
	        this.match(JuegoParser.T__9);
	        this.state = 81;
	        this.valor();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	saltar() {
	    let localctx = new SaltarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JuegoParser.RULE_saltar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(JuegoParser.T__8);
	        this.state = 84;
	        this.nombre();
	        this.state = 85;
	        this.match(JuegoParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JuegoParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(JuegoParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JuegoParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(JuegoParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JuegoParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(JuegoParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JuegoParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JuegoParser.EOF = antlr4.Token.EOF;
JuegoParser.T__0 = 1;
JuegoParser.T__1 = 2;
JuegoParser.T__2 = 3;
JuegoParser.T__3 = 4;
JuegoParser.T__4 = 5;
JuegoParser.T__5 = 6;
JuegoParser.T__6 = 7;
JuegoParser.T__7 = 8;
JuegoParser.T__8 = 9;
JuegoParser.T__9 = 10;
JuegoParser.ID = 11;
JuegoParser.INT = 12;
JuegoParser.CADENA = 13;
JuegoParser.WS = 14;
JuegoParser.COMMENT = 15;

JuegoParser.RULE_prog = 0;
JuegoParser.RULE_juego = 1;
JuegoParser.RULE_escenas = 2;
JuegoParser.RULE_escena = 3;
JuegoParser.RULE_acciones = 4;
JuegoParser.RULE_accion = 5;
JuegoParser.RULE_imprimir = 6;
JuegoParser.RULE_leer = 7;
JuegoParser.RULE_condicion = 8;
JuegoParser.RULE_comparacion = 9;
JuegoParser.RULE_saltar = 10;
JuegoParser.RULE_nombre = 11;
JuegoParser.RULE_texto = 12;
JuegoParser.RULE_variable = 13;
JuegoParser.RULE_valor = 14;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_prog;
    }

	juego = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(JuegoContext);
	    } else {
	        return this.getTypedRuleContext(JuegoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JuegoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_juego;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	escenas() {
	    return this.getTypedRuleContext(EscenasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterJuego(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitJuego(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitJuego(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escenas;
    }

	escena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscenaContext);
	    } else {
	        return this.getTypedRuleContext(EscenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscenas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscenas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_escena;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	acciones() {
	    return this.getTypedRuleContext(AccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterEscena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitEscena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitEscena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_acciones;
    }

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterAcciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitAcciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitAcciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_accion;
    }

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	saltar() {
	    return this.getTypedRuleContext(SaltarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_imprimir;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_leer;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_condicion;
    }

	comparacion() {
	    return this.getTypedRuleContext(ComparacionContext,0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_comparacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterComparacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitComparacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitComparacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SaltarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_saltar;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterSaltar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitSaltar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitSaltar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_texto;
    }

	CADENA() {
	    return this.getToken(JuegoParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_variable;
    }

	ID() {
	    return this.getToken(JuegoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuegoParser.RULE_valor;
    }

	CADENA() {
	    return this.getToken(JuegoParser.CADENA, 0);
	};

	INT() {
	    return this.getToken(JuegoParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuegoListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuegoVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JuegoParser.ProgContext = ProgContext; 
JuegoParser.JuegoContext = JuegoContext; 
JuegoParser.EscenasContext = EscenasContext; 
JuegoParser.EscenaContext = EscenaContext; 
JuegoParser.AccionesContext = AccionesContext; 
JuegoParser.AccionContext = AccionContext; 
JuegoParser.ImprimirContext = ImprimirContext; 
JuegoParser.LeerContext = LeerContext; 
JuegoParser.CondicionContext = CondicionContext; 
JuegoParser.ComparacionContext = ComparacionContext; 
JuegoParser.SaltarContext = SaltarContext; 
JuegoParser.NombreContext = NombreContext; 
JuegoParser.TextoContext = TextoContext; 
JuegoParser.VariableContext = VariableContext; 
JuegoParser.ValorContext = ValorContext; 
