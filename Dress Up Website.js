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

	// Mouth
	this.instance = new lib.Mouth2("single",0);
	this.instance.setTransform(11.45,67.6,1,1,0,0,0,0,-9.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245).to({_off:false},0).to({_off:true},1).wait(10));

	// Eye
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0.584,0.906,0.957],0,0,0,0,0,8.8).s().p("AgGBYQglgDgXgcQgYgbADgkQADgkAcgYQAbgYAkADQAkADAYAcQAXAbgCAkQgDAkgcAYQgZAVgfAAIgHAAg");
	this.shape_1.setTransform(-3.2505,50.2433,0.3127,0.3127);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0.584,0.906,0.957],0,0,0,0,0,8.8).s().p("AgGBYQglgDgXgcQgYgbADgkQADgkAcgYQAbgYAkADQAkADAYAcQAXAbgCAkQgDAkgcAYQgZAVgfAAIgHAAg");
	this.shape_2.setTransform(20.3995,50.2433,0.3127,0.3127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},245).to({state:[]},1).wait(10));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},245).to({state:[]},1).wait(10));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},245).to({state:[]},1).wait(10));

	// Ear
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(6).p("AiwLCQBZhOBXiPQCxkdAAlDQAAjAiCixQgtg9hAhAQhEhAgZgY");
	this.shape_11.setTransform(-10.1751,17.6887,0.3027,0.3027,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(6).p("AiSKRQBVhxBQiYQCjkxgPjIQgKiMg9hwQgvhVhWhTQgngmg3gyIgvgq");
	this.shape_12.setTransform(22.1116,17.4049,0.3027,0.3027,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},245).to({state:[]},1).wait(10));

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
	this.instance = new lib.HominidHead("single",245);
	this.instance.setTransform(-12.3,-106.45,1,1,0,0,0,1,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-12.1,y:-90.65},10,cjs.Ease.quadInOut).to({x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:19.2575,x:2.8,y:-106.55},10,cjs.Ease.quadInOut).to({regY:38,rotation:6.9676,x:-3.5,y:-106.05},10,cjs.Ease.quadInOut).to({rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({rotation:-14.9992,x:-24,y:-100.05},10,cjs.Ease.quadInOut).to({regX:0.9,regY:37.9,rotation:6.8137,x:-5.55,y:-107.3},10,cjs.Ease.quadInOut).to({regX:1,regY:38,rotation:0,x:-12.3,y:-106.45},10,cjs.Ease.quadInOut).to({regY:37.9,rotation:-15.89,x:-23.05,y:-106.05},10,cjs.Ease.quadInOut).to({regX:0.9,scaleX:0.9999,scaleY:0.9999,rotation:10.1463,x:-6.75,y:-106.25},10,cjs.Ease.quadInOut).to({rotation:-18.9843,x:-24,y:-102.95},10,cjs.Ease.quadInOut).to({regX:1,regY:38,scaleX:1,scaleY:1,rotation:0,x:-12.3,y:-106.45},9,cjs.Ease.quadInOut).wait(1));

	// Front_Arm
	this.instance_1 = new lib.Tween37copy("synched",0);
	this.instance_1.setTransform(-40.3,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-13.8,y:-29.95},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-13.8,y:-40.2},10,cjs.Ease.quadInOut).to({y:-44.5},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:21.1,y:-53.3},10,cjs.Ease.quadInOut).to({x:-34.3,y:-59},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},10,cjs.Ease.quadInOut).to({x:-54,y:-52.2},10,cjs.Ease.quadInOut).to({x:-24.05,y:-40.2},10,cjs.Ease.quadInOut).to({x:-54,y:-58.15},10,cjs.Ease.quadInOut).to({x:-40.3,y:-49.6},9,cjs.Ease.quadInOut).wait(1));

	// Front_Leg
	this.instance_2 = new lib.Tween37copy("synched",0);
	this.instance_2.setTransform(16.3,-7.25,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},119).wait(1));

	// Back_Leg
	this.instance_3 = new lib.Tween37copy("synched",0);
	this.instance_3.setTransform(-19.5,-7.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},119).wait(1));

	// Back_Arm
	this.instance_4 = new lib.Tween37copy("synched",0);
	this.instance_4.setTransform(35.75,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:16.1,y:-29.95},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:56.3,y:-119.7},10,cjs.Ease.quadInOut).to({x:49.05,y:-118.6},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},10,cjs.Ease.quadInOut).to({x:31.75,y:-60.85},10,cjs.Ease.quadInOut).to({x:30.65,y:-49.6},10,cjs.Ease.quadInOut).to({x:35.75},10,cjs.Ease.quadInOut).to({x:46.05,y:-61.6},10,cjs.Ease.quadInOut).to({x:22.65,y:-40.65},10,cjs.Ease.quadInOut).to({x:29.8,y:-128.25},10,cjs.Ease.quadInOut).to({x:35.75,y:-49.6},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-175.4,145.5,178.6);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(5,1,1).p("EhXqgNaMCvVAAAQC0AAAAC0IAAZRQAAC0i0AAMivVAAAQi0AAAAi0IAA5RQAAi0C0AAgEggegReMA+fAAA");
	this.shape.setTransform(602.05,364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(6,1,1).p("Egu3AAAMBdvAAA");
	this.shape_1.setTransform(595.5,233.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(7,1,1).p("Eg/QAAAMB+iAAA");
	this.shape_2.setTransform(591.3,213.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.hominid_auto = new lib.Hominid();
	this.hominid_auto.name = "hominid_auto";
	this.hominid_auto.setTransform(600,207.1,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.hominid_auto).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(620.5,269.2,563.2,209.2);
// library properties:
lib.properties = {
	id: '08D0ED99E0589B479ED6C1B04DD36830',
	width: 1200,
	height: 500,
	fps: 30,
	color: "#002020",
	opacity: 1.00,
	manifest: [
		{src:"sounds/CrackStone.mp3?1628483249587", id:"CrackStone"}
	],
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