/*console.log("hello world");
const x = 50;
const y = 50;
//console.log(y+' '+x);
if(x>y)
{
    console.log("in if "+x+" is greater than "+y);
}
else
{
    console.log("in else "+y+" is greater than "+x);
}
function square(x)
{
    return x*x;
}
console.log("square of "+ x + " is = "+ square(x));
*/
/*var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "$ $",
    T : " O "
}));




*/
var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}*/

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']*/

var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)


/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('life');
console.log(getRandomJokeWithTag)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']*/

var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
  'exclude_tags': ['dirty', 'racist', 'marriage']
});
console.log(getRandomJoke)
