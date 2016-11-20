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
		
		
		// create an array containing question, answers, correct answer and image
		var triviaArray = [
			{
				question: "What is the famous phrase Mr. Miyagi says in this scene?",
				image: "assets/images/cobra.png",
				answer: ["Live free or die hard", "Dude, where's my car", "Wax on, wax off", "High kick, low kick"],
				correctAnswer: "Wax on, wax off"
			},
			{
				question: "What is the name of the special move the Karate Kid is about to deploy in this scene?",
				image: "assets/images/cobra.png",
				answer: ["The Happy Gilmore", "Crane Kick", "Mega Punch", "Sucker Punch"],
				correctAnswer: "Crane Kick"
			},
			{
				question: "Which of the following films has the female in this picture NOT performed in?",
				image: "assets/images/cobra.png",
				answer: ["The Saint", "Back To The Future", "Karate Kid II", "Cocktail"],
				correctAnswer: "Karate Kid II"
			},
			{
				question: "What does Mr. Miyagi do with the chopsticks in this scene?",
				image: "assets/images/cobra.png",
				answer: ["Catch a fly with chopsticks", "Eat some great sushi with chopsticks", "Throw the chopsticks at the Karate Kid", "Break the chopsticks in half"],
				correctAnswer: "Catch a fly with chopsticks"
			},
			{
				question: "What is the name of the dojo represented in this picture?",
				image: "assets/images/cobra.png",
				answer: ["King Cobra", "Cobra Kai", "Ninja Turtles", "It was never mentioned during the movie"],
				correctAnswer: "Cobra Kai"
			}
		];
		// test triviaArray
		console.log(triviaArray[0].question);
		console.log(triviaArray[3].answer[2]);
		
		

		// function to reset the timer and question/answer buttons
		function reset() {
			clearInterval(count);
			time = 31;
			$("#answerButtons").empty();
		};
		
		// ask the quest
		function ask() {
			// for (i=0; i < triviaArray[i].length; i++) {
				$("#question").html(triviaArray[0].question);
				$("#questionImage").append(triviaArray[0].image);

				// run for loop to display answers
				for (i = 0; i < triviaArray[0].answer[i].length; i++ ) {
					var btn = $("<button>" + triviaArray[0].answer[i] + "</button>");
					btn.attr("answer", triviaArray[0].answer[i]);
					btn.addClass("A1");
					btn.appendTo("#answerButtons");
				};
			// };
			// start countdown
			runTimer();
			

			


		};
		ask();

		// function askQ2() {
		// 	// ask question
		// 	$("#question").html(triviaObject.Q2);

		// 	$("#questionImage").append(triviaObject.image2);
		// 	// run for loop to display answers
		// 	for (i = 0; i < triviaObject.A2.length; i++ ) {
		// 		var btn = $("<button>" + triviaObject.A2[i] + "</button>");
		// 		btn.attr("answer", triviaObject.A2[i]);
		// 		btn.addClass("A2");
		// 		btn.appendTo("#answerButtons");
		// 	};
		// 	console.log(askQ2);		
		// 	runTimer();
		// 	// add eventListener when user chooses answer
		// 	// $(".A1").on("click", function(){
		// 	// 	if ($(".A1") === "Wax on, wax off")
		// };
			
		// function askQ3() {
		// 	// ask question
		// 	$("#question").html(triviaObject.Q3);

		// 	$("#questionImage").append(triviaObject.image3);
		// 	// run for loop to display answers
		// 	for (i = 0; i < triviaObject.A3.length; i++ ) {
		// 		var btn = $("<button>" + triviaObject.A3[i] + "</button>");
		// 		btn.attr("answer", triviaObject.A3[i]);
		// 		btn.addClass("A3");
		// 		btn.appendTo("#answerButtons");
		// 	};
		// 	console.log(askQ3);
		// };		

		// function askQ4() {
		// 	// ask question
		// 	$("#question").html(triviaObject.Q4);

		// 	$("#questionImage").append(triviaObject.image4);
		// 	// run for loop to display answers
		// 	for (i = 0; i < triviaObject.A4.length; i++ ) {
		// 		var btn = $("<button>" + triviaObject.A4[i] + "</button>");
		// 		btn.attr("answer", triviaObject.A1[i]);
		// 		btn.addClass("A4");
		// 		btn.appendTo("#answerButtons");
		// 	};
		// 	console.log(askQ4);
		// };

				// $(".answer").html(A1[i]);
		
		
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

	});
});