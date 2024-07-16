import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import AllTheBooks from './component/AllTheBooks';
import Welcome from './component/Welcome';
import { useState } from 'react';
import { books } from "./data/books";
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

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
    <BrowserRouter>
    <ThemeContextProvider>
      <div>
      <MyNav filter ={filter} />
      <Welcome/>
      <Routes>
        <Route path='/' element={<AllTheBooks filterBook={filterBook} />}/>    
        <Route path='/pagenotfound' element={<NotFound />}/>    
        <Route path='/*' element={<Navigate to='/pagenotfound'/>}/>    
      </Routes>
      <MyFooter/>
      </div>
    </ThemeContextProvider>
    </BrowserRouter>
    

  );
}

export default App;
