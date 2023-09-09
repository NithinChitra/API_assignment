let quote = document.getElementById("content");
let button = document.getElementById("new-quote-btn");

const url = "https://type.fit/api/quotes";

let getQuote = ()=>{
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        // quote.innerHTML = item.text;
        // console.log(item[(Math.floor(Math.random() * item.length))]);
        quote.innerHTML = item[(Math.floor(Math.random() * item.length))].text;
    });
};

window.addEventListener("load",getQuote);
button.addEventListener("click",getQuote);