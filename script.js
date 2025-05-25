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
  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
  "Go confidently in the direction of your dreams. Live the life you’ve imagined. — Henry David Thoreau",
  "Be kind whenever possible. It is always possible. — Dalai Lama XIV",
  "You will never change your life until you change something you do daily. — John C. Maxwell",
  "Develop an attitude of gratitude. — Brian Tracy",
  "You are the master of your destiny. — Napoleon Hill",
  "If you want to live a happy life, tie it to a goal. — Albert Einstein",
  "Curiosity about life in all of its aspects is the secret of great creative people. — Leo Burnett",
  "Life is not a problem to be solved, but a reality to be experienced. — Søren Kierkegaard",
  "Live for each second without hesitation. — Elton John",
  "Life is either a daring adventure or nothing at all. — Helen Keller",
  "The purpose of life is to live it. — Eleanor Roosevelt",
  "Be not afraid of life. Believe that life is worth living. — William James",
  "Sometimes the wrong choices bring us to the right places. — Unknown",
  "Every day is a second chance. — Unknown",
  "Life isn't perfect, but it has perfect moments. — Unknown",
  "Be happy for this moment. This moment is your life. — Omar Khayyam",
  "The good life is one inspired by love and guided by knowledge. — Bertrand Russell",
  "Only a life lived for others is a life worthwhile. — Albert Einstein",
  "The best way to pay for a lovely moment is to enjoy it. — Richard Bach",
  "Life is too important to be taken seriously. — Oscar Wilde",
  "Don't take life too seriously. You'll never get out of it alive. — Elbert Hubbard",
  "Life is like riding a bicycle. To keep your balance, you must keep moving. — Albert Einstein",
  "Nothing is impossible, the word itself says 'I'm possible'! — Audrey Hepburn",
  "No one can make you feel inferior without your consent. — Eleanor Roosevelt",
  "There is no greater agony than bearing an untold story inside you. — Maya Angelou",
  "Happiness is not something ready made. It comes from your own actions. — Dalai Lama XIV",
  "Love the life you live. Live the life you love. — Bob Marley",
  "If you can't change your fate, change your attitude. — Amy Tan",
  "Accept no one's definition of your life; define yourself. — Harvey Fierstein",
  "Life is full of possibilities. — George R.R. Martin",
  "The greatest pleasure of life is love. — Euripides",
  "Be the change that you wish to see in the world. — Mahatma Gandhi",
  "If you tell the truth, you don't have to remember anything. — Mark Twain",
  "Who you are tomorrow begins with what you do today. — Tim Fargo",
  "I believe that everything happens for a reason. — Marilyn Monroe",
  "Shoot for the moon. Even if you miss, you'll land among the stars. — Norman Vincent Peale",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "The best way to predict your future is to create it. — Abraham Lincoln",
  "You have within you right now, everything you need. — Brian Tracy",
  "The unexamined life is not worth living. — Socrates",
  "Life can only be understood backwards; but it must be lived forwards. — Søren Kierkegaard",
  "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Believe in yourself and all that you are. — Christian D. Larson",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "You miss 100% of the shots you don't take. — Wayne Gretzky",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "The best preparation for tomorrow is doing your best today. — H. Jackson Brown Jr.",
  "The road to success is always under construction. — Lily Tomlin",
  "The only thing to fear is fear itself. — Franklin D. Roosevelt",
  "You are not your past. — Jay Woodman",
  "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer",
  "You must be the change you wish to see in the world. — Mahatma Gandhi",
  "Happiness depends upon ourselves. — Aristotle",
  "Life shrinks or expands in proportion to one’s courage. — Anaïs Nin",
  "Act as if what you do makes a difference. It does. — William James",
  "A person who never made a mistake never tried anything new. — Albert Einstein",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "The mind is everything. What you think you become. — Buddha",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "We become what we think about. — Earl Nightingale",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson"
];

// const generateButton = document.getElementById('generateButton')
// const quoteDisplay = document.getElementById('quoteDisplay')
// function generateQuote (){

//     const randomIndex = Math.floor(Math.random() * quotes.length)
//     const quote = quotes[randomIndex]
//     quoteDisplay.innerText = quote
// }

// generateButton.addEventListener('click', generateQuote)

/*----------------------------------------------------------------------------------------*/

/*The code that dont repeat the quotes again and again during the random occurance */
const generateButton = document.getElementById('generateButton');
const quoteDisplay = document.getElementById('quoteDisplay');

let shuffledQuotes = [];
let currentIndex = 0;

// Shuffle quotes using Fisher-Yates algorithm
function shuffleQuotes() {
    shuffledQuotes = [...quotes];
    for (let i = shuffledQuotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuotes[i], shuffledQuotes[j]] = [shuffledQuotes[j], shuffledQuotes[i]];
    }
    currentIndex = 0;
}

// Generate next quote
function generateQuote() {
    if (currentIndex === 0) shuffleQuotes(); // Shuffle at the beginning or after reset

    const quote = shuffledQuotes[currentIndex];
    quoteDisplay.classList.remove('fade-in');
    void quoteDisplay.offsetWidth; // Restart animation
    quoteDisplay.textContent = quote;
    quoteDisplay.classList.add('fade-in');

    currentIndex++;

    if (currentIndex >= shuffledQuotes.length) {
        currentIndex = 0;
    }
}

generateButton.addEventListener('click', generateQuote);