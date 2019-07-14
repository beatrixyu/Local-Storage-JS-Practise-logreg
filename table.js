let isRegister = "true";
//let isattendPage = false;

let days = {
  date: "",
  isVacation: "",
  comingTime: "",
  leavingTime: "",
  stayingTime: "",
  status: ""
};
let person = {
  id: "",
  photo: "",
  name: "",
  lastName: "",
  email: "",
  className: "",
  days: []
};
let dataArr = [];
let vacations = [];
let daysOfMonth = [];
let daysOfYear = [];
let daysTable = document.getElementById("time-check-table");

// let userInfo = info => {
//   person.name = document.getElementById("name").value;
//   person.passwlastNameord = document.getElementById("lastName").value;
//   person.clasclassNamesCode = document.getElementById("email").value;
//   person.email = document.getElementById("class-code").value;
//   document.getElementById("name-table").innerHTML = `<div>
//     <tr class="name-table">
//       <td>First Name:</td>
//       <td id="name">${localStorage.data.username}</td>
//     </tr>
//     <tr class="name-table">
//       <td>Last Name:</td>
//       <td id="lastName"></td>
//     </tr>
//     <tr class="name-table">
//       <td>Email:</td>
//       <td id="email"></td>
//     </tr>
//     <tr class="name-table">
//       <td>Class Code:</td>
//       <td id="class-code"></td>
//     </tr>
//   </div>`;
// };

//logout button
let checkLogout = () => {
  console.log(window.location.href);

  localStorage.isLogedin = "false";
  window.location.href = "./logreg.html";
};
document.getElementById("logout").addEventListener("click", checkLogout);

const dataObj = JSON.parse(localStorage.data); //convert string to json file(object)
document.getElementById("name").innerText = dataObj.username;
document.getElementById("email").innerText = dataObj.email;
document.getElementById("class-code").innerText = dataObj.classCode;
document.getElementById("welcomeUser").innerText = dataObj.username;

console.log(typeof localStorage.data.username);

let formatDate = date => {
  // let d = new Date(date),
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) month = "0" + month; //questions
  if (day.length < 2) day = "0" + day; //questions

  // return [day, month, year].join(".");
  return `${day}.${month}.${year}`;
};

let formatTime = date => {
  let hour = date.getHours();
  let min = date.getMinutes();
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  return [hour, min].join(":");
};

let isVacation = date => {};

//stay time in the table

// let stayingTime = (arrTime, leaTime) => {
//   var diff = (arrTime.getTime() - leaTime.getTime()) / 1000;
//   diff /= 60;
//   return Math.abs(Math.round(diff));
// };

// arrTime = new Date(9, 30);
// leaTime = new Date(17, 30);
// console.log(stayingTime(arrTime, leaTime));

// let date = document
//   .getElementById("stay-time")
//   .append(stayingTime(arrTime, leaTime));

//set date in the table
// document.getElementById("date").append(new Date());
let day = new Date(2019, 4, 1);
console.log(day);
for (let i = 0; i < 31; i++) {
  document.getElementById("time-check-table").innerHTML += `
      <tr >
          <td>${formatDate(day)}</td>
          <td>
            <button class="coming">Coming</button>
          </td>
          <td>
            <button class="leaving">Leaving</button>
          </td>
          <td class="stay-time"></td>
          <td class="status"></td>
        </tr>
  `;
  day = new Date(day.getTime() + 24 * 60 * 60 * 1000);
}

let coming = document.querySelectorAll(".coming");
for (let i = 0; i < coming.length; i++) {
  coming[i].addEventListener("click", e => {
    logComing(e);
  });
  document.querySelectorAll(".leaving")[i].addEventListener("click", e => {
    logLeaving(e);
  });
}

//coming button

let logComing = e => {
  let children = e.target.parentNode.parentNode.children;
  let date = new Date();
  console.log(date);
  if (children[0].innerText === formatDate(date)) {
    let d = new Date();
    children[4].innerText = status(d);
    e.target.innerText = formatTime(d);
    e.target.disabled = true;
  }
};

//leaving button
let logLeaving = e => {
  let children = e.target.parentNode.parentNode.children;
  if (children[1].innerText != "Coming") {
    let d = new Date();
    e.target.innerText = formatTime(d);
    e.target.disabled = true;
    stayingTime(children);
  }
};

let stayingTime = arr => {
  console.log(arr);
  let start = arr[1].innerText;
  let end = arr[2].innerText;
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) minutes = "0" + minutes;
  arr[3].innerText = `${hours}:${minutes}`;
};
//set the status
let status = d => {
  let hour = d.getHours();
  let min = d.getMinutes();
  if (hour <= 9 && min <= 30) {
    return "On time";
  } else {
    return "Late";
  }
};
//get the date storage
// let fillDaysOfYear = () => {
//   let day = new Date(2019, 0, 1);
//   daysOfYear.push(day);
//   console.log(day.getTime());
//   for (i = 1; i <= 365; i++) {
//     day = new Date(day.getTime() + 24 * 60 * 60 * 1000);
//     daysTable.innerHTML += ` <tr>
//     <td>${formatDate(day)}</td>
//           <td id="comingTime">
//             <button id="coming">Coming</button>
//           </td>
//           <td id="leavingTime">
//             <button id="leaving">Leaving</button>
//           </td>
//           <td id="stay-time"></td>
//           <td id="status"></td>
//         </tr>`;
//     daysOfYear.push(day);
//     if (day.getDay() == 6 || day.getDay() == 0) vacations.push(day);
//   }
//   console.log(daysOfYear);
//   localStorage.daysOfYear = JSON.stringify(daysOfYear);
//   localStorage.vacations = JSON.stringify(vacations);
// };
// fillDaysOfYear();

// let fillDaysOfMonth = () => {
//   let day = new Date(2019, 0, 1);
//   for (i = 1; i <= 31; i++) {
//     day = new Date(day.getTime() + 24 * 60 * 60 * 1000);
//     daysTable.innerHTML += ` <tr>
//     <td>${formatDate(day)}</td>
//           <td id="comingTime">
//             <button id="coming">Coming</button>
//           </td>
//           <td id="leavingTime">
//             <button id="leaving">Leaving</button>
//           </td>
//           <td id="stay-time"></td>
//           <td id="status"></td>
//         </tr>`;
//     daysOfMonth.push(day);
//     localStorage.daysOfMonth = JSON.stringify(daysOfMonth);
//   }
// };
// let isSameMonth = value => {
//   if (value.getMonth() == new Date().getMonth) return value;
// };
// // dayOfMonth = JSON.parse("[" + localStorage.daysOfYear + "]").filter();
// // console.log(dayOfMonth);

// fillDaysOfMonth();

//status
