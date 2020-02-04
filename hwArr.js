var foods = ["milk","eggs","juice","peanuts","salt","cabbage","cereal","cookies","chicken","chips"];

for(i =0; i < foods.length; i++){
    console.log (foods [i]);
}
var groceries = "peanutsforlunch";
for ( i = 0; i < groceries.length; i++){
    console.log(groceries[i]);
}
var str = "PeanutsForLunch";
var res = str.toLocaleUpperCase();
console.log(res);

var inventory = [];

function fillArray() {
    inventory["milk"] = 10,
    inventory["eggs"] = 10,
    inventory["juice"] = 10,
    inventory["peanuts"] = 10,
    inventory["salt"] = 10,
    inventory["cabbage"] = 10,
    inventory["cereal"] = 10,
    inventory["cookies"] = 10,
    inventory["chicken"] = 10,
    inventory["chips"] = 10;
}
fillArray();
console.log(inventory);





