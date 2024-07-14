import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import AllTheBooks from './component/AllTheBooks';
import Welcome from './component/Welcome';
import { useState } from 'react';
import { books } from "./data/books";
import { ThemeContextProvider } from './context/ThemeContextProvider';

function App() {
  const [search, setSearch] = useState("");
  const [filterBook, setFilterBook] = useState(books);
  const filter = (searchValue) => {
    setSearch(searchValue.target.value);
    const filtered = books.filter((element) => {
      return search.toLocaleLowerCase() === ""
        ? element
        : element.title
            .toLocaleLowerCase()
            .includes(searchValue.target.value.toLocaleLowerCase());
    });
    setFilterBook(filtered);
  };

  return (
    <ThemeContextProvider>
      <div>
      <MyNav filter ={filter} />
      <Welcome/>
      <AllTheBooks filterBook={filterBook} />
      <MyFooter/>
      </div>
    </ThemeContextProvider>
    

  );
}

export default App;
