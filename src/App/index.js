import { Route, Routes } from "react-router-dom";
import LoginApp from "../components/LoginApp";
import FillUserForm from "../components/FillUserForm";
import HomePage from '../components/HomePage';
import ProductListPage from '../components/ProductListPage';
import CheckOut from "../components/CheckOut";
import PurchaseConfirm from "../components/PurchaseConfirm"
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import GlobalStyle from "../theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />    
      <div className="App">
        <Routes>
          <Route path="/product-list" element={<ProductListPage/>} />
          <Route path="/home-page" element={<HomePage/>} />
          <Route path="/check-out" element={<CheckOut/>}/>
          <Route path="/purchase"  element={<PurchaseConfirm/>}/>
          <Route path="/new-user"  element={<FillUserForm/>}/>
          <Route path="/"  element={<LoginApp/>} />
        </Routes>          
      </div>
    </ThemeProvider>  
  );
}

export default App;
