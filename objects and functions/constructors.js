var str1 = "Fazil";
var str2 = new String("Fazil");

console.log(str1);
console.log(str2);

console.log(typeof str1);
console.log(typeof str2);

// str1 === str2 => false
// str1 === 'Fazil' => true
// str2 == 'Fazil' => true
// str1 == str2 => true
// str2 == 'Fazil' => true

if (str1 === "Fazil") {
  console.log("yes");
} else {
  console.log("no");
}

var num = 10;
var num2 = new Number(10);

var obj1 = { name: "Fazil" };
var obj2 = new Object({ name: "Fazil" });

console.log(obj1 === obj2);
console.log(obj1 == obj2);

console.log(obj1);
console.log(obj2);
