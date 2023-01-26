let shoppingBagCount = document.getElementById("shoppingBags");
console.log(shoppingBagCount);

let count = 0;
let buttons = document.querySelectorAll("button");
console.log(buttons);

for (let button of buttons) {
  button.addEventListener("click", () => {
    count += 1;
    shoppingBagCount.innerText = " " + count;
    //alert("Thank you \n\t Item added to order");
  });
}
