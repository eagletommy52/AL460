import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const itemPics = importAll(require.context('../assets/merch', false, /\.(png|jpe?g|svg)$/));

const StoreItem = (props) => {
  return (
    <div className="storeItem">
      <img alt={props.itemName} src={props.imgSrc} width="25%"/>
      <h3 style={{marginBottom:'5px'}}>{props.itemName}</h3>
      <h4 style={{marginTop:'5px'}}>{props.itemCost}</h4>
    </div>
  )
}

class Store extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Store</h1>
        <div className="storeContainer">
          <StoreItem imgSrc={itemPics['garrisoncap.png']} itemName="AL460 Garrison Cap" itemCost="$50.00"/>
          <StoreItem imgSrc={itemPics['jackets.jpg']} itemName="American Legion Jacket" itemCost="$75.00"/>
          <StoreItem imgSrc={itemPics['balltix.png']} itemName="AL460 Winter Ball Ticket" itemCost="$100.00"/>
        </div>
      </div>
    )
  }
}

export default Store;