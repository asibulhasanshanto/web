var ourDog = {
	"name": "first",
	"legs": 4,
	"tails": 1,
    "his friend": "no friends"
};
var temp = ourDog.name;
var temp2 = ourDog["his friend"];

var testObject = {
    12: "Asis",
    16: "kamol",
    24: "asibul"
};

var id = 24;
var player = testObject[id];
// updating object properties
ourDog.name = "second";

//ading new properties in object
testObject.hi = "hello";
testObject['25']= "karim";
//delete properties from object
delete testObject.hi;

// check object for properties
var check = testObject.hasOwnProperty(12);
// array can hold multiple objects like json format.

// Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "golve box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var golveBoxContents = myStorage.car.inside["golve box"];

//nested array
var myplants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fair",
            "pine",
            "birch"
        ]
    }
];

var access = myplants[1].list[2];
console.log(access);