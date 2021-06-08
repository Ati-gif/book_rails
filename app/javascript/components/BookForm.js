import React, { useDebugValue, useState } from "react";
import axios from "axios";

const BookForm = (props) => {
  const { addBook, id, updateBook } = props;
  const [title, setTitle] = useState(props.title ? props.title : "");
  const [author, setAuthor] = useState(props.author ? props.author : "");
  const [description, setDescription] = useState(
    props.description ? props.description : ""
  );
  const [errorMessage, setErrorMessage] = useState(
    props.errorMessage ? props.errorMessage : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    console.log({ title, author, description });
    const book = { title, author, description };

    try {
      if (id) {
        let response = await axios.put(`/books/${id}`, book);
        updateBook(response.data);
      } else {
        let response = await axios.post("/books", book);
        addBook(response.data);
      }

      setTitle("");
      setAuthor("");
      setDescription("");
    } catch (err) {
      console.log(err.response.data);
      setErrorMessage(err.response.data.join(","));
    }
  };
  return (
    <div>
      <h1>{id ? "Edit" : "New"}</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>Author</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <p>Description</p>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default BookForm;
