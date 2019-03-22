import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); return null });
  return images;
}
const itemPics = importAll(require.context('../assets/merch', false, /\.(png|jpe?g|svg)$/));

const StoreItem = (props) => {
  return (
    <div className="storeItem">
      <img alt={props.itemName} src={props.imgSrc} width="25%"/>
      <h3 style={{marginBottom:'5px', textAlign:'center'}}>{props.itemName}</h3>
      <h4 style={{marginTop:'5px'}}>{props.itemCost}</h4>
      {props.children}
    </div>
  )
}

class Store extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Store</h1>
        <div className="storeContainer">
          <StoreItem imgSrc={itemPics['polo.jpg']} itemName="AL460 Polo" itemCost="$30.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="SRKWEH8BJ9VXN" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['patchtshirt.jpg']} itemName="American Flag Patch TShirt" itemCost="$25.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="BLE9UWL6WFR7Q"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['AL460LestWeForget.jpg']} itemName="AL460 'Lest We Forget' TShirt" itemCost="$20.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="UN93UYFSSAU2E" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['AL460UnitedWeStand.jpg']} itemName="AL460 'United' TShirt" itemCost="$20.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="QBDQQYC7LCHEJ" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['al460challengecoin.jpg']} itemName="AL460 Challenge Coin" itemCost="$20.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="5JSTFU5GMWCXL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['LemmChallengeCoin.jpg']} itemName="Det. Lemm Challenge Coin" itemCost="$15.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="M267LUE83YL8G" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['FinestoftheFinestCoin.jpg']} itemName="AL460 'Finest  of the  Finest' Coin" itemCost="$10.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="38DFAEHZETSJ6" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['AL460Pin.jpg']} itemName="AL460 Pin" itemCost="$5.00">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="FEZY4ERH3ASL8" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['balltix.png']} itemName="2019 AL460 Ball Ticket" itemCost="$100.00">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="DZU7Z2KWHFUJ2" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['balltix.png']} itemName="2019 AL460 Ball Table of 14 Tickets" itemCost="$1350.00">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="CW44VLEN8T38J"/>
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['balltix.png']} itemName="Donate a 2019 AL460 Ball Ticket to Veteran" itemCost="$100.00">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="7G749F6PRY6C8" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
          </StoreItem>
          <StoreItem imgSrc={itemPics['balltix.png']} itemName="Donate a 2019 AL460 Ball Table to veterans" itemCost="$1350.00">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="TNK4YFYS69MR8"/>
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
          </StoreItem>
        </div>
      </div>
    )
  }
}

export default Store;