import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[],
        loading: true 
    }
    this.db = firebase.firestore();
   }

   componentDidMount(){
      firebase
         .firestore()
         .collection('products')
         .onSnapshot((snapshot)=>{
            const products = snapshot.docs.map((doc)=>{
               const data = doc.data();
               data['id'] = doc.id;
               return data;
            });
            this.setState({
               products,
               loading : false
            });
         });
   }

handleIncreaseQty= (product) => {
const { products } = this.state;
const index = products.indexOf(product);
// products[index].qty += 1;

// this.setState({
//    products : products
// })
const docRef = this.db.collection('products').doc(products[index].id);
docRef
   .update({
      qty: products[index].qty +1 
   })
   .then(()=>{
      console.log('product updated successfully');
   })
   .catch((error)=>{
      console.log('Error: ', error );
   })

}    

handleDecreaseQty= (product) => {
const { products } = this.state;
const index = products.indexOf(product);
if(products[index].qty === 0)
{
   return ;
}
// products[index2].qty -= 1;

// this.setState({
//    products : products
// })
const docRef = this.db.collection('products').doc(products[index].id);
docRef
   .update({
      qty: products[index].qty - 1 
   })
   .then(()=>{
      console.log('product updated successfully');
   })
   .catch((error)=>{
      console.log('Error: ', error );
   })

} 

handleDeleteEvent=(id) =>{
const { products } = this.state;
// const items = products.filter((item)=> item.id !== id);
// this.setState({
//    products: items
// })
const docRef = this.db.collection('products').doc(id);
docRef
   .delete()
   .then(()=>{
      console.log('Product Deleted Successfully');
   })
   .catch((error)=>{
      console.log('Error: ', error);
   })

}

getCharCount=()=>{
  const { products } = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.qty;
  }) 

  return count;
}

totalPrice=() =>{
  const {products} = this.state;
  let price =0;
  products.forEach((product)=>{
    price += product.price * product.qty;
  })
  return price;
}

addProduct = () => {
   firebase
     .firestore()
     .collection('products')
     .add({
       img:'https://img.pngio.com/washing-machine-png-washing-machine-png-1500_1500.png',
       price: 900,
       qty:1,
       title:'Washing Machine'
     })
     .then((docRef)=>{
       console.log('product added', docRef);
     })
     .catch((error)=>{
       console.log('Error : ', error);
     })
 }

render() {
  const { products, loading } = this.state ;
  return (
    <div className="App">
     <Navbar 
        count = {this.getCharCount()}
     />
     
     {loading && <h1>Loading products ...</h1>}
      <button onClick= { this.addProduct } style={{ fontSize:20, padding:20, marginLeft:60, marginTop: 20 }}> Add Product </button>
     < Cart 
          products = { products }
          onIncreaseQty={ this.handleIncreaseQty }
          onDecreaseQty={ this.handleDecreaseQty }
          onDeleteEvent= { this.handleDeleteEvent }
     />
    
    <div style={{padding:30, marginLeft:30, fontSize:25}}>TOTAL:{this.totalPrice()} </div>
    </div>
  );
}
  
};

export default App;

