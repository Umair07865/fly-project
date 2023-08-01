// const idArray = Array.from(document.querySelectorAll("[id]")).map(
//   (element) => element.id
// );
// console.log(idArray);




const newarray = [
   "AALBORG",
    "ABU",
    "ADDIS",
    "ADELAIDE",
    "MADRID",
    "MEXICO",
    "KISUMU",
    "KOSGREECE",
    "YAOUNDE",
    "LAROCHELLE",
    "MORONI",
    "AGADIR",
    "CONAKRY",
    "AALESUND",
    "CALICOLOMBIA",
    "ALGIERS",
    "ALICANTE",
    "LAHORE",
    "ALTA",
    "AMSTERDAM",
    "AGANA",
    "SANTIAGO",
    "ASMARA",
    "ATHENS",
    "AUCKLAND",
    "BUCHAREST",
    "BAHRAIN",
    "BANJUL",
    "ARAB",
    "BEIJING",
    "BEIRA",
    "BENGHAZI",
    "BERGEN",
    "BERGERAC",
    "BILLUND",
    "BIRMINGHAM",
    "BODO",
    "BORDEAUX",
    "BOSTON",
    "BLOEMFONTEIN",
    "BRATISLAVA",
    "BRISBANE",
    "BRNO",
    "BRUSSELS",
    "BUDAPEST",
    "BOURGAS",
    "CAGLIARI",
    "CAIRNS",
    "CAIRO",
    "CANBERRA",
    "CAPETOWN",
    "MONTEVIDEO",
    "GEORGETOWN",
    "MUMBAI",
    "CHISINAU",
    "CHRISTCHURCH",
    "COLOGNE",
    "BAKU",
    "COPENHAGEN",
    "BARWIN",
    "NIAMEY",
    "DJIBOUTI",
    "DORTMUND",
    "DOUALA",
    "DUBAI",
    "DUBLIN",
    "DUBROVNKIN",
    "DUNEDIN",
    "DUSSELDORF",
    "LONDON",
    "LONDON",
    "EINDHOVEN",
    "LAPAZ",
    "BOGOTA",
    "SANSALVADOR",
    "SANTACRUZ",
    "ENTEBBE",
    "ESSAOUIRA",
    "BUENOS",
    "PAPEETE",
    "ABIDJAN",
    "FEZMOROCCO",
    "FLORENCE",
    "ZAGREB",
    "FRANKFURT",
    "FREETOWN",
    "GDANSK",
    "BACAU",
    "GOA",
    "GOLDCOAST",
    "GOTHENBURG",
    "LASPALMAS",
    "BRIDGETOWN",
    "GRAZ",
    "DOHAQATAR",
    "HAMBURG",
    "KABUL",
    "TOKYO",
    "HANOVER",
    "HARGEISA",
    "LASVEGAS",
    "HAUGESUND",
    "NAPIER",
    "DHAKA",
    "HELSINKI",
    "STLUCIA",
    "HONGKONG",
    "WINDHOEK",
    "LISBON",
    "IBIZA",
    "SEOUL",
    "CORDOBA",
    "INNSBRUCK",
    "BRASILIA",
    "KNOCKIRELAND",
    "ISTANBUL",
    "ANTANANARIVO",
    "KARACHI",
    "PARAMARIBO",
    "NEWYORK",
    "KRAKOW",
    "NAIROBI",
    "LIMA",
    "GUAYAQUIL",
    "BARCELONA",
    "KAJAANI",
    "LILONGWE",
    "KATOWICE",
    "KAUNAS",
    "KEFALONIA",
    "REYKJAVIK",
    "LUSAKA",
    "KILGALI",
    "KIMBERLEY",
    "JEDDAH",
    "DURBAN",
    "KOSICE",
    "ACCRAGHANA",
    "KUALA",
    "KUOPIO",
    "KUWAIT",
    "HAMILTON",
    "LARNACA",
    "ROMEITALY",
    "DAKARSENEGAL",
    "OSTRAVA",
    "LINZAUSTRIA",
    "LJUBLJANA",
    "LONDONUNITEDSTATES",
    "LONDONUNITEDKINGDOM",
    "LUANDA",
    "LUXEMBOURG",
    "NASSAU",
    "CEBUPHILLIPPINES",
    "MALABO",
    "MALINDI",
    "KANO",
    "KANO",
    "MANCHESTER",
    "MAPUTO",
    "BAIAMARE",
    "QUITO",
    "MARRAKECH",
    "STGEORGES",
    "MPMBASA",
    "BUJUMBURA",
    "MILAN",
    "BAMAKO",
    "CASABLANCA",
    "MASERU",
    "LAGOS",
    "MIKONOS",
    "NDJAMENA",
    "NADI",
    "NAPLES",
    "NELSON",
    "DENPASAR",
    "NICEFRANCE",
    "MANILA",
    "ABUIA",
    "KINGSTON",
    "NAUAKCHOTT",
    "NOUAKCHOTT",
    "NOUMEA",
    "JOHANNESBURG",
    "OLBIA",
    "OSLO",
    "OUARZAZATE",
    "OUJDA",
    "OULU",
    "PALERMO",
    "PAPHOS",
    "PARIS",
    "PERTH",
    "PHNOM",
    "RODRIGUES",
    "PORTHARCOURT",
    "POZNAN",
    "PHILIPSBURG",
    "PULA",
    "QUEENSTOWN",
    "RABAT",
    "RENNES",
    "RAROTONGA",
    "RHODES",
    "PAPHOS",
    "HARARE",
    "MONROVIA",
    "WASHINGTON",
    "ROTTERDAM",
    "ROVANIEMI",
    "RZESZOW",
    "SALVADOR",
    "SAMOS",
    "SANFRANCISCO",
    "THIRA",
    "SAOPAULO",
    "CHITTAGONG",
    "SHANNON",
    "SIBBIU",
    "SIEMREAP",
    "ASUNCION",
    "MAIQUETIA",
    "SINGAPORE",
    "PORTLOURIS",
    "GABORONE",
    "SKOPJE",
    "SOFIABULGARIA",
    "SPLITCROATI"
];

//box opening for from city
document.querySelector(".air1").classList.add("removeIt");
document.querySelector(".air2").classList.add("removeIt");

// document.querySelector(".air1").style.display="none";
document.querySelector(".from").addEventListener("click", () => {

  
  var airportSuggestion = document.querySelector(".air1");

    airportSuggestion.style.display = "block";
    // document.querySelector(".air2").style.display="none";
     if(document.querySelector(".air1").classList.contains("removeIt"))
     {
      document.querySelector(".air1").classList.remove("removeIt")
     }

    document.querySelector(".air2").classList.add("removeIt");
    
    // document.querySelector(".air1").classList.remove("hideIt");
    //   if(document.querySelector(".air1").classList.contains("hideIt"))
    // {
    //   document.querySelector(".air1").classList.remove("hideIt");
    // }
    // else{
    //   document.querySelector(".air1").classList.add("hideIt");
    // }
 
});


// document.querySelector(".air2").style.display="none";
document.querySelector(".to").addEventListener("click", () => {

  
  let airportSuggestion = document.querySelector(".air2");

    airportSuggestion.style.display = "block";
    // document.querySelector(".air1").style.display="none";
    if(document.querySelector(".air2").classList.contains("removeIt"))
     {
      document.querySelector(".air2").classList.remove("removeIt")
     }

    document.querySelector(".air1").classList.add("removeIt");
    // document.querySelector(".air2").classList.remove("hideIt");
    // if(document.querySelector(".air2").classList.contains("hideIt"))
    // {
    //   document.querySelector(".air2").classList.remove("hideIt");
    // }
    // else{
    //   document.querySelector(".air2").classList.add("hideIt");
    // }
  
 
});


//box opening for to city ends here
for (let j = 0; j < newarray.length; j++) {
  addEventListenerToElement(j);
}

function addEventListenerToElement(j) {
  let elementId = newarray[j];
  let element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", () => {
      // alert("from working");
      var parentElement = document.getElementById(elementId);
      if (parentElement) {
        var cityfrom = parentElement.querySelector(".city-country").textContent;
        var airportfrom = parentElement.querySelector(".airport-name").textContent;
        document.querySelector(".fromCitys").textContent = cityfrom;
        document.querySelector(".sub-value").textContent = airportfrom;
        // if( document.querySelector(".air2").classList.contains("hideIt"))
        // {
        //   document.querySelector(".air2").classList.remove("hideIt");
        // }
        // else{
        //   document.querySelector(".air2").classList.add("hideIt");
        // }
        
        document.querySelector(".air1").classList.add("removeIt");
       
        document.querySelector(".air1").classList.remove("active");
        document.querySelector(".air2").classList.remove("hideIt");
        
        
        
        
        
      }
    });
  }
}

//box opening and closing for to starts here


for (let k = 0; k < newarray.length; k++) {
  let elementClass = newarray[k];
  let element = document.querySelector(`.${elementClass}`);
  if (element) {
    element.addEventListener("click", () => {
      // alert("list 2 to working");
      var cityfrom = element.querySelector(".city-country").textContent;
      var airportfrom = element.querySelector(".airport-name").textContent;
      document.querySelector(".toCity").textContent = cityfrom;
      document.querySelector(".sub-value2").textContent = airportfrom;
    
      document.querySelector(".air2").classList.add("hideIt");
      document.querySelector(".air2").classList.remove("active");
   
    });
  }
}

 

//and ends here



document.getElementById("searchInput").addEventListener("input", () => {
 

  for (let i = 0; i < newarray.length; i++) {
    
    if ( newarray[i].indexOf(document.getElementById("searchInput").value.toUpperCase()) > -1) {
    
    
      document.getElementById(`${newarray[i]}`).classList.remove("hideIt");
      let gradient1="linear-gradient(90deg,#cd122d 0,#154284)";
      document.getElementById(`${newarray[i]}`).style.background=gradient1;
     
      //this is the data
     
      
     
    
    } else {
    
      document.getElementById(`${newarray[i]}`).classList.add("hideIt");
    
    
    }

   
    //data ends here
  }
});



//airport 2 js starts here

document.getElementById("searchInput2").addEventListener("input", () => {
 

  for (let i = 0; i < newarray.length; i++) {
    
    if ( newarray[i].indexOf(document.getElementById("searchInput2").value.toUpperCase()) > -1) {
    
    
      document.querySelector(`.${newarray[i]}`).classList.remove("hideIt");
      let gradient="linear-gradient(90deg,#cd122d 0,#154284)";
      document.querySelector(`.${newarray[i]}`).style.background=gradient;
      //this is the data
     
      
     
    
    } else {
    
      document.querySelector(`.${newarray[i]}`).classList.add("hideIt");
    
    
    }

   
    //data ends here
  }
});






//journey date section return js ends here
//data picker 2 ends here


//quest picker div js starts from here 

// document.querySelector(".traveler").addEventListener("click", () => {


//   const guestPicker = document.querySelector(".guest-picker");
//   guestPicker.classList.add("active");
// });




// document.querySelector(".plus1").addEventListener("click", ()=>{
//   document.querySelector(".count1").
// })


const counter = document.querySelector(".count1");
const incrementButton = document.querySelector(".plus1");

let count = 1;

incrementButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

const counter2 = document.querySelector(".count1");
const incrementButton2 = document.querySelector(".minus1");

 count2=count ;

incrementButton2.addEventListener("click", () => {
  count2=count--;
 
  counter2.textContent = count2;
});
//adult js ends here

//childeren js
const counter3 = document.querySelector(".count2");
const incrementButton3 = document.querySelector(".plus2");

let count3 = 1;

incrementButton3.addEventListener("click", () => {
  count3++;
  counter3.textContent = count3;
});

const counter4 = document.querySelector(".count2");
const incrementButton4 = document.querySelector(".minus2");

 count4=count3 ;

incrementButton4.addEventListener("click", () => {
  count4=count3--;
 
  counter4.textContent = count4;
});
//childeren js ends here

//infant js starts here

const counter5 = document.querySelector(".count3");
const incrementButton5 = document.querySelector(".plus3");

let count5 = 1;

incrementButton5.addEventListener("click", () => {
  count5++;
  counter5.textContent = count5;
});

const counter6 = document.querySelector(".count3");
const incrementButton6 = document.querySelector(".minus3");

 count6=count5 ;

incrementButton6.addEventListener("click", () => {
  count6=count5--;
 
  counter5.textContent = count5;
});

//infant js ends here

//counter all starts here


//counter all ends here
// Create a variable to track the active state
var isActive = false;

// Function to handle the click event
const handleClick = () => {
  const guestPicker = document.querySelector(".guest-picker");
  
  // Toggle the active state
  isActive = !isActive;
  
  // Add or remove the "active" class based on the active state
  if (!isActive) {
    guestPicker.classList.add("active");
  } 
};

// Add the event listener to the ".traveler" element
document.querySelector(".traveler").addEventListener("click", handleClick);


//guest picher div js ends here
//class radio button js starts from heree


const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radio) => {
  radio.addEventListener("click", () => {
    const label = document.querySelector(`label[for="${radio.id}"]`).textContent;
   document.querySelector(".differentClass").textContent=label;
  });
});

//class radio button js ends here
document.getElementById("done1").addEventListener("click", () => {
  const numberElements = document.querySelectorAll('.c1');
  let sum = 0;
  
  numberElements.forEach(numberElement => {
    const number = parseInt(numberElement.textContent);
    if (!isNaN(number)) {
      sum += number;
    }
  });
  
  console.log("Sum:", sum);
  
  document.querySelector(".travelers1").textContent = `${sum} travelers`;
  document.querySelector(".guest-picker").classList.remove("active");

 
});

  

  
///next page setup

document.querySelector(".search").addEventListener("click",()=>{

  // let selectedCityFrom=document.querySelector(".value").textContent;
  let selectedAirportFrom=document.querySelector(".sub-value").textContent;
  let seleectedCityTo=document.querySelector(".toCity").textContent;
  let selectedAirportTo=document.querySelector(".sub-value2").textContent;
   let dateDep=document.querySelector(".desc").textContent;

   let deteArr=document.querySelector(".desc2").textContent;


   let noOfTraveller=document.querySelector(".travelers1").textContent;
   let travelClass=document.querySelector(".differentClass").textContent;

  let defaultCity=document.querySelector(".fromCitys").textContent;
 if(defaultCity=="London, United Kingdom" && (seleectedCityTo=="Accra, Ghana" || seleectedCityTo=="Lagos, Nigeria" ) ) {
    
   
 
  
  localStorage.setItem("startJourney",defaultCity);
  //  localStorage.setItem("startJourney",selectedCityFrom);
   localStorage.setItem("startPort",selectedAirportFrom);
   localStorage.setItem("endJourney",seleectedCityTo);
   localStorage.setItem("endPort",selectedAirportTo);
   localStorage.setItem("depDate",dateDep);
   localStorage.setItem("deteArr",deteArr);
   localStorage.setItem("noOfTraveller",noOfTraveller);

   localStorage.setItem("travelClass",travelClass);

  }
  else{
    localStorage.clear();
  }
 


})





// Function for the departure date picker
function activateDepartureDatePicker() {
  document.querySelector(".depart").addEventListener("click", () => {
    document.querySelector(".air1").style.display="none";
    document.querySelector(".air2").style.display="none";
    document.querySelector(".date-picker").style.display = "block";
    document.querySelector(".datepicker2").style.display = "none";
    document.querySelector(".startingJourney1").style.display = "block";

    let targetDate = document.querySelectorAll(".startingJourney1 .ui-state-default");

    targetDate.forEach((dateElement) => {
      dateElement.addEventListener("click", function () {
        const selectedDate = dateElement.textContent;
        const month = document.querySelector(".startingJourney1 .ui-datepicker-month").textContent;
        const year = document.querySelector(".startingJourney1 .ui-datepicker-year").textContent;
        document.querySelector("#desc1").textContent = selectedDate + " / " + month + " / " + year;
        document.querySelector(".startingJourney1").style.display = "none";

        console.log("full date : " + selectedDate + " / " + month + " / " + year);
      });
    });
  });
}

// Function for the return date picker
function activateReturnDatePicker() {
  document.querySelector(".return").addEventListener("click", () => {
    document.querySelector(".date-picker").style.display = "none";
    document.querySelector(".datepicker2").style.display = "block";
    document.querySelector(".startingJourney2").style.display = "block";

    let targetData = document.querySelectorAll(".startingJourney2 .ui-state-default");

    targetData.forEach((dateElement) => {
      dateElement.addEventListener("click", function () {
        const selectedDate = dateElement.textContent;
        document.querySelector(".datepicker2").children[1].children[0].children[2].children[0].classList.add("newmonth");
        document.querySelector(".datepicker2").children[1].children[0].children[2].children[1].classList.add("newyear");
        const month = document.querySelector(".newmonth").innerText;
        const year = document.querySelector(".newyear").innerText;
        document.querySelector("#desc2").textContent = selectedDate + " / " + month + " / " + year;
        document.querySelector(".startingJourney2").style.display = "none";

        console.log("full date : " + selectedDate + " / " + month + " / " + year);
      });
    });
  });
}

// Call the functions to activate the date pickers
activateDepartureDatePicker();
activateReturnDatePicker();



  //date picker to ends here
 
  

document.querySelector("#one-way").addEventListener("click",()=>{
document.querySelector(".return").style.display="none";


})
document.querySelector("#round-way").addEventListener("click",()=>{
  document.querySelector(".return").style.display="block";
})

document.querySelector(".subs-button").classList.add("disabled");



// function preventRightClick(event) {
//   event.preventDefault();
// }

// // Attach the event listener to the entire document
// document.addEventListener('contextmenu', preventRightClick);



// Function to activate the Bootstrap date picker

