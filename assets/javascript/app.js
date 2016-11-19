// randomize function for mixing answers in array
// if (selection) == (correct answer)
$(document).ready(function() {

	// alert("Instructions: Click on the correct answer to each Karate Kid trivia question before time expires. If you do not choose an answer before the time expires it will automatically send you to the next question. Good luck!");

	// start game on click
// 	var timer = {
//     time:30,
//     reset: function(){
//         timer.time = 30;
//         $("#timer").html("30");
//     },
//     start: function(){
//         counter = setInterval(timer.count, 30000);
//     },
//     count: function(){
//         timer.time--;
//         var converted = timer.timeConverter(stopwatch.time);
//         $('#display').html(converted);
//     },
//     timeConverter: function(){
//         if (timer.time === 0){
//             seconds = time;
//         }
//         if (minutes === 0){
//             minutes = "00";
//         } else if (minutes < 10){
//             minutes = "0" + minutes;
//         }
//         return minutes + ":" + seconds;
//     }
// };

	$("#startButton").click(function(){
		

	// runs a function that will start timer, pull up first question, and provide answer choices
		var time = 31;
		var correct;
		var wrong;
		
		
		function runTimer() {
			var count = setInterval(countDown, 1000);
			
			function countDown() {
				if (time > 0) {
					time--;
					var timeString = time.toString();			 	
				 	$("#timer").html(timeString);
				 	console.log(timeString);
				} else {
					reset();
				};
						
			};	
			
		};
		
		
		// create object containing question/answers
		var triviaObject = {
			Q1: "What is the famous phrase Mr. Miyagi says in this scene?",
			Q2: "What is the name of the special move the Karate Kid is about to deploy in this scene?",
			Q3: "Which of the following films has the female in this picture NOT performed in?",
			Q4: "What does Mr. Miyagi do with the chopsticks in this scene?",
			Q5: "What is the name of the dojo represented in this picture?",
			image1: "assets/images/cobra.png",
			image2: "assets/images/cobra.png",
			image3: "assets/images/cobra.png",
			image4: "assets/images/cobra.png",
			A1: ["Live free or die hard", "Dude, where's my car", "Wax on, wax off", "High kick, low kick"],
			A2: ["The Happy Gilmore", "Crane Kick", "Mega Punch", "Sucker Punch"],
			A3: ["The Saint", "Back To The Future", "Karate Kid II", "Cocktail"],
			A4: ["Catch a fly", "Eat some great sushi", "Throw them at the Karate Kid", "Break them in half"],
			A5:	["King Cobra", "Cobra Kai", "Ninja Turtles", "It was never mentioned during the movie"]
		};
		
		// console.log(triviaObject);

		// function to reset the timer and question/answer buttons
		function reset() {
			clearInterval(count);
			time = 31;
			$("#answerButtons").empty();


		};
		
		// ask the quest
		function askQ1() {
			// ask question
			$("#question").html(triviaObject.Q1);

			$("#questionImage").append(triviaObject.image1);
			// run for loop to display answers
			for (i = 0; i < triviaObject.A1.length; i++ ) {
				var btn = $("<button>" + triviaObject.A1[i] + "</button>");
				btn.attr("answer", triviaObject.A1[i]);
				btn.addClass("A1");
				btn.appendTo("#answerButtons");
			};
			// start countdown
			runTimer();

			$("#startButton").on("click", "A1" , function() {
				if (A1 == "Wax on, wax off") {
					correct++;
					("#startButton").html("That is correct, Danielson.");
					reset();
					Q2();
				} else if (time === 0) {
					wrong++;
					reset();
					Q2();
				} else if (A1 !== "Wax on, wax off") {
					wrong++;
					reset();
					Q2();
				}
			});


		};

		function askQ2() {
			// ask question
			$("#question").html(triviaObject.Q2);

			$("#questionImage").append(triviaObject.image2);
			// run for loop to display answers
			for (i = 0; i < triviaObject.A2.length; i++ ) {
				var btn = $("<button>" + triviaObject.A2[i] + "</button>");
				btn.attr("answer", triviaObject.A2[i]);
				btn.addClass("A2");
				btn.appendTo("#answerButtons");
			};
			console.log(askQ2);		
			runTimer();
			// add eventListener when user chooses answer
			// $(".A1").on("click", function(){
			// 	if ($(".A1") === "Wax on, wax off")
		};
			
		function askQ3() {
			// ask question
			$("#question").html(triviaObject.Q3);

			$("#questionImage").append(triviaObject.image3);
			// run for loop to display answers
			for (i = 0; i < triviaObject.A3.length; i++ ) {
				var btn = $("<button>" + triviaObject.A3[i] + "</button>");
				btn.attr("answer", triviaObject.A3[i]);
				btn.addClass("A3");
				btn.appendTo("#answerButtons");
			};
			console.log(askQ3);
		};		

		function askQ4() {
			// ask question
			$("#question").html(triviaObject.Q4);

			$("#questionImage").append(triviaObject.image4);
			// run for loop to display answers
			for (i = 0; i < triviaObject.A4.length; i++ ) {
				var btn = $("<button>" + triviaObject.A4[i] + "</button>");
				btn.attr("answer", triviaObject.A1[i]);
				btn.addClass("A4");
				btn.appendTo("#answerButtons");
			};
			console.log(askQ4);
		};

				// $(".answer").html(A1[i]);
		
		askQ1();

	});
});