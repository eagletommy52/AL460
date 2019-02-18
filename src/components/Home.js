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
  display: 'flex',
  flexWrap: 'wrap',
  minWidth: '80%'
}
const halfBoxStyle = {
  maxWidth: '50%'
}

const OfficerCard = props =>{
  return (
    <div className="officerCard" style={{maxWidth:"50%", textAlign:"left"}}>
    {props.name}<br/>
    <p style={{fontSize:"12px"}}>{props.position}</p>
    <a style={{fontSize:"12px"}} href={"mailto:"+props.email}>{props.email}</a>
    </div>
  )
}
const officers=[
  {name: "Michael Desrosiers", position:"Post Commander", email:"michael.d@al460.org"},
  {name: "Benjamin Eill", position:"1st Vice Commander", email:"benjamin.e@al460.org"},
  {name: "Jasmine Arocho", position:"2nd Vice Commander", email:""},
  {name: "Angel Carrasquillo", position:"Adjutant/Treasurer", email:"angel.cq@al460.org"},
  {name: "Angel Castillo", position:"Sergeant-At-Arms", email:""},
  {name: "Vinny Pinto", position:"Membership Coordinator", email:""},
  {name: "Reginald Law", position:"Historian", email:""},
]

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
            <h4>Post Officers</h4>
            <div className="officerList">
              {officers.map(officer=>{
                return <OfficerCard name={officer.name} position={officer.position} email={officer.email}/>
              })}
            </div>
            
            
          </div>
          <div style={halfBoxStyle}>
            <h4>Sign Up to be a member today!</h4>
            <a href="/pdf/MEMBERSHIP_FORM.pdf">Click Here</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;