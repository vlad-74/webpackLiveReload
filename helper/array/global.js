let GLBL = [
	{id: 3, title:"first"},
	{id: 1, title:"second"},
	{id: 2, title:"third"},
];

let GLBL2 = [
    {id: 3, title:"first"},
    {id: 1, title:"second"},
    {id: 2, title:"third"},
];

let GLBL3 = [
    {id: 3, title:"first"},
    {id: 1, title:"second"},
    {id: 2, title:"third "},
];

let glblNumbers = [4, 5, 6, 7, 1, 2, 3,  8, 9];

let glblArr = [
    {a:"a",b:"a",c:"a"},
    {a:"b",b:"a",c:"b"},
    {a:"b",b:"a",c:"a"},
    {a:"b",b:"a",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"b",b:"b",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"b",b:"b",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"b",b:"b",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"c",b:"b",c:"b"},
    {a:"c",b:"c",c:"a"}
];

console.log("Контекст из global.js");

global.GLBL = GLBL;
global.GLBL2 = GLBL2;
global.GLBL3 = GLBL3;

global.glblNumbers = glblNumbers;

global.glblArr = glblArr;