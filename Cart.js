import React from 'react';
import CartItem from './CartItem';


const Cart = (props) => {
  const { products, loading } = props;
  
  return (
    <div className="cart">
      
      {products.map((product) => {
        return (
            //key is used for internal reference by the react it does not have any impact in UI
            // keys are used by the react to differentiate between various products
          <CartItem
            //we are passing a prop
          product={product}
            key={product.id}
            //jsx={<h2>test</h2>}
            // jsx elements can be rendered in Cartitem by writing {this.props.jsx}
            onIncreaseQuantity={props.onIncreaseQty}
            onDecreaseQuantity={props.onDecreaseQty}
            onDeleteProduct={props.onDeleteEvent}
          />
        )
      })}
      
    </div>
  );
}

export default Cart;

/* import React from 'react';
import CartItem from './CartItem';

const Cart = (props) =>
{   
        const { products } = props;
        return(
            <div className='cart'> 
                {
                    //key is used for internal reference by the react it does not have any impact in UI
                    // keys are used by the react to differentiate between various products
                    products.map((product)=>{
                      return (
                        <CartItem 
                        //we are passing a prop
                        product= { product } 
                        key={ product.id }
                        //jsx={<h2>test</h2>}
                        // jsx elements can be rendered in Cartitem by writing {this.props.jsx}
                        onIncreaseQty={ props.onIncreaseQty }
                        onDecreaseQty={ props.onDecreaseQty }
                        onDeleteEvent= { props.onDeleteEvent }
                    />
                      )
                     })}
                  
            </div>
        );
            }
export default Cart;

*/