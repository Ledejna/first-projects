const arrayOfQuotes = [
    {
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken."
    },
    {
        author: "Bernard M. Baruch",
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    {
        author: "Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        author: "Dr. Seuss",
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {
        author: "Marcus Tullius Cicero",
        quote: "A room without books is like a body without a soul."
    },
    {
        author: "Mae West",
        quote: "You only live once, but if you do it right, once is enough."
    },
    {
        author: "Mahatma Gandhi",
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
    },
]
const quote = document.getElementById('quoteOutput');
const author = document.getElementById('author');
const quoteBtn = document.getElementById('quoteBtn');

let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);

quote.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;

author.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;

quoteBtn.onclick = () => {
    random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);

    quote.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
    author.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
};