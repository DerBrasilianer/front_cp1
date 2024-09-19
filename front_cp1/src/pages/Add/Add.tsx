import { useState } from "react";
import { Link } from 'react-router-dom';
import { useProducts } from '../Add/ProductContext';
import defaultImage from '../Home/images/Default.png';
import './Add.css';

const AddFormulario = () => {
    const { addProduct } = useProducts();
    const [data, setData] = useState({ name: '', price: '' });
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.name && data.price) {
            const newProduct = {
                id: Date.now(), // Gera um ID único baseado no timestamp
                name: data.name,
                price: data.price,
                imageUrl: defaultImage, // Define a imagem genérica
            };
            addProduct(newProduct);
            setData({ name: '', price: '' }); // Limpa os campos após o envio
            setIsSubmit(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4>Novo Produto</h4>
                <label>
                    Nome <br />
                    <input name="name" type="text" value={data.name} onChange={inputChange} />
                </label>
                <br /><br />
                <label>
                    Preço <br />
                    <input name="price" type="text" value={data.price} onChange={inputChange} />
                </label>
                <br /><br />
                <button type="submit">Enviar</button>
                {isSubmit && <p>Produto adicionado com sucesso!</p>}
            </form>
            <br />
            <Link to='/'>Voltar</Link>
        </>
    );
};

export default AddFormulario;
