//Question One ==> forEach

const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase()); // used the toLowerCase();
   
});


//Create an array that has the numbers of the array numbers squared
const numbers = [1, 5, 8]
squareArr2 = numbers.map(num => num ** 2);
    console.log(squareArr2)

console.log('#'.repeat(19))

    const numbers1 = [1, 2, 3];
    const timesTwo = numbers1.map(num => num * 2);
    console.log(timesTwo)
console.log('#'.repeat(19))

    const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
    let names= instructors.map(function(element){
        return element;
    })
    console.log(names)
    console.log('#'.repeat(19))


const newInstructorsList =[instructors.map(function(element){
    return element.concat(' is awsome ');
})]
console.log(newInstructorsList)

console.log('#'.repeat(19))

// Question 5:

// Filter out all "jerks"!
// Put them in an array called jerks

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
let jerks =[];
jerks = people.filter(function (element){
    if ( element === "jerks")
    {
        return element;
    }
   
})
console.log(jerks);

console.log('#'.repeat(19))



// Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4

nums = [8,2,2,4]
newnumber = []
let sizeNums = nums.length;
newnumber = nums.reduce((prev,curr)=>(prev+curr)) 
console.log(newnumber/sizeNums)  // Answer gonna be 4




console.log('#'.repeat(19))

// Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"

// function reversFun(string) {
//     return string.split("").reverse().join("").split(" ").reverse().join(" ")
// };

// console.log(reversFun("waled"))

// const namess = ["waled"];
// const newArr = namess.map(ele) =  ele.split(" ").reverse().join(" ")

//     return  ele


const reversWorld = (string) => {
    return string.split("").reverse().join("");
  };
  console.log(reversWorld("caterpillar"))


console.log('#'.repeat(19))

/*
Create an object to store the
following information about your favorite
movie: title (a string), duration (a number), and stars
(an array of strings). Print out the movie information like so:
"Puff the Magic Dragon lasts for 30 minutes. Stars:
 Puff, Jackie, Living Sneezes." Maybe the join method will be helpful here
*/

let favoriteMovie = {
    title: "The Red Notice",
    duration: 100,
    starts : ['Ryan Reynolds', 'The Rock', 'Gal Gadot'],
    movieInfo: function() {
            return `my favorit movie ${this.title} in 2021, the movei take maybe ${this.duration} minutes ${this.starts[0]} was really funny in the movie`;
    }
}

console.log(favoriteMovie.movieInfo())