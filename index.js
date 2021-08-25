var readlineSync = require('readline-sync');
var chalk = require('chalk');

var  score = 0;

console.log(chalk.blue("HELLO!" + "\n"));

var userName = readlineSync.question(chalk.yellowBright("What is your name ? " + "\n"));
console.log(chalk.magentaBright("Welcome " + userName + " to the ULTIMATE ONE PUNCH MAN QUIZ!!!!"));

console.log("------------------------------")

function play(question, options, answer)
{
  var userAnswer = readlineSync.question(question+"\n" + options);

if (userAnswer === answer)
  {
    console.log(chalk.green("You are right!"))
    score = score + 1
  }
else 
{
  console.log(chalk.red("You are wrong!"))
}

console.log(chalk.blueBright("Your current score is : " + score))
console.log("------------------------------")


}

console.log(chalk.black.bgWhite("LEVEL ONE"))
console.log(chalk.italic.cyanBright("You must score at least 3 points to advance to the next level." + '\n'))

console.log("------------------------------")


//List of question


var que1 ={
  question : "What is the name of the first episode of One Punch Man ?",
  options : "a)The Lone Cyborg \n b)The Strongest Man \n c)The Modern Ninja \n",
  answer : "b",
}

var que2 ={
  question : "Who is Saitama's disciple ?",
  options : "a)King \n b)Bang \n c)Genos \n",
  answer : "c",
}

var que3 ={
  question : "How old is Saitama ? ",
  options : "a)25 \n b)30 \n c)24 \n",
  answer : "a",
}

var que4 ={
  question : "What is Saitama's hero name under the Hero Association ? ",
  options : "a)Lightning Genji \n b)Tornado of Terror \n c)Caped Baldy \n ",
  answer : "c",
}

var questionList = [que1, que2, que3, que4,]

for(var i=0 ; i<questionList.length ; i++)
{var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
  }



//LEVEL 2

if (score > 2){
  console.log(chalk.blue("You have advanced to the next level." + "\n"));
  console.log(chalk.black.bgWhite("LEVEL TWO"));
  console.log(chalk.italic.cyanBright("You must score at least 6 points to advance to the next level." + "\n"));
  console.log("------------------------------")


var que5 ={
  question : "Who is top-ranked C-Class hero ? ",
  options : "a)Mumen Rider \n b)TankTop Tiger \n c)Dynamite Man \n ",
  answer : "a",
}

var que6 ={
  question : "What is Genos's hero name under the Hero Association ? ",
  options : "a)Metal Knight \n b)Demon Cyborg \n c)Blast \n ",
  answer : "b",
}

var que7 ={
  question : "Season 1 consist of how many episodes ? ",
  options : "a)12 \n b)13 \n c)10 \n ",
  answer : "a",
}

var que8 ={
  question : "What is the 1st monster that appears in the anime ?",
  options : "a)Crablante \n b)Mosquito Girl \n c)Vaccine Man \n ",
  answer : "c",
}

var questionList = [que5, que6, que7, que8,]

for(var i=0 ; i<questionList.length ; i++)
{var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
  }




// LEVEL 3


if (score>5)
    { console.log(chalk.blue("You have advanced to the next level." + "\n"));
  console.log(chalk.black.bgWhite("LEVEL THREE"));
  console.log(chalk.italic.cyanBright("This is the last level!! " + "\n" + "It's gonna be tough. "));
  console.log("------------------------------")
  
  
  var que9 ={
  question : "Who is Saitama's Japanese voice actor ? ",
  options : "a)Hiroki Yasumoto \n b)Ryūsei Nakao \n c)Makoto Furukawa \n ",
  answer : "c",
}

var que10 ={
  question : "Who defeated Melzargard ?",
  options : "a)Garo \n b)Bang \n c)One Punch Man \n ",
  answer : "b",
}

var que11 ={
  question : "What is the Japanese name of One Punch Man ? ",
  options : "a)Wanpanman \n b)Banpanman \n c)Fanpanman \n ",
  answer : "a",
}

var que12 ={
  question : "How old is Tatsumaki ? ",
  options : "a)25 \n b)28 \n c)30 \n",
  answer : "b",
}
  
var questionList = [que9, que10, que11, que12,]

for(var i=0 ; i<questionList.length ; i++)
{var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
  }

  }
  else {
    console.log(chalk.bold.yellowBright("Sorry, you didn't qualify."));

  }

}

else {console.log(chalk.bold.yellowBright("Sorry, you didn't qualify."));
  
}

console.log("------------------------------")
console.log(chalk.magentaBright(userName + " your final score is : " + score));
if (score>=11)
  {console.log("DAMN, You know a lot!!!!!")}

  else if (score<=10 && score>=6) {
    console.log("You know little bit about the anime! ")}
    
else 
{console.log("Did you watch the anime ??")}
  