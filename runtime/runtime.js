/*
 * To use write/prints/... the default-output port has to be set first.
 * Simply setting SC_DEFAULT_OUT and SC_ERROR_OUT to the desired values
 * should do the trick.
 * In the following example the std-out and error-port are redirected to
 * a DIV.
function initRuntime() {
    function escapeHTML(s) {
	var tmp = s;
	tmp = tmp.replace(/&/g, "&amp;");
	tmp = tmp.replace(/</g, "&lt;");
	tmp = tmp.replace(/>/g, "&gt;");
	tmp = tmp.replace(/ /g, "&nbsp;");
	tmp = tmp.replace(/\n/g, "<br />");
	tmp = tmp.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp");
	return tmp;
	
    }

    document.write("<div id='stdout'></div>");
    SC_DEFAULT_OUT = new sc_GenericOutputPort(
	function(s) {
	    var stdout = document.getElementById('stdout');
	    stdout.innerHTML = stdout.innerHTML + escapeHTML(s);
	});
    SC_ERROR_OUT = SC_DEFAULT_OUT;
}
*/


function sc_print_debug() {
    sc_print_immutable.apply(null, arguments);
}
/*** META ((export *js*)) */
var sc_JS_GLOBALS = this;

var sc_SYMBOL_PREFIX = "\u1E9C"; // "\u1E9D\u1E9E\u1E9F";

var __sc_LINE=-1;
var __sc_FILE="";

/*** META ((export #t)) */
function sc_alert() {
   var len = arguments.length;
   var s = "";
   var i;

   for( i = 0; i < len; i++ ) {
      s += arguments[ i ];
   }

   return alert( s );
}

/*** META ((export #t)) */
function sc_typeof( x ) {
   return typeof x;
}

/*** META ((export error)
           (string mutable))
*/
function sc_error_mutable() {
    var t = sc_withOutputToString_mutable(
	function () {
	    sc_print_mutable("**ERROR**");
	    for (var i = 0; i < arguments.length; i++) {
		sc_print_mutable(arguments[i]);
	    }
	});
    throw t;
}

/*** META ((export error)
           (string immutable))
*/
function sc_error_immutable() {
    var t = sc_withOutputToString_mutable(
	function () {
	    sc_print_immutable("**ERROR**");
	    for (var i = 0; i < arguments.length; i++) {
		sc_print_mutable(arguments[i]);
	    }
	});
    throw t;
}

/*** META ((export with-handler-lambda)) */
function sc_withHandlerLambda(handler, body) {
    try {
	return body();
    } catch(e) {
	if (!e._internalException)
	    return handler(e);
	else
	    throw e;
    }
}

var sc_properties = new Object();

/*** META ((export putprop!)) */
function sc_putProp(sym, key, val) {
    var ht = sc_properties[sym];
    if (!ht) {
	ht = new Object();
	sc_properties[sym] = ht;
    }
    ht[key] = val;
}

/*** META ((export getprop)) */
function sc_getProp(sym, key) {
    var ht = sc_properties[sym];
    if (ht) {
	if (key in ht)
	    return ht[key];
	else
	    return false;
    } else
	return false;
}

/*** META ((export remprop!)) */
function sc_remProp(sym, key) {
    var ht = sc_properties[sym];
    if (ht)
	delete ht[key];
}

/*** META ((export gensym)
           (string mutable))
*/
var sc_gensym_mutable = function() {
    var counter = 1000;
    return function(sym) {
	counter++;
	if (!sym) sym = "";
	return "s" + counter + "~" + sym + "^sC-GeNsYm ";
    };
}();

/*** META ((export gensym)
           (string immutable))
*/
var sc_gensym_immutable = function() {
    var counter = 1000;
    return function(sym) {
	counter++;
	if (!sym) sym = sc_SYMBOL_PREFIX;
	return sym + "s" + counter + "~" + "^sC-GeNsYm ";
    };
}();

function sc_toString(o) {
    if (o === null)
	return "()";
    else if (o === true)
	return "#t";
    else if (o === false)
	return "#f";
    else if (o === undefined)
	return "#unspecified"
    else
	return o.toString();
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function sc_isEqv(o1, o2) {
    return (o1 === o2);
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function sc_isEq(o1, o2) {
    return (o1 === o2);
}

/*** META ((export equal?)
           (string immutable)
           (type bool))
*/
function sc_isEqual_immutable(o1, o2) {
    return ((o1 === o2) ||
	    (sc_isPair(o1) && sc_isPair(o2)
	     && sc_isPairEqual(o1, o2, sc_isEqual_immutable)) ||
	    (sc_isVector(o1) && sc_isVector(o2)
	     && sc_isVectorEqual(o1, o2, sc_isEqual_immutable)));
}
/*** META ((export equal?)
           (string mutable)
           (type bool))
*/
function sc_isEqual_mutable(o1, o2) {
    return ((o1 === o2) ||
	    (sc_isPair(o1) && sc_isPair(o2)
	     && sc_isPairEqual(o1, o2, sc_isEqual_mutable)) ||
	    (sc_isVector(o1) && sc_isVector(o2)
	     && sc_isVectorEqual(o1, o2, sc_isEqual_mutable)) ||
	    (sc_isString_mutable(o1) && sc_isString_mutable(o2)
	     && sc_isStringEqual_mutable(o1, o2)));
}

/*** META ((export #t)
           (type bool))
*/
function sc_isNumber(n) {
    return (typeof n === "number");
}

/*** META ((export #t)
           (type bool))
*/
function sc_isComplex(n) {
    return sc_isNumber(n);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isReal(n) {
    return sc_isNumber(n);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isRational(n) {
    return sc_isReal(n);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isInteger(n) {
    return (parseInt(n) === n);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix ", false")))
*/
// we don't have exact numbers...
function sc_isExact(n) {
    return false;
}

/*** META ((export #t)
           (peephole (postfix ", true"))
	   (type bool))
*/
function sc_isInexact(n) {
    return true;
}

/*** META ((export = =fx =fl)
           (type bool)
           (peephole (infix 2 2 "===")))
*/
function sc_equal(x) {
    for (var i = 1; i < arguments.length; i++)
	if (x !== arguments[i])
	    return false;
    return true;
}

/*** META ((export < <fx <fl)
           (type bool)
           (peephole (infix 2 2 "<")))
*/
function sc_less(x) {
    for (var i = 1; i < arguments.length; i++) {
	if (x >= arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export > >fx >fl)
           (type bool)
           (peephole (infix 2 2 ">")))
*/
function sc_greater(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x <= arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export <= <=fx <=fl)
           (type bool)
           (peephole (infix 2 2 "<=")))
*/
function sc_lessEqual(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x > arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export >= >=fl >=fx)
           (type bool)
           (peephole (infix 2 2 ">=")))
*/
function sc_greaterEqual(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x < arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "=== 0")))
*/
function sc_isZero(x) {
    return (x === 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "> 0")))
*/
function sc_isPositive(x) {
    return (x > 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "< 0")))
*/
function sc_isNegative(x) {
    return (x < 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===1")))
*/
function sc_isOdd(x) {
    return (x % 2 === 1);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===0")))
*/
function sc_isEven(x) {
    return (x % 2 === 0);
}

/*** META ((export #t)) */
var sc_max = Math.max;
/*** META ((export #t)) */
var sc_min = Math.min;

/*** META ((export + +fx +fl)
           (peephole (infix 0 #f "+" "0")))
*/
function sc_plus() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++)
	sum += arguments[i];
    return sum;
}

/*** META ((export * *fx *fl)
           (peephole (infix 0 #f "*" "1")))
*/
function sc_multi() {
    var product = 1;
    for (var i = 0; i < arguments.length; i++)
	product *= arguments[i];
    return product;
}

/*** META ((export - -fx -fl)
           (peephole (minus)))
*/
function sc_minus(x) {
    if (arguments.length === 1)
	return -x;
    else {
	var res = x;
	for (var i = 1; i < arguments.length; i++)
	    res -= arguments[i];
	return res;
    }
}

/*** META ((export / /fl)
           (peephole (div)))
*/
function sc_div(x) {
    if (arguments.length === 1)
	return 1/x;
    else {
	var res = x;
	for (var i = 1; i < arguments.length; i++)
	    res /= arguments[i];
	return res;
    }
}

/*** META ((export #t)) */
var sc_abs = Math.abs;

/*** META ((export quotient /fx)
           (peephole (hole 2 "parseInt(" x "/" y ")")))
*/
function sc_quotient(x, y) {
    return parseInt(x / y);
}

/*** META ((export #t)
           (peephole (infix 2 2 "%")))
*/
function sc_remainder(x, y) {
    return x % y;
}

/*** META ((export #t)
           (peephole (modulo)))
*/
function sc_modulo(x, y) {
    var remainder = x % y;
    // if they don't have the same sign
    if ((remainder * y) < 0)
	return remainder + y;
    else
	return remainder;
}

function sc_euclid_gcd(a, b) {
    var temp;
    if (a === 0) return b;
    if (b === 0) return a;
    if (a < 0) {a = -a;};
    if (b < 0) {b = -b;};
    if (b > a) {temp = a; a = b; b = temp;};
    while (true) {
	a %= b;
	if(a === 0) {return b;};
	b %= a;
	if(b === 0) {return a;};
    };
    return b;
}

/*** META ((export #t)) */
function sc_gcd() {
    var gcd = 0;
    for (var i = 0; i < arguments.length; i++)
	gcd = sc_euclid_gcd(gcd, arguments[i]);
    return gcd;
}

/*** META ((export #t)) */
function sc_lcm() {
    var lcm = 1;
    for (var i = 0; i < arguments.length; i++) {
	var f = Math.round(arguments[i] / sc_euclid_gcd(arguments[i], lcm));
	lcm *= Math.abs(f);
    }
    return lcm;
}

// LIMITATION: numerator and denominator don't make sense in floating point world.
//var SC_MAX_DECIMALS = 1000000
//
// function sc_numerator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(rounded / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

// function sc_denominator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(SC_MAX_DECIMALS / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

/*** META ((export #t)) */
var sc_floor = Math.floor;
/*** META ((export #t)) */
var sc_ceiling = Math.ceil;
/*** META ((export #t)) */
var sc_truncate = parseInt;
/*** META ((export #t)) */
var sc_round = Math.round;

// LIMITATION: sc_rationalize doesn't make sense in a floating point world.

/*** META ((export #t)) */
var sc_exp = Math.exp;
/*** META ((export #t)) */
var sc_log = Math.log;
/*** META ((export #t)) */
var sc_sin = Math.sin;
/*** META ((export #t)) */
var sc_cos = Math.cos;
/*** META ((export #t)) */
var sc_tan = Math.tan;
/*** META ((export #t)) */
var sc_asin = Math.asin;
/*** META ((export #t)) */
var sc_acos = Math.acos;
/*** META ((export #t)) */
var sc_atan = Math.atan;

/*** META ((export #t)) */
var sc_sqrt = Math.sqrt;
/*** META ((export #t)) */
var sc_expt = Math.pow;

// LIMITATION: we don't have complex numbers.
// LIMITATION: the following functions are hence not implemented.
// LIMITATION: make-rectangular, make-polar, real-part, imag-part, magnitude, angle
// LIMITATION: 2 argument atan

/*** META ((export #t)
           (peephole (id)))
*/
function sc_exact2inexact(x) {
    return x;
}

/*** META ((export #t)
           (peephole (id)))
*/
function sc_inexact2exact(x) {
    return x;
}

/*** META ((export number->symbol integer->symbol)
           (string mutable))
*/
function sc_number2symbol_mutable(x, radix) {
    if (radix)
	return x.toString(radix);
    else
	return x.toString();
}

/*** META ((export number->string integer->string)
           (string mutable))
*/
function sc_number2string_mutable(x, radix) {
    return new sc_String(sc_number2symbol_mutable(x, radix));
}

/*** META ((export number->symbol integer->symbol)
           (string immutable))
*/
function sc_number2symbol_immutable(x, radix) {
    return sc_SYMBOL_PREFIX + sc_number2string_immutable(x, radix);
}
    
/*** META ((export number->string integer->string)
           (string immutable))
*/
var sc_number2string_immutable = sc_number2symbol_mutable;


/*** META ((export symbol->number)
           (string mutable))
*/
function sc_symbol2number_mutable(s, radix) {
    // first test, if there aren't any trailing chars
    // (which are ignored by parseFloat/parseInt)
    if (+s || +s === 0) {
	if (radix) {
	    var t = parseInt(s, radix);
	    if (t || t === 0) return t; else return false;
	} else return parseFloat(s);
    } else
	return false;
}

/*** META ((export string->number)
           (string mutable))
*/
function sc_string2number_mutable(s, radix) {
    return sc_symbol2number_mutable(s.val, radix);
}

/*** META ((export symbol->number)
           (string immutable))
*/
function sc_symbol2number_immutable(s, radix) {
    return sc_string2number_immutable(s.slice(1), radix);
}

/*** META ((export string->number)
           (string immutable))
*/
var sc_string2number_immutable = sc_symbol2number_mutable;

/*** META ((export #t)
           (type bool)
           (peephole (not)))
*/
function sc_not(b) {
    return b === false;
}

/*** META ((export #t)
           (type bool))
*/
function sc_isBoolean(b) {
    return (b === true) || (b === false);
}

function sc_Pair(car, cdr) {
    this.car = car;
    this.cdr = cdr;
}

sc_Pair.prototype.toString = function(inList) {
    var isP = sc_isPair(this.cdr);
    var tmp = sc_toString(this.car);
    if (sc_isPair(this.cdr))
	tmp += " " + this.cdr.toString(true);
    else if (this.cdr !== null)
	tmp += " . " + sc_toString(this.cdr);
    if (inList)
	return tmp;
    else
	return "(" + tmp + ")";
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Pair")))
*/
function sc_isPair(p) {
    return (p instanceof sc_Pair);
}

function sc_isPairEqual(p1, p2, comp) {
    return (comp(p1.car, p2.car) && comp(p1.cdr, p2.cdr));
}

/*** META ((export #t)
           (peephole (hole 2 "new sc_Pair(" car ", " cdr ")")))
*/
function sc_cons(car, cdr) {
    return new sc_Pair(car, cdr);
}

/*** META ((export cons*)) */
function sc_consStar() {
    var res = arguments[arguments.length - 1];
    for (var i = arguments.length-2; i >= 0; i--)
	res = new sc_Pair(arguments[i], res);
    return res;
}

/*** META ((export #t)
           (peephole (postfix ".car")))
*/
function sc_car(p) {
    return p.car;
}

/*** META ((export #t)
           (peephole (postfix ".cdr")))
*/
function sc_cdr(p) {
    return p.cdr;
}

/*** META ((export set-car!)
           (peephole (hole 2 p ".car = " val)))
*/
function sc_setCar(p, val) {
    p.car = val;
}

/*** META ((export set-cdr!)
           (peephole (hole 2 p ".cdr = " val)))
*/
function sc_setCdr(p, val) {
    p.cdr = val;
}

/*** META ((export #t)
           (peephole (postfix ".car.car")))
*/
function sc_caar(p) { return p.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car")))
*/
function sc_cadr(p) { return p.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr")))
*/
function sc_cdar(p) { return p.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr")))
*/
function sc_cddr(p) { return p.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car")))
*/
function sc_caaar(p) { return p.car.car.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car")))
*/
function sc_cadar(p) { return p.car.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car")))
*/
function sc_caadr(p) { return p.cdr.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car")))
*/
function sc_caddr(p) { return p.cdr.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr")))
*/
function sc_cdaar(p) { return p.car.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr")))
*/
function sc_cdadr(p) { return p.cdr.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr")))
*/
function sc_cddar(p) { return p.car.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr")))
*/
function sc_cdddr(p) { return p.cdr.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.car")))
*/
function sc_caaaar(p) { return p.car.car.car.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.car")))
*/
function sc_caadar(p) { return p.car.cdr.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.car")))
*/
function sc_caaadr(p) { return p.cdr.car.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.car")))
*/
function sc_caaddr(p) { return p.cdr.cdr.car.car; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.cdr")))
*/
function sc_cdaaar(p) { return p.car.car.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.cdr")))
*/
function sc_cdadar(p) { return p.car.cdr.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.cdr")))
*/
function sc_cdaadr(p) { return p.cdr.car.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.cdr")))
*/
function sc_cdaddr(p) { return p.cdr.cdr.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.car")))
*/
function sc_cadaar(p) { return p.car.car.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.car")))
*/
function sc_caddar(p) { return p.car.cdr.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.car")))
*/
function sc_cadadr(p) { return p.cdr.car.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.car")))
*/
function sc_cadddr(p) { return p.cdr.cdr.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.cdr")))
*/
function sc_cddaar(p) { return p.car.car.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.cdr")))
*/
function sc_cdddar(p) { return p.car.cdr.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.cdr")))
*/
function sc_cddadr(p) { return p.cdr.car.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.cdr")))
*/
function sc_cddddr(p) { return p.cdr.cdr.cdr.cdr; }

/*** META ((export #t)) */
function sc_lastPair(l) {
    if (!sc_isPair(l)) sc_error("sc_lastPair: pair expected");
    var res = l;
    var cdr = l.cdr;
    while (sc_isPair(cdr)) {
	res = cdr;
	cdr = res.cdr;
    }
    return res;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " === null")))
*/
function sc_isNull(o) {
    return (o === null);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isList(o) {
    var rabbit;
    var turtle;

    var rabbit = o;
    var turtle = o;
    while (true) {
	if (rabbit === null ||
	    (rabbit instanceof sc_Pair && rabbit.cdr === null))
	    return true;  // end of list
	else if ((rabbit instanceof sc_Pair) &&
		 (rabbit.cdr instanceof sc_Pair)) {
	    rabbit = rabbit.cdr.cdr;
	    turtle = turtle.cdr;
	    if (rabbit === turtle) return false; // cycle
	} else
	    return false; // not pair
    }
}

/*** META ((export #t)) */
function sc_list() {
    var res = null;
    var a = arguments;
    for (var i = a.length-1; i >= 0; i--)
	res = new sc_Pair(a[i], res);
    return res;
}

/*** META ((export #t)) */
function sc_iota(num, init) {
   var res = null;
   for (var i = num - 1; i >= 0; i--)
      res = new sc_Pair(i + init, res);
   return res;
}

/*** META ((export #t)) */
function sc_makeList(nbEls, fill) {
    var res = null;
    for (var i = 0; i < nbEls; i++)
	res = new sc_Pair(fill, res);
    return res;
}

/*** META ((export #t)) */
function sc_length(l) {
    res = 0;
    while (l != null) {
	res++;
	l = l.cdr;
    }
    return res;
}

function sc_destReverseAppend(l1, l2) {
    var res = l2;
    while (l1 != null) {
	var tmp = res;
	res = l1;
	l1 = l1.cdr;
	res.cdr = tmp;
    }
    return res;
}
	
function sc_dualAppend(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    var rev = sc_reverse(l1);
    return sc_destReverseAppend(rev, l2);
}

/*** META ((export #t)) */
function sc_append() {
    if (arguments.length === 0)
	return null;
    var res = arguments[arguments.length - 1];
    for (var i = arguments.length - 2; i >= 0; i--)
	res = sc_dualAppend(arguments[i], res);
    return res;
}

function sc_destDualAppend(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    var tmp = l1;
    while (tmp.cdr != null) tmp=tmp.cdr;
    tmp.cdr = l2;
    return l1;
}
    
/*** META ((export append!)) */
function sc_destAppend() {
    var res = null;
    for (var i = 0; i < arguments.length; i++)
	res = sc_destDualAppend(res, arguments[i]);
    return res;
}

/*** META ((export #t)) */
function sc_reverse(l1) {
    var res = null;
    while (l1 != null) {
	res = sc_cons(l1.car, res);
	l1 = l1.cdr;
    }
    return res;
}

/*** META ((export reverse!)) */
function sc_destReverse(l) {
    return sc_destReverseAppend(l, null);
}

/*** META ((export #t)) */
function sc_listTail(l, k) {
    var res = l;
    for (var i = 0; i < k; i++) {
	res = res.cdr;
    }
    return res;
}

/*** META ((export #t)) */
function sc_listRef(l, k) {
    return sc_listTail(l, k).car;
}

/* // unoptimized generic versions
function sc_memX(o, l, comp) {
    while (l != null) {
	if (comp(l.car, o))
	    return l;
	l = l.cdr;
    }
    return false;
}
function sc_memq(o, l) { return sc_memX(o, l, sc_isEq); }
function sc_memv(o, l) { return sc_memX(o, l, sc_isEqv); }
function sc_member(o, l) { return sc_memX(o, l, sc_isEqual); }
*/

/* optimized versions */
/*** META ((export #t)) */
function sc_memq(o, l) {
    while (l != null) {
	if (l.car === o)
	    return l;
	l = l.cdr;
    }
    return false;
}
/*** META ((export #t)) */
function sc_memv(o, l) {
    while (l != null) {
	if (l.car === o)
	    return l;
	l = l.cdr;
    }
    return false;
}
/*** META ((export member)
           (string mutable))
*/
function sc_member_mutable(o, l) {
    while (l != null) {
	if (sc_isEqual_mutable(l.car,o))
	    return l;
	l = l.cdr;
    }
    return false;
}
/*** META ((export member)
           (string immutable))
*/
function sc_member_immutable(o, l) {
    while (l != null) {
	if (sc_isEqual_immutable(l.car,o))
	    return l;
	l = l.cdr;
    }
    return false;
}


/* // generic unoptimized versions
function sc_assX(o, al, comp) {
    while (al != null) {
	if (comp(al.car.car, o))
	    return al.car;
	al = al.cdr;
    }
    return false;
}
function sc_assq(o, al) { return sc_assX(o, al, sc_isEq); }
function sc_assv(o, al) { return sc_assX(o, al, sc_isEqv); }
function sc_assoc(o, al) { return sc_assX(o, al, sc_isEqual); }
*/
// optimized versions
/*** META ((export #t)) */
function sc_assq(o, al) {
    while (al != null) {
	if (al.car.car === o)
	    return al.car;
	al = al.cdr;
    }
    return false;
}
/*** META ((export #t)) */
function sc_assv(o, al) {
    while (al != null) {
	if (al.car.car === o)
	    return al.car;
	al = al.cdr;
    }
    return false;
}
/*** META ((export assoc)
           (string mutable))
*/
function sc_assoc_mutable(o, al) {
    while (al != null) {
	if (sc_isEqual_mutable(al.car.car, o))
	    return al.car;
	al = al.cdr;
    }
    return false;
}
/*** META ((export assoc)
           (string immutable))
*/
function sc_assoc_immutable(o, al) {
    while (al != null) {
	if (sc_isEqual_immutable(al.car.car, o))
	    return al.car;
	al = al.cdr;
    }
    return false;
}

/*** META ((export symbol?)
           (string mutable)
           (type bool)
           (peephole (hole 1 "typeof " s " === 'string'")))
*/
function sc_isSymbol_mutable(s) {
    return (typeof s === "string");
}

/*** META ((export symbol?)
           (string immutable)
           (type bool))
*/
function sc_isSymbol_immutable(s) {
    return (typeof s === "string") &&
	(s.charAt(0) === sc_SYMBOL_PREFIX);
}

/*** META ((export symbol->string)
           (string mutable)
           (peephole (hole 1 "new sc_String(" s ")")))
*/
function sc_symbol2string_mutable(s) {
    return new sc_String(s);
}

/*** META ((export symbol->string)
           (string immutable)
           (peephole (postfix ".slice(1)")))
*/
function sc_symbol2string_immutable(s) {
    return s.slice(1);
}

/*** META ((export string->symbol)
           (string mutable)
           (peephole (postfix ".val")))
*/
function sc_string2symbol_mutable(s) {
    return s.val;
}

/*** META ((export string->symbol)
           (string immutable)
           (peephole (prefix "'\\u1E9C' +")))
*/
function sc_string2symbol_immutable(s) {
    return sc_SYMBOL_PREFIX + s;
}

/*** META ((export symbol-append)
           (string mutable)
           (peephole (infix 0 #f "+" "''")))
*/
function sc_symbolAppend_mutable() {
    return "".concat.apply("", arguments);
}

/*** META ((export symbol-append)
           (string immutable)
           (peephole (symbolAppend_immutable)))
*/
function sc_symbolAppend_immutable() {
    var res = sc_SYMBOL_PREFIX;
    for (var i = 0; i < arguments.length; i++)
	res += arguments[i].slice(1);
    return res;
}

/* can be used for mutable strings and characters */
function sc_isCharStringEqual(cs1, cs2) { return cs1.val === cs2.val; }
function sc_isCharStringLess(cs1, cs2) { return cs1.val < cs2.val; }
function sc_isCharStringGreater(cs1, cs2) { return cs1.val > cs2.val; }
function sc_isCharStringLessEqual(cs1, cs2) { return cs1.val <= cs2.val; }
function sc_isCharStringGreaterEqual(cs1, cs2) { return cs1.val >= cs2.val; }
function sc_isCharStringCIEqual(cs1, cs2)
    { return cs1.val.toLowerCase() === cs2.val.toLowerCase(); }
function sc_isCharStringCILess(cs1, cs2)
    { return cs1.val.toLowerCase() < cs2.val.toLowerCase(); }
function sc_isCharStringCIGreater(cs1, cs2)
    { return cs1.val.toLowerCase() > cs2.val.toLowerCase(); }
function sc_isCharStringCILessEqual(cs1, cs2)
    { return cs1.val.toLowerCase() <= cs2.val.toLowerCase(); }
function sc_isCharStringCIGreaterEqual(cs1, cs2)
    { return cs1.val.toLowerCase() >= cs2.val.toLowerCase(); }




function sc_Char(c) {
    var cached = sc_Char.lazy[c];
    if (cached)
	return cached;
    this.val = c;
    sc_Char.lazy[c] = this;
    // add return, so FF does not complain.
    return undefined;
}
sc_Char.lazy = new Object();
// thanks to Eric
sc_Char.char2readable = {
    "\000": "#\\null",
    "\007": "#\\bell",
    "\010": "#\\backspace",
    "\011": "#\\tab",
    "\012": "#\\newline",
    "\014": "#\\page",
    "\015": "#\\return",
    "\033": "#\\escape",
    "\040": "#\\space",
    "\177": "#\\delete",

  /* poeticless names */
    "\001": "#\\soh",
    "\002": "#\\stx",
    "\003": "#\\etx",
    "\004": "#\\eot",
    "\005": "#\\enq",
    "\006": "#\\ack",

    "\013": "#\\vt",
    "\016": "#\\so",
    "\017": "#\\si",

    "\020": "#\\dle",
    "\021": "#\\dc1",
    "\022": "#\\dc2",
    "\023": "#\\dc3",
    "\024": "#\\dc4",
    "\025": "#\\nak",
    "\026": "#\\syn",
    "\027": "#\\etb",

    "\030": "#\\can",
    "\031": "#\\em",
    "\032": "#\\sub",
    "\033": "#\\esc",
    "\034": "#\\fs",
    "\035": "#\\gs",
    "\036": "#\\rs",
    "\037": "#\\us"};

sc_Char.readable2char = {
    "null": "\000",
    "bell": "\007",
    "backspace": "\010",
    "tab": "\011",
    "newline": "\012",
    "page": "\014",
    "return": "\015",
    "escape": "\033",
    "space": "\040",
    "delete": "\000",
    "soh": "\001",
    "stx": "\002",
    "etx": "\003",
    "eot": "\004",
    "enq": "\005",
    "ack": "\006",
    "bel": "\007",
    "bs": "\010",
    "ht": "\011",
    "nl": "\012",
    "vt": "\013",
    "np": "\014",
    "cr": "\015",
    "so": "\016",
    "si": "\017",
    "dle": "\020",
    "dc1": "\021",
    "dc2": "\022",
    "dc3": "\023",
    "dc4": "\024",
    "nak": "\025",
    "syn": "\026",
    "etb": "\027",
    "can": "\030",
    "em": "\031",
    "sub": "\032",
    "esc": "\033",
    "fs": "\034",
    "gs": "\035",
    "rs": "\036",
    "us": "\037",
    "sp": "\040",
    "del": "\177"};
    
sc_Char.prototype.toString = function() {
    return this.val;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "instanceof sc_Char")))
*/
function sc_isChar(c) {
    return (c instanceof sc_Char);
}

/*** META ((export char=?)
           (type bool)
           (peephole (hole 2 c1 ".val === " c2 ".val")))
*/
var sc_isCharEqual = sc_isCharStringEqual;
/*** META ((export char<?)
           (type bool)
           (peephole (hole 2 c1 ".val < " c2 ".val")))
*/
var sc_isCharLess = sc_isCharStringLess;
/*** META ((export char>?)
           (type bool)
           (peephole (hole 2 c1 ".val > " c2 ".val")))
*/
var sc_isCharGreater = sc_isCharStringGreater;
/*** META ((export char<=?)
           (type bool)
           (peephole (hole 2 c1 ".val <= " c2 ".val")))
*/
var sc_isCharLessEqual = sc_isCharStringLessEqual;
/*** META ((export char>=?)
           (type bool)
           (peephole (hole 2 c1 ".val >= " c2 ".val")))
*/
var sc_isCharGreaterEqual = sc_isCharStringGreaterEqual;
/*** META ((export char-ci=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() === " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIEqual = sc_isCharStringCIEqual;
/*** META ((export char-ci<?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() < " c2 ".val.toLowerCase()")))
*/
var sc_isCharCILess = sc_isCharStringCILess;
/*** META ((export char-ci>?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() > " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIGreater = sc_isCharStringCIGreater;
/*** META ((export char-ci<=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() <= " c2 ".val.toLowerCase()")))
*/
var sc_isCharCILessEqual = sc_isCharStringCILessEqual;
/*** META ((export char-ci>=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() >= " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIGreaterEqual = sc_isCharStringCIGreaterEqual;

var SC_NUMBER_CLASS = "0123456789";
var SC_WHITESPACE_CLASS = ' \r\n\t\f';
var SC_LOWER_CLASS = 'abcdefghijklmnopqrstuvwxyz';
var SC_UPPER_CLASS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function sc_isCharOfClass(c, cl) { return (cl.indexOf(c) != -1); }
/*** META ((export #t)
           (type bool))
*/
function sc_isCharAlphabetic(c)
    { return sc_isCharOfClass(c.val, SC_LOWER_CLASS) ||
	  sc_isCharOfClass(c.val, SC_UPPER_CLASS); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_NUMBER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharNumeric(c)
    { return sc_isCharOfClass(c.val, SC_NUMBER_CLASS); }
/*** META ((export #t)
           (type bool))
*/
function sc_isCharWhitespace(c) {
    var tmp = c.val;
    return tmp === " " || tmp === "\r" || tmp === "\n" || tmp === "\t" || tmp === "\f";
}
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_UPPER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharUpperCase(c)
    { return sc_isCharOfClass(c.val, SC_UPPER_CLASS); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_LOWER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharLowerCase(c)
    { return sc_isCharOfClass(c.val, SC_LOWER_CLASS); }

/*** META ((export #t)
           (peephole (postfix ".val.charCodeAt(0)")))
*/
function sc_char2integer(c)
    { return c.val.charCodeAt(0); }
/*** META ((export char->string)
           (string mutable)
           (peephole (hole "new sc_String(" c ".val)")))
*/
function sc_char2string_mutable(c)
    { return new sc_String(c.val); }
/*** META ((export char->string)
           (string immutable)
           (peephole (postfix ".val")))
*/
function sc_char2string_immutable(c)
    { return c.val; }
/*** META ((export char->symbol)
           (string mutable)
           (peephole (postfix ".val")))
*/
function sc_char2symbol_mutable(c)
    { return c.val; }
/*** META ((export char->symbol)
           (string immutable)
           (peephole (hole 1 "'\\u1E9C' + " c ".val")))
*/
function sc_char2symbol_immutable(c)
    { return sc_SYMBOL_PREFIX + c.val; }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(String.fromCharCode(" n "))")))
*/
function sc_integer2char(n)
    { return new sc_Char(String.fromCharCode(n)); }

/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toUpperCase())")))
*/
function sc_charUpcase(c)
    { return new sc_Char(c.val.toUpperCase()); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toLowerCase())")))
*/
function sc_charDowncase(c)
    { return new sc_Char(c.val.toLowerCase()); }

function sc_makeJSStringOfLength(k, c) {
    var fill;
    if (c === undefined)
	fill = " ";
    else
	fill = c;
    var res = "";
    var len = 1;
    // every round doubles the size of fill.
    while (k >= len) {
	if (k & len)
	    res = res.concat(fill);
	fill = fill.concat(fill);
	len *= 2;
    }
    return res;
}

function sc_String(s) {
    this.val = s;
}

sc_String.prototype.toString = function() {
    return this.val;
}

/*** META ((export string?)
           (string mutable)
           (type bool)
           (peephole (postfix " instanceof sc_String")))
*/
function sc_isString_mutable(s) {
    return (s instanceof sc_String);
}

/*** META ((export string?)
           (string immutable)
           (type bool))
*/
function sc_isString_immutable(s) {
    return (typeof s === "string") &&
	(s.charAt(0) !== sc_SYMBOL_PREFIX);
}

/*** META ((export make-string)
           (string mutable))
*/
function sc_makeString_mutable(k, c) {
    return new sc_String(sc_makeString_immutable(k, c));
}

/*** META ((export make-string)
           (string immutable))
*/
function sc_makeString_immutable(k, c) {
    var fill;
    if (c)
	fill = c.val;
    else
	fill = " ";
    return sc_makeJSStringOfLength(k, fill);
}

/*** META ((export string)
           (string mutable))
*/
function sc_string_mutable() {
    for (var i = 0; i < arguments.length; i++)
	arguments[i] = arguments[i].val;
    return new sc_String("".concat.apply("", arguments));
}

/*** META ((export string)
           (string immutable))
*/
function sc_string_immutable() {
    for (var i = 0; i < arguments.length; i++)
	arguments[i] = arguments[i].val;
    return "".concat.apply("", arguments);
}

/*** META ((export string-length)
           (string mutable))
*/
function sc_stringLength_mutable(s) {
    return s.val.length;
}

/*** META ((export string-length)
           (string immutable))
*/
function sc_stringLength_immutable(s) {
    return s.length;
}

/*** META ((export string-ref)
           (string mutable))
*/
function sc_stringRef_mutable(s, k) {
    return new sc_Char(s.val.charAt(k));
}

/*** META ((export string-ref)
           (string immutable))
*/
function sc_stringRef_immutable(s, k) {
    return new sc_Char(s.charAt(k));
}

/*** META ((export string-set!)
           (string mutable))
*/
function sc_stringSet_mutable(s, k, c) {
    var start = s.val.slice(0, k);
    var end = s.val.slice(k+1);
    s.val = start.concat(c.val, end);
}

/* there's no stringSet in the immutable version
function sc_stringSet_immutable(s, k, c)
*/

/*** META ((export string=?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val === " str2 ".val")))
*/
var sc_isStringEqual_mutable = sc_isCharStringEqual;
/*** META ((export string<?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val < " str2 ".val")))
*/
var sc_isStringLess_mutable = sc_isCharStringLess;
/*** META ((export string>?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val > " str2 ".val")))
*/
var sc_isStringGreater_mutable = sc_isCharStringGreater;
/*** META ((export string<=?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val <= " str2 ".val")))
*/
var sc_isStringLessEqual_mutable = sc_isCharStringLessEqual;
/*** META ((export string>=?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val >= " str2 ".val")))
*/
var sc_isStringGreaterEqual_mutable = sc_isCharStringGreaterEqual;
/*** META ((export string-ci=?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() === " str2 ".val.toLowerCase()")))
*/
var sc_isStringCIEqual_mutable = sc_isCharStringCIEqual;
/*** META ((export string-ci<?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() < " str2 ".val.toLowerCase()")))
*/
var sc_isStringCILess_mutable = sc_isCharStringCILess;
/*** META ((export string-ci>?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() > " str2 ".val.toLowerCase()")))
*/
var sc_isStringCIGreater_mutable = sc_isCharStringCIGreater;
/*** META ((export string-ci<=?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() <= " str2 ".val.toLowerCase()")))
*/
var sc_isStringCILessEqual_mutable = sc_isCharStringCILessEqual;
/*** META ((export string-ci>=?)
           (string mutable)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() >= " str2 ".val.toLowerCase()")))
*/
var sc_isStringCIGreaterEqual_mutable = sc_isCharStringCIGreaterEqual;

/*** META ((export string=?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 " === " str2)))
*/
function sc_isStringEqual_immutable(s1, s2) {
    return s1 === s2;
}
/*** META ((export string<?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 " < " str2)))
*/
function sc_isStringLess_immutable(s1, s2) {
    return s1 < s2;
}
/*** META ((export string>?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 " > " str2)))
*/
function sc_isStringGreater_immutable(s1, s2) {
    return s1 > s2;
}
/*** META ((export string<=?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 " <= " str2)))
*/
function sc_isStringLessEqual_immutable(s1, s2) {
    return s1 <= s2;
}
/*** META ((export string>=?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 " >= " str2)))
*/
function sc_isStringGreaterEqual_immutable(s1, s2) {
    return s1 >= s2;
}
/*** META ((export string-ci=?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() === " str2 ".toLowerCase()")))
*/
function sc_isStringCIEqual_immutable(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}
/*** META ((export string-ci<?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() < " str2 ".toLowerCase()")))
*/
function sc_isStringCILess_immutable(s1, s2) {
    return s1.toLowerCase() < s2.toLowerCase();
}
/*** META ((export string-ci>?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() > " str2 ".toLowerCase()")))
*/
function sc_isStringCIGreater_immutable(s1, s2) {
    return s1.toLowerCase() > s2.toLowerCase();
}
/*** META ((export string-ci<=?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() <= " str2 ".toLowerCase()")))
*/
function sc_isStringCILessEqual_immutable(s1, s2) {
    return s1.toLowerCase() <= s2.toLowerCase();
}
/*** META ((export string-ci>=?)
           (string immutable)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() >= " str2 ".toLowerCase()")))
*/
function sc_isStringCIGreaterEqual_immutable(s1, s2) {
    return s1.toLowerCase() >= s2.toLowerCase();
}

/*** META ((export substring)
           (string mutable)
           (peephole (hole 3 "new sc_String(" s ".val.substring(" start ", " end "))")))
*/
function sc_substring_mutable(s, start, end) {
    return new sc_String(s.val.substring(start, end));
}

/*** META ((export substring)
           (string immutable)
           (peephole (hole 3 s ".substring(" start ", " end ")")))
*/
function sc_substring_immutable(s, start, end) {
    return s.substring(start, end);
}

/*** META ((export string-append)
           (string mutable)
           (peephole (stringAppend_mutable)))
*/
function sc_stringAppend_mutable() {
    for (var i = 0; i < arguments.length; i++)
	arguments[i] = arguments[i].val;
    return new sc_String("".concat.apply("", arguments));
}

/*** META ((export string-append)
           (string immutable)
           (peephole (infix 0 #f "+" "''")))
*/
function sc_stringAppend_immutable() {
    return "".concat.apply("", arguments);
}

/*** META ((export string->list)
           (string mutable)
           (peephole (hole 1 "sc_string2list_immutable(" s ".val)")))
*/
function sc_string2list_mutable(s) {
    return sc_string2list_immutable(s.val);
}

/*** META ((export string->list)
           (string immutable))
*/
function sc_string2list_immutable(s) {
    var res = null;
    for (var i = s.length - 1; i >= 0; i--)
	res = sc_cons(new sc_Char(s.charAt(i)), res);
    return res;
}

/*** META ((export list->string)
           (string mutable)
           (peephole (hole 1 "new sc_String(sc_list2string_immutable(" l "))")))
*/
function sc_list2string_mutable(l) {
    return new sc_String(sc_list2string_immutable(l));
}

/*** META ((export list->string)
           (string immutable))
*/
function sc_list2string_immutable(l) {
    var a = new Array();
    while(l != null) {
	a.push(l.car.val);
	l = l.cdr;
    }
    return "".concat.apply("", a);
}

/*** META ((export string-copy)
           (string mutable)
           (peephole (hole 1 "new sc_String(" s ".val)")))
*/
function sc_stringCopy_mutable(s) {
    return new sc_String(s.val);
}

/*** META ((export string-copy)
           (string immutable)
           (peephole (id)))
*/
function sc_stringCopy_immutable(s) {
    return s;
}

/*** META ((export string-fill!)
           (string mutable))
*/
function sc_stringFill_mutable(s, c) {
    s.val = sc_makeJSStringOfLength(s.val.length, c.val);
}

/* there's no string-fill in the immutable version
function sc_stringFill_immutable(s, c)
*/

var sc_Vector = Array;

sc_Vector.prototype.toString = function() {
    var res = "#(";
    for (var i = 0; i < this.length; i++)
	res += this[i] + " ";
    return res + ")";
}

/*** META ((export vector? array?)
           (type bool)
           (peephole (postfix " instanceof sc_Vector")))
*/
function sc_isVector(v) {
    return (v instanceof sc_Vector);
}

// only applies to vectors
function sc_isVectorEqual(v1, v2, comp) {
    if (v1.length != v2.length) return false;
    for (var i = 0; i < v1.length; i++)
	if (!comp(v1[i], v2[i])) return false;
    return true;
}

/*** META ((export make-vector make-array)) */
function sc_makeVector(size, fill) {
    var a = new sc_Vector(size);
    if (fill != undefined)
	sc_vectorFill(a, fill);
    return a;
}

/*** META ((export vector array)
           (peephole (vector)))
*/
function sc_vector() {
    var a = new sc_Vector();
    for (var i = 0; i < arguments.length; i++)
	a.push(arguments[i]);
    return a;
}

/*** META ((export vector-length array-length)
           (peephole (postfix ".length")))
*/
function sc_vectorLength(v) {
    return v.length;
}

/*** META ((export vector-ref array-ref)
           (peephole (hole 2 v "[" pos "]")))
*/
function sc_vectorRef(v, pos) {
    return v[pos];
}

/*** META ((export vector-set! array-set!)
           (peephole (hole 3 v "[" pos "] = " val)))
*/
function sc_vectorSet(v, pos, val) {
    v[pos] = val;
}

/*** META ((export vector->list array->list)) */
function sc_vector2list(a) {
    var res = null;
    for (var i = a.length-1; i >= 0; i--)
	res = sc_cons(a[i], res);
    return res;
}

/*** META ((export list->vector list->array)) */
function sc_list2vector(l) {
    var a = new sc_Vector();
    while(l != null) {
	a.push(l.car);
	l = l.cdr;
    }
    return a;
}

/*** META ((export vector-fill! array-fill!)) */
function sc_vectorFill(a, fill) {
    for (var i = 0; i < a.length; i++)
	a[i] = fill;
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "typeof " o " === 'function'")))
*/
function sc_isProcedure(o) {
    return (typeof o === "function");
}

/*** META ((export #t)) */
function sc_apply(proc) {
    var args = new Array();
    // first part of arguments are not in list-form.
    for (var i = 1; i < arguments.length - 1; i++)
	args.push(arguments[i]);
    var l = arguments[arguments.length - 1];
    while (l != null) {
	args.push(l.car);
	l = l.cdr;
    }
    return proc.apply(null, args);
}

/*** META ((export #t)) */
function sc_map(proc, l1) {
    if (l1 === undefined)
	return null;
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    var revres = null;
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	revres = sc_cons(proc.apply(null, applyArgs), revres);
    }
    return sc_destReverseAppend(revres, null);
}

/*** META ((export map!)) */
function sc_mapDest(proc, l1) {
    if (l1 === undefined)
	return null;
    // else
    var l1_orig = l1;
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    while (l1 !== null) {
	var tmp = l1;
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	tmp.car = proc.apply(null, applyArgs);
    }
    return l1_orig;
}
     
/*** META ((export #t)) */
function sc_forEach(proc, l1) {
    if (l1 === undefined)
	return undefined;
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	proc.apply(null, applyArgs);
    }
    // add return so FF does not complain.
    return undefined;
}

/*** META ((export #t)) */
function sc_filter(proc, l1) {
    var revres = null;
    while (l1 !== null) {
        if (proc(l1.car)) revres = sc_cons(l1.car, revres);
        l1 = l1.cdr;
    }
    return sc_destReverseAppend(revres, null);
}

/*** META ((export filter!)) */
function sc_destFilter(proc, l1) {
    var head = sc_cons("dummy", l1);
    var it = head;
    var next = l1;
    while (next !== null) {
        if (proc(next.car)) {
	    it.cdr = next
	    it = next;
	}
	next = next.cdr;
    }
    it.cdr = null;
    return head.cdr;
}

function sc_filterMap1(proc, l1) {
    var revres = null;
    while (l1 !== null) {
        var tmp = proc(l1.car)
        if (tmp) revres = sc_cons(tmp, revres);
        l1 = l1.cdr;
    }
    return sc_destReverseAppend(revres, null);
}
function sc_filterMap2(proc, l1, l2) {
    var revres = null;
    while (l1 !== null) {
        var tmp = proc(l1.car, l2.car);
        if(tmp) revres = sc_cons(tmp, revres);
	l1 = l1.cdr;
	l2 = l2.cdr
    }
    return sc_destReverseAppend(revres, null);
}

/*** META ((export #t)) */
function sc_filterMap(proc, l1, l2, l3) {
    if (l2 === undefined)
	return sc_filterMap1(proc, l1);
    else if (l3 === undefined)
	return sc_filterMap2(proc, l1, l2);
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    var revres = null;
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	var tmp = proc.apply(null, applyArgs);
	if(tmp) revres = sc_cons(tmp, revres);
    }
    return sc_destReverseAppend(revres, null);
}

/*** META ((export #t)
           (peephole (postfix "()")))
*/
function sc_force(o) {
    return o();
}

/*** META ((export #t)) */
function sc_makePromise(proc) {
    var isResultReady = false;
    var result = undefined;
    return function() {
	if (!isResultReady) {
	    var tmp = proc();
	    if (!isResultReady) {
		isResultReady = true;
		result = tmp;
	    }
	}
	return result;
    };
}

function sc_Values(values) {
    this.values = values;
}

/*** META ((export #t)
           (peephole (values)))
*/
function sc_values() {
    if (arguments.length === 1)
	return arguments[0];
    else
	return new sc_Values(arguments);
}

/*** META ((export #t)) */
function sc_callWithValues(producer, consumer) {
    var produced = producer();
    if (produced instanceof sc_Values)
	return consumer.apply(null, produced.values);
    else
	return consumer(produced);
}

/*** META ((export #t)) */
function sc_dynamicWind(before, thunk, after) {
    before();
    try {
	var res = thunk();
	return res;
    } finally {
	after();
    }
}


// TODO: eval/scheme-report-environment/null-environment/interaction-environment

// LIMITATION: 'load' doesn't exist without files.
// LIMITATION: transcript-on/transcript-off doesn't exist without files.


function sc_Struct(name) {
    this.name = name;
}

/*** META ((export #t)
           (peephole (hole 1 "new sc_Struct(" name ")")))
*/
function sc_makeStruct(name) {
    return new sc_Struct(name);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Struct")))
*/
function sc_isStruct(o) {
    return (o instanceof sc_Struct);
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 2 "(" 1 " instanceof sc_Struct) && ( " 1 ".name === " 0 ")")))
*/
function sc_isStructNamed(name, s) {
    return ((s instanceof sc_Struct) && (s.name === name));
}

/*** META ((export struct-field)
           (peephole (hole 3 0 "[" 2 "]")))
*/
function sc_getStructField(s, name, field) {
    return s[field];
}

/*** META ((export struct-field-set!)
           (peephole (hole 4 0 "[" 2 "] = " 3)))
*/
function sc_setStructField(s, name, field, val) {
    s[field] = val;
}

/*** META ((export #t)
           (peephole (infix 2 2 "&")))
*/
function sc_bitAnd(x, y) {
    return x & y;
}

/*** META ((export #t)
           (peephole (infix 2 2 "|")))
*/
function sc_bitOr(x, y) {
    return x | y;
}

/*** META ((export #t)
           (peephole (infix 2 2 "^")))
*/
function sc_bitXor(x, y) {
    return x ^ y;
}

/*** META ((export #t)
           (peephole (infix 2 2 "<<")))
*/
function sc_bitLsh(x, y) {
    return x << y;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>")))
*/
function sc_bitRsh(x, y) {
    return x >> y;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>>")))
*/
function sc_bitUrsh(x, y) {
    return x >>> y;
}

/*** META ((export #t)
           (peephole (hole 2 o "[" field "]")))
*/
function sc_jsField(o, field) {
    return o[field];
}

/*** META ((export js-field-set!)
           (peephole (hole 3 o "[" field "] = " val)))
*/
function sc_setJsField(o, field, val) {
    return o[field] = val;
}

/*** META ((export js-field-delete!)
           (peephole (delete 2 o "[" field "]")))
*/
function sc_deleteJsField(o, field) {
    delete o[field];
}

/*** META ((export #t)
           (peephole (jsCall)))
*/
function sc_jsCall(o, fun) {
    var args = new Array();
    for (var i = 2; i < arguments.length; i++)
	args[i-2] = arguments[i];
    return fun.apply(o, args);
}

/*** META ((export #t)
           (peephole (jsMethodCall)))
*/
function sc_jsMethodCall(o, field) {
    var args = new Array();
    for (var i = 2; i < arguments.length; i++)
	args[i-2] = arguments[i];
    return o[field].apply(o, args);
}

/*** META ((export new js-new)
           (peephole (jsNew)))
*/
function sc_jsNew(c) {
    var evalStr = "new c(";
    evalStr +=arguments.length > 1? "arguments[1]": "";
    for (var i = 2; i < arguments.length; i++)
	evalStr += ", arguments[" + i + "]";
    evalStr +=")";
    return eval(evalStr);
}    

// Keywords
function sc_Keyword(str) {
    var cached = sc_Keyword.lazy[str];

    if (cached)
	return cached;

    sc_Keyword.lazy[str] = this;
    this.val = str;
    // add return so FF does not complain.
    return undefined;
}
sc_Keyword.lazy = new Object;

sc_Keyword.prototype.toString = function() {
    return ":" + this.val;
}
sc_Keyword.prototype.toJSString = function() {
    return this.val;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Keyword")))
*/
function sc_isKeyword(o) {
    return (o instanceof sc_Keyword);
}

/*** META ((export keyword->string)
           (string mutable)
           (peephole (hole 1 "new sc_String(" o ".val)")))
*/
function sc_keyword2string_mutable(o) {
    return new sc_String(o.val);
}

/*** META ((export keyword->string)
           (string immutable)
           (peephole (postfix ".val")))
*/
function sc_keyword2string_immutable(o) {
    return o.val;
}

/*** META ((export string->keyword)
           (string mutable)
           (peephole (hole 1 "new sc_Keyword(" o ".val)")))
*/
function sc_string2keyword_mutable(o) {
    return new sc_Keyword(o.val);
}

/*** META ((export string->keyword)
           (string immutable)
           (peephole (hole 1 "new sc_Keyword(" o ")")))
*/
function sc_string2keyword_immutable(o) {
    return new sc_Keyword(o);
}

// ======================== RegExp ====================
/*** META ((export #t)
           (peephole (hole 1 "new RegExp(" re ")")))
*/
function sc_pregexp(re) {
   return new RegExp(re);
}

/*** META ((export #t)) */
function sc_pregexpMatch(re, s) {
   var reg = ((re instanceof RegExp) ? re : new RegExp(re));
   var tmp = reg.exec(s);

   if (tmp == null) return false;

    var res = null;
    for (var i = tmp.length-1; i >= 0; i--) {
       if (tmp[i] != null) {
	  res = sc_cons(tmp[i], res);
       } else {
	  res = sc_cons(false, res);
       }
    }
    return res;
}
   
/*** META ((export #t)) */
function sc_pregexpReplace(re, s1, s2) {
   var reg;

   if (re instanceof RegExp) {
      if (re.global)
	 reg = re;
      else
	 reg = new RegExp(re);
   } else {
	 reg = new RegExp(re.source);
   }

   return s1.replace(reg, s2);
}
   
/*** META ((export pregexp-replace*)) */
function sc_pregexpReplaceAll(re, s1, s2) {
   var reg;

   if (re instanceof RegExp) {
      if (re.global)
	 reg = re;
      else
	 reg = new RegExp(re.source, "g");
   } else {
      reg = new RegExp(re, "g");
   }

   return s1.replace(reg, s2);
}

/*** META ((export #t)) */
function sc_pregexpSplit(re,s) {
   var reg = ((re instanceof RegExp) ? re : new RegExp(re));
   var tmp = s.split(reg);

   if (tmp == null) return false;

   return sc_vector2list(tmp);
}
   
// ======================== I/O =======================

/*------------------------------------------------------------------*/

function sc_EOF() {
}
var SC_EOF_OBJECT = new sc_EOF();

function sc_Port() {
}

/* --------------- Input ports -------------------------------------*/

function sc_InputPort() {
}
sc_InputPort.prototype = new sc_Port;

sc_InputPort.prototype.peekChar = function() {
    if (!("peeked" in this))
	this.peeked = this.getNextChar();
    return this.peeked;
}
sc_InputPort.prototype.readChar = function() {
    var tmp = this.peekChar();
    delete this.peeked;
    return tmp;
}
sc_InputPort.prototype.isCharReady = function() {
    return true;
}
sc_InputPort.prototype.close = function() {
    // do nothing
}

/* .............. String port ..........................*/
function sc_ErrorInputPort() {
};
sc_ErrorInputPort.prototype = new sc_InputPort();
sc_ErrorInputPort.prototype.getNextChar = function() {
    throw "can't read from error-port.";
};
sc_ErrorInputPort.prototype.isCharReady = function() {
    return false;
};
    

/* .............. String port ..........................*/

function sc_StringInputPort(jsStr) {
    // we are going to do some charAts on the str.
    // instead of recreating all the time a String-object, we
    // create one in the beginning. (not sure, if this is really an optim)
    str = new String(jsStr);
    this.str = str;
    this.pos = 0;
}
sc_StringInputPort.prototype = new sc_InputPort;
sc_StringInputPort.prototype.getNextChar = function() {
    if (this.pos >= this.str.length)
	return SC_EOF_OBJECT;
    return this.str.charAt(this.pos++);
};

/* ------------- Read and other lib-funs  -------------------------------*/
function sc_Token(type, val, pos) {
    this.type = type;
    this.val = val;
    this.pos = pos;
}
sc_Token.EOF = 0/*EOF*/;
sc_Token.OPEN_PAR = 1/*OPEN_PAR*/;
sc_Token.CLOSE_PAR = 2/*CLOSE_PAR*/;
sc_Token.OPEN_BRACE = 3/*OPEN_BRACE*/;
sc_Token.CLOSE_BRACE = 4/*CLOSE_BRACE*/;
sc_Token.OPEN_BRACKET = 5/*OPEN_BRACKET*/;
sc_Token.CLOSE_BRACKET = 6/*CLOSE_BRACKET*/;
sc_Token.WHITESPACE = 7/*WHITESPACE*/;
sc_Token.QUOTE = 8/*QUOTE*/;
sc_Token.ID = 9/*ID*/;
sc_Token.DOT = 10/*DOT*/;
sc_Token.STRING = 11/*STRING*/;
sc_Token.NUMBER = 12/*NUMBER*/;
sc_Token.ERROR = 13/*ERROR*/;
sc_Token.VECTOR_BEGIN = 14/*VECTOR_BEGIN*/;
sc_Token.TRUE = 15/*TRUE*/;
sc_Token.FALSE = 16/*FALSE*/;
sc_Token.UNSPECIFIED = 17/*UNSPECIFIED*/;
sc_Token.REFERENCE = 18/*REFERENCE*/;
sc_Token.STORE = 19/*STORE*/;
sc_Token.CHAR = 20/*CHAR*/;

var SC_ID_CLASS = SC_LOWER_CLASS + SC_UPPER_CLASS + "!$%*+-./:<=>?@^_~";
function sc_Tokenizer(port) {
    this.port = port;
}
sc_Tokenizer.prototype.peekToken = function() {
    if (this.peeked)
	return this.peeked;
    var newToken = this.nextToken();
    this.peeked = newToken;
    return newToken;
};
sc_Tokenizer.prototype.readToken = function() {
    var tmp = this.peekToken();
    delete this.peeked;
    return tmp;
};
sc_Tokenizer.prototype.nextToken = function() {
    var port = this.port;
    
    function isNumberChar(c) {
	return (c >= "0" && c <= "9");
    };
    function isIdOrNumberChar(c) {
	return SC_ID_CLASS.indexOf(c) != -1 || // ID-char
	    (c >= "0" && c <= "9");
    }
    function isWhitespace(c) {
	return c === " " || c === "\r" || c === "\n" || c === "\t" || c === "\f";
    };
    function isWhitespaceOrEOF(c) {
	return isWhitespace(c) || c === SC_EOF_OBJECT;
    };

    function readString() {
	res = "";
	while (true) {
	    var c = port.readChar();
	    switch (c) {
	    case '"':
		return new sc_Token(11/*STRING*/, res);
	    case "\\":
		var tmp = port.readChar();
		switch (tmp) {
		case '0': res += "\0"; break;
		case 'a': res += "\a"; break;
		case 'b': res += "\b"; break;
		case 'f': res += "\f"; break;
		case 'n': res += "\n"; break;
		case 'r': res += "\r"; break;
		case 't': res += "\t"; break;
		case 'v': res += "\v"; break;
		case '"': res += '"'; break;
		case '\\': res += '\\'; break;
		case 'x':
		    /* hexa-number */
		    var nb = 0;
		    while (true) {
			var hexC = port.peekChar();
			if (hexC >= '0' && hexC <= '9') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - '0'.charCodeAt(0);
			} else if (hexC >= 'a' && hexC <= 'f') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - 'a'.charCodeAt(0);
			} else if (hexC >= 'A' && hexC <= 'F') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - 'A'.charCodeAt(0);
			} else {
			    // next char isn't part of hex.
			    res += String.fromCharCode(nb);
			    break;
			}
		    }
		    break;
		default:
		    if (tmp === SC_EOF_OBJECT) {
			return new sc_Token(13/*ERROR*/, "unclosed string-literal" + res);
		    }
		    res += tmp;
		}
		break;
	    default:
		if (c === SC_EOF_OBJECT) {
		    return new sc_Token(13/*ERROR*/, "unclosed string-literal" + res);
		}
		res += c;
	    }
	}
    };
    function readIdOrNumber(firstChar) {
	var res = firstChar;
	while (isIdOrNumberChar(port.peekChar()))
	    res += port.readChar();
	if (isNaN(res))
	    return new sc_Token(9/*ID*/, res);
	else
	    return new sc_Token(12/*NUMBER*/, res - 0);
    };
    
    function skipWhitespaceAndComments() {
	var done = false;
	while (!done) {
	    done = true;
	    while (isWhitespace(port.peekChar()))
		port.readChar();
	    if (port.peekChar() === ';') {
		port.readChar();
		done = false;
		while (true) {
		    curChar = port.readChar();
		    if (curChar === SC_EOF_OBJECT ||
			curChar === '\n')
			break;
		}
	    }
	}
    };
    
    function readDot() {
	if (isWhitespace(port.peekChar()))
	    return new sc_Token(10/*DOT*/);
	else
	    return readIdOrNumber(".");
    };

    function readSharp() {
	var c = port.readChar();
	if (isWhitespace(c))
	    return new sc_Token(13/*ERROR*/, "bad #-pattern0.");

	// reference
	if (isNumberChar(c)) {
	    var nb = c - 0;
	    while (isNumberChar(port.peekChar()))
		nb = nb*10 + (port.readChar() - 0);
	    switch (port.readChar()) {
	    case '#':
		return new sc_Token(18/*REFERENCE*/, nb);
	    case '=':
		return new sc_Token(19/*STORE*/, nb);
	    default:
		return new sc_Token(13/*ERROR*/, "bad #-pattern1." + nb);
	    }
	}

	if (c === "(")
	    return new sc_Token(14/*VECTOR_BEGIN*/);
	
	if (c === "\\") { // character
	    var tmp = ""
	    while (!isWhitespaceOrEOF(port.peekChar()))
		tmp += port.readChar();
	    switch (tmp.length) {
	    case 0: // it's escaping a whitespace char:
		if (sc_isEOFObject(port.peekChar))
		    return new sc_Token(13/*ERROR*/, "bad #-pattern2.");
		else
		    return new sc_Token(20/*CHAR*/, port.readChar());
	    case 1:
		return new sc_Token(20/*CHAR*/, tmp);
	    default:
		var entry = sc_Char.readable2char[tmp.toLowerCase()];
		if (entry)
		    return new sc_Token(20/*CHAR*/, entry);
		else
		    return new sc_Token(13/*ERROR*/, "unknown character description: #\\" + tmp);
	    }
	}

	// some constants (#t, #f, #unspecified)
	var res;
	var needing;
	switch (c) {
	case 't': res = new sc_Token(15/*TRUE*/, true); needing = ""; break;
	case 'f': res = new sc_Token(16/*FALSE*/, false); needing = ""; break;
	case 'u': res = new sc_Token(17/*UNSPECIFIED*/, undefined); needing = "nspecified"; break;
	default:
	    return new sc_Token(13/*ERROR*/, "bad #-pattern3: " + c);
	}
	while(true) {
	    c = port.peekChar();
	    if ((isWhitespaceOrEOF(c) || c === ')') &&
		needing == "")
		return res;
	    else if (isWhitespace(c) || needing == "")
		return new sc_Token(13/*ERROR*/, "bad #-pattern4 " + c + " " + needing);
	    else if (needing.charAt(0) == c) {
		port.readChar(); // consume
		needing = needing.slice(1);
	    } else
		return new sc_Token(13/*ERROR*/, "bad #-pattern5");
	}
	
    };

    skipWhitespaceAndComments();
    var curChar = port.readChar();
    if (curChar === SC_EOF_OBJECT)
	return new sc_Token(0/*EOF*/, curChar);
    switch (curChar)
    {
    case " ":
    case "\n":
    case "\t":
	return readWhitespace();
    case "(":
	return new sc_Token(1/*OPEN_PAR*/);
    case ")":
	return new sc_Token(2/*CLOSE_PAR*/);
    case "{":
	return new sc_Token(3/*OPEN_BRACE*/);
    case "}":
	return new sc_Token(4/*CLOSE_BRACE*/);
    case "[":
	return new sc_Token(5/*OPEN_BRACKET*/);
    case "]":
	return new sc_Token(6/*CLOSE_BRACKET*/);
    case "'":
	return new sc_Token(8/*QUOTE*/);
    case "#":
	return readSharp();
    case ".":
	return readDot();
    case '"':
	return readString();
    default:
	if (isIdOrNumberChar(curChar))
	    return readIdOrNumber(curChar);
	throw "unexpected character: " + curChar;
    }
};

function sc_Reader(tokenizer) {
    this.tokenizer = tokenizer;
    this.backref = new Array();
}
sc_Reader.prototype.read = function() {
    function readList(listBeginType) {
	function matchesPeer(open, close) {
	    return open === 1/*OPEN_PAR*/ && close === 2/*CLOSE_PAR*/
	    	|| open === 3/*OPEN_BRACE*/ && close === 4/*CLOSE_BRACE*/
		|| open === 5/*OPEN_BRACKET*/ && close === 6/*CLOSE_BRACKET*/;
	};
	var token = tokenizer.peekToken();
	switch (token.type) {
	case 2/*CLOSE_PAR*/:
	case 4/*CLOSE_BRACE*/:
	case 6/*CLOSE_BRACKET*/:
	    if (matchesPeer(listBeginType, token.type)) {
		tokenizer.readToken(); // consume token
		return null;
	    } else
		throw "closing par doesn't match: " + listBeginType
		    + " " + listEndType;

	case 0/*EOF*/:
	    throw "unexpected end of file";

	case 10/*DOT*/:
	    tokenizer.readToken(); // consume token
	    var cdr = this.read();
	    var par = tokenizer.readToken();
	    if (!matchesPeer(listBeginType, par.type))
		throw "closing par doesn't match: " + listBeginType
		    + " " + par.type;
	    else
		return cdr;
		

	default:
	    return sc_cons(this.read(), readList.call(this, listBeginType))
	}
    };
    function readQuote() {
	return sc_cons("quote", sc_cons(this.read(), null));
    };
    function readVector() {
	// opening-parenthesis is already consumed
	var a = new Array();
	while (true) {
	    var token = tokenizer.peekToken();
	    switch (token.type) {
	    case 2/*CLOSE_PAR*/:
		tokenizer.readToken();
		return a;
		
	    default:
		a.push(this.read());
	    }
	}
    };

    function storeRefence(nb) {
	var tmp = this.read();
	this.backref[nb] = tmp;
	return tmp;
    };
	
    function readReference(nb) {
	if (nb in this.backref)
	    return this.backref[nb];
	else
	    throw "bad reference: " + nb;
    };
    
    var tokenizer = this.tokenizer;

    var token = tokenizer.readToken();

    // handle error
    if (token.type === 13/*ERROR*/)
	throw token.val;
    
    switch (token.type) {
    case 1/*OPEN_PAR*/:
    case 3/*OPEN_BRACE*/:
    case 5/*OPEN_BRACKET*/:
	return readList.call(this, token.type);
    case 8/*QUOTE*/:
	return readQuote.call(this);
    case 11/*STRING*/:
	if (this.mutableStrings)
	    return new sc_String(token.val);
	else
	    return token.val;
    case 20/*CHAR*/:
	return new sc_Char(token.val);
    case 14/*VECTOR_BEGIN*/:
	return readVector.call(this);
    case 18/*REFERENCE*/:
	return readReference.call(this, token.val);
    case 19/*STORE*/:
	return storeRefence.call(this, token.val);
    case 9/*ID*/:
	if (this.mutableStrings)
	    return token.val;
	else
	    return sc_SYMBOL_PREFIX + token.val;
    case 0/*EOF*/:
    case 12/*NUMBER*/:
    case 15/*TRUE*/:
    case 16/*FALSE*/:
    case 17/*UNSPECIFIED*/:
	return token.val;
    default:
	throw "unexpected token " + token.type + " " + token.val;
    }
};

/*** META ((export read)
           (string mutable))
*/
function sc_read_mutable(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var reader = new sc_Reader(new sc_Tokenizer(port));
    reader.mutableStrings = true;
    return reader.read();
}
/*** META ((export read)
           (string immutable))
*/
function sc_read_immutable(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var reader = new sc_Reader(new sc_Tokenizer(port));
    return reader.read();
}
/*** META ((export #t)) */
function sc_readChar(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var t = port.readChar();
    return t === SC_EOF_OBJECT? t: new sc_Char(t);
}
/*** META ((export #t)) */
function sc_peekChar(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var t = port.peekChar();
    return t === SC_EOF_OBJECT? t: new sc_Char(t);
}    
/*** META ((export #t)
           (type bool))
*/
function sc_isCharReady(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    return port.isCharReady();
}
/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function sc_closeInputPort(p) {
    return p.close();
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_InputPort")))
*/
function sc_isInputPort(o) {
    return (o instanceof sc_InputPort);
}

/*** META ((export eof-object?)
           (type bool)
           (peephole (postfix " === SC_EOF_OBJECT")))
*/
function sc_isEOFObject(o) {
    return o === SC_EOF_OBJECT;
}

/*** META ((export #t)
           (peephole (hole 0 "SC_DEFAULT_IN")))
*/
function sc_currentInputPort() {
    return SC_DEFAULT_IN;
}

/* ------------ file operations are not supported -----------*/
/*** META ((export #t)) */
function sc_callWithInputFile(s, proc) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_callWithOutputFile(s, proc) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_withInputFromFile(s, thunk) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_withOutputToFile(s, thunk) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_openInputFile(s) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_openOutputFile(s) {
    throw "can't open " + s;
}

/* ----------------------------------------------------------------------------*/
/*** META ((export #t)) */
function sc_basename(p) {
   var i = p.lastIndexOf('/');

   if(i >= 0)
      return p.substring(i + 1, p.length);
   else
      return '';
}

/*** META ((export #t)) */
function sc_dirname(p) {
   var i = p.lastIndexOf('/');

   if(i >= 0)
      return p.substring(0, i);
   else
      return '';
}

/* ----------------------------------------------------------------------------*/

/*** META ((export #t)) */
function sc_withInputFromPort(p, thunk) {
    try {
	var tmp = SC_DEFAULT_IN; // THREAD: shared var.
	SC_DEFAULT_IN = p;
	return thunk();
    } finally {
	SC_DEFAULT_IN = tmp;
    }
}

/*** META ((export with-input-from-string)
           (string mutable)
           (peephole (hole 2 "sc_withInputFromPort(new sc_StringInputPort(" s ".val), " thunk ")")))
*/
function sc_withInputFromString_mutable(s, thunk) {
    return sc_withInputFromString_immutable(s.val, thunk);
}

/*** META ((export with-input-from-string)
           (string immutable)
           (peephole (hole 2 "sc_withInputFromPort(new sc_StringInputPort(" s "), " thunk ")")))
*/
function sc_withInputFromString_immutable(s, thunk) {
    return sc_withInputFromPort(new sc_StringInputPort(s), thunk);
}

/*** META ((export #t)) */
function sc_withOutputToPort(p, thunk) {
    try {
	var tmp = SC_DEFAULT_OUT; // THREAD: shared var.
	SC_DEFAULT_OUT = p;
	return thunk();
    } finally {
	SC_DEFAULT_OUT = tmp;
    }
}

/*** META ((export with-output-to-string)
           (string mutable))
*/
function sc_withOutputToString_mutable(thunk) {
    var p = new sc_StringOutputPort_mutable();
    sc_withOutputToPort(p, thunk);
    return p.close();
}

/*** META ((export with-output-to-string)
           (string immutable))
*/
function sc_withOutputToString_immutable(thunk) {
    var p = new sc_StringOutputPort_immutable();
    sc_withOutputToPort(p, thunk);
    return p.close();
}

/*** META ((export with-output-to-procedure)
           (string mutable))
*/
function sc_withOutputToProcedure_mutable(proc, thunk) {
    var t = function(s) { proc(new sc_String(s)); };
    return sc_withOutputToPort(new sc_GenericOutputPort(t), thunk);
}
/*** META ((export with-output-to-procedure)
           (string immutable)
           (peephole (hole 2 "sc_withOutputToPort(new sc_GenericOutputPort(" proc "), " thunk ")")))
*/
function sc_withOutputToProcedure_immutable(proc, thunk) {
    return sc_withOutputToPort(new sc_GenericOutputPort(proc), thunk);
}

/*** META ((export open-output-string)
           (string mutable)
           (peephole (hole 0 "new sc_StringOutputPort_mutable()")))
*/
function sc_openOutputString_mutable() {
    return new sc_StringOutputPort_mutable();
}
/*** META ((export open-output-string)
           (string immutable)
           (peephole (hole 0 "new sc_StringOutputPort_immutable()")))
*/
function sc_openOutputString_immutable() {
    return new sc_StringOutputPort_immutable();
}

/*** META ((export open-input-string)
           (string mutable)
           (peephole (hole 1 "new sc_StringInputPort(" str ".val)")))
*/
function sc_openInputString_mutable(str) {
    return new sc_StringInputPort(str.val);
}

/*** META ((export open-input-string)
           (string immutable)
           (peephole (hole 1 "new sc_StringInputPort(" str ")")))
*/
function sc_openInputString_immutable(str) {
    return new sc_StringInputPort(str);
}

/* ----------------------------------------------------------------------------*/

function sc_OutputPort() {
}
sc_OutputPort.prototype = new sc_Port();
sc_OutputPort.prototype.appendJSString = function(obj) {
    /* do nothing */
}
sc_OutputPort.prototype.close = function() {
    /* do nothing */
}

function sc_StringOutputPort_mutable() {
    this.res = "";
}
sc_StringOutputPort_mutable.prototype = new sc_OutputPort();
sc_StringOutputPort_mutable.prototype.appendJSString = function(s) {
    this.res += s;
}
sc_StringOutputPort_mutable.prototype.close = function() {
    return new sc_String(this.res);
}

function sc_StringOutputPort_immutable() {
    this.res = "";
}
sc_StringOutputPort_immutable.prototype = new sc_OutputPort();
sc_StringOutputPort_immutable.prototype.appendJSString = function(s) {
    this.res += s;
}
sc_StringOutputPort_immutable.prototype.close = function() {
    return this.res;
}

/*** META ((export get-output-string)
           (string mutable)
           (peephole (hole 1 "new sc_String(" sp ".res)")))
*/
function sc_getOutputString_mutable(sp) {
    return new sc_String(sp.res);
}
/*** META ((export get-output-string)
           (string immutable)
           (peephole (postfix ".res")))
*/
function sc_getOutputString_immutable(sp) {
    return sp.res;
}
    
    

function sc_ErrorOutputPort() {
}
sc_ErrorOutputPort.prototype = new sc_OutputPort();
sc_ErrorOutputPort.prototype.appendJSString = function(s) {
    throw "don't write on ErrorPort!";
}
sc_ErrorOutputPort.prototype.close = function() {
    /* do nothing */
}

function sc_GenericOutputPort(appendJSString, close) {
    this.appendJSString = appendJSString;
    if (close)
	this.close = close;
}
sc_GenericOutputPort.prototype = new sc_OutputPort();

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_OutputPort")))
*/
function sc_isOutputPort(o) {
    return (o instanceof sc_OutputPort);
}

/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function sc_closeOutputPort(p) {
    return p.close();
}

sc_Pair.prototype.writeOrDisplay = function(p, writeOrDisplay, inList) {
    var isP = sc_isPair(this.cdr);
    if (!inList)
	p.appendJSString("(");
    writeOrDisplay(p, this.car);
    if (sc_isPair(this.cdr)) {
	p.appendJSString(" ");
	this.cdr.writeOrDisplay(p, writeOrDisplay, true);
    } else if (this.cdr !== null) {
	p.appendJSString(" . ");
	writeOrDisplay(p, this.cdr);
    }
    if (!inList)
	p.appendJSString(")");
};
sc_Vector.prototype.writeOrDisplay = function(p, writeOrDisplay) {
    if (this.length === 0) {
	p.appendJSString("#()");
	return;
    }

    p.appendJSString("#(");
    writeOrDisplay(p, this[0]);
    for (var i = 1; i < this.length; i++) {
	p.appendJSString(" ");
	writeOrDisplay(p, this[i]);
    }
    p.appendJSString(")");
};

/* ------------------ write ---------------------------------------------------*/

/*** META ((export write)
           (string mutable))
*/
function sc_write_mutable(o, p) {
    String.prototype.doWrite = String_prototype_doWrite_mutable;
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    sc_doWrite(p, o);
}

/*** META ((export write)
           (string immutable))
*/
function sc_write_immutable(o, p) {
    String.prototype.doWrite = String_prototype_doWrite_immutable;
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    sc_doWrite(p, o);
}

function sc_doWrite(p, o) {
    if (o === null)
	p.appendJSString("()");
    else if (o === true)
	p.appendJSString("#t");
    else if (o === false)
	p.appendJSString("#f");
    else if (o === undefined)
	p.appendJSString("#unspecified");
    else
	o.doWrite(p);
}

function sc_escapeWriteString(s) {
    var res = "";
    var j = 0;
    for (i = 0; i < s.length; i++) {
	switch (s.charAt(i)) {
	case "\0": res += s.substring(j, i) + "\\0"; j = i + 1; break;
	    /* \a is not recognized and will escape all 'a' chars.
	case "\a": res += s.substring(j, i) + "\\a"; j = i + 1; break;
	    */
	case "\b": res += s.substring(j, i) + "\\b"; j = i + 1; break;
	case "\f": res += s.substring(j, i) + "\\f"; j = i + 1; break;
	case "\n": res += s.substring(j, i) + "\\n"; j = i + 1; break;
	case "\r": res += s.substring(j, i) + "\\r"; j = i + 1; break;
	case "\t": res += s.substring(j, i) + "\\t"; j = i + 1; break;
	case "\v": res += s.substring(j, i) + "\\v"; j = i + 1; break;
	case '"': res += s.substring(j, i) + '\\"'; j = i + 1; break;
	case "\\": res += s.substring(j, i) + "\\\\"; j = i + 1; break;
	default:
	    if (s.charAt(i) < ' ' || s.charCodeAt(i) > 127) {
		/* non printable character and special chars */
		res += s.substring(j, i) + "\\x" + charCodeAt(i).toString(16);
		j = i + 1;
	    }
	    // else just let i increase...
	}
    }
    res += s.substring(j, i);
    return res;
}

Number.prototype.doWrite = function(p) {
    p.appendJSString(this.toString());
}
var String_prototype_doWrite_mutable = function(p) {
    p.appendJSString(this);
}
var String_prototype_doWrite_immutable = function(p) {
    // TODO: handle escape-chars symbols

    if (this.charAt(0) !== sc_SYMBOL_PREFIX)
	p.appendJSString('"' + sc_escapeWriteString(this) + '"');
    else
	p.appendJSString(this.slice(1));
}
Function.prototype.doWrite = function(p) {
    p.appendJSString("#<procedure " + this.getHash() + ">");
}
Boolean.prototype.doWrite = function(p) {
    p.appendJSString(this.toString());
}
sc_Pair.prototype.doWrite = function(p) {
    this.writeOrDisplay(p, sc_doWrite);
}
sc_String.prototype.doWrite = function(p) {
    p.appendJSString('"' + sc_escapeWriteString(this.val) + '"');
}
sc_Char.prototype.doWrite = function(p) {
    var entry = sc_Char.char2readable[this.val];
    if (entry)
	p.appendJSString(entry);
    else
	p.appendJSString("#\\" + this.val);
}
sc_Vector.prototype.doWrite = function(p) {
    this.writeOrDisplay(p, sc_doWrite);
}
sc_Struct.prototype.doWrite = function(p) {
    p.appendJSString("#<struct" + this.getHash() + ">");
}
sc_Keyword.prototype.doWrite = function(p) {
    p.appendJSString(":" + this.val);
}

/* ------------------ display ---------------------------------------------------*/

/*** META ((export display)
           (string mutable))
*/
function sc_display_mutable(o, p) {
    String.prototype.doDisplay = String_prototype_doDisplay_mutable;
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    sc_doDisplay(p, o);
}

/*** META ((export display)
           (string immutable))
*/
function sc_display_immutable(o, p) {
    String.prototype.doDisplay = String_prototype_doDisplay_immutable;
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    sc_doDisplay(p, o);
}

function sc_doDisplay(p, o) {
    if (o === null)
	p.appendJSString("()");
    else if (o === true)
	p.appendJSString("#t");
    else if (o === false)
	p.appendJSString("#f");
    else if (o === undefined)
	p.appendJSString("#unspecified");
    else
	o.doDisplay(p);
}
Object.prototype.doDisplay = function(p) {
    p.appendJSString(this.toString());
}
Number.prototype.doDisplay = Number.prototype.doWrite;

var String_prototype_doDisplay_mutable = String_prototype_doWrite_mutable;
var String_prototype_doDisplay_immutable = function(p) {
    if (this.charAt(0) !== sc_SYMBOL_PREFIX)
	p.appendJSString(this);
    else
	p.appendJSString(this.slice(1));
}
Function.prototype.doDisplay = Function.prototype.doWrite;
Boolean.prototype.doDisplay = Boolean.prototype.doWrite;
sc_Pair.prototype.doDisplay = function(p) {
    this.writeOrDisplay(p, sc_doDisplay);
};
sc_String.prototype.doDisplay = function(p) {
    p.appendJSString(this.val);
}
sc_Char.prototype.doDisplay = function(p) {
    p.appendJSString(this.val);
}
sc_Vector.prototype.doDisplay = function(p) {
    this.writeOrDisplay(p, sc_doDisplay);
}
sc_Struct.prototype.doDisplay = sc_Struct.prototype.doWrite;
sc_Keyword.prototype.doDisplay = sc_Keyword.prototype.doWrite;

/* ------------------ newline ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_newline(p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString("\n");
}
    
/* ------------------ write-char ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_writeChar(c, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(c.val);
}

/* ------------------ write-circle ---------------------------------------------------*/

/*** META ((export write-circle)
           (string immutable))
*/
function sc_writeCircle_immutable(o, p) {
    String.prototype.doWriteCircle = String_prototype_doWriteCirce_immutable;
    sc_writeCirce(o, p);
}
/*** META ((export write-circle)
           (string mutable))
*/
function sc_writeCircle_mutable(o, p) {
    String.prototype.doWriteCircle = String_prototype_doWriteCirce_mutable;
    sc_writeCirce(o, p);
}

function sc_writeCircle(o, p) {
    var symb = sc_gensym("writeCircle");
    var nbPointer = new Object();
    nbPointer.nb = 0;
    sc_prepWriteCircle(o, symb, nbPointer);
    
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    sc_doWriteCircle(p, o, symb);
}

function sc_prepWriteCircle(o, symb, nbPointer) {
    if (o !== null &&
	o !== undefined &&
	o !== true &&
	o !== false)
	o.prepWriteCircle(symb, nbPointer);
}
var doNothing = function() {};
Number.prototype.prepWriteCircle = doNothing;
String.prototype.prepWriteCircle = doNothing;
Function.prototype.prepWriteCircle = doNothing;
Boolean.prototype.prepWriteCircle = doNothing;
sc_Pair.prototype.prepWriteCircle = function(symb, nbPointer) {
    if (this[symb] !== undefined) {
	this[symb]++;
	this[symb + "nb"] = nbPointer.nb++;
    } else {
	this[symb] = 0;
	sc_prepWriteCircle(this.car, symb, nbPointer);
	sc_prepWriteCircle(this.cdr, symb, nbPointer);
    }
};
sc_String.prototype.prepWriteCircle = doNothing;
sc_Char.prototype.prepWriteCircle = doNothing;
sc_Vector.prototype.prepWriteCircle = function(symb, nbPointer) {
    if (this[symb] !== undefined) {
	this[symb]++;
	this[symb + "nb"] = nbPointer.nb++;
    } else {
	this[symb] = 0;
	for (var i = 0; i < this.length; i++)
	    sc_prepWriteCircle(this[i], symb, nbPointer);
    }
};
// TODO: not correct
sc_Struct.prototype.prepWriteCircle = doNothing;

function sc_doWriteCircle(p, o, symb) {
    if (o === null)
	p.appendJSString("()");
    else if (o === true)
	p.appendJSString("#t");
    else if (o === false)
	p.appendJSString("#f");
    else if (o === undefined)
	p.appendJSString("#unspecified");
    else
	o.doWriteCircle(p, symb);
}

// extra arguments (in our case 'symb') are going to be lost. so no prob.
Number.prototype.doWriteCircle = Number.prototype.doWrite;
var String_prototype_doWriteCircle_mutable = String_prototype_doWrite_mutable;
var String_prototype_doWriteCircle_immutable = String_prototype_doWrite_immutable;
Function.prototype.doWriteCircle = Function.prototype.doWrite;
Boolean.prototype.doWriteCircle = Boolean.prototype.doWrite;

sc_Pair.prototype.doWriteCircle = function(p, symb, inList) {
    if (this[symb + "use"]) { // use-flag is set. Just use it.
	var nb = this[symb + "nb"];
	if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	    delete this[symb];
	    delete this[symb + "nb"];
	    delete this[symb + "use"];
	}
	if (inList)
	    p.appendJSString('. #' + nb + '#');
	else
	    p.appendJSString('#' + nb + '#');
	
	return;
    }
    if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	delete this[symb];
	delete this[symb + "nb"];
	delete this[symb + "use"];
    }

    if (this[symb] !== undefined) { // implies > 0
	this[symb + "use"] = true;
	if (inList)
	    p.appendJSString('. #' + this[symb + "nb"] + '=');
	else
	    p.appendJSString('#' + this[symb + "nb"] + '=');
	inList = false;
    }

    if (!inList)
	p.appendJSString("(");
    
    // print car
    sc_doWriteCircle(p, this.car, symb);
    
    if (sc_isPair(this.cdr)) {
	p.appendJSString(" ");
	this.cdr.doWriteCircle(p, symb, true);
    } else if (this.cdr !== null) {
	p.appendJSString(" . ");
	sc_doWriteCircle(p, this.cdr);
    }
    if (!inList)
	p.appendJSString(")");
}
sc_String.prototype.doWriteCircle = sc_String.prototype.doWrite;
sc_Char.prototype.doWriteCircle = sc_Char.prototype.doWrite;

sc_Vector.prototype.doWriteCircle = function(p, symb) {
    if (this[symb + "use"]) { // use-flag is set. Just use it.
	var nb = this[symb + "nb"];
	if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	    delete this[symb];
	    delete this[symb + "nb"];
	    delete this[symb + "use"];
	}
	p.appendJSString('#' + nb + '#');
	return;
    }
    if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	delete this[symb];
	delete this[symb + "nb"];
	delete this[symb + "use"];
    }
    if (this[symb] !== undefined) { // implies > 0
	this[symb + "use"] = true;
	p.appendJSString('#' + this[symb + "nb"] + '=');
    }
    p.appendJSString("#(");
    for (var i = 0; i < this.length; i++) {
	sc_doWriteCircle(p, this[i], symb);
	p.appendJSString(" ");
    }
    p.appendJSString(")");
}
sc_Struct.prototype.doWriteCircle = sc_Struct.prototype.doWrite;


/* ------------------ print ---------------------------------------------------*/

/*** META ((export print)
           (string mutable))
*/
function sc_print_mutable(s) {
    if (arguments.length === 1) {
	sc_display_mutable(s);
	sc_newline();
    }
    else {
	for (var i = 0; i < arguments.length; i++)
	    sc_display_mutable(arguments[i]);
	sc_newline();
    }
}

/*** META ((export print)
           (string immutable))
*/
function sc_print_immutable(s) {
    if (arguments.length === 1) {
	sc_display_immutable(s);
	sc_newline();
    }
    else {
	for (var i = 0; i < arguments.length; i++)
	    sc_display_immutable(arguments[i]);
	sc_newline();
    }
}

/* ------------------ format ---------------------------------------------------*/
/*** META ((export #t)) */
function sc_format(s, args) {
   var len = s.length;
   var p = new sc_StringOutputPort_mutable();
   var i = 0, j = 1;

   while( i < len ) {
      var i2 = s.indexOf("~", i);

      if (i2 == -1) {
	 return p.res.concat( s.substring( i, len ) );
      } else {
	 if (i2 > i) {
	    if (i2 == (len - 1)) {
	       return p.res.concat(s.substring(i, len));
	    } else {
	       p.res = p.res.concat(s.substring(i, i2));
	       i = i2;
	    }
	 }

	 switch(s.charCodeAt(i2 + 1)) {
	    case 65:
	    case 97:
	       // a
	       sc_doDisplay(p, arguments[j]);
	       i += 2; j++;
	       break;

	    case 83:
	    case 115:
	       // s
	       sc_doWrite(p,arguments[j]);
	       i += 2; j++;
	       break;

	    case 86:
	    case 118:
	       // v
	       sc_doDisplay(p, arguments[j]);
	       p.res = p.res.concat("\n");
	       i += 2; j++;
	       break;

	    case 67:
	    case 99:
	       // c
	       p.res = p.res.concat(String.formCharCode(arguments[j]));
	       i += 2; j++;
	       break;

	    case 88:
	    case 120:
	       // x
	       p.res = p.res.concat(arguments[j].toString(6));
	       i += 2; j++;
	       break;

	    case 79:
	    case 111:
	       // o
	       p.res = p.res.concat(arguments[j].toString(8));
	       i += 2; j++;
	       break;

	    case 66:
	    case 98:
	       // b
	       p.res = p.res.concat(arguments[j].toString(2));
	       i += 2; j++;
	       break;
	       
	    case 37:
	    case 110:
	       // %, n
	       p.res = p.res.concat("\n");
	       i += 2; break;

	    case 114:
	       // r
	       p.res = p.res.concat("\r");
	       i += 2; break;

	    case 126:
	       // ~
	       p.res = p.res.concat("~");
	       i += 2; break;

	    default:
	       sc_error( "format: illegal ~"
			 + String.fromCharCode(s.charCodeAt(i2 + 1))
			 + " sequence" );
	       return "";
	 }
      }
   }

   return p.res;
}

/* ------------------ global ports ---------------------------------------------------*/

var SC_DEFAULT_IN = new sc_ErrorInputPort();
var SC_DEFAULT_OUT = new sc_ErrorOutputPort();
var SC_ERROR_OUT = new sc_ErrorOutputPort();


/* =========================================================================== */
/* Other library stuff */
/* =========================================================================== */

/*** META ((export current-date)
           (peephole (hole 0 "new Date()")))
*/
function sc_CurrentDate() {
   return new Date();
}

function sc_Hashtable() {
}
sc_Hashtable.prototype.toString = function() {
    return "#{%hashtable}";
}
function sc_HashtableElement(key, val) {
    this.key = key;
    this.val = val;
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_Hashtable()")))
*/
function sc_makeHashtable() {
    return new sc_Hashtable();
}

/*** META ((export hashtable-put!)) */
function sc_hashtablePut(ht, key, val) {
    var hash = sc_hash(key);
    ht[hash] = new sc_HashtableElement(key, val);
}

/*** META ((export #t)) */
function sc_hashtableGet(ht, key) {
    var hash = sc_hash(key);
    if (hash in ht)
	return ht[hash].val;
    else
	return false;
}

/*** META ((export #t)) */
function sc_hashtableForEach(ht, f) {
    for (var v in ht) {
	if (ht[v] instanceof sc_HashtableElement)
	    f(ht[v].key, ht[v].val);
    }
}

/*** META ((export hashtable-contains?)
           (peephole (hole 2 "sc_hash(" 1 ") in " 0)))
*/
function sc_hashtableContains(ht, key) {
    var hash = sc_hash(key);
    if (hash in ht)
	return true;
    else
	return false;
}

var SC_HASH_COUNTER = 0;

function sc_hash(o) {
    if (o === null)
	return "null";
    else if (o === undefined)
	return "undefined";
    else
	return o.getHash();
}
function sc_counterHash() {
    if (!this.hash) {
	this.hash = "hash-" + SC_HASH_COUNTER;
	SC_HASH_COUNTER++;
    }
    return this.hash;
}
Number.prototype.getHash = function() {
    return "num-" + this;
}
String.prototype.getHash = function() {
    return "sym-" + this;
}
Boolean.prototype.getHash = function() {
    return "" + this;
}
Function.prototype.getHash = sc_counterHash;
sc_Pair.prototype.getHash = sc_counterHash;
sc_Vector.prototype.getHash = sc_counterHash;
sc_Struct.prototype.getHash = sc_counterHash;
sc_String.prototype.getHash = function() {
    return "str-" + this.val;
}
sc_Char.prototype.getHash = sc_counterHash;
sc_Hashtable.prototype.getHash = sc_counterHash;


function sc_Trampoline(args, maxTailCalls) {
    this['__trampoline return__'] = true;
    this.args = args;
    this.MAX_TAIL_CALLs = maxTailCalls;
}
// TODO: call/cc stuff
sc_Trampoline.prototype.restart = function() {
    var o = this;
    while (true) {
	// set both globals.
	SC_TAIL_OBJECT.calls = o.MAX_TAIL_CALLs-1;
	var fun = o.args.callee;
	var res = fun.apply(SC_TAIL_OBJECT, o.args);
	if (res instanceof sc_Trampoline)
	    o = res;
	else
	    return res;
    }
}

/*** META ((export bind-exit-lambda)) */
function sc_bindExitLambda(proc) {
    var escape_obj = new sc_BindExitException();
    var escape = function(res) {
	escape_obj.res = res;
	throw escape_obj;
    };
    try {
	return proc(escape);
    } catch(e) {
	if (e === escape_obj) {
	    return e.res;
	}
	throw e;
    }
}
function sc_BindExitException() {
    this._internalException = true;
}

var SC_SCM2JS_GLOBALS = new Object();

// default tail-call depth.
// normally the program should set it again. but just in case...
var SC_TAIL_OBJECT = new Object();
SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
