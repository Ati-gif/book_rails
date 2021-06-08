import React, { useState } from "react";
import Books from "./Books";
import axios from "axios";
import BookForm from "./BookForm";

const App = (props) => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(true);
 
  const getBooks = async () => {
    // this call is asyncroynous so I need for this to finish
    let response = await axios.get("/books");
    console.log(response);
    setBooks(response.data);
  };

  const addBook = (book) => {
    let updateBooks = [book, ...books];
    setBooks(updateBooks);
  };

  const updateBook = (updateBook) => {
    let updateBooks = books.map((book) => {
      if (book.id !== updateBook.id) {
        return book;
      } else {
        return updateBook;
      }
    });
    setBooks(updateBooks);
  };

  const deleteBook = (id) => {
     console.log('deleteBook clicked id:', id)
    let newBooks = books.filter( book=>{
      return book.id !== id
    })
    setBooks(newBooks)
    return (
      <p>
      <button onClick={() => deleteBook(id)} style={{ color: "blue" }}>Delete</button>
        <button text='update'></button>
        </p>

  )
    
  }
      
return (
    <div>
      <button onClick={getBooks}>Get books from database</button>
      <button onClick={() => setShowForm(!showForm)}>toggle form</button>
      {showForm && <BookForm addBook={addBook} />}

      {/* I could render Books Here renderBooks() */}
      <Books bookz={books} updateBook={updateBook}/>
       </div>
  );
};

export default App;
