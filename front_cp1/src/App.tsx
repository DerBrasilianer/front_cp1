import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddFormulario from './pages/Add/Add';
import { ProductProvider } from './pages/Add/ProductContext';
import HomePage from './pages/Home/Home';

function App() {

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddFormulario />} />
        </Routes>
      </Router>
    </ProductProvider>
  );

}


export default App
