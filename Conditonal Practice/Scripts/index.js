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
  document.write(marks+" is "+oddEven+" and distrinction");
} else {
  document.write(marks+" is "+oddEven+ " and not distrinction");
}
