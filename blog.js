const API_KEY="b116ef9ac074447faa4febf600f230a9";
const url="https://newsapi.org/v2/everything?q= ";

// const blog_link=localStorage.getItem("blog_link");
window.addEventListener('load',()=>fetchNews("yoga")); 

async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();

    bindData(data.articles);
}
function bindData(articles){
    const cardHolder=document.getElementById("article-holder");
    const template=document.getElementById("template-article");

    cardHolder.innerHTML="";

    articles.forEach((article) => {
        if(!article.urlToImage || article.source.name=="The Economist")return;
        const cloneNode=template.content.cloneNode(true);
        fillData(cloneNode,article);
        cardHolder.appendChild(cloneNode);
    });
    
}
function fillData(cloneNode,article){
  if(!article.urlToImage || !article.title || !article.description || !article.publishedAt || !article.source.name)return;
    const articleImg=cloneNode.querySelector("#article-img");
    const articleTitle=cloneNode.querySelector("#article-title");
    const articleSource=cloneNode.querySelector("#article-source");
    const articleDesc=cloneNode.querySelector("#article-desc");

    articleImg.src=article.urlToImage;
    articleTitle.innerHTML=article.title;
    articleDesc.innerHTML=article.description;
    const date=new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta"
    });
    articleSource.innerHTML=`${article.source.name} · ${date}`;
    
    cloneNode.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank")
    })
}
const searchText=document.getElementById('search-text');
const searchButton=document.getElementById('search-button');

searchButton.addEventListener('click',()=>{
    const query=searchText.value;
    console.log("Search query:", query); 
    if(!query)return;
    fetchNews(query);
}) 
//light-dark-mode
const theme = document.querySelector(".theme");
theme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))theme.src="sun.png";
    else theme.src="moon.png";
    
});

const quotes = [
    "Happiness is not a destination, it's a state of mind. Choose to be happy now.",
    "Don't stress over things you can't control. Focus on what you can and let go of the rest.",
    "Your mind is a powerful tool. Take control of it and you'll take control of your life.",
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
  ];

let i=48;
setInterval(() => {
    const quotesContainer=document.querySelector(".quotes-container");
    quotesContainer.innerHTML=`${"' "+quotes[i]+" '"}`;
    i=i-1;
    if(i<0)i=48;
},5000);

// const username=document.querySelector("#user-name");
// username.innerHTML=localStorage.getItem("userName");