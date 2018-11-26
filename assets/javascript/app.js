

// // Create counter to start at the beginning of the game
// var timeLeft = 30;
// var timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == 0) {
//     clearTimeout(timerId);
// //    endGame;
//   } else {
//     timeLeft--;
//     $("#timer").html("Time Remaining" + timeLeft);
//     console.log(timeLeft);

    var count=30;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
        if (count == 0) {
            clearInterval(counter);
            endGame;
        } else {
            count--,
            $("#timer").html("Time Remaining: "  + counter);
        }
            //counter ended, do something here
            $("#timer").html("Time Remaining" + count);
    } 
    
      //Do code for showing the number of seconds here
    
    


  // create variables
var userPick;
var questNum = 0;
var corrAns = 0;
var incorrAns = 0;
// Create ten questions to be answered.
var questions = [{
    Question: "From what tree do acorns come?", 
    choices: ["Christmas", "Redwood", "Oak", "Pine"],
    correctAns: 2,
},
{
    Question: "What is the top color in a rainbow?", 
    choices: ["Orange", "Green", "Yellow", "Red"],
    correctAns: 3,
},
{
    Question: "In the nursery rhyme, who sat on a wall before having a great fall?", 
    choices: ["Old Mother Hubbard", "Humpty Dumpty", "Little Jack Horner", "Little Miss Muffet"],
    correctAns: 1,
},
{
    Question: "Which big country is closest to New Zealand?",
    choices: ["Asia", "Africa", "Australia", "Africa"],
    correctAns: 2,
},
{
    Question: "What is the name of the toy cowboy in Toy Story?",
    choices: ["Woody", "Duke", "Chauncey", "Frank"],
    correctAns: 0,
},
{
    Question: "On a farm a kid is a baby what?",
    choices: ["Human", "Donkey", "Rooster", "Goat"],
    correctAns: 3,
},
{
    Question: "What is the name of the bear in The Jungle Book?", 
    choices: ["Popu", "Baloo", "Mustafa", "Jasmin"],
    correctAns: 1,
},
{
    Question: "Which Italian city is famous for its leaning tower?", 
    choices: ["Pisa", "Salami", "Rome", "Bologna"],
    correctAns: 0,
},
{
    Question: "What sweet food made by bees using nectar from flowers?",
    choices: ["Syrup", "Honey", "Skittles", "Molasses"],
    correctAns: 1,
},
{
    Question: "Which country is home to the kangaroo?",
    choices: ["Tasmania", "Austria", "Brazil", "Australia"],
    correctAns: 3,
},
{
    Question: "What does Fred Flintstone wear around his neck?", 
    choices: ["Ascot", "Bone Necklace", "Tie", "Sabertooth's Tooth"],
    correctAns: 2,
},
{
    Question: "Which fictional detective lived at 221b Baker Street?",
    choices: ["Sherlock Holmes", "Mike Hammer", "Ace Ventura", "Mr. Bean"],
    correctAns: 0,
},
{
    Question: "How many colours are in a rainbow?", 
    choices: ["Five", "Nine", "Seven", "Eight"],
    correctAns: 2,
},{
    Question: "Pharaoh is the title given to the rulers of which ancient county?",
    choices: ["Greece", "Rome", "Turkey", "Egypt"],
    correctAns: 3,
},
{
    Question: "Which English king had six wives?",
    choices: ["Henry 8th", "Charles III", "Patrick IV", "Duffy the Bold"],
    correctAns: 0,
}];

var beginGame; 
var i;

   function beginGame() {
    if (questNum = 10) {
        $("#question").html("GAME OVER");
        endGame 
} else {

        for (i = 0, i < questions.length, i++)  {
        $("#question").html(questions.Question);
        $("#a1").html(choices[0]);
        $("#a2").html(choices[1]);
        $("#a3").html(choices[2]);
        $("#a4").html(choices[3]);
        

    $("#a1").on("click", function() {
        questNum++;
        if(choices[0] === correctAns){
            corrAns++;
            beginGame;
        } else {
            incorrAns++;
            beginGame;
        }
    },
    $("#a2").on("click", function() {
        questNum++;
        if(choices[1] === correctAns){
            corrAns++;
            beginGame;
        } else {
            incorrAns++;
            beginGame;
        }
    },
    $("#a3").on("click", function() {
        questNum++;
        if(choices[2] === correctAns){
            corrAns++;
            beginGame;
        } else {
            incorrAns++;
            beginGame;
        }
    },
    $("#a4").on("click", function() {
        questNum++;
        if(choices[3] === correctAns){
            corrAns++;
            beginGame;
        } else {
            incorrAns++;
            beginGame;
        }

    }
    }



// Player can only answer once for each question
// Game ends when time runs out.
// Page will reveal number of correct answers and number of incorrect answers.

