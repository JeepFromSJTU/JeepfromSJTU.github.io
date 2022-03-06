
let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '1.png') {
        myImage.setAttribute('src', '2.png');
    }
    else if(mySrc === '2.png') {
        myImage.setAttribute('src', '3.png');
    }
    else {
        myImage.setAttribute('src', '1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'EverGlow, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'EverGlow, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name:');
    if(!myName || myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'EverGlow, ' + myName;
    }
}