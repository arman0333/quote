const api_url = "https://api.quotable.io/random?maxLength=50";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML ='~'+ data.author;
};
getquote(api_url);
const refresh = document.getElementById("refresh");
refresh.addEventListener("click", ()=>{
    // const backgroundMusic = document.getElementById("bg-music");
    // backgroundMusic.pause();
location.reload();
});
// Get the tweet button element
const tweetButton = document.getElementById("tweetButton");

// Add click event listener
tweetButton.addEventListener("click", function() {
    // Get the quote and author text
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;

    // Encode the quote and author text for URL
    const tweetContent = encodeURIComponent(`"${quoteText}" ${authorText}`);

    // Open a new window with the Twitter intent URL
    window.open(`https://twitter.com/intent/tweet?text=${tweetContent}`);
});
