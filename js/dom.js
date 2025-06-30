const dateInput = document.querySelector(".date-input");
const dateImage = document.createElement("img");
const dateTitle = document.querySelector(".date-title");
const dateDiscreption = document.querySelector(".date-discreption");
const generatedContent = document.querySelector(".generated-content");
dateInput.value = "2023-03-05";

const renderLaunches = (data) => {
  for (let i = 0; i < 6; i++) {
    const cardContainer = document.querySelector(".events-container");
    const eventsItem = document.createElement("div");
    eventsItem.classList.add("events-items");
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    const eventImg = document.createElement("img");
    eventImg.classList.add("event-img");
    const eventDetails = document.createElement("div");
    eventDetails.classList.add("event-details");
    const eventTitle = document.createElement("h3");
    eventTitle.classList.add("event-title");
    const eventPar = document.createElement("p");
    eventPar.classList.add("event-description");
    eventsItem.append(eventImg);
    eventDetails.append(eventTitle);
    eventDetails.append(eventPar);
    eventsItem.append(eventDetails);
    cardContainer.append(eventsItem);
    eventPar.textContent = data[i].details;
    eventTitle.textContent = data[i].name;
    eventImg.src = data[i].links.patch.small;
  }
};

let url = `https://api.spacexdata.com/v4/launches/`;
fetch(url, (data) => {
  renderLaunches(data);
});

const nasaRequest = () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=KPpPixIqS1RimkI6mOUVG7JRay6Fx0kUGhezQT6x&date=${dateInput.value}&`;
  fetch(url, (resposne) => {
    dateTitle.textContent = resposne.title;
    dateDiscreption.textContent = resposne.explanation;
    dateImage.classList = "date-img";
    const imageSrc = resposne.url;
    dateImage.setAttribute("src", imageSrc);
    generatedContent.appendChild(dateImage);
  });
};
nasaRequest();
dateInput.addEventListener("change", () => {
  nasaRequest();
});
