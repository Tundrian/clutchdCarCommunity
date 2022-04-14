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
          <li>Home</li>
          <li><a href="#gallery">Gallery</a></li>
          <li>Services</li>
          <li>Events</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
