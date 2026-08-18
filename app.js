// let num = Math.random() * 10 + 1;
// let randomNum = Math.floor(num);

// console.log(randomNum);

// function btnGuessNumberOnAction() {
//     Swal.fire({
//         title: "Custom width, padding, color, background.",
//         width: 600,
//         padding: "3em",
//         color: "#716add",
//         background: "#fff url(/images/trees.png)",
//         backdrop: `
//     rgba(0,0,123,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `
//     });
// }





// let
// var
// const




// {
//     let name = "John Doe";
//     var age = 30;
// }

// console.log(name);
// console.log(age);


// const customerList = [];

// customerList.push("John Doe");

// console.log(customerList);

// // customerList = "saman"

// console.log(typeof customerList);


// const customerList = [];


// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// let revAr = customerList.reverse();

// console.log(revAr);



const products = [
{name: "bus",instock: true, price: 100},
{name: "car",instock: false, price: 200},
{name: "bike",instock: true, price: 300},
{name: "train",instock: false, price: 400},
];


// let inStockItems = products.filter(product => product.inStock == false);

// let inStockItems = products.filter(
//     function (product) {
//         return productFilter(product)
//     }
// )

// function productFilter(product) {
//     return product.inStock == true;
// }


// console.log(inStockItems);



// function getSum(num1, num2) {
//     return num1 + num2;
// }   

// console.log(getSum(10, 20));


let getSum = (num1, num2) => {
    return num1 + num2;
};

console.log(getSum(10, 20));