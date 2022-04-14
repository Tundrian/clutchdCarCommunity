function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <img
            class="nav-logo"
            src="assets/images/logo.jpg"
            alt="Clutchd logo"
          ></img>
          <span class="nav-Name">Clutchd</span>
        </div>

        <ul>
          <li><a href="\">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Events">Events</a></li>
          <li><a href="#Shop">Shop</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
