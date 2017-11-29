const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

// saving the object data as seperate variables
// here we set a default value to use if there is no name value provided in the object
const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);


// setting up variables, but renaming them 'temp to temperature'
const {city, temp: temperature} = person.location;

if (city && temperature) {
  console.log(`it's ${temperature} in ${city}.`);
}



//challenge
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher


console.log(publisherName);


///
/Array Destructuring////
///

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// here it matches stuff up by position, not by name like above!!
// if you wantto skip items, you put a comma, and jump to the next one
// you cant rename, but you can set defaults
const [, city, state = 'New York'] = address;


console.log(`You Are in ${state}`);


//challenge
const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, ,mediumPrice] = item
console.log(`A medium ${product} costs ${mediumPrice}`);
