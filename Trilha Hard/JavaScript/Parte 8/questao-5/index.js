let objectOne = {};

objectOne = { "Um atributo com espaços": 1 };

console.log(objectOne);
console.log(objectOne["Um atributo com espaços"]);
console.log(Object.values(objectOne)[0]);