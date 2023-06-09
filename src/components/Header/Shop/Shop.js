import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'
import Cart from '../../Cart/Cart';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import useProducts from '../../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
           const addedProduct =  products.find(product => product.id  === id);
           if(addedProduct){
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;
               savedCart.push(addedProduct);
           }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectdProduct) => {
        console.log(selectdProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectdProduct.id);
        if(!exists){
            selectdProduct.quantity = 1;
            newCart = [...cart, selectdProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectdProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectdProduct.id);
    }

    return (
        <div className='shop-container'>
           <div className="products-container">
           {
            products.map(product => <Product 
                key={product.id}
                product = {product}
                handleAddToCart = {handleAddToCart}
                ></Product>)
           }
           </div>
          
           <div className="cart-container">
            <Cart cart={cart}>
              <Link to="/orders">
                   <button>Review Order</button>
              </Link>
            </Cart>
           </div>
        </div>
    );
};

export default Shop;