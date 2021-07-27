//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

// Select the header and style it
const head = document.querySelector('h1');
head.style.textAlign = 'center';
head.style.border = '2px solid #eee';

function createBookList(books) {
  // your code goes in here, return the ul element

  //Creat the ul element and style it
  const booklists = document.createElement('ul');
  booklists.style.display = 'flex';
  booklists.style.listStyle = 'none';
  booklists.style.justifyContent = 'space-around';

  for (let i = 0; i < books.length; i++) {
    // creating the p element
    const bookProperties = document.createElement('p');
    // insert the text content
    bookProperties.textContent = `${books[i].title} by ${books[i].author}`;
    // creat the li element
    const bookListItems = document.createElement('li');
    // show the content up
    bookListItems.appendChild(bookProperties);

    // creating the img element
    const images = document.createElement('img');
    // set the src attribute for the imgs
    images.src = `book${i + 1}.jpg`;
    // append the content
    bookListItems.appendChild(images);

    // changing the color based on the book is read or not
    if (books[i].alreadyRead) {
      bookListItems.style.backgroundColor = 'green';
    } else {
      bookListItems.style.backgroundColor = 'red';
    }

    booklists.appendChild(bookListItems);

    //styles
    bookListItems.style.padding = '20px';
    bookListItems.style.width = 'auto';
    bookListItems.style.height = 'auto';
    bookListItems.style.border = '3px solid #444';
    images.style.width = '300px';
    images.style.height = '300px';
    bookProperties.style.textAlign = 'center';
  }
  return booklists;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
