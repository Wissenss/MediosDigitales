const express = require('express');
const app = express ();
var cors = require('cors')

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;

let booksArray = [
  { id : 1, title : "Broken Glass", year : 2005},
  { id : 2, title : "The Girl With the Dragon Tattoo", year : 2005},
  { id : 3, title : "Harry Potter and the Goble of Fire", year : 2000},
  { id : 4, title : "A Little Life", year : 2015},
]

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get('/status', (request, response) => {
  const status = {
    "status" : "running"
  };

  response.send(status);
});

app.get("/books", (request,response) => {
  const books = {
    "books" : booksArray
  };

  response.send(books);
})

app.post("/books", (request, response) => {
  console.log("/books called");
  
  body = request.body;
  console.log("  body: ", body);

  booksArray.push(body)

  response.send();
})

