$(document).ready(function() {
    //  This stuff happens immediately when page loads
    //  Any page at all...(if it has the classes referenced)
    $(".correct").hide();
    $(".game").hide();
    $(".questions").hide();
    $(".tryagain").hide();

    // This kicks off the game when "Play Now" is clicked
    $(".playnow").click(function(){
      //  This stuff happens right away...
    	$(".instructions").hide();
     	$(".rules").hide();
     	$(".playnow").hide();
     	$(".game").show();
     	startGame();
     	var timer = setTimer();
     	setTimeout(function() {
	        $(".questions").show(); 
	        $(".game").hide();
	        clearInterval(timer);
	      }, 16000);
	     	// This is where the setTimeout function call ends


      // This happens when "Next Question" is clicked
      $(".nextquest").click(function(){
      	$(".correct").hide();
      	$(".game").show();
      	$(".tryagain").hide();
      	startGame();
      	timer = setTimer();
      	setTimeout(function() {
  		    $(".questions").show(); 
  		    $(".game").hide();
  		    clearInterval(timer);
  		  }, 16000);
      });  // This is where the "Next Question" sequence ends

       	//starthegame            // Lines 38-44 are indented too far -
       	            // The actually belong on the same level
       	//placequizprompt       // as line 32
       	// placePrompt();       // They run automatically when player
       	//timerfornextpage      // clicks "Play Now"
       	//setTimeout(16000);      // No callback function...hmmm....
       	//cleartimeout(timer);    // Is this defined anywhere?
	});  //  This is where the playNow function ends
})  //  This seems to be where the $(document).ready function ends

Array.prototype.remove = function(from, to) {
 	var rest = this.slice((to || from) + 1 || this.length);
 	this.length = from < 0 ? this.length + from : from;
 	return this.push.apply(this, rest);
};


var ScienceGradeThree = {
Root: "A plant part that absorbs water and grows under the ground",
Stem: "A plant part that supports the plant",
Leaves: "Plant parts that are flat, typically green, and synthesizes food for a plant",
Flower: "A plant part that is often brightly colored, that usually lasts a short time, and from which the seed or fruit develops", 
Seed: "A small object produced by a plant from which a new plant can grow",
Seedling: "A young plant that is grown from a seed",
Germination: "The process of a seed beginning to grow",
["Life Cycle"]: "All the stages in an organism’s life",
Stage: "Point or period in the growth or development of something",
Survive: "To continue to live regardless of difficult conditions",
Environment: "The conditions that surround someone or something",
["Environmental Conditions"]: "The conditions and influences that affect the growth, health, progress, etc., of someone or something",
Retention: "The act of keeping something",
Drought: "A long period of time during which there is very little or no rain",
Conditions: "The things that affect the way something is or happens or The type of weather that occurs at a particular time",
Synthesize: "To make (something) by combining different things",
Component: "One of the parts of something",
Capacity: "The volume of liquid that can be held by an object",
Texture: "How the surface of an object feels to the touch",
Soil: "A mixture of tiny rock particles, minerals, & decayed plant and animal material",
Sand: "Tiny grains of worn or crushed rock, found mainly on seashores and in deserts",
Humus: "The part of the soil made up of decayed parts of once-living things",
Clay: "A type of soil made up of very small grains; it holds water well",
Saltwater: "Water that is salty",
Freshwater: "Water that is not salty",
Landform: "A natural feature of the Earth’s surface",
Volcano: "A mountain with a hole in the top or side that sometimes sends out rocks, ash, lava",
Mountain: "An area of land that rises very high above the land around it and that is higher than a hill",
Valley: "An area of low land between hills or mountains",
Canyon: "A deep valley with steep rock sides and often a stream or river flowing through it",
Cavern: "A cave, especially one that is large and mostly underground",
Island: "An area of land that is surrounded by water",
Seas: "The saltwater that covers much of the Earth's surface (smaller than oceans)",
River: "A large natural flow of water that crosses an area of land and goes into an ocean, a lake, etc.",
Lake: "A large area of water that is surrounded by land",
Pond: "An area of water that is surrounded by land and that is smaller than a lake ",
Stream: "Natural flow of water that is smaller than a river",
Glacier: "Very large area of ice that moves slowly down a slope or valley or over a wide area of land",
Ocean: "The saltwater that covers much of the Earth's surface (larger than seas)",
Bones: "A hard material that supports the skeletal system",
Muscles: "Tissue that is attached to bones to help them move",
Skin: "The natural outer layer of tissue that covers the body of a person or animal",
Protection: "The state of being kept from harm, loss",
Tissue: "The material that forms the parts in a plant or animal",
Nerves: "One of the many thin parts that control movement and feeling by carrying messages between the brain and other parts of the body",
Skeleton: "The structure of bones that supports the body of a person or animal",
["Function"]: "The special purpose or activity for which a thing exists or is used",
Internal: "Existing or occurring within your body",
External: "Existing of occurring outside your body",
System: "Group of related parts that move or work together",
Survival: "The state of continuing to live or exist especially in spite of difficult conditions",
Properties: "Special qualities or characteristics of something",
Nutrient: "Substance that plants, animals, and people need to live and grow",
Produce: "To make something",
["Solar System"]: "The Sun and all the objects that orbit it",
Sun: "The star that the Earth moves around and that gives the Earth heat and light",
Planet: "Large, round object in space (such as the Earth) that travels around a star (such as the sun)",
Earth: "The planet on which we live",
Star: "A huge, hot sphere of gas, like the Sun, that gives off their own light",
Moon: "The large round object that circles the Earth and that shines at night by reflecting light from the sun (satellite of any planet)",
Constellation: "A group of stars that forms a particular shape in the sky and has been named",
Shadows: "An area of darkness created when a source of light is blocked",
Rotation: "The act or process of turning on an axis",
Revolution: "Movement in a circle around a central point or object",
Axis: "The imaginary straight line that something (such as the Earth) turns around",
Speed: "Rate of motion",
Gravity: "The force that causes things to fall towards the Earth",
Mass: "A measure of how much matter is in an object",
["Relative Speed"]: "Your speed in relation to another point in space",
Solid: "Firm or hard : not having the form of a gas or liquid",
Liquid: "Substance that is able to flow freely",
Gas: "A substance (such as oxygen) that is like air and has no fixed shape",
Mass: "A measure of how much matter is in an object",
Energy: "Usable power",
Melt: "Change from a solid to a liquid usually because of heat",
Boil: "To become so hot that bubbles are formed in a liquid and rise to the top",
Transfer: "Move from one place to another",
Convection: "Movement in a gas or liquid in which the warmer parts move up and the colder parts move down",
Conduction: "The movement of heat or electricity through something (such as metal or water)",
Pole: "The place on a magnet where the pull is the strongest",
Attract: "To draw to itself",
Repel: "To force back",
Conductor: "A material through which electricity flows easily",
Electricity: "Moving electrical current",
Igneous: "“Fire made” rock, formed from melted rock material",
Sedimentary: "Rock made of sediments cemented together",
Metamorphic: "Rock formed by heat and pressure",
Mineral: "A naturally occurring substance, neither plant nor animal",
Erosion: "The wearing away of soil and rock particles by waves, wind, running water, or glaciers",
Weathering: "To discolor, disintegrate or affect injuriously, as by the effects of weather ",
Streak: "The color of a mineral’s streak when using a streak plate",
Hardness: "The number on the Mohr’s scale representing the hardness of a mineral",
Fossil: "Any evidence of an organism that lived in the past",
Lava: "The molten, fluid rock that comes from a volcano or volcanic vent",
Population: "All of one type of organism living in an area",
Environment: "The air, water, minerals, organisms and all other external factors surrounding and affecting an organism at any given time",
Habitat: "The home of an organism",
Instinct: "Behavior that is inborn not learned",
Organism: "A living thing that carries out the five basic life functions on its own",
Absorb: "To take in without reflection",
Axis: "The line about which the earth turns",
Beneficial: "Something that is helpful",
Charge: "The positive or negative property of an atom",
Earthquake: "Series of vibrations in the earth’s crust",
["Inherited Behavior"]: "A behavior that is inborn, passed on from a parent",
Magnetism: "The force that causes a magnet to attract materials",
Orbit: "The curved path of a planet or satellite around a celestial body, such as the earth around the sun",
Reflect: "To cast back from a surface",
Rotation: "The movement of the earth turning on its axis",
["Solar Energy"]: "Energy derived from the sun",
["South Poles"]: "One end of a magnet where the pull is the strongest, attracts the North Pole of another magnet",
["North Pull"]: "One end of a magnet where the pull is the strongest, attracts the South Pole of another magnet",
["Volcanic Eruption"]: "The sudden discharge of steam and lava from a volcano",
};

var pickQuestions = function(){
	// Create empty container for questions
	var questions = [];
	// Create array of terms
	var terms = Object.keys(ScienceGradeThree);
	// Starting loop to get 3 questions
	for (i = 1; i < 4; i++) {
		// Picking random terms
		var length = terms.length;
		var termNumber = Math.floor(length*Math.random());
		// Use term number to get term
		var term = terms[termNumber];
		// Get defenition
		var def = ScienceGradeThree[term];
		// Remove term from list
		terms.remove(termNumber);
		// Adding term and defenition to question list
		questions.push(term,def);
	}
	// Sends value back
	return questions;
}

var quizPrompt = ["solid", "dotted", "dashed"];

var pickPrompt = function(){
		// Picking random terms
		var length = quizPrompt.length;
		var promptNumber = Math.floor(length*Math.random());
		// Use term number to get term
		var prompt = quizPrompt[promptNumber];
		return prompt;
	}

var quizDef = [$("#defso").text, $("#defda").text, $("#defdo").text];

var pickDef = function(){
		//Picking random def
		var length = quizDef.length;
		var defNumber = Math.floor(length*Math.random());
		//Use def number to get def
		var def = quizDef[defNumber];
		return def;
	}

var setTimer = function(){
	var sec = 15
	$('#timer span').text(sec);
	var timer = setInterval(function() { 
	   $('#timer span').text(sec--);
	}, 1000);
	return timer;
};

var startGame = function(){
	var questions = pickQuestions();
	$("#solid").text(questions[0]);
	$("#soliddef").text(questions[1]);
	$("#dashed").text(questions[2]);
	$("#dasheddef").text(questions[3]);
	$("#dotted").text(questions[4]);
	$("#dotteddef").text(questions[5]);

	$("#def1").text(questions[1]);
	$("#def2").text(questions[3]);
	$("#def3").text(questions[5]);

	var prompt = pickPrompt();
	$("#prompt").text(prompt);

	debugger;
	var def = pickDef();
	$("#defso").text(prompt);
	$("#defda").text(prompt);
	$("#defdo").text(prompt);


	//Correct Answer

	if ($("#def1").text() === $("#"+prompt+"def").text()) {
		$("#def1").click(function(){
			//make div called
			$(".correct").show();
			$(".questions").hide();
		});

	} else if ($("#def2").text() === $("#"+prompt+"def").text()) {
		$("#def2").click(function(){
			//make div called
			$(".correct").show();
			$(".questions").hide();
		});

	} else if ($("#def3").text() === $("#"+prompt+"def").text()) {
		$("#def3").click(function(){
			//make div called
			$(".correct").show();
			$(".questions").hide();
		});

	};

	//Try Again

	if ($("#def1").text() !== $("#"+prompt+"def").text()) {
		$("#def1").click(function(){
			//make div called
			$(".tryagain").show();
			$(".questions").hide();
		});

	} else if ($("#def2").text() !== $("#"+prompt+"def").text()) {
		$("#def2").click(function(){
			//make div called
			$(".tryagain").show();
			$(".questions").hide();
		});

	} else if ($("#def3").text() !== $("#"+prompt+"def").text()) {
		$("#def3").click(function(){
			//make div called
			$(".tryagain").show();
			$(".questions").hide();
		});

	};
}

// var placePrompt = function(){