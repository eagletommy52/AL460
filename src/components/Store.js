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
          <StoreItem imgSrc={itemPics['polo.jpg']} itemName="AL460 Polo" itemCost="$50.00"/>
          <StoreItem imgSrc={itemPics['patchtshirt.jpg']} itemName="American Flag Patch TShirt" itemCost="$25.00"/>
          <StoreItem imgSrc={itemPics['al460challengecoin.jpg']} itemName="AL460 Challenge Coin" itemCost="$20.00"/>
          <StoreItem imgSrc={itemPics['LemmChallengeCoin.jpg']} itemName="Det. Lemm Challenge Coin" itemCost="$15.00"/>
          <StoreItem imgSrc={itemPics['AL460Pin.jpg']} itemName="AL460 Pin" itemCost="$5.00"/>
        </div>
      </div>
    )
  }
}

export default Store;