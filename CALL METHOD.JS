const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
 console.log(person.fullName.call(person1));







 const x = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const y= {
    firstName:"John",
    lastName: "Doe"
  }
  const z = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
  console.log(x.fullName.call(z));






  const abc = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const pqr = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(abc.fullName.call(pqr, "Oslo", "Norway"));