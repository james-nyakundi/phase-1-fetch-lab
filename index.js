function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
.then(response => response.json())
.then( data => console.log(data))
.then (Object=>{"https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-fetch-lab/Image_26_FullAsynchronousJavaScript.png"})
.catch(error => console.error('Error:', error));
return fetch;

  // To pass the tests, don't forget to return your fetch!
  

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
