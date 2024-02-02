/*
When a user loads the page disply some freelancers ,
make new objects show up 
and make the objects show up every 3 seconds.
track the average price 
and update the price everytime a new object is rendered


Nouns
- name
- occupation
- price

Verb
- every 3 seconds display a new object 
- track the average price from the arr 
- display a freelancer , genaratef a td and tr

State
- name
- occupation
- price

*/
// ================= state =================
const freelancers = [
  { name: "Dr. Slice", price: 205, occupation: "gardener" },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "ukh. Prism", price: 81, occupation: "teacher" },
  { name: "rgf. thdjk", price: 81, occupation: "unimployed" },
  { name: "dfds. jk,b", price: 81, occupation: "unimployed" },
  { name: "Prof. Prism", price: 8001, occupation: "unimployed" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "loc. hfd", price: 72, occupation: "driver" },
  { name: "fhuj. cgayuf", price: 702, occupation: "programmer" },
  { name: "thtfh. fdmdss", price: 12, occupation: "driver" },
  { name: "uyug. fdefs", price: 72, occupation: "ytft" },
  { name: "fgrrd. thfgs", price: 52, occupation: "truck" },
  { name: "rrgege. fdghni", price: 7, occupation: "idk" },
  { name: "rrnfjd. eds", price: 7, occupation: "idk" },
  { name: "rrnfjd. eds", price: 7, occupation: "idk" },
  { name: "rrnfjd. eds", price: 7, occupation: "idk" },
  { name: "rrnfjd. eds", price: 7, occupation: "idvbugv" },
];
let counter = 0;
let totalPrice = 0;
let averagePrice = 0;

//=================== state=======================

//====================  render ===========

function selectRandomElement(freelancers) {
  const randomIndex = Math.floor(Math.random() * freelancers.length);
  return freelancers[randomIndex];
}

function renderFreelancers() {
  const freelancer = freelancers[counter % freelancers.length];
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = freelancer.name;
  row.appendChild(nameCell);

  const occupationalCell = document.createElement("td");
  occupationalCell.textContent = freelancer.occupation;
  row.appendChild(occupationalCell);

  const priceCell = document.createElement("td");
  priceCell.textContent = freelancer.price;
  row.appendChild(priceCell);

  const tableBody = document.querySelector("tbody");
  tableBody.appendChild(row);

  totalPrice += freelancer.price;
  averagePrice = totalPrice / (counter + 1);
  const averagePriceElement = document.querySelector(".averagePrice");
  averagePriceElement.textContent = `${averagePrice.toFixed(2)}`;

  counter++;
}

// ======== Script ==========

// Render the initial state
renderFreelancers();

// Set an interval to render a new freelancer every 3 seconds
setInterval(renderFreelancers, 3000);
