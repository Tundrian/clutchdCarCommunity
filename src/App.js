import './App.css';
import './css/normalize.css';
import './css/style.css';

function App() {
  const img1 = require('./assets/images/gallery/car10.jpg')
  return (
    <div className="App">
      <div class="heroWrapper">
			<nav>
				<div>
					<img class="nav-logo" src="assets/images/logo.jpg" alt="Clutchd logo"></img>
					<span class="nav-Name">Clutchd</span>
				</div>
				
				<ul>
					<li>Home</li>
					<li>Gallery</li>
					<li>Services</li>
					<li>Events</li>
					<li>Shop</li>
					<li>Contact</li>
				</ul>
			</nav>

			<main>
				
				<h1>Clutch'd</h1>
				<p>REAL LIFESTYLE, TRUE PASSION</p>

				<p>Community of custom vehicle enthusiasts in the Windsor-Essex area</p>

				<a href="##">Contact</a>
			</main>
		</div>

		<section class="gallery">
			<h2>Gallery</h2>
			<p>Community spotlight over the last few years</p>

			<ul>
				<li>
					<img src="assets/images/gallery/car10.jpg" alt=""></img>
				</li>
				<li>
					<img src="assets/images/gallery/car2.jpg" alt=""></img>
				</li>
				<li>
					<img src="assets/images/gallery/car3.jpg" alt=""></img>
				</li>
				<li>
					<img src="assets/images/gallery/car4.jpg" alt=""></img>
				</li>
				<li>
					<img src="assets/images/gallery/car5.jpg" alt=""></img>
				</li>
				<li>
					<img src="assets/images/gallery/car14.jpg" alt=""></img>
				</li>
				<li>
					<img src="assets/images/gallery/car13.jpg" alt=""></img>
				</li>
				<li>
					<img src="assets/images/gallery/car8.jpg" alt=""></img>
				</li>
			</ul>
		</section>

		<section class="merchandise">
			<h2>Merchandise</h2>
			<p>Check out the latest stickers, shirts, and other products</p>
			<ul>
				<li>
					<img src="assets/images/merch/misc.jpg" alt=""></img>
					<div>
						<h4>Miscellaneous Shirts & Stickers</h4>
						<span>$30.00</span>
					</div>
					
				</li>
				<li>
					<img src="assets/images/merch/shirt.jpg" alt=""></img>
					<div>
						<h4>Mens & Women's T: Clutchd/Gray</h4>
						<span>$15.00</span>
					</div>
					
				</li>
				<li>
					<img src="assets/images/merch/shirt2.jpg" alt=""></img>
					<div>
						<h4>Men's & women's T: Logo/Black</h4>
						<span>$15.00</span>
					</div>
					
				</li>
				<li>
					<img src="assets/images/merch/shirt3.jpg" alt=""></img>
					<div>
						<h4>Men's & Women's T: Clutched/Black</h4>
						<span>$15.00</span>
					</div>
		
				</li>
				<li>
					<img src="assets/images/merch/sticker1.jpg" alt=""></img>
					<div>
						<h4>Variety of Stickers</h4>
						<span>$5.00 - $150.00</span>
					</div>
				</li>
			</ul>
		</section>

		<section class="about">
			<h2>Who We Are</h2>
			<p>We are a local community of custom car enthusiasts.</p>
			<img src="assets/images/team.jpg" alt=""></img>
			<ul>
				<li>

					<section>

						<h4>Firaso</h4>
						<p>Lead organizer and head of sponsor relations. My car is a white Evo sitting on gold rims. Reach out with any inquiries or sponsorhip requests.</p>
						<a href="##">Get In Touch</a>

					</section>

					<img src="assets/images/firasCar.jpg" alt=""></img>

				</li>
				<li>

					<section>
						<img src="assets/images/john1.jpg" alt=""></img>
						<h4>Johnny</h4>
						<p>Head of media & marketing. I ride a chrome-deleted mercades. These photos you see are mostly me. Reach out with any questions regarding our media presence.</p>
						<a href="##">Get In Touch</a>

					</section>

					<img src="assets/images/johnCar.jpg" alt=""></img>

				</li>
			</ul>
		</section>

		<section class="events">
			<h2>Upcoming Events</h2>
			<ul>
				<li>
					<div>
						<h4>Windsor Customs</h4>
						<p><span>Date: </span>March 26th, 2022 @ 10:00am - 4:00pm ET</p>
						<p><span>Location:</span> 164 Commercial Blvd, Tecumseh, ON N9K 1G5</p>
						<img src="assets/images/event1.jpg" alt=""></img>
					</div>
					
					<iframe title="event1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.7044227862884!2d-82.8623410485703!3d42.306171979088354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad4e0fdcdb23f%3A0x666881ab15213624!2sImagine%20Cinemas%20Lakeshore!5e0!3m2!1sen!2sca!4v1647098812567!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
				</li>
				<li>
					<div>
						<h4>Windsor Customs</h4>
						<p><span>Date: </span>March 26th, 2022 @ 10:00am - 4:00pm ET</p>
						<p><span>Location:</span> 164 Commercial Blvd, Tecumseh, ON N9K 1G5</p>
						<img src="assets/images/event1.jpg" alt=""></img>
					</div>
					<iframe title="event2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11808.999585123696!2d-83.01015257835385!3d42.27318869311591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d7fdcd66c77%3A0x370ba381664372a3!2sDevonshire%20Mall!5e0!3m2!1sen!2sca!4v1647098951585!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
					
				</li>
					
				
			</ul>
		</section>

		<section class="contact">
			<h2>Contact Us</h2>
			<p>Get in touch with us to purchase any merch, sponsor an event, or just general inquires</p>
			<a href="##">Purchase Merchandise</a>
			<a href="##">Sponsor and Event</a>
			<a href="##">General Contact</a>
		</section>
    </div>
  );
}

export default App;
