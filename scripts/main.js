let myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/best-web-browsers.jpg') {
    myImage.setAttribute('src','images/web-browsers2.jpg');
  } else {
    myImage.setAttribute('src','images/best-web-browsers.jpg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    const myName= prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Welcome,
        ${myName}`;
    } 
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName= localStorage.getItem('name');
    myHeading.textContent = `Hi,
    ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}
