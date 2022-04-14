import Navbar from './Navbar';
import Gallery from './Gallery';
import Merchandise from './Merchandise';

function Home() {
  return (
    <div>
        <div class="heroWrapper">
			<Navbar />

			<main>
				<h1>Clutch'd</h1>
				<p>REAL LIFESTYLE, TRUE PASSION</p>
				<p>Community of custom vehicle enthusiasts in the Windsor-Essex area</p>
				<a href="/">Contact</a>
			</main>
		</div>

		<Gallery />

        <Merchandise />

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
  )
}

export default Home