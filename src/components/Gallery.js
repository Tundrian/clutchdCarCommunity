import carImage1 from '../assets/images/gallery/car10.jpg';
import carImage2 from '../assets/images/gallery/car2.jpg';
import carImage3 from '../assets/images/gallery/car3.jpg';
import carImage4 from '../assets/images/gallery/car4.jpg';
import carImage5 from '../assets/images/gallery/car5.jpg';
import carImage6 from '../assets/images/gallery/car13.jpg';
import carImage7 from '../assets/images/gallery/car14.jpg';
import carImage8 from '../assets/images/gallery/car8.jpg';


function Gallery() {

    const carImages = [carImage1, carImage2, carImage3, carImage4, carImage5, carImage6, carImage7, carImage8]

    return (

        <section id="gallery" class="gallery">
			<h2>Gallery</h2>
			<p>Community spotlight over the last few years</p>
            
            <ul>
                {carImages.map(x => {
                    return(
                        <li key={x}>
                        <img src={x} alt=""></img>
                        </li>
                    )
                })}
            </ul>
		</section>
  )
}

export default Gallery