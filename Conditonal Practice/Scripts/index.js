let marks = prompt("Enter Your Marks");
// console.log(marks,typeof marks)
let totalMark = Number(marks);
// console.log(totalMark, typeof totalMark)

let oddEven;
if (totalMark%2===0){
    oddEven='even'
}else{
    oddEven='odd'
}

if (totalMark >= 80) {
  console.log(marks+" is distrinction and "+oddEven);
} else {
  console.log(marks+" is not distrinction and "+oddEven);
}
