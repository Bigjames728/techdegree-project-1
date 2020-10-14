/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Here is my random quote generator. I am aiming for an "exceeds expecations" grade with this. Thank you for reviewing!

// Below is my array of objects that uncludes a quote and a source property per object.

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
      source: "Author Unknown",
      tag: 'Motivation'
  },
  {
      quote: '“If you want to live a happy life, tie it to a goal, not to people or objects.”',
      source: "Albert Einstein",
      citation: "Lifehack.org",
      year: 1935,
      tag: 'Motivation'
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





// The function below generates a random Number between 0 and the length of the quotes array above and then pulls 
// the quote tied to the number it generated and returns the value.

function getRandomQuote( arr ) {
    let randomNumber = Math.floor( Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    console.log(randomQuote);
    return randomQuote;

}

getRandomQuote(quotes);





// The below function sets quoteObject as the variable that stores the random quote that is chosen. 
// It also defines the writing that appears on the webpage in the quote-box using conditionals to 
// decide if it should also include the citation and year or not. It then gets the quote-box element by its ID
// and replaces the HTML inside with the html variable I defined.

function printQuote() {
    let quoteObject = getRandomQuote(quotes);
    let html = `
        <p class="quote">${quoteObject.quote}</p>
        <p class="source">${quoteObject.source}`

            if ( quoteObject.citation ) {
                html += `<span class="citation">${quoteObject.citation}</span>`;
            } if ( quoteObject.year ) {
                html += `<span class="year">${quoteObject.year}</span>`;
            } if ( quoteObject.tag ) {
                html += `<span class="tag">, ${quoteObject.tag}</span>`;
            }
            html += '</p>';

            

            document.getElementById('quote-box').innerHTML = html;

            

}

// The below code calls the printQuote function every 7 seconds.

setInterval(printQuote, 7000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);