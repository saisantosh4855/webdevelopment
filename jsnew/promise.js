async function fetchapi(){
let reff = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(reff)
let pr = await reff.json();
console.log(pr)

}
fetchapi();

// reff.then((response) => { 
//     console.log(response)
//     let arr = Response()
//     console.log(arr)    
// })