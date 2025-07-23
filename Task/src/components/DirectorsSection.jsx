import React from 'react'
import WhiteBlueText from './WhiteBlueText'

// import Image from '../../public/rikant_r.png';

const DirectorsSection = () => {
	const Directors_list =[
  {
    "name": "Rikant Pitti",
    "designation": "Co-founder & CEO",
    "image": `/rikant_r.png`,
    "description": "Mr Rikant Pitti, Co-Founder & CEO of EaseMyTrip, combines business acumen with technological expertise. Starting at 16, he laid the groundwork for EaseMyTrip's success.",
    "link": "#"
  },
  {
    "name": "Nishant Pitti",
    "designation": "Co-founder",
    "image":  `/rikant_r.png`,
    "description": "Mr. Nishant Pitti, Co-Founder of EaseMyTrip, is the visionary architect of the company's enduring success. He embarked on his entrepreneurial journey at the age of 16.",
    "link": "#"
  },
  {
    "name": "Prashant Pitti",
    "designation": "Co-founder",
    "image":  `/rikant_r.png`,
    "description": "Mr. Prashant Pitti, Co-founder of EaseMyTrip, led the company to the remarkable feat of bootstrapping its way to IPO success, positioning it among the select few.",
    "link": "#"
  },
  {
    "name": "Vinod Kumar Tripathi",
    "designation": "Independent Director",
    "image":  `/rikant_r.png`,
    "description": "Mr. Vinod Kumar Tripathi is an Independent Director of our Company and has been with us for years. He holds a bachelor's and a master's degree in political science.",
    "link": "#"
  },
  {
    "name": "Mrs. Neena Kumar",
    "designation": "Independent Director",
    "image": `/rikant_r.png`,
    "description": "She retired as Member Administration and Member Revenue of Central Board of Direct Taxes, Ministry of Finance, Government of India.",
    "link": "#"
  },
  {
    "name": "Mrs. Ruchi Ghanashyam",
    "designation": "Independent Director",
    "image":  `/rikant_r.png`,
    "description": "Mrs. Ruchi Ghanashyam joined the Indian Foreign Service in 1982. She is an Indian Diplomat who retired in April 2020 from her last position in the Indian Government.",
    "link": "#"
  }
]

	return (
		<section className="directors-section">
        <div className="wrapper">
					 <WhiteBlueText text="Meet Our Board of Directors" />
					 <div className="dirctors-list grid ">
				{Directors_list.map((director, index) => (
					<div className="director-card" key={index}>
						<figure>
							<img src={director.image} alt={director.name} />
						</figure>
						<div className="director-info">
							<h3>{director.name}</h3>
							<p className="designation">{director.designation}</p>
							<p className="description">{director.description}</p>
							<a href={director.link} className="read-more">Read More</a>		
					 </div>
					 </div>
					 ))}
					 </div>
				</div>
		</section>
	)
}

export default DirectorsSection
