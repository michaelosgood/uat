// Created an array that contains all my 
var quotes = [
"1. Do the right thing, ALWAYS.", 
"2. Make quality personal.", 
"3. Walk in your customer's shoes.", 
"4. Work with a sense of urgency.",
"5. Get clear on expectaions.",
"6. Speak straight.",
"7. Make the patient primary.",
"8. Focus on others.",
"9. Collaborate.",
"10. Practice transparency.",
"11. Listen generously.",
"12. Treasure, promote and protect our reputation.",
"13. Follow-up everything.",
"14. Drive for innovation.",
"15. Celebrate success.",
"16. Think and act like an owner.",
"17. Be a fanatic about response time.",
"18. Deliver legendary service.",
"19. Think team first.",
"20. Honor commitments.",
"21. Embrace change.",
"22. Be relentless about improvement.",
"23. Take ownership.",
"24. Assume positive intent.",
"25. Go the extra mile.",
"26. Fix problems at the source.",
"27. Take pride in appearance.",
"28. Practice blameless problem solving.",
"29. Always remember that we're a family",
"30. Deliver results.",
"31. 'Bring It' every day.",
"32. Keep things fun."
]

// Function is triggered when user clicks on button from index.html
// Random quote from the array displays on the UI
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log("Random Number: " + randomNumber);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
