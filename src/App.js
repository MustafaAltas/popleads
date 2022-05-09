import { useEffect, useState } from "react";
import "./App.css";
import Book from "./componets/Book";
import Library from "./Library";
const API_URL = "http://localhost:3000/books.json ";

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState();
  const [update1, setUpdate1] = useState();
  const [update2, setUpdate2] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await setLoad(true);
      await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setBooks(data.books));
    }, 2000);
  }, []);

  useEffect(() => {
    setBooks(update1);
  }, [update1]);
  useEffect(() => {
    setBooks(update2);
  }, [update2]);

  const handleBigToSmall = async () => {
    console.log(books);
    await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setBooks(data.books));
    const BigToSmall = await books?.sort((a, b) =>
      a.publicationYear > b.publicationYear
        ? -1
        : b.publicationYear > a.publicationYear
        ? 1
        : 0
    );
    await setUpdate1(BigToSmall);
    console.log(BigToSmall);
  };

  const handleSmallToBig = async () => {
    await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setBooks(data.books));
    const smallToBig = await books?.sort((a, b) =>
      a.publicationYear > b.publicationYear
        ? 1
        : b.publicationYear > a.publicationYear
        ? -1
        : 0
    );
    await setUpdate2(smallToBig);
  };
  console.log(books);

  return (
    <div className="App">
      <Library
        setSearch={setSearch}
        search={search}
        handleBigToSmall={handleBigToSmall}
        handleSmallToBig={handleSmallToBig}
      />
      <Book search={search} books={books} load={load} />
    </div>
  );
}

export default App;
