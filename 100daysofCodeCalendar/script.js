const months = ["June", 
                "July",
                "August",
                "September"];

const weekDays = ["Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"];

const startDate = new Date("June 18, 2020");
const endDate = new Date("September 26, 2020");

let calendar = document.querySelector(".calendar");

const weekDaysContainer = weekDays.reduce((acc, weekDay)=>{
    return acc+=`<span>${weekDay}</span>`
}, ``);


months.forEach(month => {
    calendar.innerHTML+=`<div class="month">
                        <h3>${month}</h3>
                        <div class="week-days-container">${weekDaysContainer}</div>
                        <div   div class="days-container">
                                ${blankSpaces(month)}
                                ${days(month)};
                            </div>
                        </div>`
});



/* ------------- Function Definitions ------------------- */

function blankSpaces(month){
    
    const date = new Date(`${month} 1, 2020`); 

    if(month==="June"){
        var day = startDate.getDate();
    }
    else{
        var day = date.getDay();
    }
    console.log(day);
    let blankSpace = "";
    for(let i=0; i<day; i++){
        blankSpace+= `<div class="day"></div>`;
    }
    return blankSpace;
};

function getDays(month){
    const monthCode = new Date(`${month} 2020`).getMonth()+1;
    return new Date(2020, monthCode, 0).getDate();
}


function days(month){

    if(month === "June"){
        var start = startDate.getDate();
    }
    else{
        var start = 1;
    }

    if(month === "September"){
        var end = endDate.getDate();
    }
    else{
        var end = getDays(month);
    }

    let res=``;

    for(let i=start; i<=end; i++){
        res+=`<div class="day"><span class="circle">${i}</span></div>`;
    }

    return res;

}
