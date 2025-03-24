const books = [       //array having objects
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      mood: ["thoughtful", "sad"],
      description: "A powerful story of racial injustice and moral growth, set in the American South during the 1930s.",
      cover: "tokill.jpg",
      keywords: ["justice", "childhood", "racism", "morality"],
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      mood: ["happy", "thoughtful"],
      description: "A romantic novel about the Bennet sisters and their journey through societal expectations and love.",
      cover: "pride.webp",
      keywords: ["love", "society", "marriage", "class", "19th century"],
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      mood: ["adventurous", "happy"],
      description: "A fantasy adventure about Bilbo Baggins, who is swept into an epic quest to reclaim the dwarf kingdom.",
      cover:"hob.jpg",
      keywords: ["adventure", "dragons", "magic", "quest", "fantasy"],
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      mood: ["thoughtful", "sad"],
      description: "A dystopian novel set in a totalitarian society where critical thought is suppressed.",
      cover: "1984.jpeg",
      keywords: ["dystopia", "surveillance", "politics", "rebellion"],
    },
    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      mood: ["sad", "thoughtful"],
      description: "A novel about the American Dream, wealth, and the emptiness of the Jazz Age.",
      cover: "gatsby.webp",
      keywords: ["american dream", "wealth", "love", "1920s", "tragedy"],
    },
    {
      id: 6,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      mood: ["happy", "adventurous"],
      description: "The first book in the Harry Potter series, following a young wizard's journey at Hogwarts School.",
      cover: "potter.webp",
      keywords: ["magic", "wizards", "school", "friendship", "coming of age"],
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-age",
      mood: ["sad", "thoughtful"],
      description: "A novel about teenage alienation and loss of innocence, narrated by the cynical Holden Caulfield.",
      cover: "catcher.jpeg",
      keywords: ["adolescence", "identity", "alienation", "rebellion", "innocence"],
    },
    {
      id: 8,
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      genre: "Historical Fiction",
      mood: ["sad", "thoughtful"],
      description: "A story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's tumultuous history.",
      cover: "kiterun.jpg",
      keywords: ["friendship", "redemption", "afghanistan", "family", "guilt"],
    },
    {
      id: 9,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Dystopian",
      mood: ["adventurous", "sad"],
      description: "In a dystopian future, teenagers are forced to fight to the death in a televised spectacle.",
      cover: "hunger.jpg",
      keywords: ["survival", "dystopia", "rebellion", "sacrifice", "competition"],
    },
    {
      id: 10,
      title: "The Fault in Our Stars",
      author: "John Green",
      genre: "Young Adult",
      mood: ["sad", "happy"],
      description: "A love story between two teenagers who meet at a cancer support group.",
      cover: "fault.jpg",
      keywords: ["love", "illness", "youth", "mortality", "relationships"],
    },
    {
      id: 11,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      genre: "Self-Help",
      mood: ["inspired", "thoughtful"],
      description: "A guide to spiritual enlightenment focusing on living in the present moment.",
      cover: "power.jpg",
      keywords: ["mindfulness", "spirituality", "presence", "consciousness", "enlightenment"],
    },
    {
      id: 12,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Mystery",
      mood: ["adventurous", "thoughtful"],
      description: "A mystery thriller involving a murder in the Louvre and clues in Da Vinci's paintings.",
      cover: "vinci.jpg",
      keywords: ["mystery", "conspiracy", "art", "religion", "codes"],
    },
    {
      id: 13,
      title: "The Martian",
      author: "Andy Weir",
      genre: "Science Fiction",
      mood: ["adventurous", "inspired"],
      description: "An astronaut becomes stranded on Mars and must use his ingenuity to survive.",
      cover: "martian.jpg",
      keywords: ["space", "survival", "science", "isolation", "problem-solving"],
    },
    {
      id: 14,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Fiction",
      mood: ["sad", "thoughtful"],
      description: "A coming-of-age story about a girl who grows up isolated in the marshes of North Carolina.",
      cover: "crawdads.jpg",
      keywords: ["nature", "isolation", "coming of age", "mystery", "resilience"],
    },
    {
      id: 15,
      title: "Man's Search for Meaning",
      author: "Viktor E. Frankl",
      genre: "Psychology",
      mood: ["inspired", "thoughtful"],
      description: "A memoir by a psychiatrist who survived Nazi concentration camps, exploring the human search for purpose.",
      cover: "manssearch.jpg",
      keywords: ["psychology", "holocaust", "meaning", "suffering", "resilience"],
    },
  ]

  const quotes = [
    {
      text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
      author: "George R.R. Martin",
    },
    {
      text: "Books are a uniquely portable magic.",
      author: "Stephen King",
    },
    {
      text: "I have always imagined that Paradise will be a kind of library.",
      author: "Jorge Luis Borges",
    },
    {
      text: "Reading is to the mind what exercise is to the body.",
      author: "Joseph Addison",
    },
    {
      text: "A book is a dream that you hold in your hand.",
      author: "Neil Gaiman",
    },
    {
      text: "Books are the mirrors of the soul.",
      author: "Virginia Woolf",
    },
  ]
  
//DOM
const quoteElement = document.getElementById("quote")
const authorElement = document.getElementById("author")
const newQuoteButton = document.getElementById("new-quote")
const searchInput = document.getElementById("search-in")
const searchButton = document.getElementById("search-btn")
const booksContainer = document.getElementById("books-container")
const resultsTitle = document.getElementById("results-title")
const moodCards = document.querySelectorAll(".mood-card")

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]
  quoteElement.textContent = `"${quote.text}"`
  authorElement.textContent = `- ${quote.author}`
}

//book card element
function createBookCard(book) {
  const bookCard = document.createElement("div")
  bookCard.className = "book-card"

  bookCard.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="book-cover" height="400" width="300">
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <span class="book-genre">${book.genre}</span>
            <p class="book-description">${book.description}</p>
        </div>
    `

  return bookCard
}


// Display books in the container
function displayBooks(booksToDisplay, title = "Featured Books") {
  booksContainer.innerHTML = ""
  resultsTitle.textContent = title

  if (booksToDisplay.length === 0) {
    booksContainer.innerHTML = '<p class="no-results">No books found. Try a different search term.</p>'
    return
  }

  for (let i = 0; i < booksToDisplay.length; i++) {
    const bookCard = createBookCard(booksToDisplay[i])
    booksContainer.appendChild(bookCard)
  }
}

function searchBooks() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (!searchTerm) {
    displayFeaturedBooks();
    return;
  }

  let results = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.genre.toLowerCase().includes(searchTerm) ||
    book.description.toLowerCase().includes(searchTerm) ||
    book.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
  );

  displayBooks(results, `Search Results for "${searchTerm}"`);
}


function displayBooksByMood(mood) {
  const moodBooks = []

  for (let i = 0; i < books.length; i++) {
    if (books[i].mood.includes(mood)) {
      moodBooks.push(books[i])
    }
  }

  displayBooks(moodBooks, `Books for when you're feeling ${mood}`)
}

function displayFeaturedBooks() {
  const featuredBooks = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description:
        "A fantasy adventure about Bilbo Baggins, who is swept into an epic quest to reclaim the dwarf kingdom.",
      cover: "hob.jpg",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      description: "The first book in the Harry Potter series, following a young wizard's journey at Hogwarts School.",
      cover: "potter.webp",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      description: "A philosophical novel about a shepherd boy's journey to find a treasure in the Egyptian pyramids.",
      cover: "alchemy.jpg",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Dystopian",
      description: "In a dystopian future, teenagers are forced to fight to the death in a televised spectacle.",
      cover:"hunger.jpg",
    },
    {
      title: "The Martian",
      author: "Andy Weir",
      genre: "Science Fiction",
      description: "An astronaut becomes stranded on Mars and must use his ingenuity to survive.",
      cover: "martian.jpg",
    },
  ]

  displayBooks(featuredBooks, "Featured Books")
}

displayRandomQuote()
displayFeaturedBooks()

newQuoteButton.addEventListener("click", displayRandomQuote)

searchButton.addEventListener("click", searchBooks)

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBooks()
  }
})

for (let i = 0; i < moodCards.length; i++) {
  moodCards[i].addEventListener("click", function () {
    const mood = this.getAttribute("data-mood")
    displayBooksByMood(mood)

    document.querySelector(".results-section").scrollIntoView({ behavior: "smooth" })
  })
}
