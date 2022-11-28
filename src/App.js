import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { MainContainer } from "./styles/Common.style";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </MainContainer>
  );
}

export default App;
