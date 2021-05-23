'use strict';
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  //answer :
  const answer = fruits.toString();
  console.log(answer);

  const answer2 = fruits.join(',');
  console.log(answer2);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  //answer :
  const answer = fruits.split(',');

  console.log(answer);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  // answer :
  const answer = array.sort((a, b) => b - a);

  console.log(answer);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  const answer = [];

  // answer :
  array.forEach((num) => {
    const tmp = answer.push(num);
  });

  const tmp = answer.splice(0, 2);

  console.log(answer);
}

console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const answer = students.find((student) => students.score === 90);
  console.log(answer);
}

// Q6. make an array of enrolled students
{
  const answer = students.filter((student) => student.enrolled);
  console.log(answer);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const answer = students.map((student) => students.score);

  console.log(answer);
}

// Q8. check if there is a student with the score lower than 50
{
  const answer = students.filter((student) => student.score < 50);

  console.log(answer);
}

// Q9. compute students' average score
{
  const scoreArray = students.map((student) => student.score);

  const totalScore = scoreArray.reduce((sum, currValue) => sum + currValue);

  const averageScore = totalScore / students.length;

  console.log(averageScore);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scoreArray = students.map((student) => student.score);

  const answer = scoreArray.toString();

  console.log(answer);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scoreArray = students.map((student) => student.score);

  const sortedScoreArray = scoreArray.sort((a, b) => a - b);

  const answer = sortedScoreArray.toString();

  console.log(answer);
}
