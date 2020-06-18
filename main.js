import customers from './customers.js'

//you will need their name, address, phone numbers, thumbnail, birthdate, and the date they became a customer

let person = [{
  thumbNail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg',
  name: "Pauline Hughes",
  email: "pauline.hughes@example.com" ,
  address: "3747 Elgin St, Roseville, IN 93281"
  // birthdate: "12/08/1977" ,
  // startDay: "06/29/2004" 
}]

function listCustomers(personArray) {
  let customerList = document.querySelector("#customer-list");
  console.log(customerList);

  for (let customer of customers) {
    let newCustomer = document.createElement("li");

//image
    let customerImage = document.createElement("img")
    customerImage.src = `${customer.picture.thumbnail}`;
    customerImage.classList.add("br-100","h4","w4","dib","ba", "b--black-05", "pa2");

    let customerText = document.createTextNode(`${customer.name.title}. ${customer.name.first} ${customer.name.last} `);
    let cName = document.createElement("p");

    let cAddress = document.createTextNode(`${customer.location.street} `)
    let cCityState = document.createTextNode(`${customer.location.city} ${customer.location.state} `)
    let customerAddress = document.createElement("P");
    
    
    // let customerEmail = document.createElement("email");
    // customerEmail.src = `${customer.email}`;

    let customerEmail = document.createTextNode(`${customer.email}`);
    let address = document.createElement("p");
    let email = document.createElement("p");
    address.classList.add("address", "measure", "lh-copy");



//Name
    customerList.append(newCustomer);
    newCustomer.append(customerText, cAddress);
    
    //prepend allowed the image to show
    newCustomer.prepend(customerImage);
    newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver", "display");
//Email
    email.classList.add("email");
    address.appendChild(customerText);
    email.appendChild(customerEmail);
    newCustomer.append(address, email);

//Street Address
//Date of Birth
  };
};

listCustomers(person);

