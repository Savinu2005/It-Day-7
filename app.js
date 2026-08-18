let num = Math.random() * 10 + 1;
let randomNum = Math.floor(num);

console.log(randomNum);

function btnGuessNumberOnAction() {
    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
}