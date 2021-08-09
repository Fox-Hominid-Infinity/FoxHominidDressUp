(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(4.5,1,1).p("ACQACQglBahdApACQACIkfAAAAJiEQBpA2AeBQ");
	this.shape.setTransform(-1.4,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4E009C").ss(2).p("AAAEHIjjiDIAAkHIDjiEIDkCEIAAEGg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8000FF").s().p("AjjCEIAAkGIDjiFIDkCEIAAEGIjkCFgAAACIQBcgpAmhaQgehQhog2QBoA2AeBQIkfAAIEfAAQgmBahcApgACCAFIAAAAgACCAFg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-27.4,47.7,54.9);


(lib.TopHatButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5).p("AlThXIKnAAQAeAAAAAeIAABzQAAAegeAAIqnAAQgeAAAAgeIAAhzQAAgeAeAAg");
	this.shape.setTransform(6.9808,27.5455,1,1,-14.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#101010").s().p("AlTBXQgeAAAAgdIAAhyQAAgeAeAAIKnAAQAeAAAAAeIAAByQAAAdgeAAg");
	this.shape_1.setTransform(6.9808,27.5455,1,1,-14.9992);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AE2727").ss(5).p("AkUhKIIpAAIAACVIopAAg");
	this.shape_2.setTransform(3.5417,14.5167,1,1,-14.9992);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E93434").s().p("AkUBLIAAiVIIpAAIAACVg");
	this.shape_3.setTransform(3.5417,14.5167,1,1,-14.9992);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5).p("Aj2lLIHtAAQAeAAAAAeIAAJbQAAAegeAAIntAAQgeAAAAgeIAApbQAAgeAeAAg");
	this.shape_4.setTransform(-2.3332,-7.4099,1,1,-14.9992);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#101010").s().p("Aj2FMQgeAAAAgeIAApbQAAgeAeAAIHtAAQAeAAAAAeIAAJbQAAAegeAAg");
	this.shape_5.setTransform(-2.3332,-7.4099,1,1,-14.9992);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002020").s().p("AlZJYIlbpYIFbpXIKzAAIFbJXIlbJYgAl6DkIAABzQAAAeAeAAIKnAAQAeAAAAgeIAAhzQAAgegeAAIg+AAIAAo/QAAgLgEgHQgHgMgTAAIntAAQgTAAgHAMQgEAHAAALIAAI/IhAAAQgeAAAAAeg");
	this.shape_6.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-60,138.5,120.1);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BF849A").p("AICCFQgZhKhRhIQiiiTkXAFQkLAFiECTQhDBIgNBJIBMAMICOjvICGDlICIjoICJDsICMjwICQD3QAggDBVgTg");
	this.shape.setTransform(3.4339,15.0582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAEC9").s().p("AD9hcIiNDwIiJjrIiIDnIiGjlIiODvIhLgMQANhIBChIQCFiTEKgFQEXgFCiCSQBRBIAZBKQhVATgfAEg");
	this.shape_1.setTransform(3.475,15.0417);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3F0829").p("AOZgcIgJAfQgOAngWAmQhJB2iEA0QhMAeiPAaIgUADIiQj5IiNDxIiKjsIiHDoIiGjmIiODwIgQgCQjKgfhtg3Qhggxg5hnQgSghgLgiIgJgaIHbAAICgkVICQD7ICQj7ICUECICRj+ICbEQg");
	this.shape_2.setTransform(-0.0038,-0.2533);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C104C").s().p("AEgA6IiNDxIiKjtIiHDpIiGjmIiODwIgRgDQjKgehsg3Qhggxg5hoQgSgggLghIgJgcIHaAAICgkUICRD7ICQj7ICUEBICRj9ICbEPIHWAAIgKAfQgNAngXAlQhIB3iFAzQhLAeiQAaIgTADg");
	this.shape_3.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-93.1,-31.6,186.2,63.2), null);


(lib.PurpleCapeButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(3).p("AAKktIA1CvQADAJAFABIB1AcQAHACADAMQABALgFAJIhUCHQgFAIACAJIATDAQACAMgGAHQgGAHgHgFIhohbQgFgEgFAEIhoBbQgGAFgGgHQgGgHABgMIAUjAQABgLgFgGIhUiHQgFgJACgLQADgMAHgCIB0gcQAGgBADgJIA0ivQADgLAHAAQAHAAADALg");
	this.shape.setTransform(-14.4102,-10.4603,0.2835,0.2835);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("ABtE3IhnhbQgGgEgFAEIhnBbQgHAFgGgHQgGgHABgMIAUjAQABgLgEgGIhViHQgEgJABgLQADgMAHgCIB0gcQAGgBADgJIA1ivQACgLAHAAQAHAAADALIA1CvQADAJAFABIB1AcQAHACADAMQABALgEAJIhVCHQgFAIACAJIATDAQACAMgGAHQgDAEgEAAQgDAAgDgCg");
	this.shape_1.setTransform(-14.4102,-10.4603,0.2835,0.2835);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9B6D2C").ss(3).p("AEvAAQAACbhZBtQhZBuh9AAQh9AAhZhuQhYhtAAibQAAiaBYhtQBZhtB9AAQB9AABZBtQBZBtAACag");
	this.shape_2.setTransform(-14.2047,-9.6583,0.2835,0.2835);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C29A4C").s().p("AjWEIQhYhtAAibQAAiaBYhtQBZhtB9gBQB9ABBZBtQBZBtAACaQAACbhZBtQhZBth9ABQh9gBhZhtg");
	this.shape_3.setTransform(-14.2047,-9.6583,0.2835,0.2835);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5400A8").ss(3).p("AE6CpQl0AnkmiXQgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIg");
	this.shape_4.setTransform(-27.3985,-11.7172,0.2835,0.2835);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8000FF").s().p("AlgA5QgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIQhNAIhJAAQkaAAjqh4g");
	this.shape_5.setTransform(-27.3985,-11.7172,0.2835,0.2835);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5400A8").ss(3).p("AriEoQLVhUMhkSQApgKAYgiQAYgjgGgpIgCgVQgHgwgogcQgogcgwAMQs5E3q6BEQglAJgXAeQgXAdAAAmQAAA1AqAgQApAhAzgMg");
	this.shape_6.setTransform(12.0684,-16.1887,0.2835,0.2835);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8000FF").s().p("As+ETQgqggAAg1QAAgmAXgdQAXgeAlgJQK6hEM5k3QAwgMAoAcQAoAcAHAwIACAVQAGApgYAjQgYAigpAKQshESrVBUQgOADgNAAQgjAAgegYg");
	this.shape_7.setTransform(12.0684,-16.1887,0.2835,0.2835);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5400A8").ss(3).p("ADAQrQhtiWhlDUQgOAeghAAQghgBgMgeQhnj0hvClQgVAfgkgKQgjgLAAglQCZomAMnFQANnkiQoBQgDgNE1hUQCZgrCcgoQAVAAAOAPQAPAPAAAUQCJIagDInQgEIGiCIbQAAAlgjALQgiALgWgeg");
	this.shape_8.setTransform(23.3239,13.3613,0.2835,0.2835);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8000FF").s().p("AhuRnQhnjzhvClQgVAfgkgKQgjgLAAgmQCZolAMnEQANnliQoBQgDgNE1hVQCZgqCcgoQAVAAAOAPQAPAPAAAVQCJIZgDInQgEIGiCIbQAAAlgjAKQgiALgWgdQhtiWhlDUQgOAdghAAQghAAgMgfg");
	this.shape_9.setTransform(23.3239,13.3613,0.2835,0.2835);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002020").s().p("AlZJYIlbpYIFbpXIKzAAIFbJXIlbJYgAl6DkIAABzQAAAeAeAAIKnAAQAeAAAAgeIAAhzQAAgegeAAIg+AAIAAo/QAAgLgEgHQgHgMgTAAIntAAQgTAAgHAMQgEAHAAALIAAI/IhAAAQgeAAAAAeg");
	this.shape_10.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-60,138.5,120.1);


(lib.NoItemButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(5).p("AlZJYIKzyv");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002020").s().p("AlZJYIKzyvIqzSvIlbpYIFbpXIKzAAIFbJXIlbJYg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-62.5,138.5,125.1);


(lib.FoxHat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#00FFFF","rgba(128,0,255,0.847)","rgba(128,0,255,0)"],[0,0.114,0.498,1],0,0,0,0,0,37.7).s().p("AjfEvQh+hdgXiaQgXiaBch+QBdh9CbgXQCagXB9BcQB+BdAXCbQAYCZhdB+QhdB+ibAXQgfAFgdAAQh3AAhkhLg");
	this.shape.setTransform(31.2585,-80.0228,0.9998,0.9998,-0.6995);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9B6D2C").ss(3).p("A22p9QgFAtAfAhQAeAhAsAAQAMgCABAAIDGIFQDTIxA8DdQAMAqAiAbQAjAbArAAQLdASMEhAQApgDAggbQAfgaALgoQAriaAuh2QCemJDxpqIANAAQAsAAAeghQAdgigFgtQgEgigZgZQgagZgigDQgtgFghAfQghAeABAsQAAAXAKAVQAKAUARANQiUE5giA9QiBDkhhAOQh9AThPiGQg2hcgaiZQAmgEAZgdQAagdgDgnQgCglgbgaQgbgZglgBQgpgBgcAcQgdAdABAoQAAAeASAZQARAXAbAKQgzCXg7BfQhWCJhYgKQhIgIhDhjQhRh6gCibIgDj2QAAgXAQgQQAQgRAXAAIADAAQAZAAARgUQASgTgEgaQgDgWgRgOQgSgPgWABIg4AAIAAg4QgBgZgTgRQgUgRgZADQgVADgPASQgOARAAAWIABA2Ig6AAQgeABgRAZQgRAZAMAeQAGARAQAJQAPAJATAAQAXgBAQAQQARARAAAXIADD1QABCbhOB8QhABlhJAKQhXAMhZiIQg9hdg3iWQAcgLARgZQARgagCgfQgCglgbgbQgbgaglgBQgpAAgcAcQgdAdABAoQAAAlAaAbQAZAbAlACQgWCag0BeQhLCIh/gQQhngNiGjeQg1hXiJkZQATgOALgVQALgWAAgZQgBgsghgdQghgegtAFQgjAEgYAaQgZAZgDAigAhjHFIhphKQgIgGADgJQADgJAJAAICBgBQAKgBADgJIAmh7QADgJAJAAQAJAAADAJIApB6QADAJAKAAICBgBQAJgBADAKQADAJgHAFIhoBNQgHAGACAJIAqB6QADAJgIAGQgHAFgIgFIhphLQgHgFgIAFIhnBNQgIAGgIgFQgHgGACgJIAnh7QADgJgIgGgAJAGAIBaiSQAHgMAOAAQAOAAAHAMIBdCQQAIAOgHANIhaCSQgHAMgOAAQgOAAgIgMIhdiQQgIgNAIgOgArdGhIBZiSQAHgMAOAAQAOgBAIAMIBdCQQAIAOgIANIhZCSQgIAMgOAAQgOAAgHgLIhdiQQgIgOAIgNg");
	this.shape_1.setTransform(33.9171,-8.1525,0.9998,0.9998,-0.6995);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8000FF").s().p("Ah8DEQgHgGACgJIAnh7QADgJgIgGIhphJQgIgGADgJQADgJAJAAICBgBQAKgBADgJIAmh7QADgJAJAAQAJAAADAJIApB6QADAJAKAAICBgBQAJgBADAKQADAJgHAFIhoBMQgHAGACAJIAqB6QADAJgIAGQgHAFgIgFIhphLQgIgFgHAFIhnBNQgEADgEAAQgEAAgEgCg");
	this.shape_2.setTransform(34.0307,32.8673,0.9998,0.9998,-0.6995);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C29A4C").s().p("Ar0NjQgrAAgjgbQgigbgMgqQg8jdjToxIjGoFIgNACQgsAAgeghQgfghAFgtQADgiAZgZQAYgaAjgEQAtgFAhAeQAhAdABAsQAAAZgLAWQgLAVgTAOQCJEZA1BXQCGDeBnANQB/AQBLiIQA0heAWiaQglgCgZgbQgagbAAglQgBgoAdgdQAcgcApAAQAlABAbAaQAbAbACAlQACAfgRAaQgRAZgcALQA3CWA9BdQBZCIBXgMQBJgKBAhlQBOh8gBibIgDj1QAAgXgRgRQgQgQgXABQgTAAgPgJQgQgJgGgRQgMgeARgZQARgZAegBIA6AAIgBg2QAAgWAOgRQAPgSAVgDQAZgDAUARQATARABAZIAAA4IA4AAQAWgBASAPQARAOADAWQAEAagSATQgRAUgZAAIgDAAQgXAAgQARQgQAQAAAXIADD2QACCbBRB6QBDBjBIAIQBYAKBWiJQA7hfAziXQgbgKgRgXQgSgZAAgeQgBgoAdgdQAcgcApABQAlABAbAZQAbAaACAlQADAngaAdQgZAdgmAEQAaCZA2BcQBPCGB9gTQBhgOCBjkQAig9CUk5QgRgNgKgUQgKgVAAgXQgBgsAhgeQAhgfAtAFQAiADAaAZQAZAZAEAiQAFAtgdAiQgeAhgsAAIgNAAQjxJqieGJQguB2grCaQgLAogfAaQggAbgpADQpbAypCAAQijAAihgEgAgFDUQgJAAgDAJIgmB7QgDAJgKABIiBABQgJAAgDAJQgDAJAIAGIBpBKQAIAGgDAJIgnB7QgCAJAHAGQAIAFAIgGIBnhNQAIgFAHAFIBpBLQAIAFAHgFQAIgGgDgJIgqh6QgCgJAHgGIBohNQAHgFgDgJQgDgKgJABIiBABQgKAAgDgJIgph6QgDgJgIAAIgBAAgApvEDQgOAAgHAMIhZCSQgIANAIAOIBdCQQAHALAOAAQAOAAAIgMIBZiSQAIgNgIgOIhdiQQgHgLgOAAIgBAAgAKaDuIhaCSQgIAOAIANIBdCQQAIAMAOAAQAOAAAHgMIBaiSQAHgNgIgOIhdiQQgHgMgOAAQgOAAgHAMg");
	this.shape_3.setTransform(33.9171,-8.1525,0.9998,0.9998,-0.6995);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B52C2C").s().p("AAFEHQiYgziMigIgLlKIBpAPQBxAIAugfIB4ANIB0AoIBhHzQhKAVhHAAQhMAAhJgYg");
	this.shape_4.setTransform(32.0088,33.2696,0.9998,0.9998,-0.6995);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("At4CrIC1mCIDDgEQDBBtFchhIECBUIB7h0IFggHIB/GGQn2BcmoAKIhkABQmVAAlahMg");
	this.shape_5.setTransform(34.2581,31.1794,0.9998,0.9998,-0.6995);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5).p("AlThXIKnAAQAeAAAAAeIAABzQAAAegeAAIqnAAQgeAAAAgeIAAhzQAAgeAeAAg");
	this.shape_6.setTransform(35.0827,48.374,2.5498,2.5498);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#101010").s().p("AlTBXQgeAAAAgdIAAhyQAAgeAeAAIKnAAQAeAAAAAeIAAByQAAAdgeAAg");
	this.shape_7.setTransform(35.0827,48.374,2.5498,2.5498);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#AE2727").ss(5).p("AkUhKIIpAAIAACVIopAAg");
	this.shape_8.setTransform(35.2102,14.0156,2.5498,2.5498);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E93434").s().p("AkUBLIAAiVIIpAAIAACVg");
	this.shape_9.setTransform(35.2102,14.0156,2.5498,2.5498);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5).p("Aj2lLIHtAAQAeAAAAAeIAAJbQAAAegeAAIntAAQgeAAAAgeIAApbQAAgeAeAAg");
	this.shape_10.setTransform(35.2102,-43.8647,2.5498,2.5498);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#101010").s().p("Aj2FMQgeAAAAgeIAApbQAAgeAeAAIHtAAQAeAAAAAeIAAJbQAAAegeAAg");
	this.shape_11.setTransform(35.2102,-43.8647,2.5498,2.5498);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.9,-131.1,302.8,218);


(lib.FoxCape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(3).p("AAKktIA1CvQADAJAFABIB1AcQAHACADAMQABALgFAJIhUCHQgFAIACAJIATDAQACAMgGAHQgGAHgHgFIhohbQgFgEgFAEIhoBbQgGAFgGgHQgGgHABgMIAUjAQABgLgFgGIhUiHQgFgJACgLQADgMAHgCIB0gcQAGgBADgJIA0ivQADgLAHAAQAHAAADALg");
	this.shape.setTransform(-4.2268,-10.0499,0.7158,0.7158,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("ABtE3IhnhbQgGgEgFAEIhnBbQgHAFgGgHQgGgHABgMIAUjAQABgLgEgGIhViHQgEgJABgLQADgMAHgCIB0gcQAGgBADgJIA1ivQACgLAHAAQAHAAADALIA1CvQADAJAFABIB1AcQAHACADAMQABALgEAJIhVCHQgFAIACAJIATDAQACAMgGAHQgDAEgEAAQgDAAgDgCg");
	this.shape_1.setTransform(-4.2268,-10.0499,0.7158,0.7158,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9B6D2C").ss(3).p("AEvAAQAACbhZBtQhZBuh9AAQh9AAhZhuQhYhtAAibQAAiaBYhtQBZhtB9AAQB9AABZBtQBZBtAACag");
	this.shape_2.setTransform(-4.7457,-8.0249,0.7158,0.7158,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C29A4C").s().p("AjWEIQhYhtAAibQAAiaBYhtQBZhtB9gBQB9ABBZBtQBZBtAACaQAACbhZBtQhZBth9ABQh9gBhZhtg");
	this.shape_3.setTransform(-4.7457,-8.0249,0.7158,0.7158,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5400A8").ss(3).p("AE6CpQl0AnkmiXQgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIg");
	this.shape_4.setTransform(28.5679,-13.2233,0.7158,0.7158,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8000FF").s().p("AlgA5QgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIQhNAIhJAAQkaAAjqh4g");
	this.shape_5.setTransform(28.5679,-13.2233,0.7158,0.7158,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5400A8").ss(3).p("AriEoQLVhUMhkSQApgKAYgiQAYgjgGgpIgCgVQgHgwgogcQgogcgwAMQs5E3q6BEQglAJgXAeQgXAdAAAmQAAA1AqAgQApAhAzgMg");
	this.shape_6.setTransform(-71.0839,-24.5139,0.7158,0.7158,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8000FF").s().p("As+ETQgqggAAg1QAAgmAXgdQAXgeAlgJQK6hEM5k3QAwgMAoAcQAoAcAHAwIACAVQAGApgYAjQgYAigpAKQshESrVBUQgOADgNAAQgjAAgegYg");
	this.shape_7.setTransform(-71.0839,-24.5139,0.7158,0.7158,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5400A8").ss(3).p("ADAQrQhtiWhlDUQgOAeghAAQghgBgMgeQhnj0hvClQgVAfgkgKQgjgLAAglQCZomAMnFQANnkiQoBQgDgNE1hUQCZgrCcgoQAVAAAOAPQAPAPAAAUQCJIagDInQgEIGiCIbQAAAlgjALQgiALgWgeg");
	this.shape_8.setTransform(-99.5035,50.0985,0.7158,0.7158,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8000FF").s().p("AhuRnQhnjzhvClQgVAfgkgKQgjgLAAgmQCZolAMnEQANnliQoBQgDgNE1hVQCZgqCcgoQAVAAAOAPQAPAPAAAVQCJIZgDInQgEIGiCIbQAAAlgjAKQgiALgWgdQhtiWhlDUQgOAdghAAQghAAgMgfg");
	this.shape_9.setTransform(-99.5035,50.0985,0.7158,0.7158,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.2,-54.7,199.1,193.7);


(lib.Tween37copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BF6121").ss(0.3,1,1).p("AhiAAQAAApAdAdQAdAdAoAAQApAAAdgdQAdgdAAgpQAAgogdgdQgdgdgpAAQgoAAgdAdQgdAdAAAog");
	this.shape.setTransform(0,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7F27").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_1.setTransform(0,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-11,21.8,21.8);


(lib.Tween37copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BFBA00").ss(0.3,1,1).p("AhiAAQAAApAdAdQAdAdAoAAQApAAAdgdQAdgdAAgpQAAgogdgdQgdgdgpAAQgoAAgdAdQgdAdAAAog");
	this.shape.setTransform(0.4,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_1.setTransform(0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-11.4,21.8,21.8);


(lib.CrownHatButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#00FFFF","rgba(128,0,255,0.847)","rgba(128,0,255,0)"],[0,0.114,0.498,1],0,0,0,0,0,37.7).s().p("AjfEvQh+hdgXiaQgXiaBch+QBdh9CbgXQCagXB9BcQB+BdAXCbQAYCZhdB+QhdB+ibAXQgfAFgdAAQh3AAhkhLg");
	this.shape.setTransform(-7.1083,-21.4693,0.3296,0.3296,-15.6958);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9B6D2C").ss(3).p("A22p9QgFAtAfAhQAeAhAsAAQAMgCABAAIDGIFQDTIxA8DdQAMAqAiAbQAjAbArAAQLdASMEhAQApgDAggbQAfgaALgoQAriaAuh2QCemJDxpqIANAAQAsAAAeghQAdgigFgtQgEgigZgZQgagZgigDQgtgFghAfQghAeABAsQAAAXAKAVQAKAUARANQiUE5giA9QiBDkhhAOQh9AThPiGQg2hcgaiZQAmgEAZgdQAagdgDgnQgCglgbgaQgbgZglgBQgpgBgcAcQgdAdABAoQAAAeASAZQARAXAbAKQgzCXg7BfQhWCJhYgKQhIgIhDhjQhRh6gCibIgDj2QAAgXAQgQQAQgRAXAAIADAAQAZAAARgUQASgTgEgaQgDgWgRgOQgSgPgWABIg4AAIAAg4QgBgZgTgRQgUgRgZADQgVADgPASQgOARAAAWIABA2Ig6AAQgeABgRAZQgRAZAMAeQAGARAQAJQAPAJATAAQAXgBAQAQQARARAAAXIADD1QABCbhOB8QhABlhJAKQhXAMhZiIQg9hdg3iWQAcgLARgZQARgagCgfQgCglgbgbQgbgaglgBQgpAAgcAcQgdAdABAoQAAAlAaAbQAZAbAlACQgWCag0BeQhLCIh/gQQhngNiGjeQg1hXiJkZQATgOALgVQALgWAAgZQgBgsghgdQghgegtAFQgjAEgYAaQgZAZgDAigAhjHFIhphKQgIgGADgJQADgJAJAAICBgBQAKgBADgJIAmh7QADgJAJAAQAJAAADAJIApB6QADAJAKAAICBgBQAJgBADAKQADAJgHAFIhoBNQgHAGACAJIAqB6QADAJgIAGQgHAFgIgFIhphLQgHgFgIAFIhnBNQgIAGgIgFQgHgGACgJIAnh7QADgJgIgGgAJAGAIBaiSQAHgMAOAAQAOAAAHAMIBdCQQAIAOgHANIhaCSQgHAMgOAAQgOAAgIgMIhdiQQgIgNAIgOgArdGhIBZiSQAHgMAOAAQAOgBAIAMIBdCQQAIAOgIANIhZCSQgIAMgOAAQgOAAgHgLIhdiQQgIgOAIgNg");
	this.shape_1.setTransform(-0.1318,1.1871,0.3296,0.3296,-15.6958);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8000FF").s().p("Ah8DEQgHgGACgJIAnh7QADgJgIgGIhphJQgIgGADgJQADgJAJAAICBgBQAKgBADgJIAmh7QADgJAJAAQAJAAADAJIApB6QADAJAKAAICBgBQAJgBADAKQADAJgHAFIhoBMQgHAGACAJIAqB6QADAJgIAGQgHAFgIgFIhphLQgIgFgHAFIhnBNQgEADgEAAQgEAAgEgCg");
	this.shape_2.setTransform(3.4029,14.2379,0.3296,0.3296,-15.6958);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C29A4C").s().p("Ar0NjQgrAAgjgbQgigbgMgqQg8jdjToxIjGoFIgNACQgsAAgeghQgfghAFgtQADgiAZgZQAYgaAjgEQAtgFAhAeQAhAdABAsQAAAZgLAWQgLAVgTAOQCJEZA1BXQCGDeBnANQB/AQBLiIQA0heAWiaQglgCgZgbQgagbAAglQgBgoAdgdQAcgcApAAQAlABAbAaQAbAbACAlQACAfgRAaQgRAZgcALQA3CWA9BdQBZCIBXgMQBJgKBAhlQBOh8gBibIgDj1QAAgXgRgRQgQgQgXABQgTAAgPgJQgQgJgGgRQgMgeARgZQARgZAegBIA6AAIgBg2QAAgWAOgRQAPgSAVgDQAZgDAUARQATARABAZIAAA4IA4AAQAWgBASAPQARAOADAWQAEAagSATQgRAUgZAAIgDAAQgXAAgQARQgQAQAAAXIADD2QACCbBRB6QBDBjBIAIQBYAKBWiJQA7hfAziXQgbgKgRgXQgSgZAAgeQgBgoAdgdQAcgcApABQAlABAbAZQAbAaACAlQADAngaAdQgZAdgmAEQAaCZA2BcQBPCGB9gTQBhgOCBjkQAig9CUk5QgRgNgKgUQgKgVAAgXQgBgsAhgeQAhgfAtAFQAiADAaAZQAZAZAEAiQAFAtgdAiQgeAhgsAAIgNAAQjxJqieGJQguB2grCaQgLAogfAaQggAbgpADQpbAypCAAQijAAihgEgAgFDUQgJAAgDAJIgmB7QgDAJgKABIiBABQgJAAgDAJQgDAJAIAGIBpBKQAIAGgDAJIgnB7QgCAJAHAGQAIAFAIgGIBnhNQAIgFAHAFIBpBLQAIAFAHgFQAIgGgDgJIgqh6QgCgJAHgGIBohNQAHgFgDgJQgDgKgJABIiBABQgKAAgDgJIgph6QgDgJgIAAIgBAAgApvEDQgOAAgHAMIhZCSQgIANAIAOIBdCQQAHALAOAAQAOAAAIgMIBZiSQAIgNgIgOIhdiQQgHgLgOAAIgBAAgAKaDuIhaCSQgIAOAIANIBdCQQAIAMAOAAQAOAAAHgMIBaiSQAHgNgIgOIhdiQQgHgMgOAAQgOAAgHAMg");
	this.shape_3.setTransform(-0.1318,1.1871,0.3296,0.3296,-15.6958);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B52C2C").s().p("AAFEHQiYgziMigIgLlKIBpAPQBxAIAugfIB4ANIB0AoIBhHzQhKAVhHAAQhMAAhJgYg");
	this.shape_4.setTransform(2.7935,14.5384,0.3296,0.3296,-15.6958);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("At4CrIC1mCIDDgEQDBBtFchhIECBUIB7h0IFggHIB/GGQn2BcmoAKIhkABQmVAAlahMg");
	this.shape_5.setTransform(3.3314,13.6811,0.3296,0.3296,-15.6958);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002020").s().p("AlZJYIlbpYIFbpXIKzAAIFbJXIlbJYg");
	this.shape_6.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-60,138.5,120.1);


(lib.ButtonInvisible = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(5,1).p("ABXkhIipEhICpEi");
	this.shape.setTransform(-1.1989,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002020").s().p("AgiK8QhKAAg2g1Qg0g1AAhKIAAwPQAAhLA0g0QA2g1BKAAIBFAAQBKAAA1A1QA1A0AABLIAAQPQAABKg1A1Qg1A1hKAAgAheAAICpEiIipkiICpkhIipEhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-70,43,140);


(lib.AnimSave = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgbBJQgQgKgKgSQgKgTAAgaQAAgZAKgSQAKgTAPgKQAPgKARAAQAcAAAQATQAQASAAAkIAAAEIgBAFIhzAAQAAAVAHARQAIARAOAJQAOAKASgBQANAAALgDQALgFAJgGIAEAIQgIAHgMAEQgLAEgSABQgTAAgQgKgAA2gIQAAghgOgQQgNgQgXAAQgNAAgNAIQgMAIgIAOQgJAPgBAUIBqAAIAAAAg");
	this.shape.setTransform(103.675,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgFBPIg8idIAMAAIAlBmIAJAXIAHAWIABAAIAIgWIAJgXIAlhmIALAAIg8Cdg");
	this.shape_1.setTransform(88.5,41.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AghBPQgKgFgGgKQgHgJAAgPQAAgaAZgOQAagNA0gFQABgOgDgMQgDgNgJgHQgJgJgQAAQgKAAgKADQgKADgIAFQgIAEgFAFIgFgIIAOgJQAIgFAMgEQALgDAMAAQASAAALAJQAKAHAFAOQAEANAAAQIAABmIgJAAIgBgVIgBAAQgMAKgPAHQgOAIgPAAQgNAAgKgEgAgHAAQgVAGgIALQgJAJAAAOQAAAMAFAHQAFAIAIAEQAIADAKgBQANAAAOgGQANgHAQgOIAAg4QgjAEgTAGg");
	this.shape_2.setTransform(73.077,41.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgnBoQgSgJgMgPIAHgHQAMAOAQAIQARAIATAAQAbAAAPgNQAPgNABgVQAAgOgGgJQgFgJgKgGIgTgKIghgOQgKgEgKgHQgKgGgIgKQgGgLgBgQQABgQAHgLQAJgMAOgHQANgGARAAQAUAAAPAIQAPAHAKALIgHAHQgJgLgOgGQgNgGgRAAQgWAAgOALQgNALgBATQABAOAFAIQAHAJAJAFIARAJIAgAPQANAEAKAHQAKAHAHALQAHALAAARQAAAQgJANQgIANgQAIQgPAHgVAAQgXAAgSgJg");
	this.shape_3.setTransform(57,38.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5800AF").ss(3,1,1).p("AAAGLIlVjFIAAmLIFVjFIFWDFIAAGLg");
	this.shape_4.setTransform(79.8,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8000FF").s().p("AlVDFIAAmKIFVjFIFVDFIAAGKIlVDGg");
	this.shape_5.setTransform(79.8,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AnimSave, new cjs.Rectangle(44.2,-1.5,71.3,82), null);


(lib.Mouth2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(0.3,-9.1,0.3031,0.302,0,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-18.6,56.2,19);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_10 = function() {
		this.stop()
	}
	this.frame_30 = function() {
		this.gotoAndStop(10)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20).call(this.frame_30).wait(11));

	// Layer_1
	this.anim_save = new lib.AnimSave();
	this.anim_save.name = "anim_save";
	this.anim_save.setTransform(27.25,2.95,1,1,0,0,0,78.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.anim_save).to({scaleX:0.8167,scaleY:0.8167},10,cjs.Ease.quadInOut).to({regX:78.2,regY:39.3,scaleX:1.1684,scaleY:1.1684,x:27.1,y:2.9},10,cjs.Ease.quadInOut).to({regX:78.5,regY:39.5,scaleX:0.8167,scaleY:0.8167,x:27.25,y:2.95},10,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},10,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-44.7,83.3,95.80000000000001);


(lib.HominidHead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fixed_Mirror
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0)").s().p("AiJBpIAAjQIETAAIAADQg");
	this.shape.setTransform(73.625,60.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(245).to({_off:false},0).to({_off:true},1).wait(10));

	// Cape
	this.hominid_cape = new lib.FoxCape();
	this.hominid_cape.name = "hominid_cape";
	this.hominid_cape.setTransform(18.4,87.85,0.2476,0.2476);
	this.hominid_cape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hominid_cape).wait(245).to({_off:false},0).to({_off:true},1).wait(10));

	// Hat
	this.hominid_hat = new lib.FoxHat();
	this.hominid_hat.name = "hominid_hat";
	this.hominid_hat.setTransform(2.05,22,0.2476,0.2476,0,0,0,-0.4,1.6);
	this.hominid_hat._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hominid_hat).wait(245).to({_off:false},0).to({_off:true},1).wait(10));

	// Mouth
	this.instance = new lib.Mouth2("single",0);
	this.instance.setTransform(11.45,67.6,1,1,0,0,0,0,-9.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(9));

	// Eye
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0.584,0.906,0.957],0,0,0,0,0,8.8).s().p("AgGBYQglgDgXgcQgYgbADgkQADgkAcgYQAbgYAkADQAkADAYAcQAXAbgCAkQgDAkgcAYQgZAVgfAAIgHAAg");
	this.shape_1.setTransform(-3.2505,50.2433,0.3127,0.3127);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0.584,0.906,0.957],0,0,0,0,0,8.8).s().p("AgGBYQglgDgXgcQgYgbADgkQADgkAcgYQAbgYAkADQAkADAYAcQAXAbgCAkQgDAkgcAYQgZAVgfAAIgHAAg");
	this.shape_2.setTransform(20.3995,50.2433,0.3127,0.3127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},245).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(9));

	// Head
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiPCQQg8g7AAhVQAAhTA8g8QA8g8BTAAQBVAAA7A8QA8A8AABTQAABVg8A7Qg7A8hVAAQhTAAg8g8g");
	this.shape_3.setTransform(22.7018,52.3362,0.3027,0.3027);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiPCQQg8g7AAhVQAAhTA8g8QA8g8BTAAQBVAAA7A8QA8A8AABTQAABVg8A7Qg7A8hVAAQhTAAg8g8g");
	this.shape_4.setTransform(-0.831,52.3362,0.3027,0.3027);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BFBA00").p("AuzAAQAADBBKCxQBICqCECDQCDCDCqBIQCwBLDAAAQDBAACwhLQCqhICEiDQCDiDBIiqQBKixAAjBQAAjAhKiwQhIiqiDiDQiEiEiqhIQiwhLjBAAQjAAAiwBLQiqBIiDCEQiECDhICqQhKCwAADAg");
	this.shape_5.setTransform(11.6523,59.9192,0.3027,0.3027);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AlwNqQiqhIiDiDQiEiEhIiqQhKiwAAjBQAAjABKiwQBIirCEiCQCDiECqhIQCwhLDAABQDBgBCwBLQCqBICECEQCDCCBICrQBKCwAADAQAADBhKCwQhICqiDCEQiECDiqBIQiwBKjBABQjAgBiwhKg");
	this.shape_6.setTransform(11.6523,59.9192,0.3027,0.3027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},245).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(9));

	// Ear_Top
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BFBA00").p("ACvAAQAABIgzA0QgzAzhJAAQhHAAg0gzQgzgzAAhJQAAhIAzgzQA0g0BHAAQBJAAAzA0QAzAzAABIg");
	this.shape_7.setTransform(-3.2893,-6.9867,0.3027,0.3027,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzA0hJAAQhHAAg0g0g");
	this.shape_8.setTransform(-3.2893,-6.9867,0.3027,0.3027,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BFBA00").p("ACvAAQAABJgzAzQgzA0hJAAQhHAAg0g0QgzgzAAhJQAAhIAzgzQA0g0BHAAQBJAAAzA0QAzAzAABIg");
	this.shape_9.setTransform(30.6858,-5.8517,0.3027,0.3027,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHgBQBJABAzAzQAzA0AABHQAABJgzAzQgzA0hJgBQhHABg0g0g");
	this.shape_10.setTransform(30.6858,-5.8517,0.3027,0.3027,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BFBA00").ss(0.3).p("AB1AEQAAgVAPgQQAQgPAWAAQAVAAAQAPQAQAQAAAVQAAAWgQAPQgQAQgVAAQgWAAgQgQQgPgPAAgWgAjegDQAAgWAPgPQAQgQAWAAQAWAAAPAQQAQAPAAAWQAAAVgQAQQgPAQgWAAQgWAAgQgQQgPgQAAgVg");
	this.shape_11.setTransform(12.9,-6.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("ACFApQgQgPAAgWQAAgVAQgQQAPgPAWAAQAWAAAQAPQAPAQAAAVQAAAWgPAPQgQAQgWAAQgWAAgPgQgAjOAiQgQgQAAgVQAAgWAQgPQAPgQAWAAQAWAAAPAQQAQAPAAAWQAAAVgQAQQgPAQgWAAQgWAAgPgQg");
	this.shape_12.setTransform(12.9,-6.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BFBA00").ss(0.3).p("AB1ADQAAgVAQgQQAPgPAWAAQAWAAAQAPQAPAQAAAVQAAAWgPAPQgQAQgWAAQgWAAgPgQQgQgPAAgWgAjegCQAAgWAPgPQAQgQAWAAQAWAAAQAQQAPAPAAAWQAAAVgPAQQgQAQgWAAQgWAAgQgQQgPgQAAgVg");
	this.shape_13.setTransform(12.5,-6.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("ACEAoQgPgPAAgWQAAgVAPgQQAQgPAWAAQAVAAAQAPQAQAQAAAVQAAAWgQAPQgQAQgVAAQgWAAgQgQgAjPAjQgPgQAAgVQAAgWAPgPQAQgQAWAAQAWAAAQAQQAPAPAAAWQAAAVgPAQQgQAQgWAAQgWAAgQgQg");
	this.shape_14.setTransform(12.5,-6.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BFBA00").ss(0.3).p("AB1ABQAAgVAQgQQAPgPAWAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgWAAgPgPQgQgQAAgWgAjegBQAAgWAPgPQAQgQAWAAQAWAAAPAQQAQAPAAAWQAAAWgQAPQgPAQgWAAQgWAAgQgQQgPgPAAgWg");
	this.shape_15.setTransform(12.1,-6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("ACFAnQgQgQAAgWQAAgVAQgQQAPgPAWAAQAWAAAPAPQAQAQAAAVQAAAWgQAQQgPAPgWAAQgWAAgPgPgAjOAkQgQgPAAgWQAAgVAQgQQAPgQAWAAQAWAAAPAQQAQAQAAAVQAAAWgQAPQgPAQgWAAQgWAAgPgQg");
	this.shape_16.setTransform(12.1,-6.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BFBA00").ss(0.3).p("AB1AAQAAgVAPgPQAQgQAWAAQAWAAAPAQQAQAPAAAVQAAAWgQAQQgPAPgWAAQgWAAgQgPQgPgQAAgWgAjeAAQAAgVAPgQQAQgPAWAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAQgWAAQgWAAgQgQQgPgPAAgWg");
	this.shape_17.setTransform(11.65,-6.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("ACFAmQgQgQAAgWQAAgVAQgPQAPgQAWAAQAWAAAPAQQAQAPAAAVQAAAWgQAQQgPAPgWAAQgWAAgPgPgAjOAlQgQgPAAgWQAAgVAQgQQAPgPAWAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAQgWAAQgWAAgPgQg");
	this.shape_18.setTransform(11.65,-6.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BFBA00").ss(0.3).p("AB1AAQAAgWAQgQQAPgPAWAAQAWAAAQAPQAPAQAAAWQAAAVgPAQQgQAPgWAAQgWAAgPgPQgQgQAAgVgAjeABQAAgVAPgQQAQgPAWAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgWAAgQgPQgPgQAAgWg");
	this.shape_19.setTransform(11.25,-6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AjPAnQgPgQAAgWQAAgVAPgQQARgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgRgPgACEAkQgPgPAAgVQAAgWAPgQQAQgPAWAAQAWAAAQAPQAPAQAAAWQAAAVgPAPQgQAQgWAAQgWAAgQgQg");
	this.shape_20.setTransform(11.25,-6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BFBA00").ss(0.3).p("AB1gBQAAgWAQgQQAPgPAWAAQAWAAAQAPQAPAQAAAWQAAAVgPAPQgQAQgWAAQgWAAgPgQQgQgPAAgVgAjeACQAAgVAPgPQAQgQAWAAQAWAAAPAQQAQAPAAAVQAAAWgQAQQgPAPgWAAQgWAAgQgPQgPgQAAgWg");
	this.shape_21.setTransform(10.85,-6.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AjPAoQgPgQAAgWQAAgVAPgPQAQgQAWAAQAWAAAPAQQAQAPAAAVQAAAWgQAQQgPAPgWAAQgWAAgQgPgACFAjQgQgPAAgVQAAgWAQgQQAPgPAWAAQAWAAAPAPQAQAQAAAWQAAAVgQAPQgPAQgWAAQgWAAgPgQg");
	this.shape_22.setTransform(10.85,-6.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BFBA00").ss(0.3).p("AB1gCQAAgWAQgQQAPgQAWAAQAWAAAQAQQAPAQAAAWQAAAVgPAPQgQAQgWAAQgWAAgPgQQgQgPAAgVgAjeADQAAgVAPgPQAQgQAWAAQAWAAAPAQQAQAPAAAVQAAAWgQAQQgPAQgWAAQgWAAgQgQQgPgQAAgWg");
	this.shape_23.setTransform(10.45,-6.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AjOApQgQgQAAgWQAAgVAQgPQAPgQAWAAQAWAAAQAQQAPAPAAAVQAAAWgPAQQgQAQgWAAQgWAAgPgQgACEAiQgPgPAAgWQAAgWAPgPQAQgQAWAAQAVAAARAQQAPAPAAAWQAAAWgPAPQgRAQgVAAQgWAAgQgQg");
	this.shape_24.setTransform(10.45,-6.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BFBA00").ss(0.3).p("AB1gEQAAgWAQgPQAPgQAWAAQAWAAAQAQQAPAPAAAWQAAAVgPAQQgQAQgWAAQgWAAgPgQQgQgQAAgVgAjeAFQAAgVAPgQQAQgPAWAAQAWAAAQAPQAPAQAAAVQAAAWgPAPQgQAQgWAAQgWAAgQgQQgPgPAAgWg");
	this.shape_25.setTransform(10,-6.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AjOAqQgQgPAAgWQAAgVAQgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAPQgQAQgWAAQgVAAgQgQgACEAhQgPgQAAgVQAAgWAPgPQAQgQAWAAQAWAAAQAQQAPAPAAAWQAAAVgPAQQgQAQgWAAQgWAAgQgQg");
	this.shape_26.setTransform(10,-6.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BFBA00").ss(0.3).p("ACvAAQAABIgzA0QgzAzhJAAQhHAAg0gzQgzgzAAhJQAAhIAzgzQA0g0BHAAQBJAAAzA0QAzAzAABIg");
	this.shape_27.setTransform(26.5893,-6.9867,0.3027,0.3027);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BFBA00").ss(0.3).p("ACvAAQAABJgzAzQgzA0hJAAQhHAAg0g0QgzgzAAhJQAAhIAzgzQA0g0BHAAQBJAAAzA0QAzAzAABIg");
	this.shape_28.setTransform(-7.3858,-5.8517,0.3027,0.3027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{skewY:180,x:30.6858}},{t:this.shape_9},{t:this.shape_8,p:{skewY:180,x:-3.2893}},{t:this.shape_7}]},245).to({state:[]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_10,p:{skewY:0,x:-7.3858}},{t:this.shape_28},{t:this.shape_8,p:{skewY:0,x:26.5893}},{t:this.shape_27}]},1).wait(1));

	// Ear
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(6).p("AiwLCQBZhOBXiPQCxkdAAlDQAAjAiCixQgtg9hAhAQhEhAgZgY");
	this.shape_29.setTransform(-10.1751,17.6887,0.3027,0.3027,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(6).p("AiSKRQBVhxBQiYQCjkxgPjIQgKiMg9hwQgvhVhWhTQgngmg3gyIgvgq");
	this.shape_30.setTransform(22.1116,17.4049,0.3027,0.3027,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2).p("AC7DJQgMgcgMgmQghhlAChCQADgvAKgiQAEgMAFgMQAJgRAHgLQAGgJACgDQAEgHAFgHQAEgGAFgHAiFjRQgCAEgHAKQgOAUgFAKQgRAkgGATQgJAlAAAlQABADAAAEQAEBRAWBMQAAABAAACQADAHACAHQASAoAQAZ");
	this.shape_31.setTransform(8.1861,17.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2).p("ACwDLQgGgbgIgnQgVhgABhEQACg1AGgjQAFgVABgDQAGgRAEgLQABgCABgBQADgGABgDQADgGAEgHQADgHADgGAiPjQQgCAEgFAJQgLAVgDAJQgLAkgDASQgGAoABAiQABAIAAACQAEBMAMBMQABADAAACQACAIABAHQANAmAMAa");
	this.shape_32.setTransform(9.3548,17.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2).p("ACnDNQgDgbgCgnQgKhfAAhIQACg1ABgkQACgUABgDQAEgRACgLQAAgCAAgCQACgGABgCQABgHADgGQABgGADgGAiajPQAAAFgEAIQgHAUAAAKQgHAiAAATQgCAnABAiQABAJAAABQAEBKADBOQABAEAAABQABAIABAGQAIAnAHAa");
	this.shape_33.setTransform(10.5199,17.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2).p("ACfDPQACgaADgoQAAhdABhMQABg2gEglQAAgUAAgDQACgQgBgMQAAgCgBgCQACgFgBgDQAAgGACgGQAAgHACgFAiijOQAAAFgCAIQgCATABAKQgBAgACAUQACAmABAjQABAIAAACQAFBIgGBQQAAAEAAACQAAAHAAAHQAEAlACAa");
	this.shape_34.setTransform(11.4681,17.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2).p("ACUDQQAHgZAHgoQALhdABhQQAAg1gHgmQgEgVAAgDQgBgPgDgMQgBgCAAgCQAAgFgBgDQgBgGAAgGQgBgGAAgFAitjNQABAEgBAIQACASADAKQAFAfAEAVQAGAlACAjQAAAJAAABQAFBGgOBSQAAAFgBABQAAAHgBAHQgBAlgDAa");
	this.shape_35.setTransform(12.7239,17.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2).p("ACJDSQAMgZAMgpQAWhbABhVQAAg0gNgoQgGgUgBgDQgDgPgFgMQgBgCgCgDQAAgFgCgCQgCgGgBgGQgDgGAAgFAi4jNQACAFABAGQAGASAFAKQAKAeAHAWQAJAlACAjQABAJAAABQAFBDgXBVQgBAEAAACQgBAHgCAGQgGAlgHAa");
	this.shape_36.setTransform(13.9108,17.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2).p("ACADTQAQgYARgqQAhhaAAhYQgBg1gRgoQgIgVgCgDQgFgOgIgMQgCgDgBgCQgCgEgCgEQgEgFgCgFQgEgHgCgEAjCjMQADAFACAGQAKARAHAKQAQAdAJAWQAMAkADAkQABAIAAACQAFBAggBYQgBAEAAABQgCAHgCAGQgLAkgMAb");
	this.shape_37.setTransform(15.0713,17.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2).p("AB1DUQAVgYAWgqQArhYABhdQgBg0gWgqQgLgUgCgDQgIgOgKgNQgCgCgDgDQgCgEgDgDQgFgGgDgEQgGgGgCgEAjNjMQAEAFAEAGQAOAQAJALQAVAbAMAWQAQAkADAkQABAIAAACQAFA+gpBaQgBAEAAACQgDAGgDAHQgQAjgQAb");
	this.shape_38.setTransform(16.2846,17.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2).p("AiwLCQBZhOBXiPQCxkdAAlDQAAjAiCixQgtg9hAhAQhEhAgZgY");
	this.shape_39.setTransform(33.4751,17.6887,0.3027,0.3027);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2).p("AiOKVQBUhwBRiZQCikxgOjIQgKiLg+hwQguhVhWhUQgogmg2gxIgvgr");
	this.shape_40.setTransform(1.0887,17.2663,0.3027,0.3027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29}]},245).to({state:[]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-16.1,105.9,105.80000000000001);


(lib.Hominid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Head
	this.hominid_head = new lib.HominidHead("single",245);
	this.hominid_head.name = "hominid_head";
	this.hominid_head.setTransform(-12.3,-106.45,1,1,0,0,0,1,38);

	this.timeline.addTween(cjs.Tween.get(this.hominid_head).to({x:-12.1,y:-90.65},10,cjs.Ease.quadInOut).to({x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:19.2575,x:2.8,y:-106.55},10,cjs.Ease.quadInOut).to({regY:38,rotation:6.9676,x:-3.5,y:-106.05},10,cjs.Ease.quadInOut).to({rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({rotation:-14.9992,x:-24,y:-100.05},10,cjs.Ease.quadInOut).to({regX:0.9,regY:37.9,rotation:6.8137,x:-5.55,y:-107.3},10,cjs.Ease.quadInOut).to({regX:1,regY:38,rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:-15.89,x:-23.05,y:-106.05},10,cjs.Ease.quadInOut).to({regX:0.9,scaleX:0.9999,scaleY:0.9999,rotation:10.1463,x:-6.75,y:-106.25},10,cjs.Ease.quadInOut).to({rotation:-18.9843,x:-24,y:-102.95},10,cjs.Ease.quadInOut).to({regX:1,regY:38,scaleX:1,scaleY:1,rotation:0,x:-12.3,y:-106.45},9,cjs.Ease.quadInOut).wait(1));

	// Front_Arm
	this.instance = new lib.Tween37copy("synched",0);
	this.instance.setTransform(-40.3,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-13.8,y:-29.95},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-13.8,y:-40.2},10,cjs.Ease.quadInOut).to({y:-44.5},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:21.1,y:-53.3},10,cjs.Ease.quadInOut).to({x:-34.3,y:-59},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-54,y:-52.2},10,cjs.Ease.quadInOut).to({x:-24.05,y:-40.2},10,cjs.Ease.quadInOut).to({x:-54,y:-58.15},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},9,cjs.Ease.quadInOut).wait(1));

	// Front_Leg
	this.instance_1 = new lib.Tween37copy("synched",0);
	this.instance_1.setTransform(16.3,-7.25,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},119).wait(1));

	// Back_Leg
	this.instance_2 = new lib.Tween37copy("synched",0);
	this.instance_2.setTransform(-19.5,-7.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},119).wait(1));

	// Back_Arm
	this.instance_3 = new lib.Tween37copy("synched",0);
	this.instance_3.setTransform(35.75,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:16.1,y:-29.95},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:56.3,y:-119.7},10,cjs.Ease.quadInOut).to({x:49.05,y:-118.6},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:31.75,y:-60.85},10,cjs.Ease.quadInOut).to({x:30.65,y:-49.6},10,cjs.Ease.quadInOut).to({x:35.75},10,cjs.Ease.quadInOut).to({x:46.05,y:-61.6},10,cjs.Ease.quadInOut).to({x:22.65,y:-40.65},10,cjs.Ease.quadInOut).to({x:29.8,y:-128.25},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-175.4,145.5,178.6);


(lib.FoxHead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fixed_Mirror
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0)").s().p("AiJBpIAAjQIETAAIAADQg");
	this.shape.setTransform(73.625,60.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Cape
	this.fox_cape = new lib.FoxCape();
	this.fox_cape.name = "fox_cape";
	this.fox_cape.setTransform(18.4,87.85,0.2476,0.2476);

	this.timeline.addTween(cjs.Tween.get(this.fox_cape).wait(1));

	// Hat
	this.fox_hat = new lib.FoxHat();
	this.fox_hat.name = "fox_hat";
	this.fox_hat.setTransform(2.15,15.6,0.2476,0.2476);

	this.timeline.addTween(cjs.Tween.get(this.fox_hat).wait(1));

	// Scared
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0.584,0.906,0.957],0,0,0,0,0,8.8).s().p("AgGBYQglgDgXgcQgYgbADgkQADgkAcgYQAbgYAkADQAkADAYAcQAXAbgCAkQgDAkgcAYQgZAVgfAAIgHAAg");
	this.shape_1.setTransform(17.4005,45.1433,0.3127,0.3127,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0.584,0.906,0.957],0,0,0,0,0,8.8).s().p("AgGBYQglgDgXgcQgYgbADgkQADgkAcgYQAbgYAkADQAkADAYAcQAXAbgCAkQgDAkgcAYQgZAVgfAAIgHAAg");
	this.shape_2.setTransform(-3.2495,45.1433,0.3127,0.3127,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AoyAKIAAgTIRlAAIAAATg");
	this.shape_3.setTransform(52.8525,71.287,0.3197,0.3198,0.678);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("AgfFPQkog9ieiUQjHi3Adk3IAAgGIAGABQGIBADrARQFUAZErgoIAIgBIgDAHQhGDUAGCRQAGCcBcCNIAEAHIgIABQhXALiBACIgsABQjoAAi/gogAneB3QCcCSElA8QDQArEBgEQB7gCBUgKQhZiNgGiaQgGiRBEjQQkoAnlRgZQjpgRmGg/QgaEuDCCzg");
	this.shape_4.setTransform(53.2078,70.789,0.3197,0.3198,0.678);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeFLQkng/ieiUQjGi4Aek0QF9BEDxASQFWAZE0guQhIDRAECNQAECiBiCdQhXAKiBABIgbAAQjzAAjHgqg");
	this.shape_5.setTransform(53.2189,70.7737,0.3197,0.3198,0.678);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Base
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhwDyQgvhkAAiOQAAiNAvhkQAuhkBCAAQBCAAAvBkQAvBkAACNQAACOgvBkQgvBkhCAAQhCAAguhkg");
	this.shape_6.setTransform(-1.6857,49.4807,0.3049,0.3047,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhwDyQgvhkAAiOQAAiNAvhkQAuhkBCAAQBCAAAvBkQAvBkAACNQAACOgvBkQgvBkhCAAQhCAAguhkg");
	this.shape_7.setTransform(18.9429,49.4807,0.3049,0.3047,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhSBTQgjgiABgxQgBgvAjgjQAjgiAvgBQAxABAiAiQAjAjAAAvQAAAxgjAiQgiAigxAAQgvAAgjgig");
	this.shape_8.setTransform(84.55,66.65,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BF6121").ss(0.3).p("AonDaILuDcQAlAKAnAAQA7AAA2gXQA0gWAogoQAogoAWg0QAXg2AAg6IAApTIjeE6QgigIgiAAQghAAghAIIjXk6IAAH2g");
	this.shape_9.setTransform(38.2828,44.0465,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF7F27").s().p("ADAGwIrtjbIIhiZIAAn1IDXE5QAhgIAhAAQAiAAAhAIIDek5IAAJSQAAA7gXA2QgWAzgoApQgoAog0AWQg1AWg7AAQgnABgmgLg");
	this.shape_10.setTransform(37.625,44.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-0.6,115.5,90.5);


(lib.Fox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Head
	this.fox_head = new lib.FoxHead("single",0);
	this.fox_head.name = "fox_head";
	this.fox_head.setTransform(-12.3,-106.45,1,1,0,0,0,1,38);

	this.timeline.addTween(cjs.Tween.get(this.fox_head).to({x:-12.1,y:-90.65},10,cjs.Ease.quadInOut).to({x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:19.2575,x:2.8,y:-106.55},10,cjs.Ease.quadInOut).to({regY:38,rotation:6.9676,x:-3.5,y:-106.05},10,cjs.Ease.quadInOut).to({rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({rotation:-14.9983,x:-24,y:-100.05},10,cjs.Ease.quadInOut).to({regX:0.9,regY:37.9,rotation:6.8137,x:-5.55,y:-107.3},10,cjs.Ease.quadInOut).to({regX:1,regY:38,rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:-15.89,x:-23.05,y:-106.05},10,cjs.Ease.quadInOut).to({regX:0.9,scaleX:0.9999,scaleY:0.9999,rotation:10.1463,x:-6.75,y:-106.25},10,cjs.Ease.quadInOut).to({rotation:-18.9843,x:-24,y:-102.95},10,cjs.Ease.quadInOut).to({regX:1,regY:38,scaleX:1,scaleY:1,rotation:0,x:-12.3,y:-106.45},9,cjs.Ease.quadInOut).wait(1));

	// Front_Arm
	this.instance = new lib.Tween37copy2("synched",0);
	this.instance.setTransform(-40.3,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-13.8,y:-29.95},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-13.8,y:-40.2},10,cjs.Ease.quadInOut).to({y:-44.5},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:21.1,y:-53.3},10,cjs.Ease.quadInOut).to({x:-34.3,y:-59},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-54,y:-52.2},10,cjs.Ease.quadInOut).to({x:-24.05,y:-40.2},10,cjs.Ease.quadInOut).to({x:-54,y:-58.15},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},9,cjs.Ease.quadInOut).wait(1));

	// Front_Leg
	this.instance_1 = new lib.Tween37copy2("synched",0);
	this.instance_1.setTransform(16.3,-7.25,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},119).wait(1));

	// Back_Leg
	this.instance_2 = new lib.Tween37copy2("synched",0);
	this.instance_2.setTransform(-19.5,-7.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},119).wait(1));

	// Back_Arm
	this.instance_3 = new lib.Tween37copy2("synched",0);
	this.instance_3.setTransform(35.75,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:16.1,y:-29.95},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:56.3,y:-119.7},10,cjs.Ease.quadInOut).to({x:49.05,y:-118.6},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:31.75,y:-60.85},10,cjs.Ease.quadInOut).to({x:30.65,y:-49.6},10,cjs.Ease.quadInOut).to({x:35.75},10,cjs.Ease.quadInOut).to({x:46.05,y:-61.6},10,cjs.Ease.quadInOut).to({x:22.65,y:-40.65},10,cjs.Ease.quadInOut).to({x:29.8,y:-128.25},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-153.5,152.60000000000002,157);


(lib.Character = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.fox = new lib.Fox();
	this.fox.name = "fox";
	this.fox.setTransform(-14.2,90.45,1.17,1.17);

	this.hominid = new lib.Hominid();
	this.hominid.name = "hominid";
	this.hominid.setTransform(-14.2,90.45,1.17,1.17);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(2,1).p("AK3AAQAACmjLB1QjMB1kgAAQkfAAjMh1QjLh1AAimQAAikDLh2QDMh1EfAAQEgAADMB1QDLB2AACkg");
	this.shape.setTransform(15.55,18.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002020").s().p("AnqEaQjMh0AAimQAAilDMh1QDLh1EfAAQEgAADMB1QDLB1AAClQAACmjLB0QjMB2kgAAQkfAAjLh2g");
	this.shape_1.setTransform(15.55,18.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(5).p("AuDqEIM9JSIPKK3AuDI1IM9pnIMgpS");
	this.shape_2.setTransform(-3.017,-12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fox}]}).to({state:[{t:this.hominid}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-97.4,185,191);


(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.gotoAndStop(10)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20).call(this.frame_30).wait(11));

	// Layer_1
	this.instance = new lib.Tween46();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8709,scaleY:0.8709},10,cjs.Ease.quadInOut).to({scaleX:1.2526,scaleY:1.2526},10,cjs.Ease.quadInOut).to({scaleX:0.8709,scaleY:0.8709},10,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},10,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-34.4,59.7,68.8);


// stage content:
(lib.DressUpWebsite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var CharacterChoosen = 1
		var CharacterHatFox = 0
		var CharacterHatHominid = 0
		var CharacterCapeFox = 0
		var CharacterCapeHominid = 0
		
		
		
		this.next_button.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.character.gotoAndStop(this.character.currentFrame + 1);
		}
		
		this.back_button.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.character.gotoAndStop(this.character.currentFrame - 1);
		}
		
		
		this.addEventListener("tick", fl_AnimateHorizontally.bind(this));
		
		function fl_AnimateHorizontally()
		{
			CharacterChoosen = this.character.currentFrame + 1
			if(CharacterChoosen == 1){
				this.character.fox.fox_head.fox_hat.gotoAndStop(CharacterHatFox)
				this.character.fox.fox_head.fox_cape.gotoAndStop(CharacterCapeFox)
			}
			if(CharacterChoosen == 2){
				this.character.hominid.hominid_head.hominid_hat.gotoAndStop(CharacterHatHominid)
				this.character.hominid.hominid_head.hominid_cape.gotoAndStop(CharacterCapeHominid)
			}
		}
		
		
		this.btnSave.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			localStorage.setItem('CharacterHatFoxThisSaved',JSON.stringify(CharacterHatFox));
			localStorage.setItem('CharacterHatHominidThisSaved',JSON.stringify(CharacterHatHominid));
			localStorage.setItem('CharacterCapeFoxThisSaved',JSON.stringify(CharacterCapeFox));
			localStorage.setItem('CharacterCapeHominidThisSaved',JSON.stringify(CharacterCapeHominid));
		}
		
		CharacterHatFox = JSON.parse(localStorage.getItem("CharacterHatFoxThisSaved"));
		CharacterHatHominid = JSON.parse(localStorage.getItem("CharacterHatHominidThisSaved"));
		CharacterCapeFox = JSON.parse(localStorage.getItem("CharacterCapeFoxThisSaved"));
		CharacterCapeHominid = JSON.parse(localStorage.getItem("CharacterCapeHominidThisSaved"));
		
		this.no_item_button.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			if(CharacterChoosen == 1){
				CharacterHatFox = 0
				CharacterCapeFox = 0
			}
			if(CharacterChoosen == 2){
				CharacterHatHominid = 0
				CharacterCapeHominid = 0
			}
		}
		
		this.crown_hat_button.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			if(CharacterChoosen == 1){
				CharacterHatFox = 1
			}
			if(CharacterChoosen == 2){
				CharacterHatHominid = 1
			}
		}
		
		
		this.top_hat_button.addEventListener("click", fl_MouseClickHandler_5a.bind(this));
		
		function fl_MouseClickHandler_5a()
		{
			if(CharacterChoosen == 1){
				CharacterHatFox = 2
			}
			if(CharacterChoosen == 2){
				CharacterHatHominid = 2
			}
		}
		
		
		this.purple_cape_button.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			if(CharacterChoosen == 1){
				CharacterCapeFox = 1
			}
			if(CharacterChoosen == 2){
				CharacterCapeHominid = 1
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgbBEQgPgKgJgRQgKgRAAgXQAAgYAKgRQAJgRAPgJQAPgJAPAAQAdAAAPASQAPATAAAfIgBAHIAAAGIhiAAQACAXANAOQANAOAUAAQAKAAAJgEQAJgDAIgEIAJAPQgJAHgMAEQgMAEgPAAQgTABgQgJgAAogLQAAgVgJgMQgKgMgRAAQgJAAgJAGQgJAFgGAKQgGAKgCAOIBNAAIAAAAg");
	this.shape.setTransform(260.875,333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("Ag/BpIAAjOIAVAAIACARIABAAQAKgJALgFQAMgGAMAAQATAAANAJQANAJAGARQAHAQAAAXQAAAZgJAQQgJASgOAJQgOAJgRAAQgJAAgKgEQgLgFgKgHIABAZIAAAxgAgShOQgJAEgLAKIAABLQAKAJAJADQAJAEAIAAQARgBALgPQAMgOAAgbQAAgYgIgPQgKgPgUAAQgIABgKAFg");
	this.shape_1.setTransform(245.475,335.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgjBHQgKgEgGgJQgFgKAAgNQgBgYAWgMQAWgMAtgGQAAgJgCgIQgDgJgGgEQgHgGgMAAQgLABgMAEQgLAFgIAFIgKgRQAKgGAPgGQAPgGAQAAQAbAAAMAQQAMAQAAAcIAABYIgUAAIgCgRIgBAAQgLAIgMAGQgLAGgOAAQgMABgJgGgAgFAFQgPAFgGAHQgGAHAAAJQAAAMAHAGQAIAGALAAQAJgBAKgEQAJgFAKgJIAAgoQgYACgNAFg");
	this.shape_2.setTransform(228.8244,333);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgeBaQgTgNgMgWQgLgXAAggQAAgfALgXQAMgWAUgNQATgMAZAAQASAAANAHQAOAHAJAKIgOARQgIgJgKgFQgJgFgNAAQgSAAgOAKQgOAJgHASQgIASAAAYQAAAYAIASQAHASAOAKQANAKASAAQAOAAALgGQALgGAKgKIANAPQgLAOgPAHQgPAIgTAAQgYAAgTgMg");
	this.shape_3.setTransform(213.25,330.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgWA4QgNgHgIgPQgHgOgBgUQABgTAHgOQAIgOANgIQAMgIANAAQAYABAMAPQANAPAAAaIAAAGIgBAFIhRAAQABATALAMQAKALARAAQAJAAAHgCQAIgDAHgEIAGANQgHAFgKAEQgKAEgMAAQgQAAgNgIgAAigJQAAgSgJgKQgHgJgOAAQgIAAgHAEQgIAEgFAJQgFAIgBAMIBAAAIAAAAg");
	this.shape_4.setTransform(259.35,419.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AgKA9Igth5IAWAAIAXBEIAGASIAEASIABAAIAGgSIAFgSIAXhEIAUAAIgqB5g");
	this.shape_5.setTransform(247.2,419.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AgbA4QgNgHgHgOQgIgPAAgUQAAgTAIgOQAHgPANgHQANgIAOAAQAPAAANAIQANAHAHAPQAIAOAAATQAAAUgIAPQgHAOgNAHQgNAIgPAAQgOAAgNgIgAgRgoQgIAGgFALQgEAKAAANQAAAVAKANQAJAMAPABQAQgBAJgMQAKgNAAgVQAAgNgEgKQgFgLgIgGQgHgGgLAAQgJAAgIAGg");
	this.shape_6.setTransform(234.575,419.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AgLBTQgFgGAAgOIAAiZIAUAAIAACaQAAAGABABQABABAAAAQABABAAAAQABAAABAAQAAAAABAAIABAAIADAAIADAPIgFACIgHAAQgKABgGgIg");
	this.shape_7.setTransform(225.125,417.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgaBLQgQgKgKgUQgJgSAAgbQAAgZAKgUQAJgSARgLQARgKAVAAQALAAAJADQAJADAHAFQAHAFAEAEIgLAOQgGgGgJgFQgIgEgNAAQgPgBgMAJQgMAHgHAPQgHAPAAAUQAAAUAHAPQAGAPAMAJQAMAHARABQAJAAAHgDQAIgDAFgEIAAgqIgjAAIAAgRIA2AAIAABEQgIAJgNAEQgNAGgQAAQgVAAgRgKg");
	this.shape_8.setTransform(213.475,417.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AgNBRQgKgMABgXIAAhPIgWAAIAAgTIAWgBIADgpIAVAAIAAApIAnAAIAAAUIgnAAIAABQQgBAOAFAGQAFAIANAAIAIgCIAIgCIAFATIgNADIgOACQgWAAgJgOg");
	this.shape_9.setTransform(178.2,331.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AAiBLIAAhYQAAgVgHgJQgHgJgOAAQgKAAgJAFQgJAGgLALIAABpIgYAAIAAiRIAUAAIACAVIABAAQALgLALgGQAMgHAOgBQAXABAKAOQAMAOAAAcIAABcg");
	this.shape_10.setTransform(164.85,332.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("AgjBHQgKgEgGgJQgFgKAAgNQgBgYAWgMQAWgMAtgGQAAgJgCgIQgDgJgGgEQgHgGgMAAQgLABgMAEQgLAFgIAFIgKgRQAKgGAPgGQAPgGAQAAQAbAAAMAQQAMAQAAAcIAABYIgUAAIgCgRIgBAAQgLAIgMAGQgLAGgOAAQgMABgJgGgAgFAFQgPAFgGAHQgGAHAAAJQAAAMAHAGQAIAGALAAQAJgBAKgEQAJgFAKgJIAAgoQgYACgNAFg");
	this.shape_11.setTransform(148.7244,333);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AhABiIAAjDIA4AAQAWgBAQAGQARAGAJAMQAIANABAVQgBAVgIAOQgKAMgPAHQgRAGgVAAIggAAIAABOgAgnAAIAdAAQAZAAANgJQAMgKAAgVQAAgVgNgIQgNgJgZABIgcAAg");
	this.shape_12.setTransform(133.65,330.4729);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AgbBEQgPgKgJgQQgKgSAAgYQAAgXAKgQQAJgSAPgJQAPgJAPAAQAdAAAPASQAPASAAAgIgBAHIAAAGIhiAAQACAXANAOQANANAUAAQAKAAAJgDQAJgCAIgGIAJAQQgJAGgMAFQgMAFgPAAQgTgBgQgIgAAogKQAAgWgJgMQgKgMgRAAQgJAAgJAFQgJAGgGAKQgGAKgCAPIBNAAIAAAAg");
	this.shape_13.setTransform(179.375,420);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AggBEQgQgKgJgQQgJgRAAgZQAAgXAJgRQAJgRAQgJQAPgKARABQASgBAPAKQAQAJAJARQAJARABAXQgBAZgJARQgJAQgQAKQgPAIgSABQgRgBgPgIgAgVgvQgJAHgGAMQgFAMAAAQQAAAZALAQQAMAPASAAQATAAAMgPQALgQAAgZQAAgQgGgMQgEgMgKgHQgJgIgNAAQgMAAgJAIg");
	this.shape_14.setTransform(163.7,420);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("AAiBrIAAhZQAAgUgHgJQgGgJgPAAQgKAAgJAFQgJAGgLAKIAABqIgZAAIAAjVIAZAAIAAA6IgBAeQALgKAMgGQALgHAOgBQAXABAKAOQALAOAAAbIAABdg");
	this.shape_15.setTransform(147.55,416.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFFF").s().p("AglBeQgRgIgNgNIAPgSQALALAOAHQAOAHAPAAQATAAALgJQALgJgBgOQAAgKgEgGQgEgGgIgFIgQgIIgcgMQgJgDgJgGQgJgHgGgKQgGgJAAgPQAAgPAIgMQAIgLANgHQAOgHASAAQARAAAPAHQAPAGAKALIgMARQgKgJgKgFQgMgFgNAAQgQAAgKAIQgJAHgBAOQAAAJAFAGQAFAGAHAEIAPAHIAbAMQAMAFAJAGQAKAHAEAJQAGAKAAAPQAAAPgIANQgIANgPAHQgPAIgVAAQgTAAgTgIg");
	this.shape_16.setTransform(131.3,417.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("AgOBRQgJgNAAgWIAAhPIgVAAIAAgTIAWgCIAEgoIATAAIAAAoIAnAAIAAAVIgnAAIAABQQAAANAFAIQAFAHANAAIAIgCIAIgCIAFASIgNAFIgOABQgWgBgKgNg");
	this.shape_17.setTransform(95.7,418.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("AgnBLIAAiRIAUAAIACAbIABAAQAIgOAJgIQALgIANgBIAIABIAHACIgFAWIgGgCIgIAAQgJgBgKAIQgJAIgIASIAABdg");
	this.shape_18.setTransform(86.525,420.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFFF").s().p("AgMBoIAAiRIAYAAIAACRgAgLhLQgFgFAAgHQAAgHAFgEQAEgFAHAAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_19.setTransform(76.35,417.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().p("AAiBrIAAhZQAAgUgHgJQgGgJgPAAQgKAAgJAFQgJAGgLAKIAABqIgZAAIAAjVIAZAAIAAA6IAAAeQAKgKALgGQAMgHAOgBQAXABAKAOQALAOAAAbIAABdg");
	this.shape_20.setTransform(64.65,417.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFFF").s().p("AglBeQgRgIgNgNIAPgSQALALAOAHQAOAHAOAAQAUAAALgJQALgJgBgOQAAgKgEgGQgEgGgIgFIgQgIIgcgMQgJgDgJgGQgJgHgGgKQgGgJAAgPQAAgPAIgMQAIgLANgHQAOgHASAAQARAAAPAHQAPAGAKALIgMARQgKgJgLgFQgLgFgNAAQgQAAgKAIQgJAHgBAOQAAAJAFAGQAFAGAHAEIAPAHIAbAMQAMAFAJAGQAKAHAEAJQAGAKAAAPQAAAPgIANQgIANgPAHQgPAIgVAAQgUAAgSgIg");
	this.shape_21.setTransform(48.4,418.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("AgNBSQgKgNABgXIAAhPIgWAAIAAgTIAXgBIACgpIAUAAIAAApIAoAAIAAAUIgoAAIAABQQAAAOAFAGQAGAIAMAAIAIgCIAIgCIAFATIgNADIgOACQgWAAgJgNg");
	this.shape_22.setTransform(88,330.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FFFF").s().p("AgjBHQgKgFgGgIQgFgKAAgNQgBgYAWgMQAWgMAtgGQAAgJgCgIQgDgJgGgEQgHgGgMAAQgLABgMAEQgLAFgIAGIgKgSQAKgHAPgFQAPgGAQAAQAbAAAMAQQAMAQAAAcIAABYIgUAAIgCgRIgBAAQgLAIgMAGQgLAGgOABQgMAAgJgGgAgFAFQgPAFgGAHQgGAHAAAJQAAAMAHAGQAIAGALAAQAJAAAKgFQAJgFAKgJIAAgoQgYACgNAFg");
	this.shape_23.setTransform(74.9244,332.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AAuBiIAAhcIhbAAIAABcIgZAAIAAjDIAZAAIAABSIBbAAIAAhSIAZAAIAADDg");
	this.shape_24.setTransform(57.875,329.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#00FFFF").ss(2,1).p("ABkH0IAAvnAhjH0IAAvn");
	this.shape_25.setTransform(293.95,375.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#00FFFF").ss(5,1).p("AAAMqIAA5T");
	this.shape_26.setTransform(293.95,374.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#00FFFF").ss(5).p("AkxkRQgkhHAAhWQAAiRBnhmQBmhnCQAAQACAAACAAQCPACBlBlQBmBmAACRQAACRhmBnQhnBmiRAAQiQAAhmhmQgqgqgZgxgAnXmuQAABfgsBNQgXAogjAkQgvAug4AaQgtAVg0AGQgXADgZAAQiRAAhmhmQgqgqgZgxQgkhHAAhWQAAiRBnhmQBmhnCRAAQADAAABAAQCPABBlBmQAjAjAXAoQAsBNAABfgAnXGvQAABfgsBNQgXAogjAkQhnBmiRAAQiRAAhmhmQhnhnAAiRQAAiRBnhmQBmhnCRAAQAZAAAXADQA0AGAtAVQA4AaAvAvQAjAjAXAoQAsBNAABfgAFmGvQAABpg2BTQgUAfgcAdQhnBmiRAAQiQAAhmhmQgcgdgVgfQg2hTAAhpQAAiRBnhmQBmhnCQAAQCRAABnBnQBmBmAACRgAH7kRQgkhHAAhWQAAiRBnhmQBmhnCRAAQADAAABAAQCPACBlBlQBnBmAACRQAACRhnBnQhnBmiRAAQiRAAhmhmQgqgqgZgxgASUGvQAABpg3BTQgUAggcAcQhnBmiRAAQiRAAhmhmQgcgcgVggQg2hTAAhpQAAiRBnhmQBmhnCRAAQCRAABnBnQBnBmAACRg");
	this.shape_27.setTransform(154.2,375.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#002020").s().p("AI+KmQgcgcgVgfQg2hTAAhpQABiRBmhnQBmhmCRAAQCSAABmBmQBnBnAACRQgBBpg2BTQgUAfgcAcQhmBniSAAQiRAAhmhngAjuKmQgcgcgUgfQg2hTAAhpQgBiRBnhnQBmhmCRAAQCRAABmBmQBmBnABCRQAABpg2BTQgVAfgcAcQhmBniRAAQiRAAhmhngAwsKmQhmhmAAiRQAAiRBmhnQBmhmCSAAQAYAAAYADQAzAGAuAVQA3AaAvAuQAjAkAYAoQArBNAABfQAABfgrBNQgYAogjAjQhnBniQAAQiSAAhmhngAI+i3QgqgpgZgxQgjhHgBhWQABiRBmhnQBmhmCRAAIAFAAQCOACBlBkQBnBnAACRQAACRhnBmQhmBniSAAQiRAAhmhngAjui3QgpgpgZgxQglhHABhWQgBiRBnhnQBmhmCRAAIADAAQCPACBlBkQBmBnABCRQgBCRhmBmQhmBniRAAQiRAAhmhngAwsi3QgqgpgYgxQgkhHAAhWQAAiRBmhnQBmhmCSAAIADAAQCPABBlBlQAjAkAYAoQArBNAABfQAABfgrBNQgYAogjAjQgvAvg3AaQguAVgzAGQgYADgYAAQiSAAhmhng");
	this.shape_28.setTransform(154.2,375.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.btnSave = new lib.Symbol2();
	this.btnSave.name = "btnSave";
	this.btnSave.setTransform(1148.95,68.6,1.2285,1.2326,0,0,0,33,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#00FFFF").ss(5,1).p("EA5rAAAIlaJYIq0AAIlbpYIFbpXIK0AAgAKiAAIlaJYIqzAAIlbpYIFbpXIKzAAgEAiBAAAIlaJYIq1AAIlapYIFapXIK1AAgEgkBAAAIlaJYIq1AAIlapYIFapXIK1AAgAswAAIlaJYIq1AAIlapYIFapXIK1AAg");
	this.shape_29.setTransform(740.9745,374.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00FFFF").ss(5,1,1).p("EhXqgNaMCvVAAAQC0AAAAC0IAAZRQAAC0i0AAMivVAAAQi0AAAAi0IAA5RQAAi0C0AAgEggBgReMA+fAAA");
	this.shape_30.setTransform(602.05,364);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00FFFF").ss(6,1,1).p("Egu3AAAMBdvAAA");
	this.shape_31.setTransform(598.4,233.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#00FFFF").ss(7,1,1).p("Eg/RAAAMB+iAAA");
	this.shape_32.setTransform(594.2,213.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.btnSave}]}).wait(1));

	// Layer_4
	this.purple_cape_button = new lib.PurpleCapeButton();
	this.purple_cape_button.name = "purple_cape_button";
	this.purple_cape_button.setTransform(889.35,374.9);
	new cjs.ButtonHelper(this.purple_cape_button, 0, 1, 1);

	this.top_hat_button = new lib.TopHatButton();
	this.top_hat_button.name = "top_hat_button";
	this.top_hat_button.setTransform(739.15,374.9);
	new cjs.ButtonHelper(this.top_hat_button, 0, 1, 1);

	this.crown_hat_button = new lib.CrownHatButton();
	this.crown_hat_button.name = "crown_hat_button";
	this.crown_hat_button.setTransform(590.05,374.9);
	new cjs.ButtonHelper(this.crown_hat_button, 0, 1, 1);

	this.no_item_button = new lib.NoItemButton();
	this.no_item_button.name = "no_item_button";
	this.no_item_button.setTransform(441.1,374.9);
	new cjs.ButtonHelper(this.no_item_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.no_item_button},{t:this.crown_hat_button},{t:this.top_hat_button},{t:this.purple_cape_button}]}).wait(1));

	// Layer_1
	this.instance = new lib.ButtonInvisible();
	this.instance.setTransform(1149.35,374.95,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ButtonInvisible();
	this.instance_1.setTransform(332.2,374.95);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.character = new lib.Character();
	this.character.name = "character";
	this.character.setTransform(618.45,114.55,1,1,0,0,0,-0.1,-2.1);

	this.back_button = new lib.Button();
	this.back_button.name = "back_button";
	this.back_button.setTransform(107.45,205.1,1.6106,1.6159,0,0,180,0.2,0.3);

	this.next_button = new lib.Button();
	this.next_button.name = "next_button";
	this.next_button.setTransform(1086.35,205.1,1.6106,1.6159,0,0,0,0.2,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#002020").s().p("EApdAJYIlbpYIFbpXIK0AAIFaJXIlaJYgARyJYIlapYIFapXIK1AAIFaJXIlaJYgAlrJYIlbpYIFbpXIKzAAIFaJXIlaJYgA8/JYIlapYIFapXIK1AAIFaJXIlaJYgEg0QAJYIlapYIFapXIK1AAIFaJXIlaJYg");
	this.shape_33.setTransform(740.975,374.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.next_button},{t:this.back_button},{t:this.character},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(618.5,270.8,568.8,207.59999999999997);
// library properties:
lib.properties = {
	id: '08D0ED99E0589B479ED6C1B04DD36830',
	width: 1200,
	height: 500,
	fps: 30,
	color: "#002020",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['08D0ED99E0589B479ED6C1B04DD36830'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;