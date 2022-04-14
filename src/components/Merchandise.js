import item1 from '../assets/images/merch/misc.jpg';

function Merchandise() {
  return (
    <section class="merchandise">
    <h2>Merchandise</h2>
    <p>Check out the latest stickers, shirts, and other products</p>
    <ul>
        <li>
            <img src={item1} alt=""></img>
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
  )
}

export default Merchandise