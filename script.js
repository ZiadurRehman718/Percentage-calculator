// Get marks from user input
var SindhiMarks = +prompt("Enter the marks obtained in Sindhi:")
var PhysicsMarks = +prompt("Enter the marks obtained in Physics:")
var MathsMarks = +prompt("Enter the marks obtained in Maths:")
var EnglishMarks = +prompt("Enter the marks obtained in English:")
var UrduMarks = +prompt("Enter the marks obtained in Urdu:")


var totalMarks = 500;
var MarksObtained = SindhiMarks + PhysicsMarks + MathsMarks + EnglishMarks + UrduMarks 
var percentage = ( MarksObtained / totalMarks ) * 100

alert(`Total Marks: ${totalMarks}\nMarks Obtained: ${MarksObtained}\nPercentage: ${percentage}%`)