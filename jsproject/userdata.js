let userdata = document.getElementById('userdata');

// userdata.addEventListener('click', function dataclick(e) {

//     e.preventDefault();
//     data();

// })


window.onload = function dataload(){
    data();
}

async function data() {
    let getdata = await fetch('https://jsonplaceholder.typicode.com/users');
    // let getdata = await fetch('https://fakestoreapi.com/products');
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

        let uid = document.createElement('p');
        cardChi.appendChild(uid);
        uid.innerHTML = "<b>Id:</b> " + element.id;

        let uname = document.createElement('p');
        cardChi.appendChild(uname);
        uname.innerHTML = "<b>Name:</b> " + element.name;

        let umail = document.createElement('p');
        cardChi.appendChild(umail);
        umail.innerHTML = "<b>Email:</b> " + element.email;

        let uaddrp = document.createElement('div')
        cardChi.appendChild(uaddrp);
        uaddrp.classList.add('adress')

        let uaddr1 = document.createElement('p')
        uaddrp.appendChild(uaddr1);
        uaddr1.innerHTML = "<b>Address:</b> "

        // let addkeys = Object.keys(element.address)
        // uaddr.innerHTML = "<b>Address:</b> " + addkeys;
        // street,suite,city,zipcode,geo
        let uaddr2 = document.createElement('div')
        uaddrp.appendChild(uaddr2);
        let ucitytemp = document.createElement('p')
        uaddr2.appendChild(ucitytemp);
        ucitytemp.innerHTML = "&nbsp";
        let ustreet = document.createElement('p')
        uaddr2.appendChild(ustreet);
        ustreet.innerHTML = "<b>Street:</b> " + element.address.street + "<br>";
        let ucity = document.createElement('p')
        uaddr2.appendChild(ucity);
        ucity.innerHTML = "<b>City:</b> " + element.address.city;
        
        selectuser(cardChi, element.id);

    });

    function selectuser(selecteditem,id){
        selecteditem.addEventListener('click', function(){
            localStorage.setItem("id",id);
            window.location.href="http://127.0.0.1:5500/jsproject/userdetail.html";
        })
    }

}


