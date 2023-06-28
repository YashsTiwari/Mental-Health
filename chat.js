// Attach event listeners to send button
function attachEventListeners() {
    const sendButton = document.querySelector("#send-button");
    sendButton.addEventListener("click", addMessage);
  }
  
  // Call the attachEventListeners function initially to attach the event listener to the existing send button
  attachEventListeners();
  
  // Function to handle adding a new message
  function addMessage() {
    const userName = localStorage.getItem("userName");
    const messageInput = document.querySelector("#message-input");
  
    if (userName === "") {
      alert("Sign in first");
      return;
    } else if (messageInput.value === "") {
      alert("Enter a message");
      return;
    }
  
    const template = document.querySelector("#template-post-message");
    const cloneNode = template.content.cloneNode(true);
    const cardHolder = document.querySelector("#chat-container");
  
    const cardMessage = cloneNode.querySelector("#template-card-message");
    cardMessage.innerHTML = messageInput.value;
  
    const cardUserName = cloneNode.querySelector("#template-card-user-name");
    if (document.querySelector("#checkbox").checked) {
      cardUserName.innerHTML = "Anonymous Post";
      document.querySelector("#checkbox").checked = false;
    } else {
      cardUserName.innerHTML = userName;
    }
  
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
    const dateTimeString = `${dateString} - ${timeString}`;
    const cardTime = cloneNode.querySelector("#template-card-time");
    cardTime.innerHTML = dateTimeString;
  
    cardHolder.appendChild(cloneNode);
  
    messageInput.value = "";
  }
  
  
  // Update event listeners when new content is loaded dynamically
  function updateEventListeners() {
    attachEventListeners();
  }
  
  // Listen for DOMContentLoaded event to update event listeners
//   document.addEventListener("DOMContentLoaded", updateEventListeners);
  