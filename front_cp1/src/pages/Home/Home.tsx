import { Link } from 'react-router-dom';
import { useProducts } from '../Add/ProductContext';
import './Home.css';

const HomePage = () => {
    const { products, removeProduct } = useProducts();

    const handleRemove = (name: string) => {
        removeProduct(name);
    };

    return (
        <div className="home-container">
            <h1>Home Page</h1>
            <Link to='/add'>Add new product</Link> <br /><br />
            <h2>Lista de Produtos</h2>
            <div className="product-list">
                {products.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    products.map(product => (
                        <div className="product-item" key={product.id}>
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>R${product.price}</p>
                            <button onClick={() => handleRemove(product.name)}>Excluir</button>
                        </div>
                    ))
                )}
            </div>

            {/* Rodapé */}
            <footer className="footer">
                <p>Integrantes:</p>
                <p>Enzo Prado Soddano RM 557937</p>
                <p>Enzo Dias Alfaia Mendes RM 558438</p>
                <p>Vinicius Prates Altafini RM 559183</p>
            </footer>
        </div>
    );
};

export default HomePage;
