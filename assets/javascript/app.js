// Created an array that contains all my 
var quotes = [
    "Do the right thing, ALWAYS.", 
"Make quality personal.", 
"Walk in your customer's shoes.", 
"Work with a sense of urgency.",
"Get clear on expectaions.",
"Speak straight.",
"Make the patient primary.",
"Focus on others.",
"Collaborate.",
"Practice transparency.",
"Listen generously.",
"Treasure, promote and protect our reputation.",
"Follow-up everything.",
"Drive for innovation.",
"Celebrate success.",
"Think and act like an owner.",
"Be a fanatic about response time.",
"Deliver legendary service.",
"Think team first.",
"Honor commitments.",
"Embrace change.",
"Be relentless about improvement.",
"Take ownership.",
"Assume positive intent.",
"Go the extra mile.",
"Fix problems at the source.",
"Take pride in appearance.",
"Practice blameless problem solving.",
"Always remember that we're a family",
"Deliver results.",
"'Bring It' every day.",
 "Keep things fun."
]

// Function is triggered when user clicks on button from index.html
// Random quote from the array displays on the UI
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log("Random Number: " + randomNumber);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
