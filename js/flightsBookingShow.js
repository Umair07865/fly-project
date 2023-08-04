document.querySelector(".citytarget").textContent =
  localStorage.getItem("startJourney");
document.querySelector(".ariportTarget").textContent =
  localStorage.getItem("startPort");
document.querySelector(".tocityTarger").textContent =
  localStorage.getItem("endJourney");
document.querySelector(".toairportTarget").textContent =
  localStorage.getItem("endPort");

document.querySelector(".targetDateDep").textContent =
  localStorage.getItem("depDate");
document.querySelector(".nweek").style.display = "none";
document.querySelector(".targetArrival").textContent =
  localStorage.getItem("deteArr");
document.querySelector(".targetTraveler").textContent =
  localStorage.getItem("noOfTraveller");
document.querySelector(".differentClasstarget").textContent =
  localStorage.getItem("travelClass");

  var travellingClass=  localStorage.getItem("travelClass");

document.querySelector("#class-1-tab").addEventListener("click", () => {
  document.querySelector("#class-1-tab").classList.add("active");
  document.querySelector("#class-2-tab").classList.remove("active");
  document.querySelector("#class-3-tab").classList.remove("active");
  document.querySelector("#class-4-tab").classList.remove("active");
 
  travellingClass="Economy";
  localStorage.setItem("travelClass",travellingClass);
  travellingClass= localStorage.getItem("travelClass");
  document.querySelector(".differentClasstarget").textContent=travellingClass;

});
document.querySelector("#class-2-tab").addEventListener("click", () => {
  document.querySelector("#class-2-tab").classList.add("active");
  document.querySelector("#class-1-tab").classList.remove("active");
  document.querySelector("#class-3-tab").classList.remove("active");
  document.querySelector("#class-4-tab").classList.remove("active");

  travellingClass="Premium Economy";
  localStorage.setItem("travelClass",travellingClass);
  travellingClass= localStorage.getItem("travelClass");
  document.querySelector(".differentClasstarget").textContent=travellingClass;
});
document.querySelector("#class-3-tab").addEventListener("click", () => {
  document.querySelector("#class-3-tab").classList.add("active");
  document.querySelector("#class-2-tab").classList.remove("active");
  document.querySelector("#class-1-tab").classList.remove("active");
  document.querySelector("#class-4-tab").classList.remove("active");
  
  travellingClass="Business";
  localStorage.setItem("travelClass",travellingClass);
  travellingClass= localStorage.getItem("travelClass");
  document.querySelector(".differentClasstarget").textContent=travellingClass;
});
if (document.querySelector(".differentClasstarget").textContent == "Business") {
  document.querySelector("#class-3-tab").classList.add("active");
  document.querySelector("#class-2-tab").classList.remove("active");
  document.querySelector("#class-1-tab").classList.remove("active");
  document.querySelector("#class-4-tab").classList.remove("active");
}
if (
  document.querySelector(".differentClasstarget").innerText == "Premium Economy"
) {
  document.querySelector("#class-2-tab").classList.add("active");
  document.querySelector("#class-1-tab").classList.remove("active");
  document.querySelector("#class-3-tab").classList.remove("active");
  document.querySelector("#class-4-tab").classList.remove("active");
}
if (document.querySelector(".differentClasstarget").textContent == "Economy") {
  document.querySelector("#class-1-tab").classList.add("active");
  document.querySelector("#class-2-tab").classList.remove("active");
  document.querySelector("#class-3-tab").classList.remove("active");
  document.querySelector("#class-4-tab").classList.remove("active");
}
if (
  document.querySelector(".differentClasstarget").innerText == "First Class"
) {
  document.querySelector("#class-4-tab").classList.add("active");
  document.querySelector("#class-2-tab").classList.remove("active");
  document.querySelector("#class-3-tab").classList.remove("active");
  document.querySelector("#class-1-tab").classList.remove("active");
}

document.querySelector("#class-4-tab").addEventListener("click", () => {
  document.querySelector("#class-4-tab").classList.add("active");
  document.querySelector("#class-2-tab").classList.remove("active");
  document.querySelector("#class-3-tab").classList.remove("active");
  document.querySelector("#class-1-tab").classList.remove("active");
  travellingClass="First Class";

  localStorage.setItem("travelClass",travellingClass);
  travellingClass= localStorage.getItem("travelClass");
 document.querySelector(".differentClasstarget").textContent=travellingClass;
 travellingClass=document.querySelector(".differentClasstarget").textContent;

});

var dateStarts = document.querySelector(".targetDateDep").textContent;
var dateDest = document.querySelector(".targetArrival").textContent;

const dateArrivalOut = document.querySelector(".targetArrival").textContent;
const datePartsMonth = dateArrivalOut.split(" ");
travellingClass=document.querySelector(".differentClasstarget").textContent;

// console.log(datePartsMonth);

const currentDate = new Date();
const monthOuter = datePartsMonth[2];
const outerDateYear = datePartsMonth[4];
var newOuterMonth = "";
if (monthOuter == "January") {
  newOuterMonth = 1;
} else if (monthOuter == "February") {
  newOuterMonth = 2;
} else if (monthOuter == "March") {
  newOuterMonth = 3;
} else if (monthOuter == "April") {
  newOuterMonth = 4;
} else if (monthOuter == "May") {
  newOuterMonth = 5;
} else if (monthOuter == "June") {
  newOuterMonth = 6;
} else if (monthOuter == "July") {
  newOuterMonth = 7;
} else if (monthOuter == "August") {
  newOuterMonth = 8;
} else if (monthOuter == "September") {
  newOuterMonth = 9;
} else if (monthOuter == "October") {
  newOuterMonth = 10;
} else if (monthOuter == "November") {
  newOuterMonth = 11;
} else if (monthOuter == "December") {
  newOuterMonth = 12;
}

//next day management

function getDaysInMonth(year, month) {
  // Create a new date object with the given year and month (months are 0-based, so subtract 1 from the month)
  const firstDayOfMonth = new Date(year, month - 1, 1);

  // Initialize an array to store the days of the month
  const daysInMonth = [];

  // Loop through the days of the month
  let currentDay = new Date(firstDayOfMonth);
  while (currentDay.getMonth() === month - 1) {
    daysInMonth.push(new Date(currentDay));
    currentDay.setDate(currentDay.getDate() + 1);
  }

  return daysInMonth;
}



// Get the current year and month (1-based index)
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const daysInCurrentMonth1 = getDaysInMonth(currentYear, currentMonth);
// Get the current date


// Get the current year and month (1-based index)

console.log("Days in the current month:", daysInCurrentMonth1);
var nextdate1 = dateStarts[0] + dateStarts[1];
nextdate1 = Number(nextdate1);
 
var arivalDate;
if (nextdate1 == daysInCurrentMonth1.length) {
  arivalDate = `01 / 0${currentMonth + 1} / ${currentYear}`;
} else {
  arivalDate = `${nextdate1 + 1} / 0${currentMonth} / ${currentYear}  `;
}
//data 1 ends here
const currentDate2 = new Date();

const currentYear2 = Number(outerDateYear);
const currentMonth2 = newOuterMonth;

// Get all the days of the current month
const daysInCurrentMonth = getDaysInMonth(currentYear2, currentMonth2);

//data 2 js starts from here
var nextdate2 = dateDest[0] + dateDest[1];
nextdate2 = Number(nextdate2);

var arivalDateOUT;
if (nextdate2 == daysInCurrentMonth.length) {
  arivalDateOUT = `01 / 0${currentMonth2 + 1} / ${currentYear2} `;
} else {
  arivalDateOUT = `${nextdate2 + 1} / 0${currentMonth} / ${currentYear}  `;
}

//next day management ends here
// Get the current hour, minute, and second
var currentHour = currentDate.getHours();
var newTime = currentHour + 3;

var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();

let flightsDetailsTickets = [
  {
    ticketnumber: "1",
    fromCode: "LHR",
    toCode: "ACC",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Kotoka International Airport",
    stops: "Tap Air Portugal",
    img: "../assets/TAP-Air-Portugal-preview.jpg",
    depTime: "11:00 AM",
    stopTime: "1:40 PM",
    reurtingStopTime: "01:05 AM",
    returningstopdeparture: "2:20 AM",
    stopDeparture: "02:55 PM",
    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"2 hours 40 minutes ",
    FirstStopToDestinationTimeDuration:"4 hours 45 minutes ",
    outcommingToSecondStopTimeDuration:"4 hours 45 minutes ",
    SecondStopToDestinationTimeDuration:"2 hours 40 minutes ",

    stopreeturnDate:`${arivalDateOUT}`,
    stopReturnDate:`${dateDest}`,

    endArrivalDate: `${dateStarts}`,
    arrTime: "7:40 PM",
    outArrivalDate: `${arivalDateOUT}`,
    outDepTime: "8:20 PM",
    outArrTime: "5:00 AM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "370",
  },
  {
    ticketnumber: "2",
    fromCode: "LHR",
    toCode: "ACC",
    fromAirport: "London Heathrow Airport",
    endArrivalDate: `${arivalDate}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,


    destination: "Kotoka International Airport",
    stops: "KLM Royal Dutch Airlines",
    img: "../assets/KLM-Royal-Dutch-Airlines-preview.jpg",
    depTime: "01:40 PM",
    arrTime: "02.00 AM",

    stopTime: "04:00 PM",
    stopDeparture: "09:30 PM",
    outArrivalDate: `${dateDest}`,
    reurtingStopTime: "07:10 AM",
    returningstopdeparture: "12:40 PM",

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"2 hours 20 minutes",
    FirstStopToDestinationTimeDuration:"4 hours 30 minutes",
    outcommingToSecondStopTimeDuration:"4 hours 30 minutes    ",
    SecondStopToDestinationTimeDuration:"2 hours 20 minutes ",

    outDepTime: "2:40 AM",
    outArrTime: "3:00 PM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "390",
  },
  {
    ticketnumber: "3",
    fromCode: "LHR",
    toCode: "ACC",
    endArrivalDate: `${dateStarts}`,
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Kotoka International Airport",
    stops: "Egypt AirWays",
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"5 hours 40 minutes",
    FirstStopToDestinationTimeDuration:"4 hours 10 minutes    ",
    outcommingToSecondStopTimeDuration:"4 hours 10 minutes",
    SecondStopToDestinationTimeDuration:"5 hours 40 minutes ",

    img: "../assets/Egypt-Airways-preview.jpg",
    depTime: "03:10 AM",
    arrTime: "5:40 PM",

    stopTime: "08:50 AM",
    stopDeparture: "01:30 PM",
    reurtingStopTime: "10:30 PM",
    returningstopdeparture: "03:10 AM",

    outDepTime: "06:20 AM",
    outArrTime: "08:50 PM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "400",
  },
  {
    ticketnumber: "4",
    fromCode: "LHR",
    endArrivalDate: `${dateStarts}`,
    toCode: "ACC",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"5 hours 50 minutes",
    FirstStopToDestinationTimeDuration:"4 hours 1 minute",
    outcommingToSecondStopTimeDuration:"4 hours 1 minute",
    SecondStopToDestinationTimeDuration:"5 hours 50 minutes",

    destination: "Kotoka International Airport",
    stops: "Turkish Airlines",
    img: "../assets/Turkish-Airlines-preview.jpg",
    depTime: "11:45 AM",
    arrTime: "11:05 PM",
    outDepTime: "11:45 PM",

    stopTime: "05:35 PM",
    stopDeparture: "07:04 PM",
    reurtingStopTime: "03:46 AM",
    returningstopdeparture: "05:15 PM",

    outArrTime: "11:05 AM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "430",
  },
  {
    ticketnumber: "5",
    fromCode: "LHR",
    toCode: "ACC",
    fromAirport: "London Heathrow Airport",
    airlines: "",
   
    destination: "Kotoka International Airport",
    stops: "RwandAir",
    endArrivalDate: `${dateStarts}`,
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,


    startToStopTimeDuration:"9 hours 40 minutes",
    FirstStopToDestinationTimeDuration:"4 hours 40 minutes",
    outcommingToSecondStopTimeDuration:"4 hours 40 minutes ",
    SecondStopToDestinationTimeDuration:"9 hours 40 minutes",


    img: "../assets/Rwandair-preview.jpg",
    depTime: "2:20 AM",
    arrTime: "6:25 PM",
    outDepTime: "7:05 AM",
    outArrTime: "11:10 PM",

    stopTime: "12:00 PM",
    stopDeparture: "01:45 PM",
    reurtingStopTime: "11:45 PM",
    returningstopdeparture: "01:30 PM",

    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "520",
  },
  {
    ticketnumber: "6",
    fromCode: "LHR",
    toCode: "ACC",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Kotoka International Airport",
    stops: "British Airways",
    img: "../assets/British-Airways-preview.jpg",
    depTime: "05:40 PM",
    stopTime: "",
    reurtingStopTime: "",
    returningstopdeparture: "",
    stopDeparture:"",
    startsFromStopDate:``,
    startsFromStopDeparture:``,

    startToStopTimeDuration:"",
    FirstStopToDestinationTimeDuration:"5 hours 55 minutes",
    outcommingToSecondStopTimeDuration:"",
    SecondStopToDestinationTimeDuration:"5 hours 55 minutes",

    stopreeturnDate:``,
    stopReturnDate:``,

    endArrivalDate: `${dateStarts}`,
    arrTime: "11:35 PM",
    outArrivalDate: `${arivalDateOUT}`,
    
    outDepTime: "12:15 AM",
    outArrTime: "6:10 AM",
    airportDown:''  ,
    airportDownCode: "",
    price: "700",
  },
];
let flightsDetailsTickets2 = [
  {
    ticketnumber: "1",
    fromCode: "LHR",
    endArrivalDate: `${arivalDate}`,
    toCode: "LOS",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Murtala Muhammed International Airport",
    stops: "Turkish Airlines",
    img: "../assets/Turkish-Airlines-preview.jpg",
    depTime: "07:05 AM",
    arrTime: "7:25 PM",
    outDepTime: "8:05 AM",
    

    stopTime: "12:50 PM",
    stopDeparture: "02:20 PM",
    reurtingStopTime: "01:10 AM",
    returningstopdeparture: "02:40 AM",

    endArrivalDate: `${dateStarts}`,
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"5 hours 45 minutes",
    FirstStopToDestinationTimeDuration:"5 hours 5 minutes",
    outcommingToSecondStopTimeDuration:"5 hours 5 minutes",
    SecondStopToDestinationTimeDuration:"5 hours 45 minutes",

    outArrTime: "8:25 PM",
    airportDown: "Istanbul Airport",
    airportDownCode: "LIS",
    price: "957",
  },
  {
    ticketnumber: "2",
    fromCode: "LHR",
    toCode: "LOS",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Murtala Muhammed International Airport",
    stops: " Lufthansa",
    img: "../assets/Lufthansa-preview.jpg",
    depTime: "06:30 PM",
    arrTime: "04:45 PM",
    endArrivalDate: `${arivalDate}`,
    // endArrivalDate: `${dateStarts}`,
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"1 hour 35 minutes",
    FirstStopToDestinationTimeDuration:"6 hours 35 minutes",
    outcommingToSecondStopTimeDuration:"6 hours 35 minutes ",
    SecondStopToDestinationTimeDuration:"1 hour 35 minutes",


    stopTime: "08:05 PM",
    stopDeparture: "10:10 AM",
    reurtingStopTime: "12:00 AM",
    returningstopdeparture: "02:05 PM",

    outDepTime: "05:25 PM",
    outArrTime: "03:40 PM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "968",
  },
  {
    ticketnumber: "3",
    fromCode: "LHR",
    toCode: "LOS",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Murtala Muhammed International Airport",
    stops: "KLM Royal Dutch Airlines",
    img: "../assets/KLM-Royal-Dutch-Airlines-preview.jpg",
    depTime: "10:00 AM",
    arrTime: "07:40 PM",
    outDepTime: "06:00 AM",
    
    endArrivalDate: `${dateStarts}`,
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"1 hour 25 minutes",
    FirstStopToDestinationTimeDuration:"6 hours 45 minutes",
    outcommingToSecondStopTimeDuration:"6 hours 45 minutes",
    SecondStopToDestinationTimeDuration:"1 hour 25 minutes",

    stopTime: "11:45 AM",
    stopDeparture: "12:55 PM",
    reurtingStopTime: "03:05 AM",
    returningstopdeparture: "04:35 AM",

    outArrTime: "08:20 PM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "900",
  },
  {
    ticketnumber: "4",
    fromCode: "LHR",
    toCode: "LOS",
    endArrivalDate: `${arivalDate}`,
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Murtala Muhammed International Airport",
    stops: "Air France",
    img: "../assets/Air-France-preview.jpg",
    depTime: "09:00 AM",
    arrTime: "09:25 PM",

    stopTime: "10:25 AM",
    stopDeparture: "01:40 PM",
    reurtingStopTime: "05:50 AM",
    returningstopdeparture: "09:05 AM",
  

    // endArrivalDate: `${arivalDate}`,
    endArrivalDate: `${dateStarts}`,
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    startToStopTimeDuration:"1 hour 25 minutes ",
    FirstStopToDestinationTimeDuration:"7 hours 45 minutes ",
    outcommingToSecondStopTimeDuration:"7 hours 45 minutes",
    SecondStopToDestinationTimeDuration:"1 hour 25 minutes",


    outDepTime: "10:05 AM",
    outArrTime: "10:30 PM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "905",
  },
  {
    ticketnumber: "5",
    fromCode: "LHR",
    toCode: "LOS",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Murtala Muhammed International Airport",
    stops: "Qatar Airways",
    img: "../assets/Qatar-Airways-preview.jpg",
    depTime: "02:15 PM",
    arrTime: "05:45 PM",
    outDepTime: "06:35 AM",

    endArrivalDate: `${arivalDate}`,
    // endArrivalDate: `${dateStarts}`,
    outArrivalDate: `${dateDest}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,

    
    startToStopTimeDuration:"20 hours 50 minutes",
    FirstStopToDestinationTimeDuration:"5 hours 55 minutes",
    outcommingToSecondStopTimeDuration:"5 hours 55 minutes    ",
    SecondStopToDestinationTimeDuration:"20 hours 50 minutes",

    stopTime: "11:05 AM",
    stopDeparture: "11:50 AM",
    reurtingStopTime: "12:30 PM",
    returningstopdeparture: "01:15 PM",

    outArrTime: "10:05 PM",
    airportDown: "Humberto Delgado Airport",
    airportDownCode: "LIS",
    price: "912",
  },
  {
    ticketnumber: "6",
    fromCode: "LHR",
    toCode: "LOS",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Murtala Muhammed International Airport",
    stops: "British Airways",
    img: "../assets/British-Airways-preview.jpg",
    depTime: "10:10 AM",
    stopTime: "",
    reurtingStopTime: "",
    returningstopdeparture: "",
    stopDeparture:"",
    startsFromStopDate:``,
    startsFromStopDeparture:``,

    startToStopTimeDuration:"",
    FirstStopToDestinationTimeDuration:"6 hours 35 minutes",
    outcommingToSecondStopTimeDuration:"",
    SecondStopToDestinationTimeDuration:"6 hours 35 minutes",
    
    stopreeturnDate:``,
    stopReturnDate:``,

    // endArrivalDate: `${dateStarts}`,
    arrTime: "4:45 PM",
    // outArrivalDate: `${arivalDateOUT}`,

    endArrivalDate: `${arivalDate}`,
    // endArrivalDate: `${dateStarts}`,
    outArrivalDate: `${arivalDateOUT}`,

    startsFromStopDate:`${dateStarts}`,
    startsFromStopDeparture:`${dateStarts}`,
    
    outDepTime: "5:25 PM",
    outArrTime: "12:00 AM",
    airportDown:''  ,
    airportDownCode: "",
    price: "500",
  },
  {
    ticketnumber: "7",
    fromCode: "LHR",
    toCode: "LOS",
    fromAirport: "London Heathrow Airport",
    airlines: "",
    destination: "Murtala Muhammed International Airport",
    stops: "Virgin Atlantic",
    img: "../assets/Virgin-Atlantic-preview.jpg",
    depTime: "10:25 PM",
    stopTime: "",
    reurtingStopTime: "",
    returningstopdeparture: "",
    stopDeparture:"",
    startsFromStopDate:``,
    startsFromStopDeparture:``,

    startToStopTimeDuration:"",
    FirstStopToDestinationTimeDuration:"9 hours 16 minutes",
    outcommingToSecondStopTimeDuration:"",
    SecondStopToDestinationTimeDuration:"9 hours 16 minutes",
    
    stopreeturnDate:``,
    stopReturnDate:``,

    endArrivalDate: `${arivalDate}`,
    arrTime: "5:41 PM",
    outArrivalDate: `${arivalDateOUT}`,
    
    outDepTime: "6:21 PM",
    outArrTime: "1:37 PM",
    airportDown:''  ,
    airportDownCode: "",
    price: "500",
  },
];



if (
  localStorage.getItem("startJourney") == "London, United Kingdom" &&
  localStorage.getItem("endJourney") == "Accra, Ghana"  && localStorage.getItem("startPort") == "London Heathrow Airport"
) {
  var flightsNew = flightsDetailsTickets;
} else if (
  localStorage.getItem("startJourney") == "London, United Kingdom" &&
  localStorage.getItem("endJourney") == "Lagos, Nigeria"
) {
  var flightsNew = flightsDetailsTickets2;
}

// flights tickets starts from here for london to accraghana
if (
  (localStorage.getItem("startJourney") == "London, United Kingdom" &&
    localStorage.getItem("endJourney") == "Accra, Ghana") ||
  (localStorage.getItem("startJourney") == "London, United Kingdom" &&
    localStorage.getItem("endJourney") == "Lagos, Nigeria")
) {
  var data = "";
  var headerData = "";

  flightsNew.forEach((elem) => {
    headerData = `<h2 class="search-title fw-bold">Cheap Flights To ${elem.destination} -
      ${elem.toCode}</h2>
  <p class="search-desc">Return, Business, Departuring On
      <strong>${dateStarts}</strong>
                                                  And Returning On
          <strong>${dateDest}</strong>
                                            
                                              .
  </p>`;
    data = `<div class="result-item mb-3">
<div class="row g-0">

<div class="col-lg-9">
<div class="row g-0">
<div class="col-xs-12 airline-list py-1">
<span class="airline-no rounded-circle fw-bolder mx-2">${elem.ticketnumber}</span>
<span class="airline-name">
<strong class="me-2">${elem.stops}</strong>To
${elem.destination} </span>
</div>


<div class="flight outbound border-end col-6">

<div class="subtitle">
<h6 class="subtitle-text text-capitalize m-0 p-2 text-center text-white">
outbound flight <i class="fa fa-long-arrow-right ms-3"></i>
</h6>
</div>
<div class="row g-3 py-2">
<div class="col-4 flight-chart left">
<h4 class="name-code d-block text-sm-end fw-bold mb-0 text-center">
${elem.fromCode}
</h4>
<small class="city d-block text-sm-end fw-bold mb-2 text-center">
${elem.fromAirport}
</small>
<h5 class="time d-block text-sm-end fw-semibold mb-0 text-center">

${elem.depTime}

</h5>
<small class="date d-block text-sm-end fw-bold text-center">

${dateStarts}
</small>
</div>

<div class="col-4 flight-airline text-center">
<div class="row">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stopover">
<small class="text-muted fa-.1x ">1
stop</small>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 connection">
<div class="icon">
<img src="../assets/black-plane-955d6719.png" alt="">
</div>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 airline">
<small title="${elem.stops}" class="text-muted fa-.1x d-block">${elem.stops}</small>
<img src="${elem.img}" alt="${elem.stops}" class="w-50">

</div>
</div>
</div>

<div class="col-4 flight-chart right">
<h4 class="name-code d-block fw-bold text-sm-start mb-0 text-center">
${elem.toCode}
</h4>
<small class="city d-block fw-bold text-sm-start mb-1 text-center">
${elem.destination}
</small>
<h5 class="time d-block fw-semibold text-sm-start mb-0 text-center">
                                                       ${elem.arrTime}

</h5>
<small class="date d-block fw-bold text-sm-start text-center">
${elem.endArrivalDate}

</small>
</div>
</div>
<div class="flight-details text-start me-2" x-data="{ active: false }">
<a href="#" class="details-button text-capitalize ps-2 fw-semibold text-danger mb-2" @click.prevent="active = true">
flight details
<i class="fa-solid fa-angles-down ms-2"></i>
</a>

<div class="detail" :class="{ 'active': active }">
<div class="close_details position-absolute" @click.prevent="active = false">
<i class="fa fa-times"></i>
</div>

<div class="flight-item">

<h6 class="title d-flex justify-content-between p-3">
<span class="text-left">
${elem.fromAirport}-
${elem.fromCode}
<i class="fa fa-arrow-right"></i>
${elem.destination} -
${elem.toCode}
</span>
<span class="text-right">
Departure:
<b>${dateStarts}</b>

</span>
</h6>



                                                            

                                                                                                                                                    <div class="row column-reverse px-3 py-2">
    <div class="col-lg-9 col-md-9 col-sm-9 leg-flight-section">
        <div class="row depart">

            
            <div class="col-lg-4 col-md-5 col-sm-4 leg-departure text-center">
                <div class="details">
                    <p class="fw-semibold">
                        ${elem.fromAirport}
                        <span class="hidden-sm hidden-xs">
                            -
                           ${elem.fromCode}
                        </span>
                    </p>
                    <small class="d-block">${travellingClass}</small>
                    <small>
                        
                        ${dateStarts} - ${elem.depTime}
                    </small>
                </div>
            </div>


            
            <div class="col-lg-4 col-md-2 col-sm-4 leg-connection text-center">
                <div class="flight-num">
                    <small class="d-block opacity-0"><small>Flight
                            #
                            7002</small></small>
                    <img src="../assets/f_con-95f7a60a.png" class="img-responsive">
                    <small class="d-block">
                        <small>
                           ${elem.startToStopTimeDuration} 
                        </small>
                    </small>
                </div>
            </div>


            
            <div class="col-lg-4 col-md-5 col-sm-4 leg-arrival mb-4 text-center">
                <div class="row">
                    <p class="fw-semibold">
                        ${elem.airportDown}<span class="hidden-sm hidden-xs">
                            -
                            ${elem.airportDownCode}</span>
                    </p>
                    <small class="mb-1">
                                                                                                                               ${elem.startsFromStopDeparture} - ${elem.stopTime}
                    </small>
                    <small class="d-block">
                        <i class="fa fa-briefcase"></i>
                        Baggage: 1PC
                    </small>
                </div>
            </div>


            <div class="border-anime mx-auto mb-1">
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 leg-flight-details text-center">
        <img src="${elem.img}" alt="${elem.stops}" title="${elem.stops}" class="mb-2">
        <small class="fw-semibold d-block">${elem.stops}</small>
    </div>
</div>
                                                                                                                                                
<div class="row column-reverse px-3 py-2">
<div class="col-lg-9 col-md-9 col-sm-9 leg-flight-section">
<div class="row depart">

    
    <div class="col-lg-4 col-md-5 col-sm-4 leg-departure text-center">
        <div class="details">
            <p class="fw-semibold">
               ${elem.airportDown}
                <span class="hidden-sm hidden-xs">
                    -
                   ${elem.airportDownCode}
                </span>
            </p>
            <small class="d-block">${travellingClass}</small>
                                                                                                        <small>
                
              ${elem.startsFromStopDate} - ${elem.stopDeparture}}
            </small>
        </div>
    </div>


    
    <div class="col-lg-4 col-md-2 col-sm-4 leg-connection text-center">
        <div class="flight-num">
            <small class="d-block opacity-0"><small>Flight
                    #
                    7002</small></small>
            <img src="../assets/f_con-95f7a60a.png" class="img-responsive">
            <small class="d-block">
                <small>
                    ${elem.FirstStopToDestinationTimeDuration}
                </small>
            </small>
        </div>
    </div>

    
    <div class="col-lg-4 col-md-5 col-sm-4 leg-arrival mb-4 text-center">
        <div class="row">
            <p class="fw-semibold">
                ${elem.destination}<span class="hidden-sm hidden-xs">
                    -
                    ${elem.toCode}</span>
            </p>
            <small class="mb-1">
                                                                                                               ${elem.endArrivalDate} - ${elem.arrTime} 
            </small>
            <small class="d-block">
                <i class="fa fa-briefcase"></i>
                Baggage: 1PC
            </small>
        </div>
    </div>
</div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 leg-flight-details text-center">
<img src="${elem.img}" alt="${elem.stops}" title="${elem.stops}" class="mb-2">
<small class="fw-semibold d-block">${elem.stops}</small>
</div>
</div>
                                                    </div>



                                                    
<div class="flight-item">
<h6 class="title d-flex justify-content-between p-3">
<span class="text-left">
${elem.destination}-
${elem.toCode}
<i class="fa fa-arrow-right"></i>
${elem.fromAirport}-
${elem.fromCode}</span><span class="text-right">
                                                                                Return:
<b>${elem.endArrivalDate}</b>

</span>
</h6>


                                                                    
                                                                                                                                                                                                                                            <div class="row column-reverse px-3 py-2">
        <div class="col-lg-9 col-md-9 col-sm-9 leg-flight-section">
            <div class="row depart">
                
                <div class="col-lg-4 col-md-5 col-sm-4 leg-departure text-center">

                    <div class="details">
                        <p class="fw-semibold">
                            ${elem.destination}<span class="hidden-sm hidden-xs">
                                -
                                ${elem.toCode}</span>
                        </p>
                        <small class="d-block">${travellingClass}</small>
                        <small>
                            
                           ${dateDest} - ${elem.outDepTime}
                        </small>
                    </div>
                </div>

                
                <div class="col-lg-4 col-md-2 col-sm-4 leg-connection text-center">
                    <div class="flight-num">
                        <small class="d-block opacity-0"><small>Flight
                                #
                                7002</small></small>
                        <img src="../assets/f_con-95f7a60a.png" class="img-responsive">
                        <small class="d-block">
                            <small>
                                ${elem.outcommingToSecondStopTimeDuration} 
                            </small>
                        </small>
                    </div>
                </div>

                
                <div class="col-lg-4 col-md-5 col-sm-4 leg-arrival mb-4 text-center">
                    <div class="row">
                        <p class="fw-semibold">
                           ${elem.airportDown}<span class="hidden-sm hidden-xs">
                                -
                               ${elem.airportDownCode}</span>
                        </p>
                        <small class="mb-1">
                                                                                                                                    ${elem.stopreeturnDate}  - ${elem.reurtingStopTime}
                            
                        </small>
                        <small class="d-block"><i class="fa fa-briefcase"></i>
                            Baggage:
                            1PC</small>
                    </div>
                </div>

                <div class="border-anime mx-auto mb-1">
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 leg-flight-details text-center">
            <img src="${elem.img}" alt="${elem.stops}" title="${elem.stops}" class="mb-2">
            <small class="fw-semibold d-block">${elem.stops}</small>
        </div>
    </div>
                                                                                                                                                            
<div class="row column-reverse px-3 py-2">
<div class="col-lg-9 col-md-9 col-sm-9 leg-flight-section">
    <div class="row depart">
        
        <div class="col-lg-4 col-md-5 col-sm-4 leg-departure text-center">

            <div class="details">
                <p class="fw-semibold">
                    ${elem.airportDown}<span class="hidden-sm hidden-xs">
                        -
                        ${elem.airportDownCode}</span>
                </p>
                <small class="d-block">${travellingClass}</small>
                <small>
                    
                                                                                                                        ${elem.stopreeturnDate}- ${elem.returningstopdeparture}
                </small>
            </div>

        </div>

        
        <div class="col-lg-4 col-md-2 col-sm-4 leg-connection text-center">
            <div class="flight-num">
                <small class="d-block opacity-0"><small>Flight
                        #
                        7002</small></small>
                <img src="../assets/f_con-95f7a60a.png" class="img-responsive">
                <small class="d-block"><small>
                        ${elem.SecondStopToDestinationTimeDuration} 
                    </small></small>
            </div>
        </div>

        
        <div class="col-lg-4 col-md-5 col-sm-4 leg-arrival mb-3 text-center">
            <div class="row">
                <p class="fw-semibold">
                    ${elem.fromAirport}<span class="hidden-sm hidden-xs">
                        -
                        ${elem.fromCode}</span>
                </p>
                <small class="mb-1">
                    
                                                                                                                       ${elem.outArrivalDate} - ${elem.outArrTime}
                </small>
                <small class="d-block"><i class="fa fa-briefcase"></i>
                    Baggage: 1PC</small>
            </div>
        </div>
    </div>
</div>

<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 leg-flight-details text-center">
    <img src="${elem.img}" alt="${elem.stops}" title="${elem.stops}" class="mb-2">
    <small class="fw-semibold d-block">${elem.stops}</small>
</div>
</div>
                                                            </div>
                                            </div>
</div>
</div>


                            <div class="col-6 flight inbound">
<div class="subtitle">
<h6 class="subtitle-text text-capitalize m-0 p-2 text-center text-white">
Inbound flight
<i class="fa fa-long-arrow-left ms-3"></i>
</h6>
</div>
                                        <div class="row g-3 py-2">
<div class="col-4 flight-chart left">
<h4 class="name-code d-block text-sm-end fw-bold mb-0 text-center">
${elem.toCode}
</h4>
<small class="city d-block text-sm-end fw-bold mb-2 text-center">
${elem.destination}
</small>
<h5 class="time d-block text-sm-end fw-semibold mb-0 text-center">

${elem.outDepTime}

</h5>
<small class="date d-block text-sm-end fw-bold text-center">

${dateDest}
</small>
</div>

<div class="col-4 flight-airline text-center">
<div class="row">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stopover">
<small class="text-muted fa-.1x ">1
stop</small>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 connection">
<div class="icon">
<img src="../assets/black-plane-955d6719.png" alt="">
</div>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 airline">
<small title="Tap Air Portugal" class="text-muted fa-.1x d-block">${elem.stops}</small>
<img src="${elem.img}" alt="Tap Air Portugal" class="w-50">
</div>
</div>
</div>

<div class="col-4 flight-chart right">
<h4 class="name-code d-block fw-bold text-sm-start mb-0 text-center">
${elem.fromCode}</h4>
<small class="city d-block fw-bold text-sm-start mb-1 text-center">
${elem.fromAirport}
</small>
<h5 class="time d-block fw-semibold text-sm-start mb-0 text-center">
                                                               ${elem.outArrTime}

</h5>
<small class="date d-block fw-bold text-sm-start text-center">
${elem.outArrivalDate}

</small>
</div>
</div>
</div>
                    </div>
</div>


<div class="col-lg-3 price-area d-flex flex-lg-column justify-content-between text-center">
<div class="price-lg p-3">
                        <h6>From ${elem.price}</h6>
<h2 class="fw-bold">£ ${elem.price}<span>PP</span></h2>
<h6>
Return, Inc. Taxes<br>
1 adult                                                         <br>
<strong class="total">Total Price £
${elem.price}</strong>
</h6>
</div>

<div class="price-md w-50 p-2">
<p class="fw-semibold">
£ ${elem.price}
<small>1 Person(s)</small>
</p>
</div>

<div class="add-to-link d-flex w-100">
<a class="call-now contacts" href="tel:+44 74 6226 3806">
<i class="fa fa-phone"></i><span class="ms-1">+44 74 6226 3806</span>
</a>
<a class="book-now contacts" href="">

<i class="fa fa-check"></i>
<span class="ms-1">Book Now</span>
</a>
<a class="whatsapp-now contacts" href="https://api.whatsapp.com/send?phone=+447462263806&amp;text=I'm%20interested%20in%20flights%20deals" target="_blank">
<i class="fa-brands fa-whatsapp"></i><span class="ms-1">Whatsapp</span>
</a>
</div>
</div>
</div>
</div>`;
    const resultItemElement = document.querySelector("#class-1-tab-pane");
    const class4TabElement = document.getElementById("class-4-tab");
  

    if (class4TabElement.classList.contains("active")) {
      // When the element with ID "class-4-tab" has the class "active"
      resultItemElement.innerHTML = `<p class="not-found">No Fare Found for your search criteria. Please try again by
    changing your traveling dates or airports. or Call on <a href="tel:+44 74 6226 3806" class="call text-danger fw-bolder">+44 74 6226 3806</a> for the best available option.</p>`;
    } else {
      // When the element with ID "class-4-tab" doesn't have the class "active"
      resultItemElement.insertAdjacentHTML("beforeend", data);
    }


    let data2 = `<div class="result-item mb-3 newResult">
<div class="row g-0">

<div class="col-lg-9">
<div class="row g-0">
<div class="col-xs-12 airline-list py-1">
<span class="airline-no rounded-circle fw-bolder mx-2">${elem.ticketnumber}</span>
<span class="airline-name">
<strong class="me-2">${elem.stops}</strong>To
${elem.destination} </span>
</div>


<div class="flight outbound border-end col-12">

<div class="subtitle opacity-0">
<h6 class="subtitle-text text-capitalize m-0 p-2 text-center text-white">
outbound flight <i class="fa fa-long-arrow-right ms-3"></i>
</h6>
</div>
<div class="row g-3 py-2">
<div class="col-4 flight-chart left">
<h4 class="name-code d-block text-sm-end fw-bold mb-0 text-center">
${elem.fromCode}
</h4>
<small class="city d-block text-sm-end fw-bold mb-2 text-center">
${elem.fromAirport}
</small>
<h5 class="time d-block text-sm-end fw-semibold mb-0 text-center">
${elem.depTime}

</h5>
<small class="date d-block text-sm-end fw-bold text-center">
${dateStarts}

</small>
</div>

<div class="col-4 flight-airline text-center">
<div class="row">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 stopover">
<small class="text-muted fa-.1x ">1
stop</small>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 connection">
<div class="icon">
<img src="../assets/black-plane-955d6719.png" alt="">
</div>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 airline">
<small title="Tap Air Portugal" class="text-muted fa-.1x d-block">Tap Air Portugal</small>
<img src="${elem.img}" alt="Tap Air Portugal" class="w-50">

</div>
</div>
</div>

<div class="col-4 flight-chart right">
<h4 class="name-code d-block fw-bold text-sm-start mb-0 text-center">
${elem.toCode}
</h4>
<small class="city d-block fw-bold text-sm-start mb-1 text-center">
${elem.destination}
</small>
<h5 class="time d-block fw-semibold text-sm-start mb-0 text-center">
                                                       ${elem.arrTime}

</h5>
<small class="date d-block fw-bold text-sm-start text-center">
${elem.endArrivalDate} 

</small>
</div>
</div>
<div class="flight-details text-start me-2" x-data="{ active: false }">
<a href="#" class="details-button details-button2 text-capitalize ps-2 fw-semibold text-danger mb-2" @click.prevent="active = true">
flight details
<i class="fa-solid fa-angles-down ms-2"></i>
</a>

<div class="detail details2" >
<div class="close_details position-absolute" @click.prevent="active = false">
<i class="fa fa-times"></i>
</div>

<div class="flight-item">

<h6 class="title d-flex justify-content-between p-3">
<span class="text-left">
${elem.fromAirport} -
${elem.fromCode}
<i class="fa fa-arrow-right"></i>
${elem.destination} -
${elem.toCode}
</span>
<span class="text-right">
Departure:
<b>${dateStarts}</b>

</span>
</h6>



                                                            

                                                                                                                                                    <div class="row column-reverse px-3 py-2">
    <div class="col-lg-9 col-md-9 col-sm-9 leg-flight-section">
        <div class="row depart">

            
            <div class="col-lg-4 col-md-5 col-sm-4 leg-departure text-center">
                <div class="details">
                    <p class="fw-semibold">
                        ${elem.fromAirport}
                        <span class="hidden-sm hidden-xs">
                            -
                            ${elem.fromCode}
                        </span>
                    </p>
                    <small class="d-block">${travellingClass}</small>
                    <small>
                        
                    ${dateStarts} - ${elem.depTime}
                    </small>
                </div>
            </div>


            
            <div class="col-lg-4 col-md-2 col-sm-4 leg-connection text-center">
                <div class="flight-num">
                    <small class="d-block opacity-0"><small>Flight
                            #
                            7002</small></small>
                    <img src="../assets/f_con-95f7a60a.png" class="img-responsive">
                    <small class="d-block">
                        <small>
                            2 hours 40 minutes 
                        </small>
                    </small>
                </div>
            </div>


            
            <div class="col-lg-4 col-md-5 col-sm-4 leg-arrival mb-4 text-center">
                <div class="row">
                    <p class="fw-semibold">
                        ${elem.airportDown}<span class="hidden-sm hidden-xs">
                            -
                            ${elem.airportDownCode}</span>
                    </p>
                    <small class="mb-1">
                                                                                                                              ${dateStarts} - ${elem.stopTime}
                    </small>
                    <small class="d-block">
                        <i class="fa fa-briefcase"></i>
                        Baggage: 1PC
                    </small>
                </div>
            </div>


            <div class="border-anime mx-auto mb-1">
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 leg-flight-details text-center">
        <img src="${elem.img}" alt="Tap Air Portugal" title="Tap Air Portugal" class="mb-2">
        <small class="fw-semibold d-block">Tap Air Portugal</small>
    </div>
</div>
                                                                                                                                                
<div class="row column-reverse px-3 py-2">
<div class="col-lg-9 col-md-9 col-sm-9 leg-flight-section">
<div class="row depart">

    
    <div class="col-lg-4 col-md-5 col-sm-4 leg-departure text-center">
        <div class="details">
            <p class="fw-semibold">
                ${elem.airportDown}
                <span class="hidden-sm hidden-xs">
                    -
                   ${elem.airportDownCode}
                </span>
            </p>
            <small class="d-block">${travellingClass}</small>
                                                                                                        <small>
                
                ${dateStarts} - ${elem.stopDeparture}
            </small>
        </div>
    </div>


    
    <div class="col-lg-4 col-md-2 col-sm-4 leg-connection text-center">
        <div class="flight-num">
            <small class="d-block opacity-0"><small>Flight
                    #
                    7002</small></small>
            <img src="../assets/f_con-95f7a60a.png" class="img-responsive">
            <small class="d-block">
                <small>
                    4 hours 45 minutes
                </small>
            </small>
        </div>
    </div>

    
    <div class="col-lg-4 col-md-5 col-sm-4 leg-arrival mb-4 text-center">
        <div class="row">
            <p class="fw-semibold">
                Kotoka International Airport<span class="hidden-sm hidden-xs">
                    -
                    ACC</span>
            </p>
            <small class="mb-1">
            ${elem.endArrivalDate}-${elem.arrTime}               
            </small>
            <small class="d-block">
                <i class="fa fa-briefcase"></i>
                Baggage: 1PC
            </small>
        </div>
    </div>
</div>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 leg-flight-details text-center">
<img src="${elem.img}" alt="Tap Air Portugal" title="Tap Air Portugal" class="mb-2">
<small class="fw-semibold d-block">Tap Air Portugal</small>
</div>
</div>
                                                    </div>



                                            </div>
</div>
</div>


                    </div>
</div>


<div class="col-lg-3 price-area d-flex flex-lg-column justify-content-between text-center">
<div class="price-lg p-3">
                        <h6>From 370</h6>
<h2 class="fw-bold">£ 370<span>PP</span></h2>
<h6>
Return, Inc. Taxes<br>
1 adult                                                         <br>
<strong class="total">Total Price £
370</strong>
</h6>
</div>

<div class="price-md w-50 p-2">
<p class="fw-semibold">
£ 370
<small>1 Person(s)</small>
</p>
</div>

<div class="add-to-link d-flex w-100">
<a class="call-now contacts" href="tel:+44 74 6226 3806">
<i class="fa fa-phone"></i><span class="ms-1">+44 74 6226 3806</span>
</a>
<a class="book-now contacts" href="#">
<i class="fa fa-check"></i>
<span class="ms-1">Book Now</span>
</a>
<a class="whatsapp-now contacts" href="https://api.whatsapp.com/send?phone=+447462263806&amp;text=I'm%20interested%20in%20flights%20deals" target="_blank">
<i class="fa-brands fa-whatsapp"></i><span class="ms-1">Whatsapp</span>
</a>
</div>
</div>
</div>
</div>`;

    //single ticket  js ends from here

    document.getElementById("one-way").addEventListener("click", () => {
      // resultItemElement.innerHTML="";
      // resultItemElement.innerHTML+=data2;
      // Using the reverse() method (modifies the original array)

console.log(data2);
      resultItemElement.insertAdjacentHTML("afterbegin",data2);
      const detailButtons = document.querySelectorAll(".details-button");

      detailButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          
          const detailElements = document.querySelectorAll(".detail");
    
          // Hide all detail elements except the one corresponding to the clicked button
          detailElements.forEach((detailElement, i) => {
            if (i === index) {
              detailElement.classList.toggle("active");
            } else {
              detailElement.classList.remove("active");
            }
          });
        });
      });
    });

    document.getElementById("round-way").addEventListener("click", () => {
      const data2Elements = document.getElementsByClassName("newResult");
      while (data2Elements.length > 0) {
        data2Elements[0].remove();
        window.location.reload();
      }
    });

    noFlights = flightsNew;

    //flights ticket ends here
  });

  document.querySelector(".search-header").style.display = "block";

  const detailButtons = document.querySelectorAll(".details-button");

  detailButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
    
      const detailElements = document.querySelectorAll(".detail");

      // Hide all detail elements except the one corresponding to the clicked button
      detailElements.forEach((detailElement, i) => {
        if (i === index) {
          detailElement.classList.toggle("active");
        } else {
          detailElement.classList.remove("active");
        }
      });
    });
  });
 


 


} else {


  document.getElementById("class-1-tab-pane").innerHTML = `
          <div class="tab-pane fade show active" id="class-1-tab-pane" role="tabpanel" tabindex="1" aria-labelledby="#class-1-tab">
            <div class="search-header py-4">
              <h2 class="search-title fw-bold">The Destination Is Empty must Enter A Valid Destination</h2>
            
            </div>
            <p class="not-found">No Fare Found for your search criteria. Please try again by changing your travelling dates or airports. or Call on <a href="tel:+44 74 6226 3806" class="call text-danger fw-bolder">+44 74 6226 3806</a> for the best available option.</p>
          </div>
        `;
}
//london to accraghana ends here

document.querySelector(".remove-return-date").addEventListener("click", () => {
  document.querySelector(".return").style.display = "none";
  document.querySelector(".targetArrival").textContent = "";
});

// if(document.querySelector('.toairportTarget').textContent!=" Select destination")
// {

document.querySelector("#class-1-tab-pane").insertAdjacentHTML("afterbegin", headerData);
// }

//single side tickets array starts from here

//single side tickets array ends here
document.querySelector(".subs-button").classList.add("disabled");
// close_details



  const detailButtons3 = document.querySelectorAll(".close_details");

  detailButtons3.forEach((button, index) => {
    button.addEventListener("click", () => {
      const detailElements3 = document.querySelectorAll(".detail");

      // Hide all detail elements except the one corresponding to the clicked button
      detailElements3.forEach((detailElement3, i) => {
        if (i === index) {
            detailElement3.classList.toggle("active");
          } else {
            detailElement3.classList.remove("active");
          }
      });
    });
  });
