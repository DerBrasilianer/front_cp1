import React, { ReactNode, createContext, useContext, useState } from 'react';
import funkoAshe from '../Home/images/funko_ashe.png';
import funkoBraum from '../Home/images/funko_braum.png';
import funkoVi from '../Home/images/funko_vi.png';

interface Product {
    id: number;
    name: string;
    price: string;
    originalPrice?: string;
    imageUrl: string;
}

interface ProductContextType {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (name: string) => void; // Adiciona a função de remoção
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Funko Ashe', price: '299.99', imageUrl: funkoAshe },
        { id: 2, name: 'Funko Braum', price: '150.00', originalPrice: '99.99', imageUrl: funkoBraum },
        { id: 3, name: 'Funko VI', price: '210.99', imageUrl: funkoVi },
    ]);

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
    };

    const removeProduct = (name: string) => {
        setProducts((prev) => prev.filter(product => product.name !== name));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

// Hook para usar o contexto
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts deve ser usado dentro de um ProductProvider');
    }
    return context;
};
