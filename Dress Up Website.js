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
	this.shape_6.graphics.f("#002020").s().p("AlZJYIlbpYIFbpXIKzAAIFbJXIlbJYg");
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


(lib.ShoeButtonGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFFF").s().p("AgbBEQgPgKgJgQQgKgSAAgYQAAgXAKgQQAJgSAPgJQAPgJAPAAQAdAAAPASQAPASAAAgIgBAHIAAAGIhiAAQACAXANAOQANANAUAAQAKAAAJgDQAJgDAIgFIAJARQgJAFgMAFQgMAFgPAAQgTgBgQgIgAAogKQAAgXgJgLQgKgMgRAAQgJAAgJAFQgJAGgGAKQgGAKgCAPIBNAAIAAAAg");
	this.shape.setTransform(24.375,1.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AghBEQgPgKgJgQQgJgSAAgYQAAgXAJgRQAJgRAPgJQAQgKARABQASgBAPAKQAPAJAKARQAJARABAXQgBAYgJASQgKAQgPAKQgPAIgSABQgRgBgQgIgAgVgvQgJAGgGANQgFANAAAPQAAAaAMAPQALAPASAAQATAAAMgPQAKgPABgaQAAgPgGgNQgEgNgKgGQgKgIgMAAQgMAAgJAIg");
	this.shape_1.setTransform(8.7,1.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AAhBrIAAhZQABgUgHgJQgGgJgPAAQgKAAgJAFQgJAGgLAKIAABqIgZAAIAAjVIAZAAIAAA6IAAAeQAJgKAMgGQAMgHAOgBQAXABAKAOQAMAOgBAbIAABdg");
	this.shape_2.setTransform(-7.45,-1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AglBeQgRgIgNgNIAPgSQALALAOAHQAOAHAOAAQAUAAALgJQAKgJABgOQgBgKgEgGQgEgGgIgFIgQgIIgcgMQgJgDgJgGQgJgHgGgKQgGgJAAgPQAAgPAIgMQAIgLANgHQAOgHASAAQARAAAPAHQAPAGAKALIgMARQgKgJgLgFQgLgFgNAAQgQAAgKAIQgKAHAAAOQAAAJAFAGQAFAGAHAEIAPAHIAbAMQAMAFAJAGQAKAHAEAJQAGAKAAAPQAAAPgIANQgIANgPAHQgPAIgVAAQgUAAgSgIg");
	this.shape_3.setTransform(-23.7,-0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FFFF").ss(5).p("AFeAAQAABpg2BTQgUAggcAcQhnBmiRAAQiQAAhmhmQgdgcgUggQg2hTAAhpQAAiQBnhnQBmhmCQAAQCRAABnBmQBmBnAACQg");
	this.shape_4.setTransform(0.05,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002020").s().p("Aj2D4QgdgdgUgfQg2hTAAhpQAAiQBnhnQBmhmCQAAQCRAABnBmQBmBnAACQQAABpg2BTQgUAfgcAdQhnBmiRAAQiQAAhmhmg");
	this.shape_5.setTransform(0.05,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-37.5,104,75);


(lib.ShirtButtonGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFFF").s().p("AgNBRQgKgNABgWIAAhPIgWAAIAAgTIAWgCIADgoIAVAAIAAAoIAnAAIAAAVIgnAAIAABQQgBANAFAIQAFAHANAAIAIgCIAIgCIAFASIgNAFIgOABQgWgBgJgNg");
	this.shape.setTransform(25.2,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgnBLIAAiRIAUAAIACAbIABAAQAIgOAJgIQALgIANgBIAIABIAHACIgFAWIgGgCIgIAAQgJgBgKAIQgJAIgIASIAABdg");
	this.shape_1.setTransform(16.025,2.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgMBoIAAiRIAYAAIAACRgAgLhLQgFgFAAgHQAAgHAFgEQAEgFAHAAQAIAAAEAFQAFAEAAAHQAAAHgFAFQgEAEgIAAQgHAAgEgEg");
	this.shape_2.setTransform(5.85,-0.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AAhBrIAAhZQABgUgHgJQgGgJgPAAQgKAAgJAFQgJAGgLAKIAABqIgZAAIAAjVIAZAAIAAA6IAAAeQAJgKAMgGQAMgHAOgBQAXABALAOQALAOAAAbIAABdg");
	this.shape_3.setTransform(-5.85,-0.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgkBeQgSgIgNgNIAPgSQALALAOAHQAOAHAOAAQAUAAAKgJQAMgJAAgOQAAgKgFgGQgEgGgHgFIgRgIIgbgMQgKgDgJgGQgJgHgGgKQgGgJAAgPQAAgPAIgMQAHgLAPgHQAOgHAQAAQASAAAPAHQAPAGALALIgOARQgIgJgMgFQgLgFgOAAQgPAAgKAIQgKAHAAAOQAAAJAFAGQAFAGAHAEIAPAHIAbAMQAMAFAJAGQAJAHAGAJQAFAKAAAPQAAAPgIANQgIANgPAHQgPAIgVAAQgUAAgRgIg");
	this.shape_4.setTransform(-22.1,-0.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FFFF").ss(5).p("AFeAAQAABfgsBNQgXAogjAkQhnBmiRAAQiQAAhmhmQhnhnAAiRQAAiQBnhnQBmhmCQAAQAZAAAXADQA0AGAtAVQA4AZAvAvQAjAkAXAoQAsBNAABeg");
	this.shape_5.setTransform(1.55,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002020").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQAZAAAXADQAzAGAuAVQA3AaAvAuQAkAkAXAoQAsBNAABeQAABfgsBNQgXAogkAkQhmBmiRAAQiQAAhnhmg");
	this.shape_6.setTransform(1.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-37.5,104,77.6);


(lib.RedCapeButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#258C25").ss(3).p("AAKktIA1CvQADAJAFABIB1AcQAHACADAMQABALgFAJIhUCHQgFAIACAJIATDAQACAMgGAHQgGAHgHgFIhohbQgFgEgFAEIhoBbQgGAFgGgHQgGgHABgMIAUjAQABgLgFgGIhUiHQgFgJACgLQADgMAHgCIB0gcQAGgBADgJIA0ivQADgLAHAAQAHAAADALg");
	this.shape.setTransform(-14.4102,-10.4603,0.2835,0.2835);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2DB22D").s().p("ABtE3IhnhbQgGgEgFAEIhnBbQgHAFgGgHQgGgHABgMIAUjAQABgLgEgGIhViHQgEgJABgLQADgMAHgCIB0gcQAGgBADgJIA1ivQACgLAHAAQAHAAADALIA1CvQADAJAFABIB1AcQAHACADAMQABALgEAJIhVCHQgFAIACAJIATDAQACAMgGAHQgDAEgEAAQgDAAgDgCg");
	this.shape_1.setTransform(-14.4102,-10.4603,0.2835,0.2835);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9B6D2C").ss(3).p("AEvAAQAACbhZBtQhZBuh9AAQh9AAhZhuQhYhtAAibQAAiaBYhtQBZhtB9AAQB9AABZBtQBZBtAACag");
	this.shape_2.setTransform(-14.2047,-9.6583,0.2835,0.2835);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C29A4C").s().p("AjWEIQhYhtAAibQAAiaBYhtQBZhtB9gBQB9ABBZBtQBZBtAACaQAACbhZBtQhZBth9ABQh9gBhZhtg");
	this.shape_3.setTransform(-14.2047,-9.6583,0.2835,0.2835);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#992626").ss(3).p("AE6CpQl0AnkmiXQgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIg");
	this.shape_4.setTransform(-27.3985,-11.7172,0.2835,0.2835);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B52C2C").s().p("AlgA5QgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIQhNAIhJAAQkaAAjqh4g");
	this.shape_5.setTransform(-27.3985,-11.7172,0.2835,0.2835);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#992626").ss(3).p("AriEoQLVhUMhkSQApgKAYgiQAYgjgGgpIgCgVQgHgwgogcQgogcgwAMQs5E3q6BEQglAJgXAeQgXAdAAAmQAAA1AqAgQApAhAzgMg");
	this.shape_6.setTransform(12.0684,-16.1887,0.2835,0.2835);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B52C2C").s().p("As+ETQgqggAAg1QAAgmAXgdQAXgeAlgJQK6hEM5k3QAwgMAoAcQAoAcAHAwIACAVQAGApgYAjQgYAigpAKQshESrVBUQgOADgNAAQgjAAgegYg");
	this.shape_7.setTransform(12.0684,-16.1887,0.2835,0.2835);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#992626").ss(3).p("ADAQrQhtiWhlDUQgOAeghAAQghgBgMgeQhnj0hvClQgVAfgkgKQgjgLAAglQCZomAMnFQANnkiQoBQgDgNE1hUQCZgrCcgoQAVAAAOAPQAPAPAAAUQCJIagDInQgEIGiCIbQAAAlgjALQgiALgWgeg");
	this.shape_8.setTransform(23.3239,13.3613,0.2835,0.2835);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B52C2C").s().p("AhuRnQhnjzhvClQgVAfgkgKQgjgLAAgmQCZolAMnEQANnliQoBQgDgNE1hVQCZgqCcgoQAVAAAOAPQAPAPAAAVQCJIZgDInQgEIGiCIbQAAAlgjAKQgiALgWgdQhtiWhlDUQgOAdghAAQghAAgMgfg");
	this.shape_9.setTransform(23.3239,13.3613,0.2835,0.2835);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002020").s().p("AlZJYIlbpYIFbpXIKzAAIFbJXIlbJYg");
	this.shape_10.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-60,138.5,120.1);


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
	this.shape_10.graphics.f("#002020").s().p("AlZJYIlbpYIFbpXIKzAAIFbJXIlbJYg");
	this.shape_10.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-60,138.5,120.1);


(lib.PantButtonGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFFF").s().p("AgOBSQgJgOAAgVIAAhQIgVAAIAAgTIAWgBIADgpIAVAAIAAApIAmAAIAAAUIgmAAIAABQQgBAOAFAGQAFAIANAAIAIgBIAIgDIAFATIgNAEIgOABQgWAAgKgNg");
	this.shape.setTransform(24.4,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AAhBLIAAhYQABgVgHgJQgGgJgPAAQgKAAgJAFQgJAGgLALIAABpIgYAAIAAiRIAUAAIACAVIABAAQAKgLAMgGQAMgHAOgBQAXABALAOQAKAOABAcIAABcg");
	this.shape_1.setTransform(11.05,0.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgjBHQgKgFgGgIQgFgKAAgNQgBgXAWgNQAWgNAtgFQAAgJgCgIQgDgJgGgEQgHgGgMAAQgLAAgMAFQgLAEgIAHIgKgRQAKgIAPgFQAPgGAQAAQAbAAAMAQQAMAQAAAbIAABZIgUAAIgCgSIgBAAQgLAKgMAFQgLAGgOABQgMgBgJgFgAgFAFQgPAFgGAHQgGAHAAAKQAAAMAHAFQAIAGALgBQAJABAKgFQAJgFAKgKIAAgnQgYACgNAFg");
	this.shape_2.setTransform(-5.0756,1.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AhABiIAAjDIA4AAQAWgBAQAGQARAGAJAMQAIANABAVQgBAVgIAOQgKAMgQAHQgQAGgVAAIggAAIAABOgAgnAAIAdAAQAZAAANgJQAMgKAAgVQAAgVgNgIQgNgJgZABIgcAAg");
	this.shape_3.setTransform(-20.15,-1.4771);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FFFF").ss(5).p("Ak5CdQgkhHAAhWQAAiQBmhnQBnhmCQAAQACAAACAAQCPABBlBlQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmQgpgqgZgxg");
	this.shape_4.setTransform(1.25,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002020").s().p("Aj2D4QgqgqgZgxQgkhHAAhWQAAiQBnhnQBmhmCQAAIAEAAQCOACBmBkQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhmhmg");
	this.shape_5.setTransform(1.25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-37.5,104,76.6);


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


(lib.HatButtonGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFFF").s().p("AgOBSQgJgOAAgVIAAhQIgVAAIAAgTIAWgCIAEgoIATAAIAAAoIAnAAIAAAVIgnAAIAABQQAAANAFAIQAGAHAMAAIAIgBIAIgDIAFASIgNAFIgOABQgWAAgKgNg");
	this.shape.setTransform(17.5,-1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgjBIQgKgFgGgKQgFgJAAgNQgBgXAWgMQAWgOAtgEQAAgKgCgIQgDgIgGgGQgHgFgMAAQgLABgMAEQgLAEgIAHIgKgRQAKgIAPgFQAPgGAQAAQAbAAAMAQQAMAQAAAbIAABZIgUAAIgCgSIgBAAQgLAJgMAHQgLAFgOABQgMgBgJgEgAgFAFQgPAFgGAHQgGAHAAAKQAAAMAHAFQAIAGALgBQAJABAKgFQAJgFAKgKIAAgnQgYACgNAFg");
	this.shape_1.setTransform(4.4244,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AAuBiIAAhcIhbAAIAABcIgZAAIAAjDIAZAAIAABSIBbAAIAAhSIAZAAIAADDg");
	this.shape_2.setTransform(-12.625,-2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(5).p("AFeAAQAABfgsBNQgXAogjAkQgvAvg4AZQgtAVg0AGQgXADgZAAQiQAAhmhmQgqgqgZgxQgkhHAAhWQAAiQBnhnQBmhmCQAAQACAAACAAQCPABBlBlQAjAkAXAoQAsBNAABeg");
	this.shape_3.setTransform(1.55,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002020").s().p("Aj3D4QgpgqgZgxQgkhHAAhWQAAiQBmhnQBnhmCQAAIAEAAQCPACBkBkQAkAkAXAoQAsBNAABeQAABfgsBNQgXAogkAkQgvAug3AaQguAUgzAHQgXADgZAAQiQAAhnhmg");
	this.shape_4.setTransform(1.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-37.5,104,77.6);


(lib.GloveButtonGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFFF").s().p("AgWA4QgNgHgIgPQgHgOAAgUQAAgTAHgOQAIgOANgIQAMgIANAAQAYABAMAPQAMAPAAAaIAAAGIAAAFIhRAAQABATALAMQAKALARAAQAJAAAHgCQAIgDAHgEIAGANQgHAFgKAEQgKAEgMAAQgQAAgNgIgAAigJQAAgSgJgKQgHgJgOAAQgIAAgHAEQgIAEgFAJQgFAIgBAMIBAAAIAAAAg");
	this.shape.setTransform(23.65,1.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgLA9Igsh5IAWAAIAWBEIAHASIAEASIABAAIAFgSIAGgSIAXhEIAUAAIgqB5g");
	this.shape_1.setTransform(11.5,1.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgbA4QgNgHgHgOQgIgPAAgUQAAgTAIgOQAHgPANgHQANgIAOAAQAPAAANAIQANAHAHAPQAIAOAAATQAAAUgIAPQgHAOgNAHQgNAIgPAAQgOAAgNgIgAgRgoQgIAGgFALQgEAKAAANQAAAVAKANQAJAMAPABQAQgBAJgMQAKgNAAgVQAAgNgEgKQgFgLgIgGQgHgGgLAAQgJAAgIAGg");
	this.shape_2.setTransform(-1.125,1.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgLBTQgFgGAAgOIAAiZIAUAAIAACaQAAAGABABQABABAAAAQABABAAAAQABAAABAAQAAAAABAAIABAAIADAAIADAQIgFABIgHAAQgKABgGgIg");
	this.shape_3.setTransform(-10.575,-0.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgaBLQgQgKgKgUQgJgSAAgbQAAgZAKgUQAJgSARgKQARgLAVAAQALAAAJADQAJADAHAFQAHAFAEAEIgLAOQgGgGgJgFQgIgFgNABQgPgBgMAJQgMAHgHAPQgHAPAAAUQAAAUAHAPQAGAPAMAJQAMAHARABQAJAAAHgDQAIgCAFgFIAAgqIgjAAIAAgRIA2AAIAABEQgIAJgNAFQgNAFgQAAQgVAAgRgKg");
	this.shape_4.setTransform(-22.225,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FFFF").ss(5).p("AFeAAQAABpg2BTQgUAggcAcQhnBmiRAAQiQAAhmhmQgcgcgVggQg2hTAAhpQAAiQBnhnQBmhmCQAAQCRAABnBmQBmBnAACQg");
	this.shape_5.setTransform(0.65,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002020").s().p("Aj3D4QgbgdgVgfQg2hTAAhpQAAiQBmhnQBnhmCQAAQCRAABmBmQBnBnAACQQAABpg2BTQgUAfgdAdQhmBmiRAAQiQAAhnhmg");
	this.shape_6.setTransform(0.65,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-37.5,104,75);


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
p.nominalBounds = new cjs.Rectangle(-121.8,-131.1,302.8,218.1);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(3).p("AAKktIA1CvQADAJAFABIB1AcQAHACADAMQABALgFAJIhUCHQgFAIACAJIATDAQACAMgGAHQgGAHgHgFIhohbQgFgEgFAEIhoBbQgGAFgGgHQgGgHABgMIAUjAQABgLgFgGIhUiHQgFgJACgLQADgMAHgCIB0gcQAGgBADgJIA0ivQADgLAHAAQAHAAADALg");
	this.shape.setTransform(-4.676,-9.4393,0.7157,0.7157,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("ABtE3IhnhbQgGgEgFAEIhnBbQgHAFgGgHQgGgHABgMIAUjAQABgLgEgGIhViHQgEgJABgLQADgMAHgCIB0gcQAGgBADgJIA1ivQACgLAHAAQAHAAADALIA1CvQADAJAFABIB1AcQAHACADAMQABALgEAJIhVCHQgFAIACAJIATDAQACAMgGAHQgDAEgEAAQgDAAgDgCg");
	this.shape_1.setTransform(-4.676,-9.4393,0.7157,0.7157,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9B6D2C").ss(3).p("AEvAAQAACbhZBtQhZBuh9AAQh9AAhZhuQhYhtAAibQAAiaBYhtQBZhtB9AAQB9AABZBtQBZBtAACag");
	this.shape_2.setTransform(-5.1949,-7.4147,0.7157,0.7157,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C29A4C").s().p("AjWEIQhYhtAAibQAAiaBYhtQBZhtB9gBQB9ABBZBtQBZBtAACaQAACbhZBtQhZBth9ABQh9gBhZhtg");
	this.shape_3.setTransform(-5.1949,-7.4147,0.7157,0.7157,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5400A8").ss(3).p("AE6CpQl0AnkmiXQgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIg");
	this.shape_4.setTransform(28.1116,-12.6121,0.7157,0.7157,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8000FF").s().p("AlgA5QgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIQhNAIhJAAQkaAAjqh4g");
	this.shape_5.setTransform(28.1116,-12.6121,0.7157,0.7157,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5400A8").ss(3).p("AriEoQLVhUMhkSQApgKAYgiQAYgjgGgpIgCgVQgHgwgogcQgogcgwAMQs5E3q6BEQglAJgXAeQgXAdAAAmQAAA1AqAgQApAhAzgMg");
	this.shape_6.setTransform(-71.5189,-23.9002,0.7157,0.7157,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8000FF").s().p("As+ETQgqggAAg1QAAgmAXgdQAXgeAlgJQK6hEM5k3QAwgMAoAcQAoAcAHAwIACAVQAGApgYAjQgYAigpAKQshESrVBUQgOADgNAAQgjAAgegYg");
	this.shape_7.setTransform(-71.5189,-23.9002,0.7157,0.7157,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5400A8").ss(3).p("ADAQrQhtiWhlDUQgOAeghAAQghgBgMgeQhnj0hvClQgVAfgkgKQgjgLAAglQCZomAMnFQANnkiQoBQgDgNE1hUQCZgrCcgoQAVAAAOAPQAPAPAAAUQCJIagDInQgEIGiCIbQAAAlgjALQgiALgWgeg");
	this.shape_8.setTransform(-99.9325,50.6963,0.7157,0.7157,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8000FF").s().p("AhuRnQhnjzhvClQgVAfgkgKQgjgLAAgmQCZolAMnEQANnliQoBQgDgNE1hVQCZgqCcgoQAVAAAOAPQAPAPAAAVQCJIZgDInQgEIGiCIbQAAAlgjAKQgiALgWgdQhtiWhlDUQgOAdghAAQghAAgMgfg");
	this.shape_9.setTransform(-99.9325,50.6963,0.7157,0.7157,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#258C25").ss(3).p("AAKktIA1CvQADAJAFABIB1AcQAHACADAMQABALgFAJIhUCHQgFAIACAJIATDAQACAMgGAHQgGAHgHgFIhohbQgFgEgFAEIhoBbQgGAFgGgHQgGgHABgMIAUjAQABgLgFgGIhUiHQgFgJACgLQADgMAHgCIB0gcQAGgBADgJIA0ivQADgLAHAAQAHAAADALg");
	this.shape_10.setTransform(-4.2268,-10.0499,0.7158,0.7158,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2DB22D").s().p("ABtE3IhnhbQgGgEgFAEIhnBbQgHAFgGgHQgGgHABgMIAUjAQABgLgEgGIhViHQgEgJABgLQADgMAHgCIB0gcQAGgBADgJIA1ivQACgLAHAAQAHAAADALIA1CvQADAJAFABIB1AcQAHACADAMQABALgEAJIhVCHQgFAIACAJIATDAQACAMgGAHQgDAEgEAAQgDAAgDgCg");
	this.shape_11.setTransform(-4.2268,-10.0499,0.7158,0.7158,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#992626").ss(3).p("AE6CpQl0AnkmiXQgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIg");
	this.shape_12.setTransform(28.5679,-13.2233,0.7158,0.7158,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B52C2C").s().p("AlgA5QgvgIgcgoQgdgmAIgwQAJgwAngcQAogdAvAIQCKBNCvAbQCcAYDFgPQAwAIAcAnQAcAngIAwQgIAwgoAcQgnAcgwgIQhNAIhJAAQkaAAjqh4g");
	this.shape_13.setTransform(28.5679,-13.2233,0.7158,0.7158,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#992626").ss(3).p("AriEoQLVhUMhkSQApgKAYgiQAYgjgGgpIgCgVQgHgwgogcQgogcgwAMQs5E3q6BEQglAJgXAeQgXAdAAAmQAAA1AqAgQApAhAzgMg");
	this.shape_14.setTransform(-71.0839,-24.5139,0.7158,0.7158,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B52C2C").s().p("As+ETQgqggAAg1QAAgmAXgdQAXgeAlgJQK6hEM5k3QAwgMAoAcQAoAcAHAwIACAVQAGApgYAjQgYAigpAKQshESrVBUQgOADgNAAQgjAAgegYg");
	this.shape_15.setTransform(-71.0839,-24.5139,0.7158,0.7158,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#992626").ss(3).p("ADAQrQhtiWhlDUQgOAeghAAQghgBgMgeQhnj0hvClQgVAfgkgKQgjgLAAglQCZomAMnFQANnkiQoBQgDgNE1hUQCZgrCcgoQAVAAAOAPQAPAPAAAUQCJIagDInQgEIGiCIbQAAAlgjALQgiALgWgeg");
	this.shape_16.setTransform(-99.5035,50.0985,0.7158,0.7158,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B52C2C").s().p("AhuRnQhnjzhvClQgVAfgkgKQgjgLAAgmQCZolAMnEQANnliQoBQgDgNE1hVQCZgqCcgoQAVAAAOAPQAPAPAAAVQCJIZgDInQgEIGiCIbQAAAlgjAKQgiALgWgdQhtiWhlDUQgOAdghAAQghAAgMgfg");
	this.shape_17.setTransform(-99.5035,50.0985,0.7158,0.7158,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleX:0.7157,scaleY:0.7157,x:-5.1949,y:-7.4147}},{t:this.shape_2,p:{scaleX:0.7157,scaleY:0.7157,x:-5.1949,y:-7.4147}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{scaleX:0.7158,scaleY:0.7158,x:-4.7457,y:-8.0249}},{t:this.shape_2,p:{scaleX:0.7158,scaleY:0.7158,x:-4.7457,y:-8.0249}},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-47.4,206.3,181.9);


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
	this.shape.setTransform(-7.0254,-21.3604,0.3295,0.3295,-15.6928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9B6D2C").ss(3).p("A22p9QgFAtAfAhQAeAhAsAAQAMgCABAAIDGIFQDTIxA8DdQAMAqAiAbQAjAbArAAQLdASMEhAQApgDAggbQAfgaALgoQAriaAuh2QCemJDxpqIANAAQAsAAAeghQAdgigFgtQgEgigZgZQgagZgigDQgtgFghAfQghAeABAsQAAAXAKAVQAKAUARANQiUE5giA9QiBDkhhAOQh9AThPiGQg2hcgaiZQAmgEAZgdQAagdgDgnQgCglgbgaQgbgZglgBQgpgBgcAcQgdAdABAoQAAAeASAZQARAXAbAKQgzCXg7BfQhWCJhYgKQhIgIhDhjQhRh6gCibIgDj2QAAgXAQgQQAQgRAXAAIADAAQAZAAARgUQASgTgEgaQgDgWgRgOQgSgPgWABIg4AAIAAg4QgBgZgTgRQgUgRgZADQgVADgPASQgOARAAAWIABA2Ig6AAQgeABgRAZQgRAZAMAeQAGARAQAJQAPAJATAAQAXgBAQAQQARARAAAXIADD1QABCbhOB8QhABlhJAKQhXAMhZiIQg9hdg3iWQAcgLARgZQARgagCgfQgCglgbgbQgbgaglgBQgpAAgcAcQgdAdABAoQAAAlAaAbQAZAbAlACQgWCag0BeQhLCIh/gQQhngNiGjeQg1hXiJkZQATgOALgVQALgWAAgZQgBgsghgdQghgegtAFQgjAEgYAaQgZAZgDAigAhjHFIhphKQgIgGADgJQADgJAJAAICBgBQAKgBADgJIAmh7QADgJAJAAQAJAAADAJIApB6QADAJAKAAICBgBQAJgBADAKQADAJgHAFIhoBNQgHAGACAJIAqB6QADAJgIAGQgHAFgIgFIhphLQgHgFgIAFIhnBNQgIAGgIgFQgHgGACgJIAnh7QADgJgIgGgAJAGAIBaiSQAHgMAOAAQAOAAAHAMIBdCQQAIAOgHANIhaCSQgHAMgOAAQgOAAgIgMIhdiQQgIgNAIgOgArdGhIBZiSQAHgMAOAAQAOgBAIAMIBdCQQAIAOgIANIhZCSQgIAMgOAAQgOAAgHgLIhdiQQgIgOAIgNg");
	this.shape_1.setTransform(-0.0513,1.2928,0.3295,0.3295,-15.6928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8000FF").s().p("Ah8DEQgHgGACgJIAnh7QADgJgIgGIhphJQgIgGADgJQADgJAJAAICBgBQAKgBADgJIAmh7QADgJAJAAQAJAAADAJIApB6QADAJAKAAICBgBQAJgBADAKQADAJgHAFIhoBMQgHAGACAJIAqB6QADAJgIAGQgHAFgIgFIhphLQgIgFgHAFIhnBNQgEADgEAAQgEAAgEgCg");
	this.shape_2.setTransform(3.4823,14.3417,0.3295,0.3295,-15.6928);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C29A4C").s().p("Ar0NjQgrAAgjgbQgigbgMgqQg8jdjToxIjGoFIgNACQgsAAgeghQgfghAFgtQADgiAZgZQAYgaAjgEQAtgFAhAeQAhAdABAsQAAAZgLAWQgLAVgTAOQCJEZA1BXQCGDeBnANQB/AQBLiIQA0heAWiaQglgCgZgbQgagbAAglQgBgoAdgdQAcgcApAAQAlABAbAaQAbAbACAlQACAfgRAaQgRAZgcALQA3CWA9BdQBZCIBXgMQBJgKBAhlQBOh8gBibIgDj1QAAgXgRgRQgQgQgXABQgTAAgPgJQgQgJgGgRQgMgeARgZQARgZAegBIA6AAIgBg2QAAgWAOgRQAPgSAVgDQAZgDAUARQATARABAZIAAA4IA4AAQAWgBASAPQARAOADAWQAEAagSATQgRAUgZAAIgDAAQgXAAgQARQgQAQAAAXIADD2QACCbBRB6QBDBjBIAIQBYAKBWiJQA7hfAziXQgbgKgRgXQgSgZAAgeQgBgoAdgdQAcgcApABQAlABAbAZQAbAaACAlQADAngaAdQgZAdgmAEQAaCZA2BcQBPCGB9gTQBhgOCBjkQAig9CUk5QgRgNgKgUQgKgVAAgXQgBgsAhgeQAhgfAtAFQAiADAaAZQAZAZAEAiQAFAtgdAiQgeAhgsAAIgNAAQjxJqieGJQguB2grCaQgLAogfAaQggAbgpADQpbAypCAAQijAAihgEgAgFDUQgJAAgDAJIgmB7QgDAJgKABIiBABQgJAAgDAJQgDAJAIAGIBpBKQAIAGgDAJIgnB7QgCAJAHAGQAIAFAIgGIBnhNQAIgFAHAFIBpBLQAIAFAHgFQAIgGgDgJIgqh6QgCgJAHgGIBohNQAHgFgDgJQgDgKgJABIiBABQgKAAgDgJIgph6QgDgJgIAAIgBAAgApvEDQgOAAgHAMIhZCSQgIANAIAOIBdCQQAHALAOAAQAOAAAIgMIBZiSQAIgNgIgOIhdiQQgHgLgOAAIgBAAgAKaDuIhaCSQgIAOAIANIBdCQQAIAMAOAAQAOAAAHgMIBaiSQAHgNgIgOIhdiQQgHgMgOAAQgOAAgHAMg");
	this.shape_3.setTransform(-0.0513,1.2928,0.3295,0.3295,-15.6928);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B52C2C").s().p("AAFEHQiYgziMigIgLlKIBpAPQBxAIAugfIB4ANIB0AoIBhHzQhKAVhHAAQhMAAhJgYg");
	this.shape_4.setTransform(2.8729,14.6422,0.3295,0.3295,-15.6928);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("At4CrIC1mCIDDgEQDBBtFchhIECBUIB7h0IFggHIB/GGQn2BcmoAKIhkABQmVAAlahMg");
	this.shape_5.setTransform(3.4107,13.785,0.3295,0.3295,-15.6928);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002020").s().p("AlZJYIlbpYIFbpXIKzAAIFbJXIlbJYg");
	this.shape_6.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-60,138.5,120.1);


(lib.CapeButtonGroup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFFF").s().p("AgbBEQgPgKgJgQQgKgSAAgYQAAgXAKgQQAJgSAPgJQAPgJAPAAQAdAAAPASQAPASAAAgIgBAHIAAAGIhiAAQACAXANAOQANANAUAAQAKAAAJgDQAJgCAIgGIAJAQQgJAGgMAFQgMAFgPAAQgTgBgQgIgAAogKQAAgWgJgMQgKgMgRAAQgJAAgJAFQgJAGgGAKQgGAKgCAPIBNAAIAAAAg");
	this.shape.setTransform(24.575,1.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("Ag/BpIAAjOIAVAAIACARIABAAQAKgIALgHQAMgFAMAAQATAAANAJQANAJAGARQAHARAAAWQAAAZgJARQgJARgOAJQgOAKgRAAQgJAAgKgFQgLgFgKgHIABAZIAAAxgAgShOQgJAEgLAKIAABMQAKAIAJADQAJAEAIAAQARAAALgPQAMgPAAgbQAAgYgIgPQgKgPgUAAQgIAAgKAGg");
	this.shape_1.setTransform(9.175,3.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgjBHQgKgFgGgIQgFgKAAgNQgBgXAWgNQAWgNAtgFQAAgJgCgIQgDgJgGgEQgHgGgMAAQgLAAgMAFQgLAEgIAHIgKgRQAKgIAPgFQAPgGAQAAQAbAAAMAQQAMAQAAAbIAABZIgUAAIgCgSIgBAAQgLAKgMAFQgLAGgOABQgMgBgJgFgAgFAFQgPAFgGAHQgGAHAAAKQAAAMAHAFQAIAGALgBQAJABAKgFQAJgFAKgKIAAgnQgYACgNAFg");
	this.shape_2.setTransform(-7.4756,1.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgeBaQgUgNgKgWQgLgXgBggQABgfALgXQALgWATgNQAUgMAYAAQASAAAOAHQAOAHAIAKIgNARQgIgJgKgFQgKgFgMAAQgSAAgOAKQgNAJgJASQgHASAAAYQAAAYAHASQAIASANAKQAOAKASAAQAOAAALgGQALgGAJgKIAOAPQgMAOgOAHQgPAIgTAAQgYAAgTgMg");
	this.shape_3.setTransform(-23.05,-1.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FFFF").ss(5).p("Ak5CdQgkhHAAhWQAAiQBnhnQBmhmCQAAQACAAACAAQCPABBlBlQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhmhmQgqgqgZgxg");
	this.shape_4.setTransform(0.05,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002020").s().p("Aj2D4QgqgqgZgxQgkhHAAhWQAAiQBnhnQBmhmCQAAIAEAAQCPACBlBkQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhmhmg");
	this.shape_5.setTransform(0.05,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-37.5,104,76.6);


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

	// timeline functions:
	this.frame_209 = function() {
		this.gotoAndPlay(90)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(209).call(this.frame_209).wait(103));

	// Head
	this.hominid_head = new lib.HominidHead("single",245);
	this.hominid_head.name = "hominid_head";
	this.hominid_head.setTransform(-343.25,-106.45,1,1,0,0,0,1,38);

	this.timeline.addTween(cjs.Tween.get(this.hominid_head).to({x:-324.85,y:-93.6},5,cjs.Ease.quadInOut).to({x:-306.45,y:-106.45},5,cjs.Ease.quadInOut).to({x:-288.05,y:-93.6},5,cjs.Ease.quadInOut).to({x:-269.7,y:-106.45},5,cjs.Ease.quadInOut).to({x:-251.3,y:-93.65},5,cjs.Ease.quadInOut).to({x:-232.9,y:-106.45},5,cjs.Ease.quadInOut).to({x:-213.45,y:-92.15},5,cjs.Ease.quadInOut).to({x:-196.15,y:-106.45},5,cjs.Ease.quadInOut).to({x:-177.75,y:-96.2},5,cjs.Ease.quadInOut).to({x:-159.35,y:-106.45},5,cjs.Ease.quadInOut).to({x:-140.95,y:-91.9},5,cjs.Ease.quadInOut).to({x:-122.6,y:-106.45},5,cjs.Ease.quadInOut).to({x:-103.2,y:-91.55},5,cjs.Ease.quadInOut).to({x:-85.8,y:-106.45},5,cjs.Ease.quadInOut).to({x:-67.4,y:-95.35},5,cjs.Ease.quadInOut).to({x:-49.05,y:-106.45},5,cjs.Ease.quadInOut).to({x:-30.65,y:-92.75},5,cjs.Ease.quadInOut).to({x:-12.3,y:-106.45},5,cjs.Ease.quadInOut).to({x:-12.1,y:-90.65},10,cjs.Ease.quadInOut).to({x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:19.2575,x:2.8,y:-106.55},10,cjs.Ease.quadInOut).to({regY:38,rotation:6.9676,x:-3.5,y:-106.05},10,cjs.Ease.quadInOut).to({rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({rotation:-14.9992,x:-24,y:-100.05},10,cjs.Ease.quadInOut).to({regX:0.9,regY:37.9,rotation:6.8137,x:-5.55,y:-107.3},10,cjs.Ease.quadInOut).to({regX:1,regY:38,rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:-15.89,x:-23.05,y:-106.05},10,cjs.Ease.quadInOut).to({regX:0.9,scaleX:0.9999,scaleY:0.9999,rotation:10.1463,x:-6.75,y:-106.25},10,cjs.Ease.quadInOut).to({rotation:-18.9843,x:-24,y:-102.95},10,cjs.Ease.quadInOut).to({regX:1,regY:38,scaleX:1,scaleY:1,rotation:0,x:-12.3,y:-106.45},9,cjs.Ease.quadInOut).to({x:4.6,y:-93.6},5,cjs.Ease.quadInOut).to({x:24.9,y:-106.45},6,cjs.Ease.quadInOut).to({x:42.2,y:-96.7},5,cjs.Ease.quadInOut).to({x:59.5,y:-106.45},5,cjs.Ease.quadInOut).to({x:81.1,y:-95.65},5,cjs.Ease.quadInOut).to({x:102.7,y:-106.45},5,cjs.Ease.quadInOut).to({x:117.45,y:-95.3},5,cjs.Ease.quadInOut).to({x:132.15,y:-106.45},5,cjs.Ease.quadInOut).to({x:149.25,y:-92.8},5,cjs.Ease.quadInOut).to({x:166.35,y:-106.45},5,cjs.Ease.quadInOut).to({x:183,y:-95.3},5,cjs.Ease.quadInOut).to({x:199.65,y:-106.45},5,cjs.Ease.quadInOut).to({x:217.4,y:-94.9},5,cjs.Ease.quadInOut).to({x:235.15,y:-106.45},5,cjs.Ease.quadInOut).to({x:252.9,y:-97.9},5,cjs.Ease.quadInOut).to({x:270.6,y:-106.45},5,cjs.Ease.quadInOut).to({x:288.65,y:-94.35},5,cjs.Ease.quadInOut).to({x:304.4,y:-106.45},5,cjs.Ease.quadInOut).to({x:321.3,y:-95.3},5,cjs.Ease.quadInOut).to({x:341.55,y:-106.45},6,cjs.Ease.quadInOut).wait(1));

	// Front_Arm
	this.instance = new lib.Tween37copy("synched",0);
	this.instance.setTransform(-295.2,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-314.8,y:-36.75},5,cjs.Ease.quadInOut).to({x:-334.45,y:-49.6},5,cjs.Ease.quadInOut).to({x:-278.05,y:-36.75},5,cjs.Ease.quadInOut).to({x:-221.65,y:-49.6},5,cjs.Ease.quadInOut).to({x:-241.25,y:-36.8},5,cjs.Ease.quadInOut).to({x:-260.9,y:-49.6},5,cjs.Ease.quadInOut).to({x:-203.45,y:-35.3},5,cjs.Ease.quadInOut).to({x:-148.1,y:-49.6},5,cjs.Ease.quadInOut).to({x:-167.7,y:-39.35},5,cjs.Ease.quadInOut).to({x:-187.35,y:-49.6},5,cjs.Ease.quadInOut).to({x:-130.95,y:-35.05},5,cjs.Ease.quadInOut).to({x:-74.55,y:-49.6},5,cjs.Ease.quadInOut).to({x:-93.15,y:-34.7},5,cjs.Ease.quadInOut).to({x:-113.8,y:-49.6},5,cjs.Ease.quadInOut).to({x:-57.4,y:-38.5},5,cjs.Ease.quadInOut).to({x:-1,y:-49.6},5,cjs.Ease.quadInOut).to({x:-20.65,y:-35.9},5,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},5,cjs.Ease.quadInOut).to({x:-13.8,y:-29.95},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-13.8,y:-40.2},10,cjs.Ease.quadInOut).to({y:-44.5},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:21.1,y:-53.3},10,cjs.Ease.quadInOut).to({x:-34.3,y:-59},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-54,y:-52.2},10,cjs.Ease.quadInOut).to({x:-24.05,y:-40.2},10,cjs.Ease.quadInOut).to({x:-54,y:-58.15},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},9,cjs.Ease.quadInOut).to({x:11.2,y:-36.75},5,cjs.Ease.quadInOut).to({x:72.95,y:-49.6},6,cjs.Ease.quadInOut).to({x:52.25,y:-39.85},5,cjs.Ease.quadInOut).to({x:31.5,y:-49.6},5,cjs.Ease.quadInOut).to({x:91.1,y:-38.8},5,cjs.Ease.quadInOut).to({x:150.75,y:-49.6},5,cjs.Ease.quadInOut).to({x:127.45,y:-38.45},5,cjs.Ease.quadInOut).to({x:104.15,y:-49.6},5,cjs.Ease.quadInOut).to({x:159.3,y:-35.95},5,cjs.Ease.quadInOut).to({x:214.4,y:-49.6},5,cjs.Ease.quadInOut).to({x:193.05,y:-38.45},5,cjs.Ease.quadInOut).to({x:171.65,y:-49.6},5,cjs.Ease.quadInOut).to({x:227.45,y:-38.05},5,cjs.Ease.quadInOut).to({x:283.2,y:-49.6},5,cjs.Ease.quadInOut).to({x:262.9,y:-41.05},5,cjs.Ease.quadInOut).to({x:242.6,y:-49.6},5,cjs.Ease.quadInOut).to({x:298.65,y:-37.5},5,cjs.Ease.quadInOut).to({x:352.45,y:-49.6},5,cjs.Ease.quadInOut).to({x:334.75,y:-38.45},5,cjs.Ease.quadInOut).to({x:313.55,y:-49.6},6,cjs.Ease.quadInOut).wait(1));

	// Front_Leg
	this.instance_1 = new lib.Tween37copy("synched",0);
	this.instance_1.setTransform(-350.45,-7.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-314.2,y:-23.65},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-278,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-276.9,y:-7.45},10,cjs.Ease.quadInOut).to({x:-240.65,y:-21.9},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-204.45,y:-7.4},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-203.35,y:-7.45},10,cjs.Ease.quadInOut).to({x:-167.1,y:-22.8},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-130.9,y:-7.4},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-129.8,y:-7.45},10,cjs.Ease.quadInOut).to({x:-93.55,y:-22.8},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-57.35,y:-7.4},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-56.25,y:-7.45},10,cjs.Ease.quadInOut).to({x:-19.95,y:-21.05},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:16.3,y:-7.25},5,cjs.Ease.quadInOut).to({startPosition:0},119).to({scaleX:1,scaleY:1,x:18.1,y:-7.45},11,cjs.Ease.quadInOut).to({x:53.1,y:-24.45},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:88.1,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:88.65,y:-7.45},10,cjs.Ease.quadInOut).to({x:124.7,y:-21.05},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:160.75,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:158.7,y:-7.45},10,cjs.Ease.quadInOut).to({x:193.5,y:-21.05},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:228.25,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:227.9,y:-7.45},10,cjs.Ease.quadInOut).to({x:263.55,y:-24.45},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:299.2,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:297.2,y:-7.45},10,cjs.Ease.quadInOut).to({x:330.35,y:-24.65},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:370.15,y:-9.5},6,cjs.Ease.quadInOut).wait(1));

	// Back_Leg
	this.instance_2 = new lib.Tween37copy("synched",0);
	this.instance_2.setTransform(-314.65,-7.25,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:-313.65,y:-7.45},10,cjs.Ease.quadInOut).to({x:-277.4,y:-21.9},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-241.2,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-240.1,y:-7.45},10,cjs.Ease.quadInOut).to({x:-203.85,y:-21.9},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-167.65,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-166.55,y:-7.45},10,cjs.Ease.quadInOut).to({x:-130.3,y:-21.9},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-94.1,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-93,y:-7.45},10,cjs.Ease.quadInOut).to({x:-56.75,y:-21.85},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-20.5,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-19.5,y:-7.45},10,cjs.Ease.quadInOut).to({startPosition:0},119).to({x:17.55,y:-20.75},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:53.95,y:-7.3},6,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:52.3,y:-7.45},10,cjs.Ease.quadInOut).to({x:88.4,y:-21.85},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:124.5,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:124.95,y:-7.45},10,cjs.Ease.quadInOut).to({x:159.75,y:-21.85},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:194.55,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:192.45,y:-7.45},10,cjs.Ease.quadInOut).to({x:228.1,y:-21.85},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:263.75,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:263.4,y:-7.45},10,cjs.Ease.quadInOut).to({x:298.25,y:-21.85},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:333.05,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:334.35,y:-7.45},11,cjs.Ease.quadInOut).wait(1));

	// Back_Arm
	this.instance_3 = new lib.Tween37copy("synched",0);
	this.instance_3.setTransform(-371.25,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-314.8,y:-36.75},5,cjs.Ease.quadInOut).to({x:-258.4,y:-49.6},5,cjs.Ease.quadInOut).to({x:-278.05,y:-36.75},5,cjs.Ease.quadInOut).to({x:-297.7,y:-49.6},5,cjs.Ease.quadInOut).to({x:-241.25,y:-36.8},5,cjs.Ease.quadInOut).to({x:-184.85,y:-49.6},5,cjs.Ease.quadInOut).to({x:-203.45,y:-35.3},5,cjs.Ease.quadInOut).to({x:-224.15,y:-49.6},5,cjs.Ease.quadInOut).to({x:-167.7,y:-39.35},5,cjs.Ease.quadInOut).to({x:-111.3,y:-49.6},5,cjs.Ease.quadInOut).to({x:-130.95,y:-35.05},5,cjs.Ease.quadInOut).to({x:-150.6,y:-49.6},5,cjs.Ease.quadInOut).to({x:-93.15,y:-34.7},5,cjs.Ease.quadInOut).to({x:-37.75,y:-49.6},5,cjs.Ease.quadInOut).to({x:-57.4,y:-38.5},5,cjs.Ease.quadInOut).to({x:-77.05,y:-49.6},5,cjs.Ease.quadInOut).to({x:-20.65,y:-35.9},5,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},5,cjs.Ease.quadInOut).to({x:16.1,y:-29.95},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:56.3,y:-119.7},10,cjs.Ease.quadInOut).to({x:49.05,y:-118.6},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:31.75,y:-60.85},10,cjs.Ease.quadInOut).to({x:30.65,y:-49.6},10,cjs.Ease.quadInOut).to({x:35.75},10,cjs.Ease.quadInOut).to({x:46.05,y:-61.6},10,cjs.Ease.quadInOut).to({x:22.65,y:-40.65},10,cjs.Ease.quadInOut).to({x:29.8,y:-128.25},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},9,cjs.Ease.quadInOut).to({x:18.1,y:-36.75},5,cjs.Ease.quadInOut).to({x:-3.1,y:-49.6},6,cjs.Ease.quadInOut).to({x:52.25,y:-39.85},5,cjs.Ease.quadInOut).to({x:107.55,y:-49.6},5,cjs.Ease.quadInOut).to({x:91.15,y:-38.8},5,cjs.Ease.quadInOut).to({x:74.7,y:-49.6},5,cjs.Ease.quadInOut).to({x:127.45,y:-38.45},5,cjs.Ease.quadInOut).to({x:180.2,y:-49.6},5,cjs.Ease.quadInOut).to({x:159.3,y:-35.95},5,cjs.Ease.quadInOut).to({x:138.35,y:-49.6},5,cjs.Ease.quadInOut).to({x:193,y:-38.45},5,cjs.Ease.quadInOut).to({x:247.7,y:-49.6},5,cjs.Ease.quadInOut).to({x:227.45,y:-38.05},5,cjs.Ease.quadInOut).to({x:207.15,y:-49.6},5,cjs.Ease.quadInOut).to({x:262.9,y:-41.05},5,cjs.Ease.quadInOut).to({x:318.65,y:-49.6},5,cjs.Ease.quadInOut).to({x:298.7,y:-37.5},5,cjs.Ease.quadInOut).to({x:276.4,y:-49.6},5,cjs.Ease.quadInOut).to({x:327.85,y:-38.45},5,cjs.Ease.quadInOut).to({x:389.6,y:-49.6},6,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381.7,-175.4,809.7,178.6);


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

	// timeline functions:
	this.frame_210 = function() {
		this.gotoAndPlay(90)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(210).call(this.frame_210).wait(101));

	// Head
	this.fox_head = new lib.FoxHead("single",0);
	this.fox_head.name = "fox_head";
	this.fox_head.setTransform(-376.65,-106.45,1,1,0,0,0,1,38);

	this.timeline.addTween(cjs.Tween.get(this.fox_head).to({x:-356.4,y:-94.15},5,cjs.Ease.quadInOut).to({x:-336.15,y:-106.45},5,cjs.Ease.quadInOut).to({x:-315.9,y:-94.95},5,cjs.Ease.quadInOut).to({x:-295.65,y:-106.45},5,cjs.Ease.quadInOut).to({x:-275.4,y:-98.25},5,cjs.Ease.quadInOut).to({x:-255.15,y:-106.45},5,cjs.Ease.quadInOut).to({x:-234.9,y:-94.15},5,cjs.Ease.quadInOut).to({x:-214.7,y:-106.45},5,cjs.Ease.quadInOut).to({x:-194.45,y:-96.6},5,cjs.Ease.quadInOut).to({x:-174.2,y:-106.45},5,cjs.Ease.quadInOut).to({x:-153.95,y:-95.75},5,cjs.Ease.quadInOut).to({x:-133.75,y:-106.45},5,cjs.Ease.quadInOut).to({x:-113.5,y:-93.35},5,cjs.Ease.quadInOut).to({x:-93.25,y:-106.45},5,cjs.Ease.quadInOut).to({x:-73,y:-92.5},5,cjs.Ease.quadInOut).to({x:-52.8,y:-106.45},5,cjs.Ease.quadInOut).to({x:-32.55,y:-94.15},5,cjs.Ease.quadInOut).to({x:-12.3,y:-106.45},5,cjs.Ease.quadInOut).to({x:-12.1,y:-90.65},10,cjs.Ease.quadInOut).to({x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:19.2575,x:2.8,y:-106.55},10,cjs.Ease.quadInOut).to({regY:38,rotation:6.9676,x:-3.5,y:-106.05},10,cjs.Ease.quadInOut).to({rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({rotation:-14.9992,x:-24,y:-100.05},10,cjs.Ease.quadInOut).to({regX:0.9,regY:37.9,rotation:6.8137,x:-5.55,y:-107.3},10,cjs.Ease.quadInOut).to({regX:1,regY:38,rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:-15.89,x:-23.05,y:-106.05},10,cjs.Ease.quadInOut).to({regX:0.9,scaleX:0.9999,scaleY:0.9999,rotation:10.1463,x:-6.75,y:-106.25},10,cjs.Ease.quadInOut).to({rotation:-18.9843,x:-24,y:-102.95},10,cjs.Ease.quadInOut).to({regX:1,regY:38,scaleX:1,scaleY:1,rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({x:5.75,y:-99.9},5,cjs.Ease.quadInOut).to({x:23.8,y:-106.45},5,cjs.Ease.quadInOut).to({x:41.9,y:-97.4},5,cjs.Ease.quadInOut).to({x:59.95,y:-106.45},5,cjs.Ease.quadInOut).to({x:77.6,y:-95.8},5,cjs.Ease.quadInOut).to({x:95.25,y:-106.45},5,cjs.Ease.quadInOut).to({x:112.9,y:-96.6},5,cjs.Ease.quadInOut).to({x:130.55,y:-106.45},5,cjs.Ease.quadInOut).to({x:148.2,y:-95.8},5,cjs.Ease.quadInOut).to({x:165.85,y:-106.45},5,cjs.Ease.quadInOut).to({x:183.5,y:-92.5},5,cjs.Ease.quadInOut).to({x:201.1,y:-106.45},5,cjs.Ease.quadInOut).to({x:218.75,y:-96.6},5,cjs.Ease.quadInOut).to({x:236.4,y:-106.45},5,cjs.Ease.quadInOut).to({x:254.05,y:-94.15},5,cjs.Ease.quadInOut).to({x:271.7,y:-106.45},5,cjs.Ease.quadInOut).to({x:289.35,y:-93.3},5,cjs.Ease.quadInOut).to({x:307,y:-106.45},5,cjs.Ease.quadInOut).to({x:324.65,y:-95},5,cjs.Ease.quadInOut).to({x:342.25,y:-106.45},5,cjs.Ease.quadInOut).wait(1));

	// Front_Arm
	this.instance = new lib.Tween37copy2("synched",0);
	this.instance.setTransform(-328.6,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-346.35,y:-37.3},5,cjs.Ease.quadInOut).to({x:-364.15,y:-49.6},5,cjs.Ease.quadInOut).to({x:-305.9,y:-38.1},5,cjs.Ease.quadInOut).to({x:-247.6,y:-49.6},5,cjs.Ease.quadInOut).to({x:-265.35,y:-41.4},5,cjs.Ease.quadInOut).to({x:-283.15,y:-49.6},5,cjs.Ease.quadInOut).to({x:-224.9,y:-37.3},5,cjs.Ease.quadInOut).to({x:-166.65,y:-49.6},5,cjs.Ease.quadInOut).to({x:-184.4,y:-39.75},5,cjs.Ease.quadInOut).to({x:-202.2,y:-49.6},5,cjs.Ease.quadInOut).to({x:-143.95,y:-38.9},5,cjs.Ease.quadInOut).to({x:-85.7,y:-49.6},5,cjs.Ease.quadInOut).to({x:-103.45,y:-36.5},5,cjs.Ease.quadInOut).to({x:-121.25,y:-49.6},5,cjs.Ease.quadInOut).to({x:-63,y:-35.65},5,cjs.Ease.quadInOut).to({x:-4.75,y:-49.6},5,cjs.Ease.quadInOut).to({x:-22.5,y:-37.3},5,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},5,cjs.Ease.quadInOut).to({x:-13.8,y:-29.95},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-13.8,y:-40.2},10,cjs.Ease.quadInOut).to({y:-44.5},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:21.1,y:-53.3},10,cjs.Ease.quadInOut).to({x:-34.3,y:-59},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-54,y:-52.2},10,cjs.Ease.quadInOut).to({x:-24.05,y:-40.2},10,cjs.Ease.quadInOut).to({x:-54,y:-58.15},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:15.75,y:-43.05},5,cjs.Ease.quadInOut).to({x:71.85,y:-49.6},5,cjs.Ease.quadInOut).to({x:51.9,y:-40.55},5,cjs.Ease.quadInOut).to({x:31.95,y:-49.6},5,cjs.Ease.quadInOut).to({x:87.6,y:-38.95},5,cjs.Ease.quadInOut).to({x:143.3,y:-49.6},5,cjs.Ease.quadInOut).to({x:122.95,y:-39.75},5,cjs.Ease.quadInOut).to({x:102.55,y:-49.6},5,cjs.Ease.quadInOut).to({x:158.2,y:-38.95},5,cjs.Ease.quadInOut).to({x:213.9,y:-49.6},5,cjs.Ease.quadInOut).to({x:193.5,y:-35.65},5,cjs.Ease.quadInOut).to({x:173.1,y:-49.6},5,cjs.Ease.quadInOut).to({x:228.75,y:-39.75},5,cjs.Ease.quadInOut).to({x:284.45,y:-49.6},5,cjs.Ease.quadInOut).to({x:264.1,y:-37.3},5,cjs.Ease.quadInOut).to({x:243.7,y:-49.6},5,cjs.Ease.quadInOut).to({x:299.35,y:-36.45},5,cjs.Ease.quadInOut).to({x:355.05,y:-49.6},5,cjs.Ease.quadInOut).to({x:334.65,y:-38.15},5,cjs.Ease.quadInOut).to({x:314.25,y:-49.6},5,cjs.Ease.quadInOut).wait(1));

	// Front_Leg
	this.instance_1 = new lib.Tween37copy2("synched",0);
	this.instance_1.setTransform(-383.85,-7.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-345.7,y:-19.95},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-307.55,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-302.85,y:-7.45},10,cjs.Ease.quadInOut).to({x:-264.8,y:-19.7},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-226.7,y:-7.4},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-221.9,y:-7.45},10,cjs.Ease.quadInOut).to({x:-183.85,y:-24.6},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-145.75,y:-7.4},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-140.95,y:-7.45},10,cjs.Ease.quadInOut).to({x:-102.9,y:-19.3},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-64.8,y:-7.4},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-60,y:-7.45},10,cjs.Ease.quadInOut).to({x:-21.85,y:-19.55},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:16.3,y:-7.25},5,cjs.Ease.quadInOut).to({startPosition:0},120).to({scaleX:1,scaleY:1,x:16.6,y:-7.45},10,cjs.Ease.quadInOut).to({x:52.55,y:-18.85},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:88.55,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:88.05,y:-7.45},10,cjs.Ease.quadInOut).to({x:123.6,y:-18.85},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:159.15,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:158.65,y:-7.45},10,cjs.Ease.quadInOut).to({x:194.2,y:-19.65},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:229.7,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:229.2,y:-7.45},10,cjs.Ease.quadInOut).to({x:264.75,y:-20.5},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:300.3,y:-7.25},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:299.8,y:-7.45},10,cjs.Ease.quadInOut).to({x:335.35,y:-21.3},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:370.85,y:-7.25},5,cjs.Ease.quadInOut).wait(1));

	// Back_Leg
	this.instance_2 = new lib.Tween37copy2("synched",0);
	this.instance_2.setTransform(-348.05,-7.25,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:-343.35,y:-7.45},10,cjs.Ease.quadInOut).to({x:-305.2,y:-22.1},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-267.1,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-262.35,y:-7.45},10,cjs.Ease.quadInOut).to({x:-224.3,y:-20},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-186.2,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-181.4,y:-7.45},10,cjs.Ease.quadInOut).to({x:-143.35,y:-22.1},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-105.25,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-100.45,y:-7.45},10,cjs.Ease.quadInOut).to({x:-62.35,y:-18.45},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:-24.25,y:-7.35},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-19.5,y:-7.45},10,cjs.Ease.quadInOut).to({startPosition:0},120).to({x:16.4,y:-21.35},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:52.45,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:52.75,y:-7.45},10,cjs.Ease.quadInOut).to({x:88.35,y:-21.05},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:123.9,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:123.35,y:-7.45},10,cjs.Ease.quadInOut).to({x:158.95,y:-21.05},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:194.5,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:193.9,y:-7.45},10,cjs.Ease.quadInOut).to({x:229.5,y:-21.05},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:265.05,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:264.5,y:-7.45},10,cjs.Ease.quadInOut).to({x:300.1,y:-21.05},5,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,x:335.65,y:-7.3},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:335.05,y:-7.45},10,cjs.Ease.quadInOut).wait(1));

	// Back_Arm
	this.instance_3 = new lib.Tween37copy2("synched",0);
	this.instance_3.setTransform(-404.65,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-346.4,y:-37.3},5,cjs.Ease.quadInOut).to({x:-288.1,y:-49.6},5,cjs.Ease.quadInOut).to({x:-305.85,y:-38.1},5,cjs.Ease.quadInOut).to({x:-323.65,y:-49.6},5,cjs.Ease.quadInOut).to({x:-265.4,y:-41.4},5,cjs.Ease.quadInOut).to({x:-207.1,y:-49.6},5,cjs.Ease.quadInOut).to({x:-224.9,y:-37.3},5,cjs.Ease.quadInOut).to({x:-242.7,y:-49.6},5,cjs.Ease.quadInOut).to({x:-184.45,y:-39.75},5,cjs.Ease.quadInOut).to({x:-126.15,y:-49.6},5,cjs.Ease.quadInOut).to({x:-143.95,y:-38.9},5,cjs.Ease.quadInOut).to({x:-161.75,y:-49.6},5,cjs.Ease.quadInOut).to({x:-103.5,y:-36.5},5,cjs.Ease.quadInOut).to({x:-45.2,y:-49.6},5,cjs.Ease.quadInOut).to({x:-63,y:-35.65},5,cjs.Ease.quadInOut).to({x:-80.8,y:-49.6},5,cjs.Ease.quadInOut).to({x:-22.55,y:-37.3},5,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},5,cjs.Ease.quadInOut).to({x:16.1,y:-29.95},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:56.3,y:-119.7},10,cjs.Ease.quadInOut).to({x:49.05,y:-118.6},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:31.75,y:-60.85},10,cjs.Ease.quadInOut).to({x:30.65,y:-49.6},10,cjs.Ease.quadInOut).to({x:35.75},10,cjs.Ease.quadInOut).to({x:46.05,y:-61.6},10,cjs.Ease.quadInOut).to({x:22.65,y:-40.65},10,cjs.Ease.quadInOut).to({x:29.8,y:-128.25},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:15.8,y:-43.05},5,cjs.Ease.quadInOut).to({x:-4.2,y:-49.6},5,cjs.Ease.quadInOut).to({x:51.9,y:-40.55},5,cjs.Ease.quadInOut).to({x:108,y:-49.6},5,cjs.Ease.quadInOut).to({x:87.65,y:-38.95},5,cjs.Ease.quadInOut).to({x:67.25,y:-49.6},5,cjs.Ease.quadInOut).to({x:122.9,y:-39.75},5,cjs.Ease.quadInOut).to({x:178.6,y:-49.6},5,cjs.Ease.quadInOut).to({x:158.25,y:-38.95},5,cjs.Ease.quadInOut).to({x:137.85,y:-49.6},5,cjs.Ease.quadInOut).to({x:193.5,y:-35.65},5,cjs.Ease.quadInOut).to({x:249.15,y:-49.6},5,cjs.Ease.quadInOut).to({x:228.8,y:-39.75},5,cjs.Ease.quadInOut).to({x:208.4,y:-49.6},5,cjs.Ease.quadInOut).to({x:264.05,y:-37.3},5,cjs.Ease.quadInOut).to({x:319.75,y:-49.6},5,cjs.Ease.quadInOut).to({x:299.4,y:-36.45},5,cjs.Ease.quadInOut).to({x:279,y:-49.6},5,cjs.Ease.quadInOut).to({x:334.65,y:-38.15},5,cjs.Ease.quadInOut).to({x:390.3,y:-49.6},5,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415.5,-153.5,853.1,157);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.fox = new lib.Fox();
	this.fox.name = "fox";
	this.fox.setTransform(-14.2,90.45,1.17,1.17);

	this.hominid = new lib.Hominid();
	this.hominid.name = "hominid";
	this.hominid.setTransform(-14.2,90.45,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fox}]}).to({state:[{t:this.hominid}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(10,0,1).p("A86OvQgBgRAAgRQAAr/IeoeQIfoeL+AAQL+AAIfIeQIfIeAAL/QAAARAAAR");
	this.shape.setTransform(-8.1,-0.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002020").s().p("A86OvIAAgiQAAr/IdoeQIfoeL+AAQL/AAIeIeQIfIegBL/IAAAig");
	this.shape_1.setTransform(-8.1,-0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.3,-100.2,681.4,198.5);


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
		var ItemChoosen = 1
		var CharacterHatFox = 0
		var CharacterHatHominid = 0
		var CharacterCapeFox = 0
		var CharacterCapeHominid = 0
		
		var CharacterWaitingAnim = 0
		
		var CharacterNextBackAnim = 0
		
		
		this.purple_cape_button.visible = false
		this.red_cape_button.visible = false
		
		
		this.next_button.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			if (CharacterWaitingAnim == 1) {
				if(CharacterChoosen == 1){
					this.character.fox.gotoAndPlay(211)
				}
				if(CharacterChoosen == 2){
					this.character.hominid.gotoAndPlay(211)
				}
				CharacterNextBackAnim = 1
				CharacterWaitingAnim = 0
			}
		}
		
		this.back_button.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			if(CharacterChoosen > 1){
				if (CharacterWaitingAnim == 1) {
					if(CharacterChoosen == 1){
						this.character.fox.gotoAndPlay(211)
					}
					if(CharacterChoosen == 2){
						this.character.hominid.gotoAndPlay(211)
					}
					CharacterNextBackAnim = -1
					CharacterWaitingAnim = 0
				}
			}
		}
		
		
		this.addEventListener("tick", fl_AnimateHorizontally.bind(this));
		
		function fl_AnimateHorizontally()
		{
			CharacterChoosen = this.character.currentFrame + 1
			if(CharacterChoosen == 1){
				this.character.fox.fox_head.fox_hat.gotoAndStop(CharacterHatFox)
				this.character.fox.fox_head.fox_cape.gotoAndStop(CharacterCapeFox)
				if (this.character.fox.currentFrame == 91) {
					CharacterWaitingAnim = 1
					CharacterNextBackAnim = 0
				}
				if (this.character.fox.currentFrame > 308) {
					if(CharacterNextBackAnim == 1){
						this.character.gotoAndStop(this.character.currentFrame + 1);
					}
					if(CharacterNextBackAnim == -1){
						this.character.gotoAndStop(this.character.currentFrame - 1);
					}
					if(CharacterChoosen == 1){
						this.character.fox.gotoAndPlay(0)
					}
					if(CharacterChoosen == 2){
						this.character.hominid.gotoAndPlay(0)
					}
				}
			}
			if(CharacterChoosen == 2){
				this.character.hominid.hominid_head.hominid_hat.gotoAndStop(CharacterHatHominid)
				this.character.hominid.hominid_head.hominid_cape.gotoAndStop(CharacterCapeHominid)
				if (this.character.hominid.currentFrame == 91) {
					CharacterWaitingAnim = 1
					CharacterNextBackAnim = 0
				}
				if (this.character.hominid.currentFrame > 308) {
					if(CharacterNextBackAnim == 1){
						this.character.gotoAndStop(this.character.currentFrame + 1);
					}
					if(CharacterNextBackAnim == -1){
						this.character.gotoAndStop(this.character.currentFrame - 1);
					}
					if(CharacterChoosen == 1){
						this.character.fox.gotoAndPlay(0)
					}
					if(CharacterChoosen == 2){
						this.character.hominid.gotoAndPlay(0)
					}
				}
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
		this.red_cape_button.addEventListener("click", fl_MouseClickHandler_6a.bind(this));
		
		function fl_MouseClickHandler_6a()
		{
			if(CharacterChoosen == 1){
				CharacterCapeFox = 2
			}
			if(CharacterChoosen == 2){
				CharacterCapeHominid = 2
			}
		}
		
		this.hat_button_group.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			this.crown_hat_button.visible = true
			this.top_hat_button.visible = true
			this.purple_cape_button.visible = false
			this.red_cape_button.visible = false
		}
		
		this.shirt_button_group.addEventListener("click", fl_MouseClickHandler_7a.bind(this));
		
		function fl_MouseClickHandler_7a()
		{
			this.crown_hat_button.visible = false
			this.top_hat_button.visible = false
			this.purple_cape_button.visible = false
			this.red_cape_button.visible = false
		}
		
		this.pant_button_group.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			this.crown_hat_button.visible = false
			this.top_hat_button.visible = false
			this.purple_cape_button.visible = false
			this.red_cape_button.visible = false
		}
		
		this.shoe_button_group.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.crown_hat_button.visible = false
			this.top_hat_button.visible = false
			this.purple_cape_button.visible = false
			this.red_cape_button.visible = false
		}
		
		this.cape_button_group.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			this.crown_hat_button.visible = false
			this.top_hat_button.visible = false
			this.purple_cape_button.visible = true
			this.red_cape_button.visible = true
		}
		
		this.glove_button_group.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			this.crown_hat_button.visible = false
			this.top_hat_button.visible = false
			this.purple_cape_button.visible = false
			this.red_cape_button.visible = false
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.cape_button_group = new lib.CapeButtonGroup();
	this.cape_button_group.name = "cape_button_group";
	this.cape_button_group.setTransform(236.3,332.75,1,1,0,0,0,0,0.8);
	new cjs.ButtonHelper(this.cape_button_group, 0, 1, 1);

	this.pant_button_group = new lib.PantButtonGroup();
	this.pant_button_group.name = "pant_button_group";
	this.pant_button_group.setTransform(153.8,332.75,1,1,0,0,0,0,0.8);
	new cjs.ButtonHelper(this.pant_button_group, 0, 1, 1);

	this.glove_button_group = new lib.GloveButtonGroup();
	this.glove_button_group.name = "glove_button_group";
	this.glove_button_group.setTransform(235.7,418.15);
	new cjs.ButtonHelper(this.glove_button_group, 0, 1, 1);

	this.shoe_button_group = new lib.ShoeButtonGroup();
	this.shoe_button_group.name = "shoe_button_group";
	this.shoe_button_group.setTransform(155,418.15);
	new cjs.ButtonHelper(this.shoe_button_group, 0, 1, 1);

	this.shirt_button_group = new lib.ShirtButtonGroup();
	this.shirt_button_group.name = "shirt_button_group";
	this.shirt_button_group.setTransform(70.5,419.45,1,1,0,0,0,0,1.3);
	new cjs.ButtonHelper(this.shirt_button_group, 0, 1, 1);

	this.hat_button_group = new lib.HatButtonGroup();
	this.hat_button_group.name = "hat_button_group";
	this.hat_button_group.setTransform(70.5,333.25,1,1,0,0,0,0,1.3);
	new cjs.ButtonHelper(this.hat_button_group, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(2,1).p("AhjH0IAAvnABkH0IAAvn");
	this.shape.setTransform(293.95,375.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(5,1).p("AAAMqIAA5T");
	this.shape_1.setTransform(293.95,374.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.hat_button_group},{t:this.shirt_button_group},{t:this.shoe_button_group},{t:this.glove_button_group},{t:this.pant_button_group},{t:this.cape_button_group}]}).wait(1));

	// Layer_2
	this.back_button = new lib.Button();
	this.back_button.name = "back_button";
	this.back_button.setTransform(107.45,205.1,1.6106,1.6159,0,0,180,0.2,0.3);

	this.next_button = new lib.Button();
	this.next_button.name = "next_button";
	this.next_button.setTransform(1086.35,205.1,1.6106,1.6159,0,0,0,0.2,0.3);

	this.btnSave = new lib.Symbol2();
	this.btnSave.name = "btnSave";
	this.btnSave.setTransform(1148.95,68.6,1.2285,1.2326,0,0,0,33,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(5,1).p("EA5rAAAIlaJYIq0AAIlbpYIFbpXIK0AAgAKiAAIlaJYIqzAAIlbpYIFbpXIKzAAgEAiBAAAIlaJYIq1AAIlapYIFapXIK1AAgEgkBAAAIlaJYIq1AAIlapYIFapXIK1AAgAswAAIlaJYIq1AAIlapYIFapXIK1AAg");
	this.shape_2.setTransform(740.9745,374.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(5,1,1).p("EhXqgNaMCvVAAAQC0AAAAC0IAAZRQAAC0i0AAMivVAAAQi0AAAAi0IAA5RQAAi0C0AAgEggBgReMA+fAAA");
	this.shape_3.setTransform(602.05,364);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FFFF").ss(6,1,1).p("Egu3AAAMBdvAAA");
	this.shape_4.setTransform(598.4,233.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FFFF").ss(7,1,1).p("Eg/RAAAMB+iAAA");
	this.shape_5.setTransform(594.2,213.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.btnSave},{t:this.next_button},{t:this.back_button}]}).wait(1));

	// Layer_6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#002020","rgba(0,32,32,0)"],[0.651,1],211.4,0,-211.3,0).s().p("EghBAY7MAAAgx1MBCDAAAMAAAAx1g");
	this.shape_6.setTransform(948.975,119.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#002020","rgba(0,32,32,0)"],[0.651,1],-211.3,0,211.4,0).s().p("EghBAY7MAAAgx1MBCDAAAMAAAAx1g");
	this.shape_7.setTransform(259.275,119.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Hat
	this.top_hat_button = new lib.TopHatButton();
	this.top_hat_button.name = "top_hat_button";
	this.top_hat_button.setTransform(739.15,374.9);
	new cjs.ButtonHelper(this.top_hat_button, 0, 1, 1);

	this.crown_hat_button = new lib.CrownHatButton();
	this.crown_hat_button.name = "crown_hat_button";
	this.crown_hat_button.setTransform(590.05,374.9);
	new cjs.ButtonHelper(this.crown_hat_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.crown_hat_button},{t:this.top_hat_button}]}).wait(1));

	// Cape
	this.red_cape_button = new lib.RedCapeButton();
	this.red_cape_button.name = "red_cape_button";
	this.red_cape_button.setTransform(737.4,374.9);
	new cjs.ButtonHelper(this.red_cape_button, 0, 1, 1);

	this.purple_cape_button = new lib.PurpleCapeButton();
	this.purple_cape_button.name = "purple_cape_button";
	this.purple_cape_button.setTransform(590.35,374.9);
	new cjs.ButtonHelper(this.purple_cape_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.purple_cape_button},{t:this.red_cape_button}]}).wait(1));

	// No_Item
	this.no_item_button = new lib.NoItemButton();
	this.no_item_button.name = "no_item_button";
	this.no_item_button.setTransform(441.1,374.9);
	new cjs.ButtonHelper(this.no_item_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.no_item_button).wait(1));

	// Character
	this.instance = new lib.ButtonInvisible();
	this.instance.setTransform(1149.35,374.95,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ButtonInvisible();
	this.instance_1.setTransform(332.2,374.95);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.character = new lib.Character();
	this.character.name = "character";
	this.character.setTransform(618.45,114.55,1,1,0,0,0,-0.1,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002020").s().p("EApdAJYIlbpYIFbpXIK0AAIFaJXIlaJYgARyJYIlapYIFapXIK1AAIFaJXIlaJYgAlrJYIlbpYIFbpXIKzAAIFaJXIlaJYgA8/JYIlapYIFapXIK1AAIFaJXIlaJYgEg0QAJYIlapYIFapXIK1AAIFaJXIlaJYg");
	this.shape_8.setTransform(740.975,374.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.character},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(618.5,210.1,568.8,268.29999999999995);
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