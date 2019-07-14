//local storage

// let personalInfoArr = [];
// let personalInfoObject = new Object();

// let userName1 = prompt("Please set your username! ");
// localStorage.setItem("username", userName1);
// console.log(localStorage.getItem("username"));

// let passWord1 = prompt("Please set up your password!");
// localStorage.setItem("password", passWord1);
// console.log(localStorage.getItem("password"));

// let company1 = prompt("What is your company?");
// localStorage.setItem("company", company1);
// for (let i = 0; i < localStorage.length; i++) {
//   let personalInfo = localStorage.key(i);
//   personalInfoArr.push(localStorage.getItem(personalInfo));
//   personalInfoObject[personalInfo] = localStorage.getItem(personalInfo);
// }
// console.log(personalInfoArr, personalInfoObject);

//catch the username element
let personalInfoArr = [];
let person = new Object();
let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let registionButton = document.getElementById("regFormBtn");
const showName = document.getElementById("showLogRequire");

// userName = localStorage.setItem("username", userName);
// console.log(localStorage.getItem("username"));
// for (let i = 0; i < localStorage.length; i++) {
//   let personalInfo = localStorage.key(i);
//   personalInfoArr.push(localStorage.getItem(personalInfo));
// }
// console.log(personalInfoArr);

//for the register button
const registrationFrom = document.getElementById("registerbtn");
registrationFrom.addEventListener("click", formPopup);

function formPopup() {
  // if (isattendPage) {
  registForm.hidden = false;
  loginForm.hidden = true;
  showName.innerHTML = "Hello, stanger! Please login or register!";
  // }
}
//login button
const loginFrom = document.getElementById("loginbtn");
loginbtn.addEventListener("click", formPopup2);

function formPopup2() {
  loginForm.hidden = false;
  registForm.hidden = true;
  showName.innerHTML = `Hello, Human Stranger! Please login or register!`;
}

//login button inside the form
const logFromBtn = document.getElementById("logFromBtn");
// console.log(logFromBtn);
let checkLogin = () => {
  if (localStorage.isLogedin == "true") {
    window.location.href = "./attend.html";
    attendPage = window.location.href;
    attendPage.showLogRequire.innerHTML = `Hello, Old Friend ${
      localStorage.userName
    }`;
  } else {
    logFromBtn.innerHTML = "login";
    showLogRequire.innerHTML = "Hello, Please login or register!";
  }
};

checkLogin();

// let register = () => {
//   person.id = "1";
//   person.photo = "./asset";
//   person.name = firstName.value;
//   person.lastName = lastName.value; //value is to catch the info from the html
//   person.email = email.value;
//   person.className = classCode.value;
//   alert("aaa");
//   window.location.href = "./attend.html";

//   dataArr.push(JSON.stringify(person));

//   localStorage.email = email.value;
//   localStorage.pass = pass.value;
//   localStorage.data = dataArr;
// };

// let authantication = () => {
//   if (localStorage.email == email.value && localStorage.pass == pass.value) {
//     localStorage.isLogedin = "true";
//     window.location.href = "./attend.html";
//     checkLogin();
//   } else {
//     localStorage.isLogedin = "false";
//     alert("Username or password is not right!");
//     checkLogin();
//   }
// };

//call the registration
let submit = e => {
  if (registForm.hidden === false) {
    person.username = document.getElementById("username").value;
    person.password = document.getElementById("password").value;
    person.classCode = document.getElementById("classCode").value;
    person.email = document.getElementById("email").value;
    person.status = false;
    localStorage.data = JSON.stringify(person);
    loginForm.hidden = false;
    registForm.hidden = true;
  } else {
    //call login page
    let obj = JSON.parse(localStorage.data);
    user = document.getElementById("username2").value;
    pass = document.getElementById("password2").value;
    if (obj.username === user && obj.password === pass) {
      e.preventDefault();
      localStorage.isLogedin = true;
      //check if the user is login or not, if its login, the new page will jump to the table page
      // localStorage.data = JSON.stringify(obj);
      window.location.href = "./attend.html";
    } else {
      //check if the passport is right or wrong
      e.preventDefault();
      document.getElementById("username2").value = "";
      document.getElementById("password2").value = "";
      console.log("wrong password");
    }
  }
};

logFromBtn.addEventListener("click", e => {
  submit(e);
});
registionButton.addEventListener("click", e => {
  submit(e);
});
//fetch async
/* async function showAvatar() {
  //fetch all data from API
  let githubResponse = await fetch("http://api.github.com/users/beatrixyu");
  //convert data to json object
  let githubUser = await githubResponse.json();
  //create an empty img element
  let img = document.createElement("img");
  //set source for img
  img.src = githubUser.avatar_url;
  //add class to html
  img.className = "promise-avatar-example";
  //apend html element to body
  document.body.append(img);
  //wait for 3 seconds. even if img not fetch next function will work after 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  // remove the image
  // img.remove();
  return githubUser;
}
// call the function
showAvatar();
*/
