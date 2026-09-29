// alert('working')
let cart = [];
function addItem() {
  // let userData =  document.getElementById('userInput').value
  if (userInput.value.trim() == "") {
    alert("input should not be empty");
  } else {
    cart.push(userInput.value);
    userInput.value = "";
    displayItems();
  }
}

function displayItems() {
  document.getElementById("display").innerHTML = "";
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    document.getElementById("display").innerHTML += `
        <p class="bg-primary text-white p-2 w-25 mx-auto">${index + 1}. ${element}</p>
        <button class="btn btn-success">Edit item</button>
        <button class="btn btn-danger" onclick="deleteItem(${element})">Delete item</button>
      `;
  }
}
function deleteLast() {
  cart.pop();
  displayItems();
}

function deleteAllItems() {
  if (cart.length < 1) {
    alert("There is no item to delete");
  } else {
    let check = confirm("Are you sure you want to delete?");
    if (check == true) {
      cart.splice(0, cart.length);

      displayItems();
    } else {
      displayItems();
    }
  }
}

function deleteItem(del){
  // alert('working')
  cart.splice(0, )
}
// confirm()
// console.log(confirm);

// let username = 'samson'
// console.log(username.length);
// document.getElementById('show').style.display = 'block'