import React from "react";
import Card from "./Card";
import contacts from "../contacts";

//the below code looks very repetitive
// we are individually writting the contacts
// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>

//       <Card
//         name={contacts[0].name}
//         img={contacts[0].imgURL}
//         tel={contacts[0].phone}
//         email={contacts[0].email}
//       />
//       <Card
//         name={contacts[1].name}
//         img={contacts[1].imgURL}
//         tel={contacts[1].phone}
//         email={contacts[1].email}
//       />
//       <Card
//         name={contacts[2].name}
//         img={contacts[2].imgURL}
//         tel={contacts[2].phone}
//         email={contacts[2].email}
//       />
//     </div>
//   );
// }

//**intro to map functions */
//we can access the contents of Contacts bcz we are impoting that file here
//Contacts.map() ==> this is a map function
// it may contain functions inside it

//this function is called by map function for every js obj
// it takes parameter contacts that is a javascript object of contacts.js
//but we get a warning after writting this
// onr field is mandatory here, we have to give key=someValue that is unique among all the contact objects
function createCard(contact) {
  return (
    <Card
      // key added to remove the warning
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* for every item in Contacts file it will call the  createCard function*/}
      {/* Contacts contain javascript objects and .map ==> loops through all the js obj in Contacts file */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
