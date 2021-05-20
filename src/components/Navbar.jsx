import StickyHeader from "react-sticky-header";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Navbar extends Component {
  state = {
    backgroundColor: "transparent",
    color: "#fff",
  };

  listenScrollEvent = e => {
    if (window.scrollY > 80) {
      this.setState({ backgroundColor: "#fff" });
      this.setState({ color: "#545454" });
    } else {
      this.setState({ backgroundColor: "transparent" });
      this.setState({ color: "#fff" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <StickyHeader
        header={
          <div
            className="start"
            style={{ backgroundColor: this.state.backgroundColor }}
          >
            <div className="start__header">
              <div className="start__header__logos">
                <a
                  className="start__header__logos--insta"
                  href="https://www.instagram.com/wolf_circus/"
                >
                  <img id="icon" src={InstagramIcon} alt="instagram" />
                </a>
                <a
                  className="start__header__logos--pinterest"
                  href="https://www.pinterest.ca/wolfcircus/"
                >
                  <img id="icon" src={FacebookIcon} alt="facebook" />
                </a>
              </div>
              <p>Logo</p>
              <div className="start__header__right">
                <div className="start__header__right--search">
                  <img id="icon" src={SearchIcon} alt="search" />
                </div>
                <div className="start__header__right--cart">
                  <img id="icon" src={FavoriteBorderIcon} alt="cart" />
                </div>
              </div>
            </div>
            <div className="start__nav">
              <ul className="start__nav__list">
                <li>
                  <a href="/jewerlystore" style={{ color: this.state.color }}>
                    Home
                  </a>
                </li>
                <li className="start__nav__list--shop">
                  <a
                    href="/jewerlystore/shop"
                    className="btn"
                    style={{ color: this.state.color }}
                  >
                    Shop
                  </a>
                  <div className="start__nav__list--shop--dropDown">
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--picture"
                    >
                      <h3 id="text-top">Shop Spring</h3>
                      <h4 id="text-bottom">SPRING COLLECTION</h4>
                    </div>
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--earings"
                    >
                      <h3>Earings</h3>
                      <h5>All Earings</h5>
                      <h5>Gold</h5>
                      <h5>Silver</h5>
                    </div>
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--necklaces"
                    >
                      <h3>Necklaces</h3>
                      <h5>All Necklaces</h5>
                      <h5>Gold</h5>
                      <h5>Silver</h5>
                    </div>
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--rings"
                    >
                      <h3>Rings</h3>
                      <h5>All Rings</h5>
                      <h5>Gold</h5>
                      <h5>Silver</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="/jewerlystore/news"
                    style={{ color: this.state.color }}
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/jewerlystore/contact"
                    style={{ color: this.state.color }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    );
  }
}