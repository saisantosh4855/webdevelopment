let event1=document.getElementById('eclick')
console.log(event1,typeof(event1))
// event1.addEventListener('click',function(e){
//     alert(e.BUBBLING_PHASE);
//     alert(e.CAPTURING_PHASE);
//     console.log(event1.tagName);
// })

let event2=document.querySelectorAll('*');
console.log(event2)

//foreach, in, of, general for

for(let elem of event2){
    console.log(elem);
    // elem.addEventListener('click',function(event){
    //     // event.stopPropagation();
    //     alert(elem.tagName) // bubbling event
    // })

    elem.addEventListener('click',function(event){
        // event.stopPropagation();
        alert(elem.tagName) // event capturing, need to pass argument to listener
    },true)
}

let arr=[1,2,3,'sai']
let arr1=[{name:'sam'},{name:'ram'},[1,2]]
let table=document.createElement('table');
let tr=document.createElement('tr');
document.body.append(table);
table.append(tr);

for(let val of arr1){
    let td=document.createElement('td');
    td=val.name; //dint use td.innerText = val
    console.log(td)
    tr.append(td);
}

let tr1=Object.keys(arr1[0])
// let tr1=arr1[2][0]
console.log(tr1);
