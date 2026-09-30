// alert('working')
let cart = JSON.parse(localStorage.getItem('userInput')) || [];
function addItem() {
  // let userData =  document.getElementById('userInput').value
  if (userInput.value.trim() == "") {
    alert("input should not be empty");
  } else {
    cart.push(userInput.value);
    localStorage.setItem('userInput', JSON.stringify(cart))
    userInput.value = "";
    displayItems();
  }
}

function displayItems() {
  document.getElementById("display").innerHTML = "";
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    document.getElementById("display").innerHTML += `
        <p class="bg-primary text-white p-2 w-25 rounded my-2 mx-auto">${index + 1}. ${element}</p>
        <button class="btn btn-success">Edit item</button>
        <button class="btn btn-danger" onclick="deleteItem(${index})">Delete item</button>
      `;
  }
}
function deleteLast() {
  cart.pop();
    localStorage.setItem('userInput', JSON.stringify(cart))
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

function deleteItem(del) {
  var confirmation = confirm("Are you sure you want to delete?");
if (confirmation) {
  cart.splice(del, 1);
  displayItems(); 
}else{
  displayItems()
}
}
// confirm()
// console.log(confirm);

// let username = 'samson'
// console.log(username.length);
// document.getElementById('show').style.display = 'block'

displayItems()
