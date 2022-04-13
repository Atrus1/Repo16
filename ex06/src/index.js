 const firstName = (firstName) => {
    return firstName.toUpperCase();
  }
  
   const lastName = (lastName) => {
    return lastName.toLowerCase();
  }

 console.log(firstName("Text"));
 console.log(lastName("Text"));
 exports.firstName = firstName;
 exports.lastName = lastName;