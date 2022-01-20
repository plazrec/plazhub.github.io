(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 466,
	height: 466,
	fps: 31,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.tip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("AtRAAIAAjHIajAAIAADHIAADII6jAAIAAjIIajAA");
	this.shape.setTransform(85,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AtRBkIAAjGIajAAIAADGg");
	this.shape_1.setTransform(85,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtRBjIAAjGIajAAIAADGg");
	this.shape_2.setTransform(85,10);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-21,172,42);


(lib.pulseRing = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AhFBGQgegeABgoQgBgnAegeQAegeAnABQAogBAeAeQAeAegBAnQABAogeAeQgeAegogBQgnABgegegAg1g1QgWAXAAAeQAAAfAWAXQAXAWAeAAQAfAAAXgWQAWgXAAgfQAAgegWgXQgXgWgfAAQgeAAgXAWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.pulseAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.pulseRing();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:2,scaleY:2,alpha:0},27).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.marker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{showInfoRight:1,hideInfoRight:31,showInfoLeft:61,hideInfoLeft:91});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cityName_txt.font = "normal 11px AudiNormal";
		this.date_txt.font = "normal 11px AudiNormal";
		this.cityName_txt.visible = false;
		this.date_txt.visible = false;
	}
	this.frame_1 = function() {
		this.date_txt.x = 160;
		this.cityName_txt.x = 160;
		this.cityName_txt.alpha = 0;
		this.date_txt.alpha = 0;
		createjs.Tween.get(this.date_txt, { override:true }).wait(300).to({ alpha:1, visible:true }, 700);
		createjs.Tween.get(this.cityName_txt, { override:true }).wait(300).to({ alpha:1, visible:true }, 700);
	}
	this.frame_30 = function() {
		this.stop();
		this.cityName_txt.text = this.name;
		this.date_txt.text = this.date;
	}
	this.frame_31 = function() {
		createjs.Tween.get(this.date_txt, { override:true }).to({ alpha:0, visible:false }, 300);
		createjs.Tween.get(this.cityName_txt, { override:true }).to({ alpha:0, visible:false }, 300);
	}
	this.frame_60 = function() {
		this.gotoAndStop(0);
	}
	this.frame_61 = function() {
		this.date_txt.x = -160;
		this.cityName_txt.x = -160;
		this.cityName_txt.alpha = 0;
		this.date_txt.alpha = 0;
		createjs.Tween.get(this.date_txt, { override:true }).wait(300).to({ alpha:1, visible:true }, 700);
		createjs.Tween.get(this.cityName_txt, { override:true }).wait(300).to({ alpha:1, visible:true }, 700);
	}
	this.frame_90 = function() {
		this.stop();
		this.cityName_txt.text = this.name;
		this.date_txt.text = this.date;
	}
	this.frame_91 = function() {
		createjs.Tween.get(this.date_txt, { override:true }).to({ alpha:0, visible:false }, 300);
		createjs.Tween.get(this.cityName_txt, { override:true }).to({ alpha:0, visible:false }, 300);
	}
	this.frame_121 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(1).call(this.frame_31).wait(29).call(this.frame_60).wait(1).call(this.frame_61).wait(29).call(this.frame_90).wait(1).call(this.frame_91).wait(30).call(this.frame_121).wait(1));

	// Layer 9
	this.cityName_txt = new cjs.Text("", "11px 'Verdana'");
	this.cityName_txt.name = "cityName_txt";
	this.cityName_txt.textAlign = "center";
	this.cityName_txt.lineHeight = 13;
	this.cityName_txt.lineWidth = 166;
	this.cityName_txt.setTransform(-162,-41);

	this.date_txt = new cjs.Text("", "11px 'Verdana'", "#FFFFFF");
	this.date_txt.name = "date_txt";
	this.date_txt.textAlign = "center";
	this.date_txt.lineHeight = 13;
	this.date_txt.lineWidth = 166;
	this.date_txt.setTransform(-162,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.date_txt},{t:this.cityName_txt}]}).wait(122));

	// Layer 6
	this.tipOutline = new lib.tip();
	this.tipOutline.setTransform(75,-43);
	this.tipOutline.alpha = 0;
	this.tipOutline._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tipOutline).wait(21).to({_off:false},0).to({alpha:1},9).wait(1).to({alpha:0},9).to({_off:true},1).wait(40).to({_off:false,skewY:180,x:-75},0).to({alpha:1},9).wait(1).to({alpha:0},9).to({_off:true},1).wait(21));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgIAAIARAA");
	this.shape.setTransform(44,-43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgcAAIA5AA");
	this.shape_1.setTransform(46,-43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgwAAIBhAA");
	this.shape_2.setTransform(48,-43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhEAAICJAA");
	this.shape_3.setTransform(50,-43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AhYAAICxAA");
	this.shape_4.setTransform(52,-43);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AhsAAIDZAA");
	this.shape_5.setTransform(54,-43);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AiBAAIEDAA");
	this.shape_6.setTransform(56,-43);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AiVAAIErAA");
	this.shape_7.setTransform(58,-43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAJAAIgRAA");
	this.shape_8.setTransform(-43.7,-43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AhtAAIDaAA");
	this.shape_9.setTransform(-55.3,-43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AiAAAIEBAA");
	this.shape_10.setTransform(-57.7,-43);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ACWAAIkrAA");
	this.shape_11.setTransform(-60,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1,p:{x:46}}]},1).to({state:[{t:this.shape_2,p:{x:48}}]},1).to({state:[{t:this.shape_3,p:{x:50}}]},1).to({state:[{t:this.shape_4,p:{x:52}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},19).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{x:52}}]},1).to({state:[{t:this.shape_3,p:{x:50}}]},1).to({state:[{t:this.shape_2,p:{x:48}}]},1).to({state:[{t:this.shape_1,p:{x:46}}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},26).to({state:[{t:this.shape_1,p:{x:-46.1}}]},1).to({state:[{t:this.shape_2,p:{x:-48.4}}]},1).to({state:[{t:this.shape_3,p:{x:-50.7}}]},1).to({state:[{t:this.shape_4,p:{x:-53}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},19).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_4,p:{x:-53}}]},1).to({state:[{t:this.shape_3,p:{x:-50.7}}]},1).to({state:[{t:this.shape_2,p:{x:-48.4}}]},1).to({state:[{t:this.shape_1,p:{x:-46.1}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(14));

	// Layer 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDADQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAgBg");
	this.shape_12.setTransform(42.5,-42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgEADABQAEgBAEAEQAEAEAAADQAAAEgEAEQgEAEgEgBQgDABgEgEg");
	this.shape_13.setTransform(42.5,-42.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFgBAGQABAHgGAFQgFAFgHAAQgGAAgFgFg");
	this.shape_14.setTransform(42.5,-42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQARQgGgIAAgJQAAgIAGgIQAHgGAJgBQAKABAGAGQAIAIAAAIQAAAJgIAIQgGAGgKABQgJgBgHgGg");
	this.shape_15.setTransform(42.5,-42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAUQgIgIAAgMQAAgLAIgJQAJgJALABQAMgBAJAJQAIAJABALQgBAMgIAIQgJAJgMAAQgLAAgJgJg");
	this.shape_16.setTransform(42.5,-42.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCADQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQAAAAABABQAAABAAAAQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_17.setTransform(-42.3,-42.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgEADABQAEgBAEAEQADAEAAADQAAAEgDAEQgEAEgEgBQgDABgEgEg");
	this.shape_18.setTransform(-42.3,-42.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgGAGAAQAHAAAFAGQAGAFgBAGQABAHgGAFQgFAFgHAAQgGAAgFgFg");
	this.shape_19.setTransform(-42.3,-42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPARQgIgIAAgJQAAgIAIgIQAGgGAJgBQAKABAHAGQAHAIAAAIQAAAJgHAIQgHAGgKABQgJgBgGgGg");
	this.shape_20.setTransform(-42.3,-42.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAUQgJgIAAgMQAAgLAJgJQAIgJALABQAMgBAJAJQAJAJgBALQABAMgJAIQgJAJgMAAQgLAAgIgJg");
	this.shape_21.setTransform(-42.3,-42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},10).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},33).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},18).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},33).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(10));

	// Layer 4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgtAuIBbhb");
	this.shape_22.setTransform(8.4,-8.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("Ag9A+IB7h7");
	this.shape_23.setTransform(10.1,-10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AhOBPICcic");
	this.shape_24.setTransform(11.8,-11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AheBfIC9i9");
	this.shape_25.setTransform(13.5,-13.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AhvBwIDfjf");
	this.shape_26.setTransform(15.2,-15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("Ah/CAID/j/");
	this.shape_27.setTransform(16.8,-16.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AiQCRIEhkh");
	this.shape_28.setTransform(18.5,-18.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AigChIFBlB");
	this.shape_29.setTransform(20.2,-20.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AiwCxIFili");
	this.shape_30.setTransform(21.9,-21.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AjBDCIGDmD");
	this.shape_31.setTransform(23.6,-23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AAuAuIhbhb");
	this.shape_32.setTransform(-8.2,-8.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("Ag9g9IB7B7");
	this.shape_33.setTransform(-9.9,-10.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AhOhNICcCc");
	this.shape_34.setTransform(-11.5,-11.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AheheIC9C9");
	this.shape_35.setTransform(-13.2,-13.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AhvhvIDfDf");
	this.shape_36.setTransform(-14.9,-15.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("Ah/h/ID/D/");
	this.shape_37.setTransform(-16.6,-16.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AiQiQIEgEh");
	this.shape_38.setTransform(-18.3,-18.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AigigIFBFB");
	this.shape_39.setTransform(-20,-20.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AixixIFjFi");
	this.shape_40.setTransform(-21.6,-21.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("ADCDCImDmD");
	this.shape_41.setTransform(-23.3,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},41).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},41).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0000").s().p("AgbAcQgMgMABgQQgBgPAMgMQAMgMAPABQAQgBAMAMQAMAMgBAPQABAQgMAMQgMAMgQgBQgPABgMgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(122));

	// Layer 2
	this.pulse = new lib.pulseAnimation();
	this.pulse.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pulse).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.9,-61,249,65);


// stage content:
(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var timeline = this;
		var stageRef = this.getStage();
		stageRef.enableMouseOver(30);
		
		createjs.Touch.enable(stageRef);
		
		var data;
		/*= [
			{ city:"Mumbai South", code:"mumbai_south", date:"23rd-24th March" },
			{ city:"Bokaro Steel City", code:"bokaro_steel_city", date:"28th-30th March" },
			{ city:"Durg", code:"durg", date:"31st March" }
		];*/
		
		function onMouseOver(event) {
			timeline.showInfo(event.currentTarget.name);
		}
		
		this.showInfo = function(code) {
			var w = stageRef.canvas.width;
			var marker = timeline[code];
			if(marker.x > w/2) {
				marker.gotoAndPlay("showInfoLeft");
			} else {
				marker.gotoAndPlay("showInfoRight");
			}
		}
		
		this.hideInfo = function(code) {
			var marker = timeline[code];
			marker.play();
		}
		
		function onMouseOut(event) {
			timeline.hideInfo(event.currentTarget.name);
		}
		
		function onClick(event) {
			
		}
		
		function initData() {
			
			for(var i=0; i<data.length; i++)
			{
				var o = data[i];
				var code = o.code.toLowerCase();
				var marker = timeline[code];
				marker.name = code;
				marker.addEventListener("mouseover", onMouseOver);
				marker.addEventListener("mouseout", onMouseOut);
				marker.addEventListener("click", onClick);
				marker.city = o.city;
				marker.date = o.date;
				marker.visible = true;
			}
		}
		
		this.setData = function(json) {
			data = json;
			initData();
		}
		
		this.showPulse = function(code) {
			this[code].pulse.visible = true;
			this[code].pulse.gotoAndPlay(1);
		}
		
		this.hidePulse = function(code) {
			this[code].pulse.visible = false;
			this[code].pulse.gotoAndStop(0);
		}
		
		this.hideAllInfo = function() {
			for(var i=0; i<data.length; i++)
			{
				var o = data[i];
				var code = o.code.toLowerCase();
				var marker = timeline[code];
				if(marker.currentFrame > 0) {
					marker.play();
				} else {
					marker.gotoAndStop(0);
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// saharsa
	this.saharsa = new lib.marker();
	this.saharsa.setTransform(282.7,189.2);
	this.saharsa.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.saharsa).wait(1));

	// jorhat
	this.jorhat = new lib.marker();
	this.jorhat.setTransform(398.2,157);
	this.jorhat.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jorhat).wait(1));

	// morena
	this.morena = new lib.marker();
	this.morena.setTransform(163.5,163.7);
	this.morena.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.morena).wait(1));

	// pathankot
	this.pathankot = new lib.marker();
	this.pathankot.setTransform(126,85);
	this.pathankot.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pathankot).wait(1));

	// raiganj
	this.raiganj = new lib.marker();
	this.raiganj.setTransform(305.2,196.7);
	this.raiganj.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.raiganj).wait(1));

	// agartala
	this.agartala = new lib.marker();
	this.agartala.setTransform(355.5,226.7);
	this.agartala.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.agartala).wait(1));

	// ganganagar
	this.ganganagar = new lib.marker();
	this.ganganagar.setTransform(103.5,126.2);
	this.ganganagar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.ganganagar).wait(1));

	// satna
	this.satna = new lib.marker();
	this.satna.setTransform(210,199);
	this.satna.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.satna).wait(1));

	// dewas
	this.dewas = new lib.marker();
	this.dewas.setTransform(133.5,231.2);
	this.dewas.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dewas).wait(1));

	// imphal
	this.imphal = new lib.marker();
	this.imphal.setTransform(393,204.2);
	this.imphal.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.imphal).wait(1));

	// shillong
	this.shillong = new lib.marker();
	this.shillong.setTransform(353.2,194.5);
	this.shillong.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.shillong).wait(1));

	// kharagpur
	this.kharagpur = new lib.marker();
	this.kharagpur.setTransform(298.5,246.2);
	this.kharagpur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kharagpur).wait(1));

	// shimoga
	this.shimoga = new lib.marker();
	this.shimoga.setTransform(122.2,377.5);
	this.shimoga.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.shimoga).wait(1));

	// sagar
	this.sagar = new lib.marker();
	this.sagar.setTransform(156.7,269.5);
	this.sagar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.sagar).wait(1));

	// mathura
	this.mathura = new lib.marker();
	this.mathura.setTransform(154.5,156.2);
	this.mathura.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mathura).wait(1));

	// bilaspur
	this.bilaspur = new lib.marker();
	this.bilaspur.setTransform(213.7,260.5);
	this.bilaspur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bilaspur).wait(1));

	// panipat
	this.panipat = new lib.marker();
	this.panipat.setTransform(141.7,149.5);
	this.panipat.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.panipat).wait(1));

	// vellore
	this.vellore = new lib.marker();
	this.vellore.setTransform(168.7,385);
	this.vellore.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.vellore).wait(1));

	// malegaon
	this.malegaon = new lib.marker();
	this.malegaon.setTransform(105,283.7);
	this.malegaon.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.malegaon).wait(1));

	// rajahmundry
	this.rajahmundry = new lib.marker();
	this.rajahmundry.setTransform(210.7,325.7);
	this.rajahmundry.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.rajahmundry).wait(1));

	// nanded_waghala
	this.nanded_waghala = new lib.marker();
	this.nanded_waghala.setTransform(150,298.7);
	this.nanded_waghala.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.nanded_waghala).wait(1));

	// firozabad
	this.firozabad = new lib.marker();
	this.firozabad.setTransform(172.5,162.2);
	this.firozabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.firozabad).wait(1));

	// tirunelveli
	this.tirunelveli = new lib.marker();
	this.tirunelveli.setTransform(153,451);
	this.tirunelveli.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.tirunelveli).wait(1));

	// sangli_miraj_kupwad
	this.sangli_miraj_kupwad = new lib.marker();
	this.sangli_miraj_kupwad.setTransform(105,333.2);
	this.sangli_miraj_kupwad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.sangli_miraj_kupwad).wait(1));

	// siliguri
	this.siliguri = new lib.marker();
	this.siliguri.setTransform(312,178.7);
	this.siliguri.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.siliguri).wait(1));

	// bokaro_steel_city
	this.bokaro_steel_city = new lib.marker();
	this.bokaro_steel_city.setTransform(282,231.2);
	this.bokaro_steel_city.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bokaro_steel_city).wait(1));

	// kolhapur
	this.kolhapur = new lib.marker();
	this.kolhapur.setTransform(104.2,346.7);
	this.kolhapur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kolhapur).wait(1));

	// belgaum
	this.belgaum = new lib.marker();
	this.belgaum.setTransform(105,351.2);
	this.belgaum.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.belgaum).wait(1));

	// bhavnagar
	this.bhavnagar = new lib.marker();
	this.bhavnagar.setTransform(71.2,257.5);
	this.bhavnagar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bhavnagar).wait(1));

	// bikaner
	this.bikaner = new lib.marker();
	this.bikaner.setTransform(88.5,156.2);
	this.bikaner.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bikaner).wait(1));

	// dehradun
	this.dehradun = new lib.marker();
	this.dehradun.setTransform(164.2,148.7);
	this.dehradun.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dehradun).wait(1));

	// amravati
	this.amravati = new lib.marker();
	this.amravati.setTransform(149.2,269.5);
	this.amravati.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.amravati).wait(1));

	// tiruppur
	this.tiruppur = new lib.marker();
	this.tiruppur.setTransform(149.2,416.5);
	this.tiruppur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.tiruppur).wait(1));

	// jamnagar
	this.jamnagar = new lib.marker();
	this.jamnagar.setTransform(45,246.2);
	this.jamnagar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jamnagar).wait(1));

	// warangal
	this.warangal = new lib.marker();
	this.warangal.setTransform(186.7,313.7);
	this.warangal.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.warangal).wait(1));

	// cuttack
	this.cuttack = new lib.marker();
	this.cuttack.setTransform(276,276.2);
	this.cuttack.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.cuttack).wait(1));

	// jammu
	this.jammu = new lib.marker();
	this.jammu.setTransform(115.5,71.5);
	this.jammu.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jammu).wait(1));

	// bhiwandi
	this.bhiwandi = new lib.marker();
	this.bhiwandi.setTransform(82.5,291.2);
	this.bhiwandi.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bhiwandi).wait(1));

	// gorakhpur
	this.gorakhpur = new lib.marker();
	this.gorakhpur.setTransform(241.5,175.7);
	this.gorakhpur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.gorakhpur).wait(1));

	// moradabad
	this.moradabad = new lib.marker();
	this.moradabad.setTransform(171.7,153.2);
	this.moradabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.moradabad).wait(1));

	// aligarh
	this.aligarh = new lib.marker();
	this.aligarh.setTransform(167.2,156.2);
	this.aligarh.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.aligarh).wait(1));

	// kota
	this.kota = new lib.marker();
	this.kota.setTransform(118.5,196.7);
	this.kota.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kota).wait(1));

	// jalandhar
	this.jalandhar = new lib.marker();
	this.jalandhar.setTransform(122.2,101.5);
	this.jalandhar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jalandhar).wait(1));

	// bareilly
	this.bareilly = new lib.marker();
	this.bareilly.setTransform(182.2,146.5);
	this.bareilly.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bareilly).wait(1));

	// selam
	this.selam = new lib.marker();
	this.selam.setTransform(158.2,422.5);
	this.selam.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.selam).wait(1));

	// hubli_dharwad
	this.hubli_dharwad = new lib.marker();
	this.hubli_dharwad.setTransform(108,340);
	this.hubli_dharwad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hubli_dharwad).wait(1));

	// mysore
	this.mysore = new lib.marker();
	this.mysore.setTransform(145.5,392.5);
	this.mysore.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mysore).wait(1));

	// jodhpur
	this.jodhpur = new lib.marker();
	this.jodhpur.setTransform(95.2,196);
	this.jodhpur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jodhpur).wait(1));

	// gwalior
	this.gwalior = new lib.marker();
	this.gwalior.setTransform(155.2,188.5);
	this.gwalior.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.gwalior).wait(1));

	// tiruchirappalli
	this.tiruchirappalli = new lib.marker();
	this.tiruchirappalli.setTransform(170.2,421);
	this.tiruchirappalli.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.tiruchirappalli).wait(1));

	// ujjain
	this.ujjain = new lib.marker();
	this.ujjain.setTransform(127.5,246.2);
	this.ujjain.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.ujjain).wait(1));

	// thiruvananthapuram
	this.thiruvananthapuram = new lib.marker();
	this.thiruvananthapuram.setTransform(135,448.7);
	this.thiruvananthapuram.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.thiruvananthapuram).wait(1));

	// aurangabad
	this.aurangabad = new lib.marker();
	this.aurangabad.setTransform(120,276.2);
	this.aurangabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.aurangabad).wait(1));

	// durg
	this.durg = new lib.marker();
	this.durg.setTransform(202.5,253.7);
	this.durg.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.durg).wait(1));

	// ghaziabad
	this.ghaziabad = new lib.marker();
	this.ghaziabad.setTransform(146.2,159.2);
	this.ghaziabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.ghaziabad).wait(1));

	// srinagar
	this.srinagar = new lib.marker();
	this.srinagar.setTransform(111,51.2);
	this.srinagar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.srinagar).wait(1));

	// vijaywada
	this.vijaywada = new lib.marker();
	this.vijaywada.setTransform(195,336.2);
	this.vijaywada.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.vijaywada).wait(1));

	// rajkot
	this.rajkot = new lib.marker();
	this.rajkot.setTransform(52.5,246.2);
	this.rajkot.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.rajkot).wait(1));

	// amritsar
	this.amritsar = new lib.marker();
	this.amritsar.setTransform(112.5,96.2);
	this.amritsar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.amritsar).wait(1));

	// allahabad
	this.allahabad = new lib.marker();
	this.allahabad.setTransform(217.5,186.2);
	this.allahabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.allahabad).wait(1));

	// faridabad
	this.faridabad = new lib.marker();
	this.faridabad.setTransform(149.2,178.7);
	this.faridabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.faridabad).wait(1));

	// dhanbad
	this.dhanbad = new lib.marker();
	this.dhanbad.setTransform(291.7,231.2);
	this.dhanbad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dhanbad).wait(1));

	// asansol
	this.asansol = new lib.marker();
	this.asansol.setTransform(291.7,223.7);
	this.asansol.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.asansol).wait(1));

	// jabalpur
	this.jabalpur = new lib.marker();
	this.jabalpur.setTransform(180,223.7);
	this.jabalpur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jabalpur).wait(1));

	// jamshedpur
	this.jamshedpur = new lib.marker();
	this.jamshedpur.setTransform(285,246.2);
	this.jamshedpur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jamshedpur).wait(1));

	// meerut
	this.meerut = new lib.marker();
	this.meerut.setTransform(157.5,143.5);
	this.meerut.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.meerut).wait(1));

	// varanasi
	this.varanasi = new lib.marker();
	this.varanasi.setTransform(240.7,188.5);
	this.varanasi.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.varanasi).wait(1));

	// agra
	this.agra = new lib.marker();
	this.agra.setTransform(145.5,175);
	this.agra.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.agra).wait(1));

	// bhopal
	this.bhopal = new lib.marker();
	this.bhopal.setTransform(145.5,227.5);
	this.bhopal.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bhopal).wait(1));

	// patna
	this.patna = new lib.marker();
	this.patna.setTransform(268.5,196.7);
	this.patna.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.patna).wait(1));

	// kanpur
	this.kanpur = new lib.marker();
	this.kanpur.setTransform(198.7,174.2);
	this.kanpur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kanpur).wait(1));

	// greater_mumbai
	this.greater_mumbai = new lib.marker();
	this.greater_mumbai.setTransform(84.7,301.7);
	this.greater_mumbai.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.greater_mumbai).wait(1));

	// vishakapatnam
	this.visakhapatnam = new lib.marker();
	this.visakhapatnam.setTransform(226.7,324.8);
	this.visakhapatnam.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.visakhapatnam).wait(1));

	// mumbai_west
	this.mumbai_west = new lib.marker();
	this.mumbai_west.setTransform(81.6,299.1);
	this.mumbai_west.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mumbai_west).wait(1));

	// kolkata
	this.kolkata = new lib.marker();
	this.kolkata.setTransform(313.5,251.3);
	this.kolkata.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kolkata).wait(1));

	// hyderabad
	this.hyderabad = new lib.marker();
	this.hyderabad.setTransform(160.8,328.6);
	this.hyderabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hyderabad).wait(1));

	// lucknow
	this.lucknow = new lib.marker();
	this.lucknow.setTransform(198.6,166.7);
	this.lucknow.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.lucknow).wait(1));

	// madurai
	this.madurai = new lib.marker();
	this.madurai.setTransform(156.9,442.6);
	this.madurai.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.madurai).wait(1));

	// kozhikode
	this.kozhikode = new lib.marker();
	this.kozhikode.setTransform(115.3,401.3);
	this.kozhikode.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kozhikode).wait(1));

	// mangalore
	this.mangalore = new lib.marker();
	this.mangalore.setTransform(111,388.7);
	this.mangalore.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mangalore).wait(1));

	// jaipur
	this.jaipur = new lib.marker();
	this.jaipur.setTransform(117.9,166.7);
	this.jaipur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.jaipur).wait(1));

	// indore
	this.indore = new lib.marker();
	this.indore.setTransform(117.9,237.6);
	this.indore.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.indore).wait(1));

	// chandigarh
	this.chandigarh = new lib.marker();
	this.chandigarh.setTransform(136.7,127.9);
	this.chandigarh.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.chandigarh).wait(1));

	// ludhiana
	this.ludhiana = new lib.marker();
	this.ludhiana.setTransform(128.7,101.7);
	this.ludhiana.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.ludhiana).wait(1));

	// nagpur
	this.nagpur = new lib.marker();
	this.nagpur.setTransform(166.5,278);
	this.nagpur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.nagpur).wait(1));

	// raipur
	this.raipur = new lib.marker();
	this.raipur.setTransform(241.7,273.6);
	this.raipur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.raipur).wait(1));

	// chennai
	this.chennai = new lib.marker();
	this.chennai.setTransform(189.5,393);
	this.chennai.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.chennai).wait(1));

	// bhubaneswar
	this.bhubaneswar = new lib.marker();
	this.bhubaneswar.setTransform(277.5,283.5);
	this.bhubaneswar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bhubaneswar).wait(1));

	// nasik
	this.nasik = new lib.marker();
	this.nasik.setTransform(97.3,281.5);
	this.nasik.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.nasik).wait(1));

	// pune
	this.pune = new lib.marker();
	this.pune.setTransform(102.3,314.4);
	this.pune.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pune).wait(1));

	// guwahati
	this.guwahati = new lib.marker();
	this.guwahati.setTransform(355,189.8);
	this.guwahati.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.guwahati).wait(1));

	// ahmedabad
	this.ahmedabad = new lib.marker();
	this.ahmedabad.setTransform(84.2,231.5);
	this.ahmedabad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.ahmedabad).wait(1));

	// ranchi
	this.ranchi = new lib.marker();
	this.ranchi.setTransform(281.2,242.8);
	this.ranchi.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.ranchi).wait(1));

	// karnal
	this.karnal = new lib.marker();
	this.karnal.setTransform(142.7,114.7);
	this.karnal.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.karnal).wait(1));

	// surat
	this.surat = new lib.marker();
	this.surat.setTransform(85.5,265.8);
	this.surat.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.surat).wait(1));

	// gurgaon
	this.gurgaon = new lib.marker();
	this.gurgaon.setTransform(136.7,179.7);
	this.gurgaon.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.gurgaon).wait(1));

	// kochi
	this.kochi = new lib.marker();
	this.kochi.setTransform(130.4,437.8);
	this.kochi.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kochi).wait(1));

	// delhi_south
	this.delhi_south = new lib.marker();
	this.delhi_south.setTransform(142.7,172.7);
	this.delhi_south.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.delhi_south).wait(1));

	// mumbai_south
	this.mumbai_south = new lib.marker();
	this.mumbai_south.setTransform(88.1,305.7);
	this.mumbai_south.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mumbai_south).wait(1));

	// bengaluru
	this.bengaluru = new lib.marker();
	this.bengaluru.setTransform(151.6,385.3);
	this.bengaluru.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bengaluru).wait(1));

	// coimbatore
	this.coimbatore = new lib.marker();
	this.coimbatore.setTransform(146,411.4);
	this.coimbatore.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.coimbatore).wait(1));

	// udaipur
	this.udaipur = new lib.marker();
	this.udaipur.setTransform(92.3,197.6);
	this.udaipur.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.udaipur).wait(1));

	// delhi
	this.delhi = new lib.marker();
	this.delhi.setTransform(144.9,166.7);
	this.delhi.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.delhi).wait(1));

	// vadodara
	this.vadodara = new lib.marker();
	this.vadodara.setTransform(86.7,247);
	this.vadodara.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.vadodara).wait(1));

	// delhi_west
	this.delhi_west = new lib.marker();
	this.delhi_west.setTransform(135,166.7);
	this.delhi_west.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.delhi_west).wait(1));

	// mumbai
	this.mumbai = new lib.marker();
	this.mumbai.setTransform(87.6,295.7);
	this.mumbai.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mumbai).wait(1));

	// visakhapatnam
	this.visakhapatnam_1 = new lib.marker();
	this.visakhapatnam_1.setTransform(241.7,312.7);
	this.visakhapatnam_1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.visakhapatnam_1).wait(1));

	// map
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE1430").s().p("EgMdAkaQg0gegmgyQghgrgbg+QgJgWACgOQADgZgHgcQgFgRgOggIg5iQQgXg2g2hCQgwg8gYhrQgQhKgbhJQgWg7gEgIQgQgkgXgYQgEgFgCgHQgKgigWgoIgphIQgGgKgDgRIgEgdIgsjdIgQhEIgRhEIgBgCQAIgRgIgaQgLgfAAgKQAAgSgFgdIgJgwQgDgcANgcQAUgoAAgwQAAgTgEgLQgGgOgPgKQgLgHACgSQAFgUgBgJIAEgSQABgIgRgCQgGAAABgHIAGgKIAGgIQACgFgGgCQgTgFABgPQAGgSgBgIQgtASAKAtQAEAOgEARIgJAeQgJAcgYARQgMAIglAPIhXAkQgvAUgngiQhthdhShXQgIgJgIgNIgQgXQgMgQAPgPQALgNADAIQACACARAEQALACgJARICAgrQAOgFAJgQQAJgUAGgKQgggIghAVQgTANgWAAQgTABgYgHQg6gUgpgmQgJgHgGgVQgHgVgFgIIgJgKQgDgCgIAFQgGAEgIgDQgLgFgCAAIAAgQQAFgEAGgRQAMgiAiADQAPABAHgGQAHgFgBgPQAAgaAaAHQAUAFAZgFQAcgGAQABQAXACAQAPQAOALATgPQAJgIAPgHIAZgLQARgHAJACQAMACAGARQAEAJAHgBQAFAAAIgHQAKgHAFgPIAKgYQAIgNgFgMQgIgNgDgJQgEgNgVgoQgRgggBgYQgBgHgEgEQgDgCgKgBQgmgBgRgcQgSgcAQgkQAMgbgIgNQgHgOgdgCQgZgBgegZQgJgIACgNQAFgcAHgSQAKgXAUgOQAcgWAMglQAKgZARgNQAYgUAPACQAOABAQAaQALASANADQANAEARgMQAQgKAXgEIApgFQASgBAIgGQALgHACgPQABgHADgDQAXgTAUgfQALgRAVgoQAHgLAOgIQAJgGAUgGQANgFAKgKQAJgJAJgPQAohAAHgxQADgPANgHQAIgEAUgDQAbgEAEgHQAFgFgGgbQgBgJAEgGQACgFAHgIIBPhUQAHgHACgEQABgIgHgHQgJgJAJgTQANgegKggQgHgZAWgOIAjgYQATgNAUgBQAfgDgDgUQgCgVgggIIgLAAQgdABgLgKQgMgJgFgdQgBgLgCgCQgEgDgKAEQgTAKgSgPQgSgPgzgbQgkgVAEgpQAFhCgYhIQgMgmAEgLQAEgLAegYQAdgZAUgXQARgSgFgMQgDgMgUgFQgngJAQgiQAEgJgFgDIgMgDQgdgGgQgJQgXgMgLgWQgEgJgMADQgFACgKgBIgQAAQgRgBgHgCQgLgDgDgOQgLgpAWgQQAjgXAggzQAKgOAQgEQAMgEAUACIAwADQACgHgCgCIgFgGIgHgGQgEgGAFgFQAIgJALAGQAgAQAjgRQATgLAmgZIAPAAQAKATAXABIAlABQASAEAGAEQAKAHgBAQQgBAMARABQAkABAWAcQAXAdgKAhQgEAPAGALQADAIAKANQAJAQAKAEQAKADAPgHQAPgFAKALQAUAdAkAPQAYAKAuAJQALADARgBIAcgCQAMAAADgCQARgRAlgSQAogVAPgMQAVgSAqADQApADAUAUQAIAKAjAVQAcARAKAUQAEAIALgJIAIgGQAFgDAFAFIALAMQAFAHgCAIIgrB8QgFAIgBAAQgRgCgQASQgTAVgJADQgFACgBAFIgCAJQgGAhgRAPQgRAPghAAQgQgBgDAEQgEAFAJANQALAQABAIQACANgQAMQgLAGAOAYQAPAaAOgBQAUgBAGAJQAGAHgDATQgDAXAXAeQAWAbghALQglAMgQARQgMAMgQgFQgQgHgKgTQgDgKgDgEQgEgHgLADQgJADgEAIQgCAEAAAMQABAjAWAUQATAPgDAWQgEAdAPANQAGAEgCAHIgHAJQgGAJABAJQACAHAHAGQAGAFAFgGIAGgKQASgOAMASIAXAgQAQAVALAFQAQALAWgIQAFgCAHACQAFACAFAFQAMATADADQAKAJAOABQAGAAABAMQAAAdAgAEQASACAZATQAcATAPAEQAEAAADAFQADAFgBAEQAAAHgGABIgJAAQgMABgPAPQgjAhgPASQgIALgGATIgGAiIgHAfQgGASgLALQgIAGABAJQABAJAKAFQAIAEANARQANALARgNQACgCAFAFQANAKAhASQAeARANAMQAOANAeAVQAfAVANAMIAIAHQAGACAEgFQAJgLAIADIAQAKIAXATQALAMASgBQAZgCAEABQAFABAKAUQALASAQgBQAaAAATAVQAMgVAMgEQAMgEAUALQAXAMAXgNQATgLAPANQAPAPAfAEQARACAGAHQAJAJgFAPQgCAJAFAFQADAEAJADIARAHQAJAEAFAEQASARARAEQAUADAVgMQALgHAJAGQAIAGACANQACAOAHADQAGADANgDQAugHAtAXQAPAJAMAAQAPABAMgLQAPgOALAUQAFAKAKADQAHACANgCQAhgEANAAQAagBATAGQALAFADgMQAEgcAAgNQABgYgKgSQgNgbACgeQACgZANgfIAFgNQACgIgDgGQgLgZAfgEQAYgBARgKQATgLAQAGQAPAHAFAVQAEATgDATQgDATABAMQABARAHAOQAHAMgJAHQgMAJAEAKQACAGALAKQARAOALAFQARAHATgCQALgBAWAIQAWAIAMAAQAagBAFgBQARgEALgMQAHgIAJAAQAJAAAJAHQAZASAfgHQAHgBAjAAQAaABAPgKQACgBAEAAQAEAAADABQAXAMAYgOQAKgGAGgLQAFgGAFgOQAMgdgMgMQgJgIgdAAQgMgBgGgKQgFgJgBgOQAAgMAIgEQAFgDANgCQAJgBAUgIQASgIAJABQAgABAWgOQAUgMAPgcQADgGAJgDIAQgHQAggPAIgdQAGgcAbABQA5ACAegvQAYgjA+gYQALgEAJAHQAmAbAsgHQAZgFA4gZIACgCQAbgRAPAHQAPAGAFAgQACAGAEAFIAKAFQAcATACAWQADAWgXAYIgHAGQgEAEACAFQACAFAFAAIAJAAQAMAEAoAFQAhAFASAKQAQAHAEAFQAHAIgEAPQgBACACADQACAEADABIAAAbIg2AhQgaAQARAbIAaAoIAEAHQACAEgCADQgFAHgMgDQgQgEgIgEQgMgGgFgMQgGgPgSAFQhSASgsAuQglAngmALQgbAJAGAiQAKAygNAjQgOAmgrAZQgMAGABAMQABALAKAJQAQARgJAYQgIAbgJAJQgoA2gSBEQgJAggagRQgQgLgUgBQgMgBgaACQgJABgCADQgBADADAGQAHAYgGAmQgJAxAAALQAAAIgHAFQgqAfAWAxQAFAPgMAdQgOAegOAFQgJADgLgIIgIgFQgFgCgFAFQgMALgFgDQgEgDgCgQQgJhVgag5QgLgWAHgWQADgMgGgOIgIgcQgBgDgDgCQgDgBgEACIgMAEQgHACgBAIQgBAMgPAXQgNAWACAQQABALgUAHQgLAEgYgNQgZgMgCgLIgJgiQgEgVgJgOQgGgKAOgfQAOgeAMgFIA/gdQAzgVAIguQAEgQAFgJQAIgJAPgDQgagkglADQhDAGgpgIQgTgFgeADQghAEgQAAQgZACgggJIg1gSQgSgGAHgTQAGgNABgSIAAghQACgcgWgKQgHATgPABQgNABgOgMQgRgPgpgSQgqgRgSgPQAAAUgYAQQgMAJgOAZQgHAMACAGQACAHAPABQAIAAAIAHIAMAMQAMAMAIAHQANAHAOACQARABgBAQQAAANAHADIAKAEQAEACgFAIIgIALQgFAGgJgBIgVgFQgOgDgHAEQgJAEgEAOQgFAdgaACQgMAAgEAJQgDAEgDANQgEARATAHQAFADAbASQATAOASgBQAMAAAAAVQACATgCANQgDAQgLAMQgSATAVASQALAKACAFQAGAKgFAJQgDAIAGADQADACAIACQAZAIgNATQgIALAIAQQAEAKABANQgCA2AQAgQALAWgGAWQgEALADANQADAKAIARQgSgHgRADQgNADgRALQgLAGgbgNIgFgFQgEgCgDACQgTAPgGgKIgHgZIgFgLQgEgGgGgEQgTAagjAQQgXALgrALQhDARATBDIAIAaQAFALgCAHQgDAJgKAHQgNAIgMARIgTAfQgeAyg3ANQg4AOgWANQhBAmgnAzIhCBUQgpA1g0AQQgSAGgJAPQgUAgglAcQgUAPgwAdIgUAKQgLAIgGAHQgMANgEAJQgEAOAGAOQAGAOgKAFIgwAhQgcARgegEQgdgEgHAHQgGAFgIAfQgDAQgPANIgZAWQgFAEgEgCIgIgFQgagMgXAKQgWAIgNAaQgoBOAgBIQAIASgGAMQgJAUACAXQACATAJAZQAGAOgCAHQgDAMgTACQAZAJAHASQADANgDAbQgGAngJAbQgLAjgTAbQgxBDASBCQAHAbABAvQABA4ACASQADAYgVgKQgXgKgaAKQgOAEgEAGQgHAHABANQABAIgFAKIgLAPIgXAeQgWAnAuAGQAQADAEADQAEADAFARQgigOgoAIIhHAXQgNADgHAJQgIAKABANQAAAmgYAbQgRATgnATIgGACQgEABAAAEgA2bKYQAGADADAHQAEAGgCADQgFAHgDANIgBAMQgRAIAIAWQAJAVgKAHQAJAKACAaQABAaALAKQAJAJAAATQABAhALAzIASBTQALBMAvBZQABADAQARQALAMgBAMQgCAWAQAWIAbAjIATAhQAKATACAQQADAdARAaQASAcAGAvQAGAtAIAVQASA6AGAQQARAqAWAaQA3BAAbBBIBVDPQAJAWABAFQACAPgMAMQgCACAAAGQAAAEACADQAEADAKAYQAIARAOAEQAKACgHAKQgHAHAIAJIAdAkIAdAiQATAUARAIQAWAJAWgKQAkgPAPgPQAXgWAAghQABgsAqgNQAVgHApgLQAIgDADgCQAEgEgDgJQgGgPAGgQQAEgMAMgPQAPgSAFgJQAJgQgCgQQAAgMALgFIAegLQARgGAOAGQAPAFAAgQIABhDQgBgmgHgaQgShLAvhBQAVgeAMgkQAJgdAEgqQADgNgEgJQgEgLgLgHQgcgTAZgaIAFgFQACgCgCgDQgMgVABgYQAAgTAJgaQABgFgFgNQgghUAohJQAQgdAXgMQAZgNAfAIQALAEANgHQAPgHAIgSIAJgfQAEgQAIgFQAIgGASABIAmACQAXAAANgNIAdgYQAOgRgDgYQgFgYApgYIBFgrQApgZAQgXQAagmAvgWQASgJARgPQAJgJAUgWQAHgHAtg6QAegpAcgTQAJgFgBgHQAAgUALgQQAIgLATgPQALgIAIAAQAJAAAFAOIAEAHQACACAFgBQA7gPAWgMQAqgVASgoQAQgfATgMQAPgIgGgWQgIgTgHgdQgEgTALgLQAVgVAMgIQAUgOAUgDQA0gIAlglQARgRAJACQAHACAJAXQADAJAFADIAPAGQAeAIAIABQATAAAQgRIAGgEQAEgEACgEQAKgigNg0QgPg+ABgVIgDgQQgCgIAGgHQACgCgCgHQgVgDgGgPQgCgIAAgWQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgEgEQgPgQgBgMQAAgMAPgQQAKgMAAgWQABgWgKgBQgQgDgRgLQgYgRgEgCQgigRAGgYQAGgVAEgHQAKgOATABQAIAAAFgFQAEgFAAgHQABgSALgHQAJgFASACIANABQAIAAAEgDQgBgRgIgIQgHgKgRgEQgJgBgIgIIgPgPQgOgPgOgCQgfgEANggQAKgaAbgWQAKgHAAgDQAEgGgHgHQgNgNAOgMQAHgHAGAFQAFACAGAIQAPAOAKAGQAQAKAQAFQgCgMAAgFQgBgIAMgBQAQgBAAAOQgCAUAOAMIAcATQAWAPAGgZQAFgNAFAAQAFAAAKALQAUAUABAfQABAMgGAqQgCAOADAHQAEAFANAEQBPAXA0gIQAjgFAwAIQAwAFAYgEQAWgGATAIQAQAGASARQALAKAAAHQABAJgPAFQgKAFgHAMQgGAMgKAaQgKAWgPAOQgRAPgJAFQgOAJgQADQgVADgPAPQgMAMgMAYQgEALADAKIAJASIAGAVIABAGQABAFADgBQANgCAFAIIAIASIAHALQAFAFAHgCQAQgDgCgRQgCgYASgPQAIgHgCgHQgFgXAPgHQAJgEAWgCQAOgDACAIQAAAHAJAcQAGATgDAOQgFAWAHAPQAZAxAHBAQABARASAIQAXAMADAFQABABAGgDQALgGALgWQALgYgGgJQgMgQADgaIAEgrQgBgIAEgFQAEgFAIAEQAKAGADgFQABgCABgKQAIgoACgWQAEglgLgbQgEgGAEgMQABgGAEgCQAEgCAEAGQAGAJAMACQAGABAOAAIAaACQAPACAIAHQALAKAGgDQAFgDADgNQAShDAngxQALgPAGgXQAEgPgJgMQgPgUADgPQACgQAWgNIASgMQAJgIADgJIAQguQAJgbgJgWQgGgPAHgWQAIgaAMAAQAXgCAVgPQAMgIAWgWQAzgzBLgOQAQgDAJACQALAEAIAMQAJASAQgEQgdg2ADgOQACgOAugeQASgMgCgYQgBgXgUgIQgPgHgfgDQgggEgPgGIgPgBQgKgBgEgHQgEgKAEgIQACgGAJgJQAMgOACgFQAKgUgUgSQgIgJgGAEQgDABgHALQgDAFgGgBQgFgCgDgGQgLgRAPgTQAHgIgEgHIgLgMQgFgHgFAAQgFAAgHAGQgcAVg5APQgZAGgQgBQgXAAgQgLQgSgMgQABQgOACgSAMQghAWgLARQgjA0g8gEQgVgBgEAQQgJApgwAUQgYAKgDAUQgEAPgLAHQgKAIgNgBQgUgCgcAJQglANgIABIgQADQgIAEADAMQAFARAWgDQAVgDALAOQALANgGAUQgHAPAIAPQAJARgHAIQgFAGgRAFQgaAHgkACIg/ADQgiAFgRgBQgeAAgUgQQgGgEgJABQgIAAgHAHQgXARgcABQgUgBghgKIgQgGQgJgDgIACQgUAEgRgMIgegZQgTgQAPgeQADgEgCgGQgIgPABgUIAEgkQACgSgJgSQgJgUgTAKQgbAPgUABQgOAAAEALQACALgEAMIgJAVQgWA0AUAqQAVAsgPAyQgDANgHAFQgHAEgNgFQgPgIgWACQgaAEgMAAQghADgVgQIgJgGQgEgCgGAFQgVAQgdgPQg5gdgvANQgYAGgDgYQgCgRgJgDQgHgDgQAIQgNAHgHABQgMACgJgIQgMgLgUgKIgggRQgLgGgDgFQgFgFADgLQAFgUgYgEIg0gQQgfgIgYALQgEADgGgDIgLgHQgZgSgHAdQgDAJgFADQgGADgHgHQgLgKgPgFQgLgEgTgEQgXgGgEgTQgCgPgKAFQgSAJgRgJIgcgVQgKgLgHgDQgKgFgMAMQgEADgHgDIgLgHIguggQgegVgQgOQgrgogqgJQgdgGgagVQgXgUgBgMQgBgNAVgXQAFgHADgJIACgRQADg1AZgcQAMgOAWgWIAigiIgsgcQgZgOgXgFQgGgCgEgHIgGgOQgGgMgTgOQgUgPgGgJQAAgCgGABIgGABQgNAFgLgEQgIgCgMgJQgXgTgQgcQgOgYgOAVQgJAOgHgCQgHgCgIgNQgJgQADgMQAEgOgGgaQgGgaAEgOQACgKgRgLQgTgMgEgaQgBgdgDgOQgCgJAQgGIAlgPQAEAGABAKIAEARQAEAOAPAGQAOAFAFgJQAIgOAPgHIAbgHQANgDABgGQACgGgJgKQgageAGgZQADgNgEgFQgDgEgOgBQgRAAgSgdQgTgdAGgQQADgEACgBQAQgFgCgJQAAgFgJgNQgHgIgCgGQgDgHAEgIQAEgHAJgCIAPAAQAigBANgNQAPgNAAgfQABgLACgFQAEgGAKABQAHAAAEgEIAHgKQALgSASgDQAJgDAHgLQAJgUAKgiIARg4QAEgIgEgEQgEgEgHAGQgNAKgJgFQgGgDgGgOQgEgNgOgGQgUgIgagYQgdgZgrAAQgqABgjAXQghAZgSALQggAUgfACQgsAFgrgOQgmgMgogbQgOgMgIgFQgNgGgOAGQgDACgGgBQgGgBgBgCIgcgjQgRgUAJgZQALgbgfgoQgIgLgOgBQgIAAgQAFQgKACgFgFQgEgFAAgJQABgSgLgHQgJgGgRACIgXACQgMAAgIgDQgVgKgWAFQgSADgVAOQgRAKgNACQgRAEgTgHQAKARgGAHQgEADgQADQgIABgKgCIgRgCQgpgHgLAQQgWAggLANQgUAYgVANQgKAGAAAOQAAAIADARQADAJAIABQAGABAKgCIAUABQAMABAIgDQAJgEAEALQAKAZAWAMQASAKAfAEQAcAEgMAaQgGAMADAHQAEAHAOAEQAZAFAHAVQAGATgTASQgkAjgUARQgZATgDAJQgCAJAKAeQAZBKgFBMQgDAhAeANQAxAXAWAUQAMALAPgIQAQgJAHAFQAHADAAATQADAbAGAHQAIAFAcABQAhgBASAYQAMAQgCAJQgBAJgRAIQgHAEgmAOQg1ASgBAUIgEA2QgDAgACAVQABAOgBAFQgCAKgGAHIhKBRIgJALQgEAHAAAHQADAigGAHQgHAHghAGQggAEgBARQgDAdgOAgQgHAOgXAoQgKASgLAKQgMALgQAGQglAKgJAUQgPAhgNAVQgTAbgXASQgCACgCAKQgGAgglADQgeADgNADQgXAEgRAJQgdAOgLgCQgKgEgSgZQgOgUgLgBQgLgBgRAQQgPAPgEALQgQArgnAhQgQAPgIATQgHAUAGAVQAFATATAFQAHACAdADQAkADgBAjQgBAbgKAOQgJANAFANQABAHANAQQAKAOAJAEQAMAHAOgGQALgFAFAEQAEAEABAMQACAZARAhQAXAwADAJQAEAJAJAQQAHAQgIAOQgEAJgIAUQgIARgLAJQgMAIgJABQgMABgGgLQgIgOgKgBQgHgBgOAFQgcALgMALQgZATgUgPQgQgMgTgBQgPgCgXAEQgeAFgPgDQgHgBgFABQgFADAAAFQgBAdgjANQAHACAMgCQAKgBADAFQAGAIgOAHQguAYAhAnQADAEADALQANAcA0AaQAzAZAegHQAKgCAUgLQATgLALgDQACAAADgFIACgIQACgPAHgBQAGgCAMAHQAIAGAPAAQAIACADAFQACAGgEAFQgJAMgRAcQgQAYgSAJQg4AegjAFQgZAJgMABQgVACgOgUQACAYAWAYQBKBQB5BqQAlAfApgTQAmgSBIgeQAagLATgfQATgfgGgYQgGgSAHgWIALgeQAFgRgDgPQgCgHAJgDQACgBAEABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAPAKABQAGABAOgCQAFAAAOgBQAMAAABAJQACAJgJACQgMABgFABQgMAGgBANQgBAJAGgBIALgCQAJACAAAGIgDAMQAAAEgFAJQgDAIALADQAJACACAHQAAADgDAMQgJAYABANQAAAVASAPQAOAMAAAdQAAAzgRAgQgGAMgDAWQgDAagEAIQgFAPASAXQARAUgMAPIAFAEQAKAGgIAIQgGAHgCAJQAAAFADANQABgBAIgJQACgEAEAAQACAAADADg");
	this.shape.setTransform(228.7,233);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33,223.2,643.7,475.8);

})(libMap = libMap||{}, images = images||{}, createjs = createjs||{});
var libMap, images, createjs;


function setMapData(rootCanvas,arr){
    if(rootCanvas===undefined){
        setTimeout(function (){
            setMapData(rootCanvas,arr)
        },100)
    }
    else{
        rootCanvas.setData(arr)
    }
}



    var sportsCarMapTimer,
        weekenderMapTimer,
        qDriveMapTimer,
        womensDriveMapTimer;
    $(document).ready(function() {

        //1st event shd be pulsating.
        // function pulseAnim(root,obj){
        //     for(var a =0 ; a<obj['venue'].length; a++) {
        //     	console.log(obj[a])
        //         root.showPulse(obj[a]['cityCode'])
        //     }
        // }

        if(contentObject['AudiSportsCarExperience']['datesVenue'].length>0){

          (function(){
              sportsCarCanvas = document.getElementById("sportsCarExperienceCanvas");
              sportsCarRoot = new libMap.map();

              sportsCarStage = new createjs.Stage(sportsCarCanvas);
              sportsCarStage.addChild(sportsCarRoot);
              sportsCarStage.update();

              createjs.Ticker.setFPS(libMap.properties.fps);
              //createjs.Ticker.addEventListener("tick", sportsCarStage);
          })();

          setMapData(sportsCarRoot,contentObject['AudiSportsCarExperience']['datesVenue']);

          //pulseAnim(sportsCarRoot,contentObject['AudiSportsCarExperience']['datesVenue'][0]);

        }else{
          $('#sportsCarExperience button[data-show="leftVenueModule"]').hide()
        }

        if(contentObject['AudiWeekender']['datesVenue'].length>0){

          (function(){

              weekenderCanvas = document.getElementById("weekenderCanvas");
              weekenderRoot = new libMap.map();

              weekenderStage = new createjs.Stage(weekenderCanvas);
              weekenderStage.addChild(weekenderRoot);
              weekenderStage.update();

              createjs.Ticker.setFPS(libMap.properties.fps);
              //createjs.Ticker.addEventListener("tick", weekenderStage);
          })();

            setMapData(weekenderRoot,contentObject['AudiWeekender']['datesVenue']);
            //pulseAnim(weekenderRoot,contentObject['AudiWeekender']['datesVenue'][0]);

        }else{
          $('#weekender button[data-show="leftVenueModule"]').hide()

        }

        if(contentObject['AudiQDrive']['datesVenue'].length>0){

            // function:
            (function(){
              qDriveCanvas = document.getElementById("qDriveCanvas");
              qDriveRoot = new libMap.map();

              qDriveStage = new createjs.Stage(qDriveCanvas);
              qDriveStage.addChild(qDriveRoot);
              qDriveStage.update();

              createjs.Ticker.setFPS(libMap.properties.fps);
              //createjs.Ticker.addEventListener("tick", qDriveStage);
            })();
            setMapData(qDriveRoot,contentObject['AudiQDrive']['datesVenue']);
            //pulseAnim(qDriveRoot,contentObject['AudiQDrive']['datesVenue'][0]);

        }else{
          $('#QDrive button[data-show="leftVenueModule"]').hide()

        }


        if(contentObject['AudiWomensPowerDrive']['datesVenue'].length>0){

            // function:
            (function(){
              womensDriveCanvas = document.getElementById("womensDriveCanvas");
              womensDriveRoot = new libMap.map();

              womensDriveStage = new createjs.Stage(womensDriveCanvas);
              womensDriveStage.addChild(womensDriveRoot);
              womensDriveStage.update();

              createjs.Ticker.setFPS(libMap.properties.fps);
              //createjs.Ticker.addEventListener("tick", womensDriveStage);
            })();
            setMapData(womensDriveRoot,contentObject['AudiWomensPowerDrive']['datesVenue']);
            //pulseAnim(womensDriveRoot,contentObject['AudiWomensPowerDrive']['datesVenue'][0]);


        }else{
          $('#womensPowerDrive button[data-show="leftVenueModule"]').hide()
        }




        if (!Modernizr.touch) {



            function sportsCarMapShow(cityNm){
                sportsCarRoot.hideAllInfo();
                sportsCarRoot.showInfo(cityNm);
                sportsCarMapTimer = null;
            };
            function weekenderMapShow (cityNm) {
                weekenderRoot.hideAllInfo();
                weekenderRoot.showInfo(cityNm);
                weekenderMapTimer = null;

            };
            function qDriveMapShow (cityNm) {
                qDriveRoot.hideAllInfo();
                qDriveRoot.showInfo(cityNm);
                qDriveMapTimer = null;
            };
            function womensDriveMapShow (cityNm) {
                womensDriveRoot.hideAllInfo();
                womensDriveRoot.showInfo(cityNm);
                womensDriveMapTimer = null;
            };

            $( "#sportsCarExperience .dtVenueBox" ).hover(
              function() {
                var cityNm = $(this).attr('data-city');


                if(sportsCarMapTimer){
                    clearTimeout(sportsCarMapTimer);
                    sportsCarMapTimer= setTimeout(function(){
                      sportsCarMapShow(cityNm);
                    },700)
                }else{
                    sportsCarMapTimer= setTimeout(function(){
                      sportsCarMapShow(cityNm);
                    },700)
                }
              },
              function() {
                sportsCarRoot.hideAllInfo();
                clearTimeout(sportsCarMapTimer);
              }
            );

            $( "#weekender .dtVenueBox" ).hover(
              function() {
                var cityNm = $(this).attr('data-city');

                if(weekenderMapTimer){
                    clearTimeout(weekenderMapTimer);
                    weekenderMapTimer= setTimeout(function(){
                      weekenderMapShow(cityNm)
                    },700);
                }else{
                    weekenderMapTimer= setTimeout(function(){
                      weekenderMapShow(cityNm)
                    },700);
                }
              },
              function() {
                weekenderRoot.hideAllInfo()
                clearTimeout(weekenderMapTimer);
              }
            );


            $( "#QDrive .dtVenueBox" ).hover(
              function() {
                var cityNm = $(this).attr('data-city');

                if(qDriveMapTimer){
                    clearTimeout(qDriveMapTimer);
                    qDriveMapTimer= setTimeout(function(){
                      qDriveMapShow(cityNm)
                    },700)
                }else{
                    qDriveMapTimer= setTimeout(function(){
                      qDriveMapShow(cityNm)
                    },700)
                }
              },
              function() {
                qDriveRoot.hideAllInfo();
                clearTimeout(qDriveMapTimer);
              }
            );


            $( "#womensPowerDrive .dtVenueBox" ).hover(
              function() {
                var cityNm = $(this).attr('data-city');

                if(womensDriveMapTimer){
                    clearTimeout(womensDriveMapTimer);
                    womensDriveMapTimer= setTimeout(function(){
                      womensDriveMapShow(cityNm)
                    },700);

                }else{
                    womensDriveMapTimer= setTimeout(function(){
                      womensDriveMapShow(cityNm)
                    },700)
                }
              },
              function() {
                womensDriveRoot.hideAllInfo()
                clearTimeout(womensDriveMapTimer);
              }
            );
        }

    });
