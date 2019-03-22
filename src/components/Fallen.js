import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); return null });
  return images;
}

const images = importAll(require.context('../assets/fallen', false, /\.(png|jpe?g|svg)$/));

const fallenInfo = [
  {officer: "Det. Joseph Lemm", 
  img: images['lemm.jpg'], 
  info: "On December 21, 2015, 45-year-old Det. Joseph Lemm, who doubled as a Technical Sergeant in the Air National Guard, was killed near the Bagram Air Base in Afghanistan. In the suburbs of West Harrison, New York, he lived with his wife Christine, their four-year-old son Ryan, and teenaged daughter Brooke. He was a member of the NYPD Bronx Warrants Squad, tracking down the most violent of wanted felons and safely removing them from the streets of the City. After six years of active military duty with the United States Air Force, Joseph Lemm moved east, taking jobs managing shoe stores before being called up for the Police Academy. He entered the force on March 1, 2000, and after graduation was assigned to the 48th Precinct in The Bronx. A short time later, he found himself working the rescue and recovery from the profound devastation of the World Trade Center attacks of September 11, 2001. Consequently, during the resulting international //\"war on terror\" and during his service with the NYPD. Lemm rejoined the military in 2008 with the Air National Guard. During his military career, he eventually saw three combat tours of duty: the first from March to December 2011 in Iraq; and later twice in Afghanistan. Lemm's first tour of Afghanistan ran from October 2012 to 2013. Back in the States, on December 19, 2014, he was promoted to third grade Detective. Less than a year later, in August of 2015, Lemm returned to Afghanistan, where shortly before Christmas of 2015, when he was part of a joint NATO-Afghan patrol - the New York Air Guard's 105th Security Forces Squadron - he was moving through a village when a Taliban suicide bomber drove a motorcycle into his convoy comprised of American and Afghani troops. Six American soldiers, including Lemm, were killed."},

  {officer: "P.O. Deon Taylor", 
  img: images['taylor.jpg'], 
  info: "Sergeant Deon Taylor, 30, died on October 22 in Bela Beluk, Farah Province, Afghanistan after his armored humvee struck an improvised explosive. Sergeant Taylor, who joined the New York Army National Guard in 1997, was a member of Headquarters Company of the 27th Infantry Brigade Combat Team, based in Syracuse. In civilian life he was a member of the New York City Police Department. Sergeant Taylor, a resident of the Bronx, is survived by his parents, son, DaRue, and fiancee, Caitlin Casey.   Sergeant Taylor had been awarded the Afghanistan Campaign Medal, the Global War on Terrorism Expeditionary Medal, the Global War on Terrorism Service Medal, the Armed Forces Reserve Medal, the Overseas Service Ribbon, the National Defense Service Medal, New York State Aid to Civil Authorities Medal, and the Army Achievement Medal. He was awarded the Bronze Star, posthumously, along with the Purple Heart, Combat Action Badge and the New York State Conspicuous Service Medal."},
  {officer: "P.O. James McNaughton", 
  img: images['mcnaughton.jpg'], 
  info: "James \"Jimmy\" D. McNaughton, 27, was the first New York City Police Officer to give his life for his country as a soldier in the line of duty while serving in Iraq on August 2, 2005. Born at West Point Military Hospital, on April 13th, 1978, his father, William, was stationed there as a cook. Jimmy's military career began when his patriotism grew stronger when he joined the Army in the summer of 1996. He served 5 years in the military and was honorably discharged in the summer of 2001, but not before enlisting in the reserves. Jimmy was a Staff Sergeant with the Army Reserve's 306th Military Police Battalion. He joined the NYPD the very next day. Jimmy was in the first Police Academy class to graduate after 9/11. He was assigned to Transit Bureau, District 2 in Lower Manhattan. He was activated shortly after for his first deployment from October 2002 through 2003 for a secret mission in Maryland. He reported for duty in the Army on October 4th, 2002. On August 2nd, 2005, Jimmy's Unit was assigned a dangerous mission, which was between him and a couple other Sergeants. Jimmy volunteered over the other soldiers because they had children and he knew the severity of the mission. While on this mission, Jimmy was training an Iraqi officer up in a tower and was struck by a sniper. Everyone who knew Jimmy knew he was an inspiration and a true hero, but what often goes overlooked is how great of a person and friend he was his great sense of humor as well. One of Jimmy's great passions was poker. He loved to play cards and it showed on his many trips to Atlantic City. Another one of Jimmy's great passions was his utmost pride for his country and his flag. Jimmy's first tattoo was the American Flag blowing in the wind. \"He would take the bullet for you. He would literally stand in front of you and take that bullet,\" said SGT Berford Rivera. Jimmy was living out a family tradition when he joined the police force. His father is a retired police officer and his mother, Michele, is a retired transit bureau officer."}] 



const FallenCard = (props) => {
  return (
    <div className='fallenCard'>
      <div className="fallenName" style={{display: "flex", justifyContent:'center', alignItems: "center", margin: 0, backgroundColor: "#01467F", color: "white"}}>
        <img src={images['blackband.png']} style={{height:"35px"}} alt="black band" />
        <h3> {props.officer}</h3>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
      <img src={props.img} style={{height:'120px', borderRadius:'5px'}} alt={props.officer}/>
      </div>
      <p style={{margin:"5px", padding: '15px'}}>{props.info}</p>
    </div>
  )
}

class Fallen extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }
  
  render() {
    return (
      <div>
        <h2>Wall of Heros - Remembering our Fallen</h2>
        <div className='fallenCardBox'>
          {fallenInfo.map(officer=>{
            return <FallenCard key={officer.officer} officer={officer.officer} img={officer.img} info={officer.info} />
          })}
          
          
        </div>
      </div>
    )
  }
}

export default Fallen;