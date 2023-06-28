// const blog_link=document.querySelector(".blog");
// Store the user name value in localStorage
// localStorage.setItem("blog_link",blog_link);


//-----------------------------------------------------------------------
// // dynamically changing blogs data
// const blog = document.querySelector(".blog");
// blog.addEventListener("click", (event) => {
//   event.preventDefault();

//   // checking if we're already at blog
//   const main = document.querySelector(".main");
//   if (main.classList.contains("blog-main")) {
//     return;
//   }

//   fetch("blog.html")
//     .then((res) => res.text())
//     .then((html) => {
//       main.innerHTML = html;

//       const sendButton = document.querySelector("#search-button");
//       // Add event listener for search button click
//       sendButton.addEventListener("click", () => {
//         const query = document.querySelector("#search-text").value;
//         if (query) {
//           fetchNews(query);
//         }
//       });
//     });
// });
//-----------------------------------------------------------------------
localStorage.setItem("userName","");

//dynamically changing chat room data
const chat = document.querySelector(".global-chat");
chat.addEventListener("click", (event)=>{
    event.preventDefault();

    //checking if we're already at global-chat
    const main = document.querySelector(".main");
    if (main.classList.contains("chat-main")) {
    return;
    }
    fetch("chat.html")
        .then(res=>res.text())
        .then((html)=>{
            const main = document.querySelector(".main");
            main.innerHTML=html;
            // main.insertAdjacentHTML("afterbegin", html);

            // Add event listener after inserting HTML content
            const sendButton = document.querySelector("#search-button");
            sendButton.addEventListener('click', addMessage);
        });
});

//checking if main contains blog, if yes then adding margin top blog class to it
// const main = document.querySelector(".main");
// if (main.classList.contains("blog-main")) {
//     main.classList.add("margin-top-blog");
// }
// else{
//     main.classList.remove("margin-top-blog");
// }

//light-dark-mode
const theme = document.querySelector(".theme");
theme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))theme.src="sun.png";
    else theme.src="moon.png";
    
});


const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

let i = 1;
setInterval(() => {
    if(i==0)i++;
  const chatContainer = document.querySelector(".chat-container");
  chatContainer.style.backgroundImage = `url("chat-bkg/${i}.jpg")`;
  i = (i + 1) % imageNames.length;
}, 2000);



// quotes
const quotes = [
    "Happiness is not a destination, it's a state of mind. Choose to be happy now.",
    "Don't stress over things you can't control. Focus on what you can and let go of the rest.",
    "Happiness is an inside job. It starts with nurturing your mental well-being.",
    "In the chaos of life, find your inner peace. It's the key to a stress-free existence.",
    "Believe in yourself and your ability to overcome any challenge. Your mind is your greatest asset.",
    "Don't let negativity rent space in your mind. Evict it and make room for positivity.",
    "Embrace the present moment. It's where true happiness resides.",
    "Your mind is like a garden. Choose the thoughts you plant wisely.",
    "Stress is not the enemy; how you respond to it is. Cultivate a resilient mindset.",
    "Focus on progress, not perfection. Small steps forward lead to big transformations.",
    "Find joy in the little things. They have the power to brighten your entire day.",
    "Don't let the opinions of others define your happiness. Only you hold the key to your contentment.",
    "Replace 'I can't' with 'I can' and watch your mindset shift towards limitless possibilities.",
    "Give yourself permission to rest. Recharging your mind is essential for overall well-being.",
    "Happiness is not about having everything; it's about appreciating what you already have.",
    "Take care of your mental health as you would your physical health. Both are equally important.",
    "Choose gratitude over complaints. It's a powerful tool to shift your perspective.",
    "Let go of the past; it no longer serves you. Focus on creating a brighter future.",
    "You are not defined by your circumstances. You have the power to shape your own reality.",
    "Challenge negative thoughts with positive affirmations. Train your mind to believe in your potential.",
    "Surround yourself with uplifting people who inspire and support your mental well-being.",
    "Practice self-compassion. Treat yourself with kindness and understanding, especially during tough times.",
    "Worrying won't change the outcome. Focus on what you can do instead.",
    "Your thoughts create your reality. Choose ones that empower and uplift you.",
    "Your mind is like a parachute. It works best when it's open. Embrace new perspectives.",
    "Don't let fear hold you back. Step outside your comfort zone and unlock your true potential.",
    "You are stronger than you think. Trust in your resilience and ability to overcome any obstacle.",
    "Take a break and do something that brings you joy. It's essential for mental rejuvenation.",
    "You are in control of your emotions. Choose peace, happiness, and love as your guiding forces.",
    "Comparison is the thief of joy. Focus on your own journey and celebrate your accomplishments.",
    "Feed your mind with positivity. Surround yourself with uplifting books, podcasts, and people.",
    "Mistakes are lessons in disguise. Embrace them as opportunities for growth and self-improvement.",
    "You can't control the wind, but you can adjust your sails. Adaptability is the key to happiness.",
    "Celebrate progress, no matter how small. Each step forward is a step towards a better you.",
    "Release the need for perfection. Embrace your flaws and imperfections; they make you unique.",
    "A calm mind is a powerful mind. Practice mindfulness and find tranquility within.",
    "You have the power to rewrite your story. Let go of the past and create a future filled with joy.",
    "Choose positivity over negativity. It's a mindset that can transform your entire life.",
    "Give yourself permission to say no. Protect your mental well-being by setting healthy boundaries.",
    "Happiness is not a destination; it's a daily choice. Choose happiness, even in the smallest moments.",
    "Embrace the unknown with curiosity, not fear. You never know what wonderful possibilities await.",
    "You are deserving of love and happiness. Never settle for anything less.",
    "Find beauty in the present moment. It's where life unfolds in all its glory.",
    "Let go of regrets. The past is behind you, but your future is full of endless possibilities.",
    "Your mind is like a muscle. Train it to focus on the positive, and watch your life transform.",
    "Choose self-care over self-neglect. Nurture your mind, body, and soul.",
    "You are not alone in your struggles. Reach out for support; together, we are stronger.",
    "Celebrate the progress of others. A rising tide lifts all boats.",
    "Remember, you have the power to rewrite your story. Start today and create a life filled with joy, purpose, and fulfillment."
  ];

  let j=0;
  setInterval(()=>{
      const quote=quotes[j];
      j=(j+1)%quotes.length;
      const quotesContainer=document.querySelector(".quotes-container");
      quotesContainer.innerHTML=`${"' "+quote+" '"}`;
  },5000);

//login page
// const flag=false;
const signInBtn = document.querySelector(".signout");
const loginForm=document.querySelector(".innerbox");
signInBtn.addEventListener("click",()=>{

    if(signInBtn.innerHTML=="Sign Out"){
        signInBtn.innerHTML="Sign In";
        const username=document.querySelector("#user-name h4");
        username.innerHTML="";
        localStorage.setItem("userName","");
    }
    else{
        loginForm.classList.remove("form-display-hidden");
        loginForm.classList.add("form-display-visible");}
})

const cross=document.querySelector(".cross");
cross.addEventListener("click",()=>{
    loginForm.classList.remove("form-display-visible");
    loginForm.classList.add("form-display-hidden");
})

const submitSigninForm=document.querySelector("#login-submit");
submitSigninForm.addEventListener("click",()=>{

    const formUserName=document.querySelector("#usernameForm").value;
    const pass=document.querySelector("#password").value;

    if(formUserName=="" || pass==""){
        alert("Enter Username and Password (both)");
        return;
    }
    // const userName=document.querySelector("#user-name h4");
    // userName.innerHTML=`User: ${formUserName}`;
    localStorage.setItem("userName",formUserName);
    loginForm.classList.remove("form-display-visible");
    loginForm.classList.add("form-display-hidden");
    const signOut=document.querySelector(".signout");
    signOut.innerHTML="Sign Out";
    // flag=true;
    setTimeout(() => {
        alert("Login Successful. Welcome " + formUserName);
    }, 0);

})

//goals percentage

const checkboxCount=document.querySelectorAll("input[type=checkbox]");
const percentage=document.querySelector("#percentage");

checkboxCount.forEach((checkbox)=>{
    checkbox.addEventListener("change",changeGoal);
});

function changeGoal(){
    const checkedCheckbox=document.querySelectorAll("input[type=checkbox]:checked").length;
    const value=Math.ceil((checkedCheckbox/checkboxCount.length)*100)+"%";
    if(value=="100%"){
        percentage.textContent=`❤️${value}❤️`;
    }
    else percentage.textContent=value;
}


//center quotes
const oneLiners = [
    "Nurture your mind, let happiness unwind.",
    "Find inner peace, let your worries cease.",
    "Unlock your mind, happiness you'll find.",
    "Chase away strife, live a vibrant life.",
    "Feed your soul, let happiness unfold.",
    "Embrace tranquility, live in serenity.",
    "Free your mind, leave stress behind.",
    "Ignite inner joy, let negativity destroy.",
    "Embrace self-care, happiness is in the air.",
    "Mend your mind, leave troubles behind.",
    "Seek mental wealth, embrace your inner health.",
    "Release the strain, let happiness reign.",
    "Cultivate happiness, nurture your greatness.",
    "Restore your mind, a happy life you'll find.",
    "Find harmony within, let happiness begin.",
    "Find your bliss, a happy life you won't miss.",
    "Soothe your mind, true happiness you'll find.",
    "Radiate positivity, embrace tranquility.",
    "Elevate your spirit, let happiness inherit.",
    "Celebrate your mind, a joyful life you'll find."
  ];

  let k=0;
  setInterval(()=>{
    const centerQuote=document.querySelector("#center-quote");
        centerQuote.innerHTML=oneLiners[k];
        k=(k+1)%oneLiners.length
  },3500)