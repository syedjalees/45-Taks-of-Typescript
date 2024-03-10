// Task 1
// System applications for Typescript are downloaded

console.log("Hello World");

// Task 2
let personName: string = "Eric";
console.log(`Hello ${personName},Would you like to learn some python today?`);

// Task 3
let personName: string = "Syed Jalees";
console.log("lowercase:", personName. toLowerCase());
console.log("upperCase:", personName. toUpperCase());
console.log("titleCase:", personName. replace(/\b\w/g,c => c.toUpperCase()));

// Task 4
let quote : string = "A person who never made a mistake never tried any thing new.";
let author : string = "Albert Einstein";
console.log(`${author}, once said, "${quote}"`);

//  Task 5
let quote : string = "A person who never made a mistake never tried any thing new.";
let famous_person : string = "Albert Einstein";
let message : string = `${famous_person} once said,"${quote}"`;
console.log(message);

// Task 6
let personName: string = "\t\n      Jalees Akbar    \n\t";
console.log("Original:", personName);
console.log("Stripped:",personName.trim());

//  Task 7 & 8 both are combined 
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//  Task 9
let favoriteNumber: number = 4;
console.log(`My favoriteNumber is ${favoriteNumber}.`);

// Task 10

// author : [Syed Jalees Akbar]
// Date : [Sunday, March 3/2024]

// //task 9 : printing my favorite number
let favoriteNumber : number = 4;
//revealing my favorite number in a message formate.
console.log(`my favorite message is ${favoriteNumber}.`);

// Task 11
let names : string[] = ["Uzair","Faizan","Zain","Saqlain"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Task 12 
let names: string[]= ["Ali","Uzair","Faizan","Zain"];
let message : string = "Do you like to play with me";
console.log(names[0]+" "+message);
console.log(names[1]+" "+message);
console.log(names[2]+" "+message);
console.log(names[3]+" "+message);

// Task 13
let transporation : string[] = ["Honda MotorCycle","Audi","Honda City"];
transporation.map((items)=>console.log(`I would like to own a ${items}`));

// Task 14
let guestArr : string[] = ["Ali","Haseeb","Uzair"];
guestArr.map((items)=>(console.log(`Dear ${items}, You are invited to the dinner`)));

// Task 15
let guestArr : string[] = ["Ali","Haseeb","Uzair"];
let canNotAttend : string = "Uzair"
 // console.log(canNotAttend+" "+"can not attend the dinner.");

let newGuest : string = "Faizan"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);

guestArr.map((items)=> console.log(`Dear ${items}, You are invited to the dinner.`));

// Task 16 
// 16(1)
let guestArr: string[] = ["Ali","Haseeb","Faizan"];
let canNotAttend: string = "Ali"
let newGuest: string = "Wajahat"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);

guestArr.map((items)=> console.log(`Dear ${items}, I would found a bigger dinner table so i am invited more peoples.`));
// // 16(2)
let guestBeg : string = "Muizz"
guestArr.unshift(guestBeg);
console.log(guestArr);

// // 16(3)
let middleGuest : string = "Fatima"
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr);

// // 16(4)
guestArr.push("Zeeshan")
console.log(guestArr);

// // 16(5)
guestArr.map((items)=> console.log(`Dear ${items}, You are invited in more people list on dinner`));


// Task 17
let guestList: string[] = [ "Muizz", "Wajahat", "Fatima", "Haseeb", "Faizan", "Zeeshan"];
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});

console.log(
  `Sorry ${guestList[2]} and ${guestList[3]} can't come to dinner. \n`,
);

// Modified List
guestList.splice(2, 1, "Babar");
guestList.splice(3, 1, "Rizwan");

console.log(
  "Great News! I got the large table now i am inviting some other my cool friends",
);

guestList.push("Uzair", "Haidar", "Aoun");
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});
// Start
console.log("I am Sorry Friends! I can't invite you all to dinner because i can\'t arrive at a time at my new dinner table so that i have to invite only 2 friends");

for(let i = 0; i < guestList.length + 2; i++){
  guestList.pop()
}
guestList.map(guest => {
   console.log(`Hello ${guest} i am inviting you to please join my dinner party. \n`)
})
guestList.pop()
guestList.pop()

guestList.map(guest => {
console.log(guest)
})


// Task 18
let places: string[] = ["London", "Turkey", "New York", "Dubai", "Italy"];


console.log(places);

console.log([...places].sort());
console.log(places);

console.log([...places].reverse());
 console.log(places);

 places = places.reverse();
console.log(places);

places.sort();
console.log(places);

 places.reverse();
console.log(places);

// Task 19
let guestList: string[] = ["Muizz", "Wajahat", "Fatima", "Haseeb", "Faizan"];
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});

console.log(
  `Sorry ${guestList[2]} and ${guestList[3]} can't come to dinner. \n`,
);

// Modified List
guestList.splice(2, 1, "Babar");
guestList.splice(3, 1, "Rizwan");

console.log(
  "Great News! I got the large table now i am inviting some other my cool friends",
);

guestList.push("Uzair", "Haider", "Saad");
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});

// Start
console.log(`My Total Guests are ${guestList.length}`);


// Task 20
let cities: string[] = [];
let mountains: string[] = [];
let rivers: string[] = [];
let coutries: string[] = [];
let languages: string[] = [];

function createArray(arrayname: any[], ...items: string[]){
  arrayname.push(items);
  console.log(arrayname);
  return arrayname
}
createArray(cities, "London", "Turkey", "New York", "Dubai", "Italy");
console.log(cities)


// Task 21
let mydata = {name: "Syed Jalees Akbar", age: 24, education: "Graduated"};
console.log(mydata.name);
console.log(mydata.age);
console.log(mydata.education);

// Type 2 Interface
interface mydata {
    name: string;
    age: number;
    education: string;
};
let myData: mydata = {name: "Syed Jalees Akbar", age: 24, education: 'BS Electronics'};
console.log(myData);

// Task 22
let names:string[] = ["Junaid", "Jamil", "Shakeel"]
//console.log(names[5]) //This is giving undefined result
console.log(names[2]);

// Task 23
let x:number = 5;
let y:number = 10;
let personName:string = 'Junaid';
let age:number = 25;
let qualification:string = 'BS';
let cricketer: string = 'Kamran Akmal'

console.log("Test 1: Is x equal to 5? I predict True.");
console.log(x == 5);

console.log("Test 2: Is y greater than 15? I predict False.");
console.log(y > 15);

console.log("Test 3: Is name equal to 'John'? I predict True.");
console.log(personName == 'Junaid');

console.log("Test 4: Is age less than or equal to 30? I predict True.");
console.log(age <= 30);

console.log("Test 5: Is qualification equal to BS? I predict False.");
console.log(qualification === 'Inter');

console.log("Test 6: Is x not equal to 5? I predict False.");
console.log(x != 5);

console.log("Test 7: Is age greater than 30? I predict False.");
console.log(age > 30);

console.log("Test 8: Is Kamran Akmal is cricketer? I predict True.");
console.log(cricketer == "Kamran Akmal");

console.log("Test 9: Is name not equal to 'Jamil'? I predict True.");
console.log(personName != 'Jamil');

console.log("Test 10: Is Junaid cricketer? I predict False.");
console.log(cricketer === "Junaid");

// Task 24
let value1:number = 5;
let value01 = 10;
let value2:number = 5;
let myName:string = "JALEES";
let includes
let myArray:string[] = ["Jalees", "Akbar", "Uzair"];

console.log('Is 5 equals to 5.0?')
console.log(value1 === 5.0); //True

console.log('Is 10 not equals to 5.0?')
console.log(value1 !== value2 ); //False

console.log('Is 10 not equals to 5.0?')
console.log(value1 !== value2 ); //False

console.log('Is myName is equal to jalees (lowercase)?')
console.log(myName === 'jalees' ); //False

console.log('Is myName(lowercase) is equal to jalees?')
console.log(myName.toLowerCase() === 'jalees' ); //True

console.log('Is Value01 is equal to value2')
console.log(value1 === value2); //False

console.log('Is Value01 is greater then value2')
console.log(value01 > value2); //True

console.log('Is Value01 is less then value2')
console.log(value01 < value2); //True

console.log('Is Value01 is greater then or equal to 10')
console.log(value01 >= 10); //True

console.log('Is Value01 is less then or equal to 11')
console.log(value01 <= 11); //True

console.log('Is Value01 is equal to 10 and value2 is equal to 5')
console.log((value01 == 10) && (value2 == 5)); //True

console.log('Is Value01 is equal to 10 and value2 is equal to 5')
console.log((value01 == 10 || 5)); //True

// Task 25
let alien_color:string = 'green';

if(alien_color === 'green'){
    console.log('You have just earned 5 points!');
}
else{
    console.log('The version that fails will have no output.');
}

// Task 26
let alien_color2 = 'red';
if(alien_color2 === 'green'){
    console.log("You have just earned 5 points!");
}
else{
    console.log("You have just earned 10 points!")
}


// Task 27
let alien_color3:string = 'red';
if(alien_color3 === 'green'){
    console.log('You have just earned 5 points!')
}
else if(alien_color3 === 'yellow'){
    console.log('You have just earned 10 points!')
}
else if(alien_color3 === 'red'){
    console.log('You have just earned 15 points!')
}

// Task 28
let age:number = 2;
if(age < 2){
    console.log('The person is baby');
}
else if((age >= 2) && (age < 4)){
    console.log('The person is toddler');
}

else if((age >= 4) && (age < 13)){
    console.log('The person is Kid');
}

else if((age >= 13) && (age < 20)){
    console.log('The person is teenager');
}

else if((age >= 20) && (age < 65)){
    console.log('The person is adult');
}
else if(age > 65){
    console.log('The person is elder');
}


// Task 29
let favorite_fruits:string[] = ["Grapes", "Mango", "Banana"];

if(favorite_fruits.includes("Grapes")){
    console.log('You really like Grapes!');
}
else if(favorite_fruits.includes("Mango")){
    console.log('You really like Mango!');
}
else if(favorite_fruits.includes("Banana")){
    console.log('You really like Banana!');
}
else if(favorite_fruits.includes("Orange")){
    console.log('You really like Orange!');
}
else{
    console.log('It looks you don\'t like fruits!');
}


// Task 30
let usernames:string[] = ["Nabeel", "admin", "Eric", "Mohsin", "Qaiser"];
usernames.map((username) =>{
    if(username === 'admin'){
        console.log('Hello admin, would you like to see a status report?');
    } 
    else {
        console.log(`Hello ${username} thank you for logging in again.`)
    }
})

// Task 31
let usernames:string[] = [];
if(usernames.length <= 0){
    console.log("We need to find some users!")
}
usernames.map((username) =>{
if(username === 'admin'){
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username} thank you for logging in again.`)
    }
})


 //  Task 32
let current_users:string[] = ['Ali770', 'jalees512', 'zain786', 'Junaid.jj', 'kaleem001'];
let new_users:string[] = ['jalees512', 'zain786', 'sarfaraz110', 'Jasmin.na', 'sain778'];
new_users.map((user) => {
    if(current_users.includes(user)){
        console.log(`${user} Person will need to enter a new username.`) //user is added for better understanding and testing 
    }
    else{
        console.log(`${user} Username is available`)
    }
})


// Task 33
let all_numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
all_numbers.map(num => {
    if(num == 1){
        console.log(`${num}st`);
    }
    else if(num == 2){
        console.log(`${num}nd`);
    }
    else if(num == 3){
        console.log(`${num}rd`);
    }
    else{
        console.log(`${num}th`);
    }
})


// Task 34
const favoritePizzas: string[] = ["Pepperoni", "Kababish", "BBQ Chicken"];

for (const pizza of favoritePizzas) {
  console.log(pizza);
}

for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");



// Task 35

let animals:string[] = ["Cow", "Goat", "Buffelo"];
for(let i:number = 0; i < animals.length; i++){
    console.log(`${animals[i]} is a great pet in village`);
}
console.log(`These animals ${animals.map(animal => animal)} are common in many things like in milk and they all has four legs`);



// Task 36
function make_shirt(size:number, text:string){
    console.log(`Your order has been recorded. Your selected tshirt size is ${size} and the message that will be printed on tshirt is \" ${text} \"`);
}
make_shirt(45, 'I am Faraz');


// Task 37
function make_shirt(size:number, message:string){
    console.log(`I love Typescript`);
    console.log(`Large shirt with 45 size and a message \" I will be a King! \"`);
    console.log(`Medium shirt with size 20 and a message \"You will be best! \"`);
    console.log(`Small shirt with size 12 and a message \"Mom is best \"`);
    console.log(`Your selected tshirt size is ${size} and your message is \"${message}\" that will be printed on tshirt`);
}
make_shirt(25, "I am Programmer");

// Task 38

function describe_city(cityName:string, country:string = 'Pakistan'){
    console.log(`${cityName} is in ${country}`);
}
describe_city('Hyderabad');
describe_city('Karachi');
describe_city('Riyadh', 'Saudi Arabia');

// Task 39

function city_country(city:string, country:string){
    console.log(`\"${city},${country}\"`)
}
city_country("Hyderabad","Pakistan")
city_country("Jiddah","Saudi Arabia")
city_country("Mumbai","Bharat")

// Task 40

function make_album(artistName:string, albumTitle:string){
    let album:object = {
        artistName: artistName,
        albumTitle: albumTitle,
    }
    console.log(album)
    return album;
}
make_album('Jalees', 'ky dill abhi bhara nhi')


// Task 41

let magician:string[] = ['Amanat', 'Atif', 'Arijit'];
function show_magicians(array:string[]){
    console.log('Here are some great magicians: \n')
    array.map(magician => {
        console.log(magician)
    })
}
show_magicians(magician)


// Task 42

let magician:string[] = ['Amanat', 'Atif', 'Arijit'];
function make_great(array:string[]){
    console.log('Changing array... \n')
    array.map(magician => {
        array.splice(array.indexOf(magician), 1, `Great ${magician}`)
        return array
    })
    console.log(array)
}

function show_magicians(array:string[]){
    console.log('Here are some great magicians: \n')
    array.map(magician => {
        console.log(magician)
    })
}
make_great(magician)
show_magicians(magician)


// Task 43

let magician:string[] = ['Amanat', 'Atif', 'Arijit'];
let greatmagician:string[] = ['Amanat', 'Atif', 'Arijit'];
function make_great(array:string[]){
    console.log('\n Changing array... ')
    array.map(magician => {
        array.splice(array.indexOf(magician), 1, `Great ${magician}`)
        return array
    })
    console.log(array)
}

function show_magicians(array:string[]){
    console.log('\n Unchanged array:')
    array.map(magician => {
        console.log(magician)
    })
}
make_great(greatmagician)
show_magicians(magician)

// Task 44

function makeSandwich(...items:string[]){
    console.log(`These items will be added on your sandwich: ${items}. Thanks for order!`);
}
makeSandwich('butter', 'ketchup', 'sauce', 'berry');
makeSandwich('ketchup','berry');
makeSandwich('butter');

// Task 45

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: any[]): Car {
    const car: Car = {
        manufacturer,
        modelName,
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }
    console.log(car)
    return car;
}

createCar('Toyota', 'XLI', 'color', 'black', 'optionalFeature', 'sunroof');
createCar('Toyota', 'GLI', 'color', 'gray', 'optionalFeature', 'abs');