// randomize function for mixing answers in array
// if (selection) == (correct answer)
$(document).ready(function() {

// runs a function that will start timer, pull up first question, and provide answer choices
		var time = 31;
		var correct = 0;
		var wrong = 0;
		var count;

// create an array containing question, answers, correct answer and image
		var triviaArray = [
			{
				question: "What is the famous phrase Mr. Miyagi says in this scene?",
				image: "assets/images/flyingkick.png",
				answer: ["Live free or die hard", "Dude, where's my car", "Wax on, wax off", "High kick, low kick"],
				correctAnswer: "Wax on, wax off"
			},
			{
				question: "What is the name of the special move the Karate Kid is about to deploy in this scene?",
				image: "assets/images/flyingkick.png",
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
		console.log(triviaArray[3].image)
		console.log(triviaArray[4].answer[3]);


		// create timer function
		function runTimer() {
			count = setInterval(countDown, 1000);
			countDown();
		};
		
		// function reset() {
		// 	clearInterval(count);
		// };

		// create counting function for runTimer  
		function countDown() {
				if (time > 0) {
					time--;
					var timeString = time.toString();			 	
				 	$("#timer").html(timeString);
				 	console.log(timeString);
				} else if (time == 0) {
					clearInterval(count);
				}
		};

	$("#startButton").click(function(){
		runTimer();

		
		
		// ask the quest
		function ask() {
			console.log('working');
			for (i=0; i < triviaArray.length; i++) {
				$("#question").html(triviaArray[i].question);
				$("#questionImage").attr("src", triviaArray[i].image);
			};
			
				// run for loop to display answers
				
				for (i = 0; i < triviaArray[i].answer.length; i++ ) {
					var btn = $("<button>" + triviaArray[i].answer[i] + "</button>");
					btn.attr("answer", triviaArray[i].answer[i]);
					btn.attr("type", "radio");
					btn.addClass("answerButtons");
					btn.appendTo("#answerButtons");
				};
				


		};
		ask();


		// radiobuttons instead of buttons
		// <input type="radio" name="data" value="male">Male<br


	});

	function checkAnswer() {
			if ($("answer") === (triviaArray[0].answer[3] || triviaArray[2].answer[2] || triviaArray[3].answer[3] || triviaArray[4].answer[1])) {
				time == 0;
				var newCorrect = correct++;
				$("#correct").html("Correct: " + newCorrect);
				console.log('correctworking');
			} else {
				time == 0;
				var newWrong = wrong++;
				$("#wrong").html("Wrong: " + newWrong);
				runTimer();
				console.log("wrongworking")
			};
		};

$(document).on("click", "#answerButtons", function() {
			checkAnswer();
			console.log('checkAnswerworking');
		});
});