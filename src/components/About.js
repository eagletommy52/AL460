import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); return null });
  return images;
}

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

class About extends React.Component {
  render() {
    return (
      <div style={{padding: '15px'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img alt="American Legion Logo" src={images['AL-logo.png']}/><br/>
        <img alt="American Legion" src={images['logo-black-text.jpg']} width="50%"/>
        </div>
        <h2 style={{textAlign:'center'}}>About American Legion 460</h2>
        <p>The American Legion was chartered and incorporated by Congress in 1919 as a patriotic veteran’s organization devoted to mutual helpfulness. It is the nation’s largest wartime veterans service organization, committed to mentoring youth and sponsorship of wholesome programs in our communities, advocating patriotism and honor, promoting strong national security, and continued devotion to our fellow service members and veterans. The legion evolved from a group of war-wary veterans of World War I into one of the most influential nonprofit groups in the United States.
The American Legion is a nonpartisan, not-for-profit organization with great political influence perpetuated by its grass-roots involvement in the legislation process from local districts to Capitol Hill. Legionnaires’ sense of obligation to community, state and nation drives an honest advocacy for veterans in Washington. The Legion stands behind the issues most important to the nation’s veterans community, backed by resolutions passed by volunteer leadership.
Membership swiftly grew to over 1 million, and local post sprang up across the country. Today, membership stands at over 2.4 million in 14,000 posts worldwide. The post are organized into 55 departments: one each for the 50 states, along with the District of Columbia, Puerto Rico, France, Mexico and the Philippines.
The American Legion’s success depends entirely on active membership, participation and volunteerism. The organization belongs to the people it serves and the communities in which it thrives.

Through fraternal unity, continuing the positive momentum of our mission for veterans and their families. Providing Leadership through individual and organizational services.
<br/><br/></p><div style={{margin: "0 auto", display: "block",textAlign:"center"}}>
  <p> Dates of service eligibility:</p>
            <ul style={{margin: "0 auto", display: "inline-block"}}className='missionList'>
              <li>Aug. 2, 1990-Open - Persian Gulf / War on Terrorism</li>
              <li>Dec. 20, 1989 - Jan. 31, 1990 - Operation Just Cause Panama</li>
              <li>Aug. 24, 1982 - July 31, 1984 - Lebanon / Grenada</li>
              <li>Feb. 28, 1961 - May 7, 1975 - Vietnam</li>
              <li>June 25, 1950 - Jan 31, 1955 - Korea</li>
              <li>Dec. 7, 1941 – Dec. 31, 1946 - World War II</li>
              <li>April 6, 1917 – Nov. 11, 1918 World War I</li>
              <li>Dec. 7, 1941 – Dec. 31 1946 - U.S. Merchant Marine</li>
            </ul>
</div>

<h3>Post History</h3>
<p>American Legion NYC Police Post 0460 was founded on November 11, 1919. It was recognized as a line organization by the NYPD on August 31, 1920. Our membership is composed of both active and retired New York City officers (NYPD), as well as, sworn law enforcement officers who are in good standing at the federal, state and local levels; as well as, Military Police officers in good standing or honorably discharged, who have served in the United States Military during times of War.</p>
      </div>
    )
  }
}

export default About;