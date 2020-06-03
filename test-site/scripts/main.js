let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Skateboard') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/Skateboard');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }


  