
let favoriteBooks = [];

function addFavoriteBook(bookName){
        bookName = bookName.toLowerCase();
        if(bookName.includes('great')){
                favoriteBooks.push(bookName);
        }
}


const books = ['The Great Gatsby','Great Expectations','Educated'];
for(let book of books){
    addFavoriteBook(book);
}


function printFavoriteBooks(){
        console.log(`Favorite Books: ${favoriteBooks.length}`);
        for(let book of favoriteBooks){
                console.log(book);
        }
}


printFavoriteBooks();














