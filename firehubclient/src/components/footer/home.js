import React from 'react';
import Header from './header';
import SlidePictures from './slide';

export default function Home() {
	return (
		<div>
			<Header />
			<section id="home">
				<SlidePictures />
			</section>
			<section id="services">
				<div>
					<h1 className = 'service-header'>SERVICES</h1>
					<p className = "service-paragraph">Reliable services to meet your needs</p>
				</div>
				<div className="list-of-services">
					<div className="service-content">
						<h4>CARRIER ETHERNET</h4>
						<p>
							With Our Carrier Ethernet service, you can forget everything about translation of IP
							addresses, security breaches, tedious waiting times for reconfigurations and below-standard
							quality. Carrier Ethernet is born for fibre. This means that the technology works perfectly
							on Our powerful fibre network.
						</p>
					</div>
					<div className="service-content">
						<h4>FTTP</h4>
						<p>
							FTTP is the fastest fibre-optic broadband available to any business. This is an end-to-end
							pure fibre-optic cable system wholly owned and managed by Fibre Hub and offers the highest
							available bandwidth when compared to any available service in Nigeria today, in both
							downstream and upstream directions.
						</p>
					</div>
					<div className="service-content">
						<h4>DARK FIBRE</h4>
						<p>
							Dark fiber solutions provide network extension and swift deployment, delivered with speed,
							simplicity and confidence. Fibre Hub specialising in dark fiber and Laying of fibre cables
							to enable you to be in business for your customers. Fibre Hub offers a variety of
							connectivity options
						</p>
					</div>
					<div className="service-content">
						<h4>IP TELEPHONY (VoIP)</h4>
						<p>
							We provide IP Telephony solutions. This technology transmits voice applications over an IP
							network as in traditional PBX. With Fibre Hub VoIP and IP Telephony solution, our customers
							are guaranteed business communications systems that integrate multiple technologies into
							comprehensive systems to address their individual needs.
						</p>
					</div>
				</div>
			</section>
			<section id="about">
				<h1 className = "about-header">ABOUT US</h1>
				<p style = {{textAlign:'center'}}>
					Fibre Hub is a new generation Internet Service provider with high level of Reliablity and Quality
					Service.
				</p>
				<div className="about-container">
					<div style={{ width: '20%' }}>
						<h1 style={{ fontSize: '40px', margin: '10px' }}>
							we provide high quality service that you expect 24/7
						</h1>
					</div>
					<div style={{ width: '60%' }}>
						<p style={{ fontSize: '19px', margin: '10px' }}>
							Fibre Hub is a telecommunication and Information Technology service company. We offer a
							combination of business solutions designed to enhance the efficiency and productivity of our
							clients. Over the years we have been able to identify and develop a competence for analyzing
							and understanding business operations, the cost drivers and operational hiccups that create
							inefficiencies and challenges in organizations. We have numerous customized business
							solutions designed to address our clients' specific telecommunication challenges; giving the
							organization the required edge in today’s highly competitive market.
						</p>
					</div>
					<div style={{ width: '20%' }}>
						<div>
              <div className = 'icon-container'>
							<div>
								<i className="fas fa-wifi wifi about-icon"></i>
							</div>
              <div>
              <h5>Fast Internet, Reliable Internet.</h5>
							<p>
								We utilises optical cables for its internet broadband service , which makes it the
								fastest internet you can get.
							</p>
              </div>
              </div>
						</div>
						<div>
              <div className = 'icon-container'>
							<div><i className="fas fa-check about-icon check "></i></div>	
              <div>
              <h5>Flexibility</h5>
							<p>
								Fibre Hub drives on the policy to make efficient changes that are necessary to respond
								effectively to client needs, as quickly as possible
							</p>
              </div>
              </div>
						</div>
						<div>
              <div className = 'icon-container'>
							<div>
								<i className="fas fa-hands-helping about-icon helping"></i>
							</div>
              <div>
              <h5>Awesome Support</h5>
							<p>
								Each client has a dedicated service technician to create a personable relationship.
							</p>
              </div>
              </div>
						</div>
					</div>
				</div>
			</section>
			<section id="contact">
        <div className = 'contact-us'>
				<h1 className = "contact-header">GET IN TOUCH</h1>
        <div className = "contact-container">
        <div className = "contact-right">
					<form action="">
						<div className="form-group credentials">
              <input type="text" className = "form-control" placeholder = "Your Name*"/>
              <input type="text" className = "form-control" placeholder = "Your Email*"/>
            </div>
            <div className = "form-group">
            <input type="text" className = 'form-control' placeholder = "Subject" style = {{marginLeft:"0px"}}/>
            <textarea className = "from-control" placeholder = "Your Message*"/><br></br>
            <button  type = "button"className = "btn btn-success btn-sm" >Send</button> 
            </div>
					</form>
				</div>
        <div className = "contact-left">
          <ul>
            <li><span><i class="fas fa-map-marker-alt"></i></span><span>Lagos</span></li>
            <li>Tel:+234 8090 506 310</li>
            <li>Mobile : 08033021700</li>
            <li>#68/72 Allen Avenue, Ikeja.</li>
            <li>fibrehub.com.ng</li>
            <li>
              <span><i className="fab fa-facebook-square socials"></i></span>
              <span><i className="fab fa-linkedin socials"></i></span>
              <span><i className="fab fa-twitter-square socials"></i></span>
            </li>
          </ul>
        </div>
        </div>
        </div>
       
			</section>
		</div>
	);
}
