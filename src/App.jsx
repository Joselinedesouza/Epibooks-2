import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import AlertWelcome from "./components/Welcome";
import Cards from "./components/Cards";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BooksSearch"; // Assicurati che sia corretto

function App() {
  return (
    <>
      <MyNavbar />
      <div className="d-flex flex-column min-vh-100 justify-content-center">
        <main className="flex-grow-1">
          <AlertWelcome />
          <Cards className="pb-1" />
          <SingleBook />
          <BookList />
        </main>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
