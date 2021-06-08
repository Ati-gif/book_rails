import React, { useState } from 'react';
import BookForm from "./BookForm";

<BookForm />;

const Book = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { id, title, description, author, updateBook, deleteBook } = props;

  return (
    <div style={{ border: "3px solid", margin: "20px" }}>
      <h1>
        Title: {title}{" "}
        <span>
          Author: {author} Description:{description}
        </span>
      </h1>
      <button onClick={() => setShowForm(!showForm)} style={{ color: "green" }}>
        Edit
      </button>
      <button onClick={() => deleteBook(id)} style={{ color: "blue" }}>Delete</button>
      
      
      {showForm && (
        <BookForm
          updateBook={updateBook}
          id={id}
          title={title}
          description={description}
          author={author}
        />
      )}
    </div>
  );
};

export default Book;
