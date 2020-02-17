
//Stringify --- The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.


let jsonobj = { 

    name : "Chirag",
    channel : "Programming",
    food : "Bhindi",
    hobby : "Cricket"
}
console.log(jsonobj);

console.log(jsonobj.hobby);
console.log(jsonobj["food"]);

let myJsonStr = JSON.stringify(jsonobj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace("Bhindi","Potato");
console.log(myJsonStr);


//The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

let newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);

//myJsonStr = myJsonStr.replace("Cricket", "Football");
//console.log(myJsonStr);

data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  newStr = JSON.stringify(data);
  console.log(newStr);

  let obj = JSON.parse(newStr);
  console.log(obj.squadName);
  console.log(obj["squadName"]);
  console.log(obj["members"]);
  console.log(obj.members);
  console.log(obj.members[0].age);


