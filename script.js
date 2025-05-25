const quotes = [
    "Life is what happens when you're busy making other plans. — John Lennon",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "The purpose of our lives is to be happy. — Dalai Lama",
    "Life is really simple, but we insist on making it complicated. — Confucius",
    "You only live once, but if you do it right, once is enough. — Mae West",
    "Life isn't about finding yourself. It's about creating yourself. — George Bernard Shaw",
    "Don't count the days, make the days count. — Muhammad Ali",
    "Difficulties in life are intended to make us better, not bitter. — Dan Reeves",
    "Life is short, and it's up to you to make it sweet. — Sarah Louise Delany",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations. — Oliver Goldsmith",
    "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
    "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
    "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer",
    "The biggest adventure you can take is to live the life of your dreams. — Oprah Winfrey",
    "Life is made of ever so many partings welded together. — Charles Dickens",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
    "Life becomes easier when you learn to accept the apology you never got. — Robert Brault",
    "Enjoy the little things in life, for one day you may look back and realize they were the big things. — Robert Breault",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll"
];

const generateButton = document.getElementById('generateButton')
const quoteDisplay = document.getElementById('quoteDisplay')
function generateQuote (){

    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]
    quoteDisplay.innerText = quote
}

generateButton.addEventListener('click', generateQuote)
