import React from 'react';
import {Carousel} from 'react-responsive-carousel';
require("react-responsive-carousel/lib/styles/carousel.min.css");

const newsMessageStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  minWidth: '80%',
  justifyContent: "space-around",
}
const halfBoxStyle = {
  maxWidth: '300px'
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
  {name: "Jassmin Arocho", position:"2nd Vice Commander", email:""},
  {name: "Angel Carrasquillo", position:"Adjutant/Treasurer", email:"angel.cq@al460.org"},
  {name: "Angel Castillo", position:"Sergeant-At-Arms", email:""},
  {name: "Vincent Pinto", position:"Membership Coordinator", email:""},
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
                  <img alt="AL460" src={'assets/images/4.jpg'} />   
                </div>
                <div>
                    <img alt="AL460" src={'assets/images/1.jpg'} />
                </div>
                <div>
                  <img alt="AL460" src={'assets/images/2.jpg'} />
                </div>
                <div>
                  <img alt="AL460" src={'assets/images/3.jpg'} />
                    
                </div>
                
        </Carousel>
        <div style={newsMessageStyle}>
          <div style={halfBoxStyle}>
            <h4>Post Officers</h4>
            <div className="officerList">
              {officers.map(officer=>{
                return <OfficerCard key={officer.name} name={officer.name} position={officer.position} email={officer.email}/>
              })}
            </div>
            
            
          </div>
          <div style={halfBoxStyle}>
            <h4>Sign Up to be a member today!</h4>
            <a href="/pdf/MEMBERSHIP_FORM.pdf">Click Here</a><br/><br/>
            <h4>Special Thanks To Our Sponsors:</h4>
              <ul>
                <li>
                  New York City Police Benevolent Association<br/>
                  <a style={{fontSize: "12px"}} href="http://www.nycpba.org/">www.nycpba.org</a>
                </li>
                <li>
                  Detective's Endowment Association<br/>
                  <a style={{fontSize: "12px"}} href="https://www.nycdetectives.org/">www.nycdetectives.org/</a>
                </li>
                <li>
                  The Cop Shop<br/>
                  <a style={{fontSize: "12px"}} href="http://www.copshopny.com/">www.copshopny.com</a>
                </li>
                <li>
                  Brotherhood For the Fallen<br/>
                  <a style={{fontSize: "12px"}} href="http://www.brotherhoodnyc.org/">www.brotherhoodnyc.org</a>
                </li>
                <li>
                  Pitta & Baione LLP - 9/11 Victim Comp Fund Claims<br/>
                  <a style={{fontSize: "12px"}} href="https://www.911benefits.com/">www.911benefits.com</a>
                </li>
                <li>
                  NYPD Korean Officers Association<br/>
                </li>
                <li>
                  The Military Mortgage Guys<br/>
                  <a style={{fontSize: "12px"}} href="http://www.militarymortgageguys.com/">www.militarymortgageguys.com</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;