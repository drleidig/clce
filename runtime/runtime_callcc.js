/*** META ((export with-handler-lambda)
           (call/cc? #t)
           (call/cc-params (0 1)))
*/
function sc_withHandlerLambda_callcc(handler, body) {
    var sc_storage = SC_CALLCC_STORAGE;
    if (sc_storage['doCall/CcDefault?']) {
    } else if (sc_storage['doCall/CcRestore?']) {
	var _sc_frame = sc_storage.pop();
	handler = _sc_frame.handler;
	body = sc_storage.callNextFunction();
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }
    try {
	return body();
    } catch(e) {
	if (!e._internalException)
	    return handler(e);
	if (e instanceof sc_CallCcException && e.backup) {
	    _sc_frame = new Object();
	    _sc_frame.callee = sc_withHandlerLambda_callcc;
	    _sc_frame.handler = handler;
	    e.push(_sc_frame);
	}
	throw e;
    }
}

/*** META ((export apply)
           (call/cc? #t)       
           (call/cc-params (0)))
*/
// no need for _callcc version
var sc_apply_callcc = sc_apply;

/*** META ((export map)
           (call/cc? #t)
           (call/cc-params (0)))
*/
function sc_map_callcc(proc) {
    var sc_storage = SC_CALLCC_STORAGE;
    if (sc_storage['doCall/CcDefault?']) {
	var args = arguments;
	var revres = null;
    } else if (sc_storage['doCall/CcRestore?']) {
	var _sc_frame = sc_storage.pop();
	args = new Array();
	// can't use .concat, as 'arguments' is not an array.
	// do not copy procedure (_sc_frame.args[0])
	for (var i = 1; i < _sc_frame.args.length; i++) {
	    args[i] = _sc_frame.args[i];
	}
	revres = _sc_frame.revres;
	proc = _sc_frame.proc;
	try {
	    revres = sc_cons(sc_storage.callNext(), revres);
	} catch(e) {
	    if (e instanceof sc_CallCcException && e.backup) {
		e.push(_sc_frame);
	    }
	    throw e;
	}
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }
    try {
	var nbApplyArgs = args.length - 1;
	var applyArgs = new Array(nbApplyArgs);
	while (args[1] !== null) {
	    for (var i = 0; i < nbApplyArgs; i++) {
		applyArgs[i] = args[i + 1].car;
		args[i + 1] = args[i + 1].cdr;
	    }
	    revres = sc_cons(proc.apply(null, applyArgs), revres);
	}
	return sc_reverse(revres);
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var _sc_frame = new Object();
	    _sc_frame.args = args;
	    _sc_frame.revres = revres;
	    _sc_frame.proc = proc;
	    _sc_frame.callee = sc_map_callcc;
	    e.push(_sc_frame);
	}
	throw e;
    }
}

/*** META ((export map!)
           (call/cc? #t)
           (call/cc-params (0)))
*/
function sc_destMap_callcc(proc) {
    var sc_storage = SC_CALLCC_STORAGE;
    if (sc_storage['doCall/CcDefault?']) {
	if (arguments.length < 2) return null;
	var args = arguments;
	var tmp;
	var l1_orig = args[1];
    } else if (sc_storage['doCall/CcRestore?']) {
	var _sc_frame = sc_storage.pop();
	args = new Array();
	// can't use .concat, as 'arguments' is not an array.
	// do not copy procedure (_sc_frame.args[0])
	for (var i = 1; i < _sc_frame.args.length; i++) {
	    args[i] = _sc_frame.args[i];
	}
	tmp  = _sc_frame.tmp;
	l1_orig = _sc_frame.l1_orig;
	proc = _sc_frame.proc;
	try {
	    tmp.car = sc_storage.callNext();
	} catch(e) {
	    if (e instanceof sc_CallCcException && e.backup) {
		e.push(_sc_frame);
	    }
	    throw e;
	}
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }
    try {
	var nbApplyArgs = args.length - 1;
	var applyArgs = new Array(nbApplyArgs);
	while (args[1] !== null) {
	    tmp = args[1];
	    for (var i = 0; i < nbApplyArgs; i++) {
		applyArgs[i] = args[i + 1].car;
		args[i + 1] = args[i + 1].cdr;
	    }
	    tmp.car = proc.apply(null, applyArgs);
	}
	return l1_orig;
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var _sc_frame = new Object();
	    _sc_frame.args = args;
	    _sc_frame.tmp = tmp;
	    _sc_frame.l1_orig = l1_orig;
	    _sc_frame.proc = proc;
	    _sc_frame.callee = sc_destMap_callcc;
	    e.push(_sc_frame);
	}
	throw e;
    }
}

/*** META ((export for-each)
           (call/cc? #t)
           (call/cc-params (0)))
*/
// TODO: do not use map directly...
function sc_forEach_callcc(proc, l1) {
    sc_map_callcc.apply(this, arguments);
}

/*** META ((export filter!)
           (call/cc? #t)
           (call/cc-params (0)))
*/
function sc_destFilter_callcc(proc, l1) {
    var sc_storage = SC_CALLCC_STORAGE;
    try {
	if (sc_storage['doCall/CcDefault?']) {
	    var head = sc_cons("dummy", l1);
	    var it = head;
	    var next = l1;
	} else if (sc_storage['doCall/CcRestore?']) {
	    var _sc_frame = sc_storage.pop();
	    head = _sc_frame.head;
	    it = _sc_frame.it;
	    next = _sc_frame.next;
	    proc = _sc_frame.proc;
	    if (sc_storage.callNext()) {
		it.cdr = next;
		it = next;
	    }
	    next = next.cdr;
	} else { // root-fun?
	    return sc_callCcRoot(this, arguments);
	}
	while (next !== null) {
	    if (proc(next.car)) {
		it.cdr = next
		    it = next;
	    }
	    next = next.cdr;
	}
	it.cdr = null;
	return head.cdr;
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var _sc_frame = new Object();
	    _sc_frame.it = it;
	    _sc_frame.next = next;
	    _sc_frame.head = head;
	    _sc_frame.proc = proc;
	    _sc_frame.callee = sc_destFilter_callcc;
	    e.push(_sc_frame);
	}
	throw e;
    }
}

/*** META ((export filter)
           (call/cc? #t)
           (call/cc-params (0)))
*/
function sc_filter_callcc(proc, l1) {
    var sc_storage = SC_CALLCC_STORAGE;
    try {
	if (sc_storage['doCall/CcDefault?']) {
	    var revres = null;
	} else if (sc_storage['doCall/CcRestore?']) {
	    var _sc_frame = sc_storage.pop();
	    l1 = _sc_frame.l1;
	    revres = _sc_frame.revres;
	    proc = _sc_frame.proc;
	    if (sc_storage.callNext()) {
		revres = sc_cons(l1.car, revres);
	    }
	    l1 = l1.cdr;
	} else { // root-fun?
	    return sc_callCcRoot(this, arguments);
	}
	while (l1 !== null) {
	    if (proc(l1.car)) {
		revres = sc_cons(l1.car, revres);
	    }
	    l1 = l1.cdr;
	}
	return sc_reverse(revres);
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var _sc_frame = new Object();
	    _sc_frame.l1 = l1;
	    _sc_frame.revres = revres;
	    _sc_frame.proc = proc;
	    _sc_frame.callee = sc_filter_callcc;
	    e.push(_sc_frame);
	}
	throw e;
    }
}


/*** META ((export filter-map)
           (call/cc? #t)
           (call/cc-params (0)))
*/
function sc_filterMap_callcc(proc, l1, l2, l3) {
    var sc_storage = SC_CALLCC_STORAGE;
    try {
	if (sc_storage['doCall/CcDefault?']) {
	    return sc_destFilter(function(x) { return x !== false; },
				 sc_map_callcc.apply(this, arguments));
	} else if (sc_storage['doCall/CcRestore?']) {
	    sc_storage.pop();
	    return sc_destFilter(function(x) { return x !== false; },
				 sc_storage.callNext());
	} else { // root-fun?
	    return sc_callCcRoot(this, arguments);
	}
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var _sc_frame = new Object();
	    _sc_frame.callee = sc_filterMap_callcc;
	    e.push(_sc_frame);
	}
	throw e;
    }
}

/*** META ((export force)
           (call/cc? #t)
           (peephole (postfix "()")))
*/
var sc_force_callcc = sc_force;

/*** META ((export call-with-values)
           (call/cc? #t)
           (call/cc-params (0 1)))
*/
function sc_callWithValues_callcc(producer, consumer) {
    var sc_storage = SC_CALLCC_STORAGE;
    if (sc_storage['doCall/CcDefault?']) {
    } else if (sc_storage['doCall/CcRestore?']) {
	var _sc_frame = sc_storage.pop();
	consumer = _sc_frame.consumer;
	producer = sc_storage.callNextFunction();
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }
    try {
	var produced = producer();
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var _sc_frame = new Object();
	    _sc_frame.callee = sc_callWithValues_callcc;
	    _sc_frame.consumer = consumer;
	    e.push(_sc_frame);
	}
	throw e;
    }
    if (produced instanceof sc_Values)
	return consumer.apply(null, produced.values);
    else
	return consumer(produced);
}

var sc_DYNAMIC_WIND_COUNTER = 0; // unique id for each dynamic-wind

/*** META ((export dynamic-wind)
           (call/cc? #t)
           (call/cc-params (0 1 2)))
*/
function sc_dynamicWind_callcc(before, thunk, after) {
    var sc_storage = SC_CALLCC_STORAGE;
    var callCc_tmp;
    if (sc_storage['doCall/CcDefault?']) {
	var res;
	var id = sc_DYNAMIC_WIND_COUNTER++;
	var sc_state = 'before';
    } else if (sc_storage['doCall/CcRestore?']) {
	var _sc_frame = sc_storage.pop();
	sc_state = _sc_frame.sc_state;
	id = _sc_frame.id;
	before = _sc_frame.before;
	thunk = _sc_frame.thunk;
	after = _sc_frame.after;
	res = _sc_frame.res;
	caught_exception = _sc_frame.caught_exception;
	switch (sc_state) {
	case 'before':
	    before = sc_storage.callNextFunction();
	    break;
	case 'during':
	    thunk = sc_storage.callNextFunction();
	    break;
	case 'after':
	    after = sc_storage.callNextFunction();
	    break;
	case 'exception':
	    var remainingAfter = sc_storage.callNextFunction();
	    break;
	}
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }
    try {
	try {
	    switch (sc_state) {
	    case 'before':
		before();
	    case 'during':
		sc_state = 'during';
		res = thunk();
	    case 'after':
		sc_state = 'after';
		after();
		return res;
	    case 'exception':
		remainingAfter();
		throw caught_exception;
	    }
	} catch (e_inner) {
	    if (!(e_inner instanceof sc_CallCcException) &&
		sc_state === 'during') {
		var caught_exception = e_inner;
		sc_state = 'exception';
		after();
	    }
	    throw e_inner;
	}
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var _sc_frame = new Object();
	    _sc_frame.callee = sc_dynamicWind_callcc;
	    _sc_frame.sc_state = sc_state;
	    _sc_frame.id = id;
	    _sc_frame.before = before;
	    _sc_frame.thunk = thunk;
	    _sc_frame.after = after;
	    _sc_frame.res = res;
	    _sc_frame.caught_exception = caught_exception;
	    e.push(_sc_frame);
	}
	if (sc_state === 'during' &&
	    (e instanceof sc_CallCcException)) {
	    e.pushDynamicWind({ id: id, before: before, after: after });
	}
	throw e;
    }
    return undefined; // for FF2.0
}

/*** META ((export #t)
           (call/cc? #t)
           (call/cc-params (1))
           (peephole (jsCall)))
*/
var sc_jsCall_callcc = sc_jsCall;

/*** META ((export js-method-call)
           (call/cc? #t)
           (peephole (jsMethodCall)))
*/
var sc_jsMethodCall_callcc = sc_jsMethodCall;

// HACK: we don't have any call/cc-version of jsNew, as we can't handle it in our call/cc anyways.

/*** META ((export with-input-from-port)
           (call/cc? #t)
           (call/cc-params (1)))
*/
function sc_withInputFromPort_callcc(p, thunk) {
    // no need to verify for "restore...". All operations are safe, and
    // dynamicWind_callcc will handle the rest.
    var tmp = SC_DEFAULT_IN;
    return sc_dynamicWind_callcc(function() { SC_DEFAULT_IN = p; },
				 thunk,
				 function() { SC_DEFAULT_IN = tmp; });
}

/*** META ((export with-input-from-string)
           (call/cc? #t)
           (string mutable)
           (call/cc-params (1)))
*/
/// peephole: (hole 2 "sc_withInputFromPort_callcc(new sc_StringInputPort(" s ".val), " thunk ")")
function sc_withInputFromString_mutable_callcc(s, thunk) {
    return sc_withInputFromString_immutable_callcc(s.val, thunk);
}

/*** META ((export with-input-from-string)
           (call/cc? #t)
           (string immutable)
           (call/cc-params (1)))
*/
/// peephole: (hole 2 "sc_withInputFromPort_callcc(new sc_StringInputPort(" s "), " thunk ")")
function sc_withInputFromString_immutable_callcc(s, thunk) {
    return sc_withInputFromPort_callcc(new sc_StringInputPort(s), thunk);
}

/*** META ((export with-output-to-port)
           (call/cc? #t)
           (call/cc-params (1)))
*/
function sc_withOutputToPort_callcc(p, thunk) {
    // no need to verify for "restore...". All operations are safe, and
    // dynamicWind_callcc will handle the rest.
    var tmp = SC_DEFAULT_OUT;
    sc_dynamicWind_callcc(function() { SC_DEFAULT_OUT = p; },
			  thunk,
			  function() { SC_DEFAULT_OUT = tmp; });
}


function sc_withOutputToString_callcc(p, thunk) {
    var sc_storage = SC_CALLCC_STORAGE;
    if (sc_storage['doCall/CcDefault?']) {
	var delegate = sc_withOutputToPort_callcc;
    } else if (sc_storage['doCall/CcRestore?'])  {
	var sc_frame = sc_storage.pop();
	p = sc_frame.p;
	delegate = sc_storage.callNextFunction();
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }
    try {
	delegate(p, thunk);
	return p.close();
    } catch (e) {
	if (e instanceof sc_CallCcException && e.backup) {
	    var sc_frame = new Object();
	    sc_frame.callee = sc_withOutputToString_mutable_callcc;
	    sc_frame.p = p;
	    e.push(sc_frame);
	}
	throw e;
    }
}

/*** META ((export with-output-to-string)
           (call/cc? #t)
           (string mutable)
           (call/cc-params (0)))
*/
/// peephole: (hole 1 "sc_withOutputToString_callcc(new sc_StringOutputPort_mutable(), " thunk ")")
function sc_withOutputToString_mutable_callcc(thunk) {
    return sc_withOutputToString_callcc(new sc_StringOutputPort_mutable(), thunk);
}

/*** META ((export with-output-to-string)
           (call/cc? #t)
           (string immutable)
           (call/cc-params (0)))
*/
/// peephole: (hole 1 "sc_withOutputToString_callcc(new sc_StringOutputPort_immutable(), " thunk ")")
function sc_withOutputToString_immutable_callcc(thunk) {
    return sc_withOutputToString_callcc(new sc_StringOutputPort_immutable(), thunk);
}

/*** META ((export with-output-to-procedure)
           (call/cc? #t)
           (string mutable)
           (call/cc-params (1)))
*/
/* with-output-to-procedure parameter 'proc' must not call call/cc! */
function sc_withOutputToProcedure_mutable_callcc(proc, thunk) {
    var t = function(s) { proc(new sc_String(s)); };
    return sc_withOutputToPort_callcc(new sc_GenericOutputPort(t), thunk);
}

/*** META ((export with-output-to-procedure)
           (call/cc? #t)
           (string immutable)
           (call/cc-params (1)))
*/
/// peephole: (hole 2 "sc_withOutputToPort_callcc(new sc_GenericOutputPort(" proc "), " thunk ")")
function sc_withOutputToProcedure_immutable_callcc(proc, thunk) {
    return sc_withOutputToPort_callcc(new sc_GenericOutputPort(proc), thunk);
}

/*** META ((export hashtable-for-each)
           (call/cc? #t)
           (call/cc-params (1)))
*/
function sc_hashtableForEach_callcc(ht, f) {
    var l = null;
    for (var v in ht) {
	if (ht[v] instanceof sc_HashtableElement)
	    l = new sc_Pair(ht[v], l);
    }
    sc_forEach_callcc(function(e) { f(e.key, e.val); },
		      l);
}

/*** META ((export bind-exit-lambda)
           (call/cc? #t)
           (call/cc-params (0)))
*/
function sc_bindExitLambda_callcc(proc) {
    var sc_storage = SC_CALLCC_STORAGE;
    if (sc_storage['doCall/CcDefault?']) {
	var escape_obj = new sc_BindExitException();
	var escape = function(res) {
	    escape_obj.res = res;
	    throw escape_obj;
	};
    } else if (sc_storage['doCall/CcRestore?'])  {
	var sc_frame = sc_storage.pop();
	escape_obj = sc_frame.escape_obj;
	proc = sc_storage.callNextFunction();
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }
    try {
	return proc(escape);
    } catch(e) {
	if (e === escape_obj) {
	    return e.res;
	}
	if (e instanceof sc_CallCcException && e.backup) {
	    var sc_frame = new Object();
	    sc_frame.callee = sc_bindExitLambda_callcc;
	    sc_frame.proc = proc;
	    sc_frame.escape_obj = escape_obj;
	    e.push(sc_frame);
	}
	throw e;
    }
}

function sc_CallCcStorage() {
    this['__call/cc-Object'] = true;
    this['doCall/CcDefault?'] = true;
    this.dynamicWinds = [];
}
sc_CallCcStorage.prototype.push = function(frame) {
    if (!this.frames)
	this.frames = new Array();
    this.frames.push(frame);
};
sc_CallCcStorage.prototype.pop = function() {
    return this.frames.pop();
};
sc_CallCcStorage.prototype.peek = function() {
    return this.frames[this.frames.length - 1];
};
sc_CallCcStorage.prototype.popAll = function() {
    this.frames.length = 0;
};
sc_CallCcStorage.prototype.isEmpty = function() {
    return this.frames.length == 0;
};
sc_CallCcStorage.prototype.length = function() {
    return this.frames.length;
};
sc_CallCcStorage.prototype.duplicate = function() {
    var dupl = new sc_CallCcStorage();
    dupl.frames = this.frames.concat();
    dupl.rootFun = this.rootFun;
    dupl.rootThis = this.rootThis;
    dupl.dynamicWinds = this.dynamicWinds;
    return dupl;
};
sc_CallCcStorage.prototype.callNext = function() {
    var nextFrame = this.frames[this.frames.length-1];
    return nextFrame.callee.call(nextFrame.this_);
};
sc_CallCcStorage.prototype.callNextFunction = function() {
    var storage = this;
    return function() {
	return storage.callNext();
    };
};

sc_CallCcStorage.prototype.resetFrameIterator = function() {
    this.frameIndex = 0;
};
sc_CallCcStorage.prototype.getNextFrame = function() {
    return this.frames[this.frameIndex++];
};

function sc_CallCcException() {
    this._internalException = true;
    this.storage = new sc_CallCcStorage();
    this.dynamicWinds = [];
};
sc_CallCcException.prototype.push = function(frame) {
    this.storage.push(frame);
};
sc_CallCcException.prototype.pushDynamicWind =  function(dynamicWind) {
    this.dynamicWinds.push(dynamicWind);
};

/*** META ((export suspend)
           (call/cc? #t))
*/
function sc_suspend(proc) {
    // the 'return's are completely useless. (just for easier reading).
    sc_callcc(function(resume) {
	try {
	    return proc(resume);
	} finally {
	    return sc_EMPTY_CALLCC("ignored");
	}
    });
}
/*** META ((export call/cc call-with-current-continuation)
           (call/cc? #t))
*/
function sc_callcc(proc) {

    var sc_storage = SC_CALLCC_STORAGE;
    if (sc_storage['doCall/CcDefault?']) {
	/* do nothing */
    } else if (sc_storage['doCall/CcRestore?'])  {
	throw "call/cc can never be used in restoration context";
    } else { // root-fun?
	return sc_callCcRoot(this, arguments);
    }

    var e = new sc_CallCcException();

    // push last frame (artificially created).
    var sc_frame = new Object();
    // short-cut call/cc and continue directly with "whenRestored".
    // 'whenRestored' will either call 'proc' or return the value (when invoked as continuation).
    sc_frame.callee = function() {
	var sc_storage = SC_CALLCC_STORAGE;
	sc_storage['doCall/CcDefault?'] = true;
	sc_storage['doCall/CcRestore?'] = false;
	sc_storage.popAll();
	return sc_storage.whenRestored();
    };
    sc_frame.this_ = null;
    e.push(sc_frame);

    // we are retrieving all frames.
    e.backup = true;

    // just in case the exception is not handled. -> nice error-message.
    e.text = "call/cc-exception_backup";

    // at root call this function
    e.atRoot = function() {
	// backuping is done.
	e.backup = false;

	// backup e.dynamicWinds. these are the dynamicWinds of the stack-frames.
	e.storage.dynamicWinds = e.dynamicWinds;

	// the continuation function...
	var k = function(val) {
	    // 
	    if (!SC_CALLCC_STORAGE['doCall/CcDefault?']) {
		// apparently we are not called out of regular scheme-code.
		// make the best out of it...
		return sc_callCcRoot(null, arguments);
	    }
	    var e_invoke = new sc_CallCcException();
	    e_invoke.text = "call/cc-exception_invocation";
	    e_invoke.atRoot = function() { /* do nothing */ };
	    e_invoke.storage = e.storage; // use the backuped stack-frames.
	    e_invoke.whenRestored = function() { return val; };

	    // throw exception to invoke the continuation
	    throw e_invoke;
	};
	e.whenRestored = function() { return proc(k); };
    };

    // throw e, thus starting the backup.
    throw e;
}

function sc_callCcRestart(e) {
    // fromStack is the dynamic-winds stack from the continuation we are coming from
    // toStack is the dynamic-winds stack we are going to.
    // for both stacks: last element is top-level-dynamic-wind. ie stack[0] is the most nested one.
    // continueFun is the fun we are going to execute once we have executed all the
    // dynamicwinds.
    function dynamicWindsAndContinue(fromStack, toStack, continueFun) {
	var i = fromStack.length - 1;
	var j = toStack.length - 1;
	// find the shared part of dynamic-winds.
	while (i >= 0 &&
	       j >= 0 &&
	       fromStack[i].id === toStack[j].id) {
	    i--;
	    j--;
	}
	
	var toDos = [];
	// 0->i are afters we need to run.
	// j->0 are befores we need to run.    
	for (var k = 0; k <= i; k++) {
	    toDos.push(fromStack[k].after);
	}
	for (var k = j; k >= 0; k--) {
	    toDos.push(toStack[k].before);
	}
	if (toDos.length == 0)
	    return continueFun;
	else
	    toDos.push(continueFun);
	
	return function() {
	    var sc_storage = SC_CALLCC_STORAGE;
	    if (sc_storage['doCall/CcDefault?']) {
		var i = 0;
		var f = toDos[i];
	    } else if (sc_storage['doCall/CcRestore?'])  {
		var sc_frame = sc_storage.pop();
		i = sc_frame.i;
		f = sc_storage.callNextFunction();
	    } else { // root-fun?
		return sc_callCcRoot(this, arguments);
	    }
	    try {
		do {
		    var res = f();
		    i++;
		    f = toDos[i]; // in JS we can access elements out of boundaries.
		} while (i < toDos.length);
		return res;
	    } catch (e) {
		if (e instanceof sc_CallCcException && e.backup) {
		    var sc_frame = new Object();
		    sc_frame.callee = arguments.callee;
		    sc_frame.i = i;
		    e.push(sc_frame);
		}
		throw e;
	    }
	};
    }
	
    while (true) {
	try {
	    e.atRoot();
	    // always duplicate the storage.
	    // (each restored function will pop its frame).
	    var sc_storage = e.storage.duplicate();

	    // we have a new storage...
	    SC_CALLCC_STORAGE = sc_storage;
	    SC_SCM2JS_GLOBALS.CALLCC_STORAGE = SC_CALLCC_STORAGE;

	    // once restored executed the dynamic winds first.
	    sc_storage.whenRestored = dynamicWindsAndContinue(e.dynamicWinds,
							      sc_storage.dynamicWinds,
							      e.whenRestored);
	    sc_storage['doCall/CcDefault?'] = false;
	    sc_storage['doCall/CcRestore?'] = true;
	    // and GO!
	    return sc_storage.callNext();
	} catch (e2) {
	    if (e2 instanceof sc_CallCcException) {
		e = e2;
	    } else
		throw e2;
	}
    }
}

var SC_CALLCC_STORAGE = new Object();
SC_CALLCC_STORAGE['doCall/CcDefault?'] = false;
SC_CALLCC_STORAGE['doCall/CcRestore?'] = false;
SC_CALLCC_STORAGE['__call/cc-Object'] = true;
SC_SCM2JS_GLOBALS.CALLCC_STORAGE = SC_CALLCC_STORAGE;

function sc_callCcRoot(rootThis, rootArguments) {
    var tmp = SC_CALLCC_STORAGE;
    try {
	SC_CALLCC_STORAGE = new sc_CallCcStorage();
	SC_SCM2JS_GLOBALS.CALLCC_STORAGE = SC_CALLCC_STORAGE;
	return rootArguments.callee.apply(rootThis, rootArguments);
    } catch (e) {
	if (e instanceof sc_CallCcException) {
	    return sc_callCcRestart(e);
	} else
	    throw e;
    } finally {
	SC_CALLCC_STORAGE = tmp;
	SC_SCM2JS_GLOBALS.CALLCC_STORAGE = SC_CALLCC_STORAGE;
    }
	
}

var sc_EMPTY_CALLCC;
sc_callcc(function(k) { sc_EMPTY_CALLCC = k; });


var sc_INDEX_OBJECT_HASH = new Array;

function sc_getCallCcIndexObject(index) {
    if (sc_INDEX_OBJECT_HASH[index])
	return sc_INDEX_OBJECT_HASH[index];
    else {
	var tmp = { index: index };
	sc_INDEX_OBJECT_HASH[index] = tmp;
	return tmp;
    }
}
