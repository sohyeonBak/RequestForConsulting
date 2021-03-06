let $prevMonth = document.querySelector(".prevMonth");
let $nextMonth = document.querySelector(".nextMonth");
let $calendarMonth = document.querySelector(".calendarMonth");
let $dayList = document.querySelector(".dayList");

$prevMonth.textContent = "prev"
$nextMonth.textContent = "next"

let nowDate = new Date();
let year = nowDate.getFullYear();
let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    lastDay[1] = 29;
} else {
    lastDay[1] = 28;
}

let thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth()).getMonth();
let thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();

$calendarMonth.textContent = month[thisMonth];

let tag = "<tr>";
let count = 0;

for (let j = 0; j < thisMonthDay; j++) {
    tag += "<td></td>";
    count++;
}

for (let i = 1; i <= lastDay[thisMonth]; i++) {
    if (count % 7 === 0) {
        tag += "<tr>";
        console.log(i)
    }
    tag += "<td>" + i + "</td>";
    count++;
    if (count % 7 === 0) {
        tag += "</tr>";
    }
}

$dayList.innerHTML = tag;



$prevMonth.addEventListener("click", (e) => {
    
    thisMonth > 0 ? thisMonth-- : 0;
    let thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
    let tag = "<tr>";
    let count = 0;

    for (let j = 0; j < thisMonthDay; j++) {
    tag += "<td></td>";
    count++;
    }

    for (let i = 1; i <= lastDay[thisMonth]; i++) {
    if (count % 7 === 0) {
        tag += "<tr>";
        console.log(i)
    }
    tag += "<td>" + i + "</td>";
    count++;
    if (count % 7 === 0) {
        tag += "</tr>";
    }
    }
    
    $calendarMonth.textContent = month[thisMonth];
    $dayList.innerHTML = tag;

});


$nextMonth.addEventListener("click", (e) => {
    thisMonth < month.length - 1 ? thisMonth++ : month.length - 1;
    let thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
    let tag = "<tr>";
    let count = 0;

    for (let j = 0; j < thisMonthDay; j++) {
    tag += "<td></td>";
    count++;
    }

    for (let i = 1; i <= lastDay[thisMonth]; i++) {
    if (count % 7 === 0) {
        tag += "<tr>";
        e.target.value===i? e.target.value.classList('pick'):''
    }
    tag += "<td>" + i + "</td>";
    count++;
    if (count % 7 === 0) {
        tag += "</tr>";
    }
    }
    $calendarMonth.textContent = month[thisMonth];
    $dayList.innerHTML = tag;

});

