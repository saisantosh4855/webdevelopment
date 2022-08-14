let check='somesh';
check='sai';
console.log(check);
if(check=='somesh'){
console.log('if section....')
//  call by value 
// call by reference
// shallow copy deep copy

let a = 10; // deep copy 

let b = a; // deep copy
b=20;




let originalobj = {
    name:'sai',
    age:27
}

let copyobj = originalobj;
console.log(originalobj,copyobj)
copyobj.name = 'someshwar';
//console.log(originalobj,copyobj)// shallow copy

// jsonparse and json stringfy

copyobj=JSON.parse(JSON.stringify(originalobj))
 copyobj.name = 'someshwar';
//console.log(originalobj,copyobj)// deep copy

// in above scenario copy does not copy obj method

copyobj= Object.assign({},originalobj)
copyobj.name = 'someshwar';
//copyobj.location.adress = 'banglore';
console.log(originalobj,copyobj)// deep copy

// spreadopreator
copyobj= {...originalobj}


// spreadopreator
copyobj= {...originalobj}

copyvalue={ ...copyobj,
    location:{
        ...copyobj.location,
        adress:'banglore'
    }
}


  
console.log(originalobj,copyvalue)// deep copy

 copyvalue.name = 'someshwar';
  copyvalue.location.adress = 'banglore';
  
console.log(originalobj,copyobj)// deep copy

}

else if(check='sam'){
console.log('else if section.....')
let a=20,b=a;
b++
console.log(a,b);

let obj={
    name:'Sai',
    age:30,
    location:function(){
        address:'BLR'
    },
    phone:{
        US: 10
    } 
}
//console.log(obj);
// obj1=JSON.parse(JSON.stringify(obj));
// obj1.name='Sam'
// console.log(obj1)
// console.log(obj);


obj1=Object.assign({},obj);
obj1.phone.US=20;
console.log(obj1)
console.log(obj);
}

else{
    console.log('else section ....')
    let obj={
        name: 'sai',
        age: 30,
        location:{
            address: 'BLR'
        }
    }
    
    console.log(obj);
    obj1={...obj}
    obj1.name='sam'
    console.log(obj1)
    console.log(obj1.location.address)
    
    let arry=['sai','sam',10,20,30]
    let arry2='confidence'
    console.log(arry2)
    arry1=[...arry]
    //arry1=[...arry]
    console.log(...arry1)
}