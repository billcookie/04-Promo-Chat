const batch = 928; // change to your own batch id
const baseUrl = `https://wagon-chat.herokuapp.com/${batch}/messages`;
const form = document.querySelector("#form-id");

// RANDOM PICTURES:

const myPix = ["css/images/Darth-vader-avatar.png", "css/images/emperor-avatar.png", "css/images/Storm-trooper-avatar.png"];

const choosePic = () => {
  const randomNum = myPix[Math.floor(Math.random() * myPix.length)];
  return randomNum;
};

// GETTING THE MESSAGES

const userInfo = {

};

const fetchMessages = () => {
  const url = "https://wagon-chat.herokuapp.com/928/messages";
  const messages = document.querySelector(".message-conversations");
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      messages.innerHTML = "";
      const newMessages = data.messages;
      // const allAuthors = newMessages.author
      // allAuthors.forEach((element) => {
      //   userInfo.push()
      // })
      // // get all the authors from the newMessages
      // // const allAuthors = newMessages.author
      // // allAuthors.forEach()
      // // // for each author you want to check if user info object
      // // if
      // // // if not want to create a new random picture
      // // console.log(data);
      newMessages.forEach((message) => {
        messages.insertAdjacentHTML(
          'beforeend',
          `<div class="message">
          <img class="message-img"src="${choosePic()}" alt="avatar">
          <div class="message-content">
          <p class="messenger-name"><strong>${message.author}</strong></p>
          <span class="date">${Math.round((new Date() - new Date(message.created_at)) / 60000)} minutes ago</span>
          <p>${message.content}</p>
          </div>
          </div>`

        );
      });
    });
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(fetchMessages, 1000);
});

// POSTING MESSAGES

const postMessage = (event) => {
  event.preventDefault();
  const nameValue = document.getElementById("user").innerText;
  const messageValue = document.getElementById("your-message").value;

  const data = {
    author: nameValue,
    content: messageValue
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };

  fetch(baseUrl, options)
    .then(response => response.json())
    .then((dataMate) => {
    });
  fetchMessages();
};

form.addEventListener("submit", postMessage);
// Your turn to code!

// userInfo[message.author]
