//1 for ..of, a more modern loop
let people = ["Greg", "Mary", "Devon", "James"];
for (let name of people){
    console.log(name)
}

//2 to remove Greg from array
let People = ["Greg", "Mary", "Devon", "James"];
let removed = People.shift()
console.log(People)
console.log(removed)

//3 To remove James from the array
let Peoples = ["Greg", "Mary", "Devon", "James"];
Peoples.splice("James")
console.log(Peoples)

//4 add Matt to the front of the array

let names = ["Greg", "Mary", "Devon", "James"];
names.unshift("Matt")
console.log(names)

//5 adding my name to the end of the array
let nameOf = ["Greg", "Mary", "Devon", "James"];
nameOf.push("Blessing")
console.log(nameOf)

//6 exit from the loop
for (let i = 0; i <people.length; i++){
    if (i>1){
        break
    }
    console.log(people[i]);
}

//7 make a copy of the array using slice
let NameOf = ["Greg", "Mary", "Devon", "James"];
let copy = NameOf.slice(2)


//8 gives a indexof where Mary is located
let mary = ["Greg", "Mary", "Devon", "James"];
mary.indexOf("Mary");



//9 gives a indexof where Foo is located
let foo  = ["Greg", "Mary", "Devon", "James"];
foo.indexOf("Foo");

//10 
let peopl  = ["Greg", "Mary", "Devon", "James"];
peopl.splice(2, 1, "Elizabeth", "Artie")
console.log(peopl)


//11 
let withBob = people.concat( "Bob")