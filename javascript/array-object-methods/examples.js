const books = [
    {title: 'Dune',              rating: 5,  price: 56 },
    {title: 'The Stand',         rating: 3,  price: 74 },
    {title: 'I Am Legend',       rating: 4,  price: 16 },
    {title: 'Childhood\'s End',  rating: 5,  price: 18 },
    {title: 'AKOFAF',            rating: 2,  price: 10 },
    {title: 'Ender\'s Game',     rating: 5,  price: 24 },
 ]

/* books rated 3-stars and up */
const filteredBooks = books.filter((book) => {
    return  book.rating >= 3
})
console.log(filteredBooks);

/* list all book titles */
const bookTitles = books.map((book) => {
    return  book.title
})
console.log(bookTitles);

/* use foreach to print all book titles */
books.forEach((book) => {
    console.log(book.title)
})

/* find book with title Dune */
const dune = books.find((book) => {
    return  book.title === 'Dune'
})
console.log(dune);

/* check if any of our books have a 2-star rating or less */
const hasLowRating = books.some((book) => {
    return  book.rating <= 2
})

/* check if all of our books have a 3-star rating using every() */
const hasGoodRating = books.every((book) => {
    return  book.rating >= 3
})

/* get the total price of all the books in our object */
const totalPrice = books.reduce((total, book) => {
    return  total + book.price
}, 0)
console.log(totalPrice);

/* get the average price of all the books in our object */
const averagePrice = books.reduce((total, book) => {
    return  total + book.price
}, 0)
console.log(averagePrice / books.length);