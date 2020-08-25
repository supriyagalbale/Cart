import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img}/>
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/992/992651.svg"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;




/* import React from 'react';

const CartItem = (props) =>
{
    // constructor(){
    //     super();
    //     this.state={
    //         price: 999,
    //         title: 'moto G5 S Plus',
    //         qty: 1,
    //         img:' '
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    // }
    //increaseQuantity = () => {
        //this.state.qty = this.state.qty +1 ;  ----it never works as react does not know when to re-render page

        //setState() ---form 1
        //this.setState({ qty: this.state.qty +1 });

        //steState() ---form 2 [use this form when previous state is req]
    //    this.setState((prevState) => {
     //       return{
     //           qty: prevState.qty +1 
      //      }
      //  });

    //}

    //     decreaseQuantity = () =>{
    //         const { qty } = this.state ;
    //         if(qty === 0)
    //         {
    //             return;
    //         }
    //     this.setState((prev)=>{
    //         return{
    //             qty: prev.qty -1
    //         }
    //     });
    // }
        
   
        //props is a keyword here which is able to retrive the items passed by Cart.js line 46
        const {qty, title, price}= props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
          } = props;
        return(
            <div class='cart-item'>
                <div class='left-block'>
                    <img style={styles.image}></img>
                </div>
                <div class='right-block'>
                    <div style={ { fontSize: 20} }>{title}</div>
                    <div style={ { color: '#777' } }>Price: Rs {price}</div>
                    <div style={ { color: '#777' } }>Quantity: {qty}</div>
                    <div class='cart-item-actions'>
                        
                        <img 
                            id='increase_button' 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            onClick={() => props.onIncreaseQuantity(product)}
                            />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                            onClick = {() => onDecreaseQuantity(product) }
                            />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/03/15/96/35/240_F_315963545_qxvJX01q9E7LfyLFjlLtfdgvJ0nRyKne.jpg" 
                            onClick={ () => onDeleteProduct(product.id)}
                        />
                    </div>
            </div>
            </div>
           
        );
        
    
    
}
const styles={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4
    }    
};

export default CartItem;  */
