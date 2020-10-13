/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
      quote: '“If the plan doesn’t work, change the plan, but never the goal.”',
      source: "Author Unknown"
  },
  {
      quote: '“Champions keep playing until they get it right.”',
      source: 'Billie Jean King'
  },
  {
      quote: '“Genius is 1% inspiration, 99% perspiration.”',
      source: 'Thomas Edison'
  },
  {
      quote: '“A comfort zone is a beautiful place, but nothing ever grows there.”',
      source: "Author Unknown"
  },
  {
      quote: '“If you want to live a happy life, tie it to a goal, not to people or objects.”',
      source: "Albert Einstein",
      citation: "Lifehack.org",
      year: 1935
  },
  {
      quote: '“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.”',
      source: "Earl Nightingale"
  },
  {
      quote: '“Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from.”',
      source: "Seth Godin"
  },
  {
      quote: '“Avoiding failure is to avoid progress.”',
      source: "Author Unknown"
  },
  {
      quote: '“Sometimes you win, sometimes you learn.”',
      source: "John Maxwell"
  },
  {
      quote: '“The grass is greener where you water it.”',
      source: "Neil Barringham"
  }
];



/***
 * `getRandomQuote` function
***/


function getRandomQuote( arr ) {
    let randomNumber = Math.floor( Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    console.log(randomQuote);
    return randomQuote;

}

getRandomQuote(quotes);




/***
 * `printQuote` function
***/
function printQuote() {
    let quoteObject = getRandomQuote(quotes);
    let html = `
        <p class="quote">${quoteObject['quotes']}</p>
        <p class="source">${quoteObject['source']}`

            if ( quoteObject['citation'] ) {
                html += `<span class="citation">${quoteObject['citation']}</span>`;
            } if ( quoteObject['year'] ) {
                html += `<span class="year">${quoteObject['year']}</span>`;
            }
            html += '</p>';

            console.log(html);

            document.getElementById('quote-box').innerHTML = html;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);