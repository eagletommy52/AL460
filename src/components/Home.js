import React from 'react';
import {Carousel} from 'react-responsive-carousel';
require("react-responsive-carousel/lib/styles/carousel.min.css");

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
const newsImages = importAll(require.context('../assets/news', false, /\.(png|jpe?g|svg)$/));
const newsMessageStyle = {
  display: 'flex'
}
const halfBoxStyle = {
  width: '50%'
}

const NewsCard = (props) => {
  return (
      <a className='newsCard' style={{fontSize: '1.45rem', backgroundImage: `url(${props.imgSrc})`}} href={props.link}>
        <div className="newsCardInner" height="100%">
          <h4 style={{position: 'relative'}}>{props.title}</h4>
        </div>
      </a>
  )
}

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div>

        </div>
        <Carousel width="100%" height="30%" showThumbs={false} dynamicHeight autoPlay>
                <div>
                  <img alt="AL460" src={images['4.jpg']} />   
                </div>
                <div>
                    <img alt="AL460" src={images['1.jpg']} />
                </div>
                <div>
                  <img alt="AL460" src={images['2.jpg']} />
                </div>
                <div>
                  <img alt="AL460" src={images['3.jpg']} />
                    
                </div>
                
        </Carousel>
        <div style={newsMessageStyle}>
          <div style={halfBoxStyle}>
            <h4>American Legion News</h4>
            <NewsCard title="Veterans Give Back During Annual Thanksgiving Dinner" link="./" imgSrc={newsImages['news1.jpg']} />
            <NewsCard title="Armistice Day Parade Draws Huge Crowds" link="./" imgSrc={newsImages['news2.jpg']} />
            <NewsCard title="Memorial Service For Our Fallen and POWs" link="./" imgSrc={newsImages['news3.jpg']} />
            
            
          </div>
          <div style={halfBoxStyle}>
            <h4>Special AL460 Announcement</h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
    )
  }
}

export default Home;