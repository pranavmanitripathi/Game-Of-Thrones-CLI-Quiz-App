var chalk=require('chalk');
var readlinesync=require('readline-sync');
console.log("Welcome to the "+ chalk.bold.cyan("Game Of Thrones Quiz"));
var username=readlinesync.question(chalk.bold.yellow("May I know your name? \n"));
console.log("Heyy "+chalk.blue(username)+" lets get started\n");
console.log(chalk.bold.blue("General Instructions:"));
console.log(chalk.bold.blue("\n1.There are total 10 questions in this quiz  and  with 4 and 7 correct  responses you will recach to level 1  and level 2 respectively. \n"));
console.log(chalk.bold.blue("2.It contains single choice questions."));
var score=0;
var questions=[
 {
 question:chalk.bold.yellow("\nWho is known as The Kingslayer ?")+'\na.Sandor Clegane\nb.Joffrey Baratheon\nc.Jaime Lannister\nd.Eddard Stark\n',
 answer:"c",
},

 {
  question:  chalk.bold.yellow("\nWhat was the name of Jon Snow's direwolf? ")+'\na.Nymeria\nb.Summer\nc.Lady\nd.Ghost\n',
  answer: "d"
},
{
  question:  chalk.bold.yellow("\nWhat does Bran Stark repeatedly dream of? ")+'\na.Direwolves\nb.A three-eyed raven\nc.The Stark family crypt\nd.White Walkers\n',
  answer: "b"
},
{
   question:  chalk.bold.yellow("\nWhat does Tyrion murder his father with? ")+'\na.Crossbow\nb.Poison\nc.Mace\nd.Sword\n',
  answer: "a"

},
{
   question:  chalk.bold.yellow("\nWhat was Lord Petyr Baelish's role on the Small Council?")+'\na.Master of Coin\nb.Lord Commander of the Kingsguard\nc.Master of War\nd.Master of Ships\n',
  answer: "a"
},
{
  question:  chalk.bold.yellow("\nWho is Robb Stark's mother?")+'\na.Talisa Stark\nb.Sansa Stark\nc.Catelyn Stark\nd.Caty Stark\n',
  answer: "c"
},
{
 question:  chalk.bold.yellow("\nIn which territory is Mance Rayder recognized as king? ")+'\na.House Tyrell\nb.Beyond the Wall\nc.Kings Landing\nd.Westeros\n',
  answer: "b"
},
{
 question:  chalk.bold.yellow("\nWhat is the meaning of ")+chalk.blue("Valar morghulis ")+ chalk.bold.yellow(", the Valyrian aphorism?")+'\na.All men must die\nb.Do the best. Be the best\nc.All men must survive\nd.Where there is a will, there is a way\n',
  answer: "a"
},
{
  question: chalk.bold.yellow("\nWhat is the name of the deadly disease that causes the surface of the skin to harden and calcify?")+'\na.Black Trump virus\nb.Geostigma\nc.Greyscale\nd.Lampington disease\n',
  answer: "c" 
},
{
  question: chalk.bold.yellow("\nWho said this memorable line:") +chalk.blue(" When you play the game of thrones, you win or you die")+"."+'\na.Cersei Lannister\nb.Daenerys Targaryen\nc.Tywin Lannister\nd.Ned Stark\n',
  answer: "a" 
}
]

function quiz(question,answer){
  var useranswer=readlinesync.question(question);
  if(useranswer.toUpperCase()===answer.toUpperCase()){
     score+=1;
    console.log(chalk.green("Hooray!!correct answer and your score is ")+score);
  

  }
  else{
    score-=1;
     console.log(chalk.red("Oops!!wrong answer and your score is ")+score);
  }
}



for(var i=0;i<questions.length;i++){
   var currentquestion=questions[i];
   quiz(currentquestion.question,currentquestion.answer);
}
var highScores = [
  {
    name: "Pranav",
    score: 10,
  },

  {
    name: "Kishan",
    score: 10,
  },
]


console.log(chalk.bold.cyan("\nFinal score : ")+chalk.blue(score)+" / 10");
if(score>=7){
   console.log(chalk.bold.yellow("\nCongrats!!!you have cleared the level two"));
}
else if(score<7 && score>=4){
  console.log(chalk.bold.yellow("\nCongrats!!!you have cleared the level one"));
}
else{
  console.log(chalk.bold.yellow("\nYou are in level zero"));
}

console.log(chalk.bold.yellow("\nCurrent Scoreboard"));
for(var i=0;i<highScores.length;i++){
  console.log("Name: "+chalk.bold.green(highScores[i].name)+","+" Score: "+chalk.bold.green(highScores[i].score+"."));
}
console.log(chalk.bold.cyan("\nIf your score is greater than highscores then send     screenshot to me.\n"));

console.log(chalk.bold.green("Thanks for playing ")+chalk.blue(username)+"....");




