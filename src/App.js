import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
export default function App() {
  const [book, setBook] = useState("");
  const [items, setItems] = useState([]);
  const [api, setApi] = useState("AIzaSyDwFgdO99sc6V2DsdJ876BjLmJfbftPgtE");
  function Adddata(e) {
    e.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + api
      )
      .then((data) => {
        console.log(data.data.items);
        setItems(data.data.items);
      });
  }
  return (
    <div className="App my-4">
      <form onSubmit={Adddata}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter book"
            aria-label="enter book"
            aria-describedby="basic-addon2"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
        </div>
        <button className="btn-danger">submit</button>
      </form>
      {items.map((item) => (
        <img
          key={item.id}
          src={item.volumeInfo.imageLinks.thumbnail}
          alt="image"
        />
      ))}
    </div>
  );
}
// src={item.volumeInfo.imageLinks.thumbnail}
