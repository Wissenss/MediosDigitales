const express = require('express');
const app = express ();
const cors = require('cors')
const sqlite3 = require('sqlite3') 

let db = new sqlite3.Database("./mediosDigitales.db", (err) => {
  if(err)
  {
      console.log("Error Occurred - " + err.message);
  }
  else
  {
      console.log("DataBase Connected");
  }
})

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

const BookCategories = Object.freeze({
  CAT_1: 0,
  CAT_2: 1,
  CAT_3: 2,
});

// THE BOOKS SERVICE

// get a list of the books resources
app.get("/books", (request,response) => {
  
  db.all("SELECT * FROM books", (err, rows) => {
    
    if (err != null)
    {
      console.log(err);
      return;
    }

    console.log("query rows: ", rows)
    
    response.send(rows)
  });

})

// get a book resource with the given id
app.get("/book", (request, response) => {

  id = request.query.id;

  console.log("Iniciando \"GET /book\" id = ", id);

  sql = "SELECT * FROM books WHERE book_id = " + id + ";"; // ez sql inject lol

  db.all(sql, (err, rows) => {
    if (err != null)
    {
      console.log(err);
      return;
    }

    console.log("query rows: ", rows)

    response.send(rows[0])
  })
})

// create a new book entry
app.post("/book", (request, response) => {
  
  console.log("POST /book called");
  
  body = request.body;

  console.log("  body: ", body);

  // TODO: validate comming input
  let sql = "INSERT INTO books(name, path, category, author) VALUES(?, ?, ?, ?);";
  
  const params = [
    body.name,
    body.path,
    body.category,
    body.author
  ]

  db.run(sql, params, (result, error) => {  
    if (error != null)
    {
      console.log(err);
      return;
    }

    // console.log("primera query todo chido!")

    // sql = "SELECT last_insert_rowid();";

    // db.run(sql, null, (rows, err) => {
    //   console.log("query rows: ", rows)
  
    //   response.send(rows);
    // })

    response.send();
  });
})

// edit a book entry
app.put("/book", (request, response) => {
  console.log("PUT /books called")

  body = request.body;

  console.log("  body: ", body);

  let sql = "UPDATE books SET name=?, path=?, category=?, author=?";

  const params = [
    body.name,
    body.path,
    body.category,
    body.author
  ]

  db.run(sql, params)

  // db.run(sql, params);

  response.send()
})

// delete the book entry with the given id
app.delete("/book", (request, response) => {
  console.log("DELETE /books called")

  id = request.query.id;

  console.log("  id: ", id);

  let sql = "DELETE FROM books WHERE book_id = ?;";

  const params = [
    id
  ]

  db.run(sql, params);

  response.send();
})