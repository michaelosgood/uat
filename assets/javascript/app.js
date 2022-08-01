
// Function is triggered when user clicks on button from index.html
// Random quote from the array displays on the UI
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log("Random Number: " + randomNumber);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
