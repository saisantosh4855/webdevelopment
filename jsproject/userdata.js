let userdata = document.getElementById('userdata');

// userdata.addEventListener('click', function dataclick(e) {

//     e.preventDefault();
//     data();

// })


window.onload = function dataload(){
    data();
}

async function data() {
    // let getdata = await fetch('https://jsonplaceholder.typicode.com/users');
    let getdata = await fetch('https://fakestoreapi.com/products');
    if (!getdata.ok) {
        let error_message = document.createElement('p');
        document.body.appendChild(error_message);
        error_message.innerText = '404 Error!!!';
        error_message.classList.add('error_message');
        // throw new Error(`${getdata.status}`);
    }
    let data = await getdata.json();
    console.log(data);
    let carddivpar = document.createElement('div');
    let container = document.querySelector('.container') // targetting from the css selector
    let keys = Object.keys(data[0]);
    let keyd = document.createElement('div');
    container.appendChild(keyd)
    keyd.classList.add('baseline')
    keyd.innerHTML = keys;
    container.appendChild(carddivpar);
    carddivpar.classList.add('card'); // targeting to the html adding classname to particular element

    data.forEach((element) => {
        console.log(element);
        let cardChi = document.createElement('div')
        carddivpar.appendChild(cardChi);
        cardChi.classList.add('card-content');

        let pid = document.createElement('p');
        cardChi.appendChild(pid);
        pid.innerHTML = "<b>Id:</b> " + element.id;

        let p = document.createElement('p');
        cardChi.appendChild(p);
        p.innerHTML = "<b>Name:</b> " + element.title;

        // let adde = document.createElement('div')
        // cardChi.appendChild(adde);
        // adde.innerHTML = "Address :";
        // adde.classList.add('adress')
        // let addkeys = Object.keys(element.address)
        // adde.innerHTML =  + addkeys;
        // street,suite,city,zipcode,geo
        let addchis = document.createElement('p')
        cardChi.appendChild(addchis);
        addchis.innerHTML = "<b>Price:</b> " + element.price + "<br>";
        let addchisu = document.createElement('p')
        cardChi.appendChild(addchisu);
        addchisu.innerHTML = "<b>Category:</b> " + element.category;
       

    });


}


