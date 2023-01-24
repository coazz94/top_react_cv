const test = {
  "PersonalInfo": {},
  "a": {
    "company": "Siemens"
  },
  "b": {
    "company": "ZexTeam"
  },
  "c": {
    "company": "Jexteam"
  }
}

test.a.x = "red";

console.log(test.a)

// function getId(string, obj) {
//   const x = Object.keys(obj);

//   let id = x.reduce((acc, current)  => {
//           return current.split("_")[0] === string ? acc + 1 : acc;
//           }, 0)

//   return id;
// }


// console.log(getId("Experience", test))


