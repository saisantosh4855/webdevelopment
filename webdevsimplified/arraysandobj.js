// let this1='sai';
// console.log(this1);
//literal object creation
let obj={
    name:'sai',
    age: 26,
    type(){
        console.log(`${this.name}`);
        return this.name;
    }
}
//console.log(obj)

// obj['age']=27
// var a=10;
// let b=20;
// const c=30;

// console.log(obj.type());

// console.log(window.a,window.b,window.c);
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.keys(obj).length);
// for(key in obj)
// {
//     console.log(key);
//     console.log(key.length);
// }
// console.log(obj['age']);  //mutable

//constructor object creation
function Obj1(name,age){  // ask Somesh
this.name=name;
this.age=age;
}
let objconst = new Obj1('sam',28)
//console.log(objconst);


// let entervalue = prompt('Enter key');
// console.log(obj[entervalue]);
// console.log(obj.entervalue);


let array=[1,2,3,4,5];
array[10]='sai'
array.pop();
array.pop();
array.push('sai');
console.log(array);

let number = [1,2,3,4,5]

console.log(number.filter((value)=> value>3))



