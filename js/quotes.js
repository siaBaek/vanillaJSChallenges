const quotes = [
  {
    quote: "The world is a tragedy to those who feel, but a comedy to those who think.",
    author: "Horace Walpole",
  },
  {
    quote: "Kites rise highest against the wind - not with it.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "A minute's success pays the failure of years.",
    author: "Robert Browning",
  },
  {
    quote: "Strive for excellence, not perfection.",
    author: "H. Jackson Brown Jr.",
  },
  {
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
  {
    quote: "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein",
  },
  {
    quote: "For the things we have to learn before we can do them, we learn by doing them.",
    author: "Aristotle",
  },
  {
    quote: "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "It's only when the tide goes out that you discover who's been swimming naked.",
    author: "Warren Buffett",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
