// randomize function for mixing answers in array
// if (selection) == (correct answer)
$(document).ready(function() {

	alert("Instructions: Click on the correct answer to each Karate Kid trivia question before time expires. If you do not choose an answer before the time expires it will automatically send you to the next question. Good luck!");

	// start game on click
	$("#startButton").click(function(){
		

	// runs a function that will start timer, pull up first question, and provide answer choices

	// create object containing question/answers
		var triviaObject = {
			Q1: "What is the famous phrase Mr. Miyagi says in this scene?",
			Q2: "What is the name of the special move the Karate Kid is about to deploy in this scene?",
			Q3: "Which of the following films has the female in this picture NOT performed in?",
			Q4: "What does Mr. Miyagi do with the chopsticks in this scene?",
			Q5: "What is the name of the dojo represented in this picture?",
			A1: ["Live free or die hard", "Dude, where's my car", "Wax on, wax off", "High kick, low kick"],
			A2: ["The Happy Gilmore", "Crane Kick", "Mega Punch", "Sucker Punch"],
			A3: ["The Saint", "Back To The Future", "Karate Kid II", "Cocktail"],
			A4: ["Catch a fly", "Eat some great sushi", "Throw them at the Karate Kid", "Break them in half"],
			A5:	["King Cobra", "Cobra Kai", "Ninja Turtles", "It was never mentioned during the movie"]
		};
		console.log(triviaObject);
		function askQuestions() {
			// ask question
			$("#question").html(triviaObject.Q1);
			// run for loop to display answers
			for (i = 0; i < triviaObject.A1.length; i++ )
				var btn = $("<button>" + triviaObject.A1[i] + "</button>")
				btn.attr("answer", triviaObject.A1[i]);
				btn.addClass("A1");
				btn.appendTo("#answerButtons");
			// add eventListener when user chooses answer
			$(".A1").on("click", function(){
				if ($(".A1") === "Wax on, wax off")

			})
				



				// $(".answer").html(A1[i]);
		};
		askQuestions();

	});
});