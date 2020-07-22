import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { GoogleLogout, GoogleLogin } from "react-google-login";
import config from "../config";
import { connect } from "react-redux";
import SideList from "./SideList";
import { logoutUser, setUser } from "../redux/actions/userActions";
import Search from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";
import Menu from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import PropTypes from "prop-types";

class Navbar extends Component {
  state = {
    sideListOpen: false,
    watchSideList: false,
  };

  topNavStyle = {
    height: "56px",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 1px #eee",
    boxSizing: "border-box",
  };

  sideListButtonStyle = {
    padding: "8px",
    marginRight: "16px",
    opacity: "0.7",
  };

  youtubeLogoStyle = {
    height: "38px",
    marginTop: "5px",
    paddingRight: "51px",
  };

  searchForm = {
    width: "53%",
    margin: " 0 auto",
    display: "flex",
    justifyContent: "center",
  };

  searchIcon = {
    height: "20px",
    width: "20px",
    opacity: "0.5",
    paddingTop: "3px",
    paddingLeft: "2px",
  };

  inputStyle = {
    height: "32px",
    width: "100%",
    maxWidth: "575px",
    padding: "0",
    border: "lightgray 1px solid",
    borderRight: "none",
    fontSize: "15.5px",
    paddingLeft: "11px",
    boxSizing: "border-box",
    fontWeight: "400",
    paddingBottom: "3px",
    letterSpacing: "0.5px",
  };

  buttonStyle = {
    boxSizing: "content-box",
    height: "28px",
    width: "65px",
    backgroundColor: "#f8f8f8",
    border: "lightgray 1px solid",
    cursor: "pointer",
  };

  iconButtonStyle = {
    padding: "8px",
    margin: "4px",
  };

  iconStyle = {
    opacity: "0.7",
  };

  signInButtonStyle = {
    padding: "8px 16px",
  };

  signInStyle = {
    fontSize: "0.87rem",
    fontWeight: "500",
    color: "rgba(39, 147, 230, 1)",
    marginLeft: "4px",
  };

  toggleDrawer = () => {
    // let padding = "0";
    if (this.props.location.pathname) {
      this.setState({ watchSideList: true });
    } 
    else {
      if (window.innerWidth > 1280) {
        this.setState((state) => ({ sideListOpen: !state.sideListOpen }));
        // padding = this.props.sideListPadding === "240px" ? "0" : "240px";
      } else {
        this.setState((state) => ({ watchSideList: !state.watchSideList }));
      }
    }
    // this.props.getPadding(padding);
  };

  closeWatchSideList = () => {
    this.setState({ watchSideList: false });
  };

  handleLogoutFailure = (err) => {
    console.error(err);
  };
  handleLogoutSuccess = (res) => {
    console.log("Logged Out Successfully");
    this.props.logoutUser();
  };

  handleSearch = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    const searchQuery = event.target.elements.searchBar.value.trim();
    console.log(searchQuery);
    if (searchQuery) {
      this.props.history.push(`/search/${searchQuery}`);
    }
  };
  responseGoogle = (response) => {
    if (response.error) {
      console.error(response.error);
    } else if (response.profileObj) {
      setUser({ ...response.profileObj, ...response.tokenObj });
    }
  };

  render() {
    const sideList = <SideList />;
    return this.props.user !== null ? (
      <div className="navbarSize">
        <div style={{ ...this.topNavStyle, ...this.topNavZIndex }}>
          <IconButton
            onClick={this.toggleDrawer}
            style={this.sideListButtonStyle}
          >
            <Menu />
          </IconButton>
          <Link to="/">
            <img
              style={this.youtubeLogoStyle}
              src="https://res.cloudinary.com/anuraggothi/image/upload/v1594981089/youtube-logo_fizc2f.png"
              alt="The YoutTube logo"
            />
          </Link>
          <form style={this.searchForm} className='searchForm' onSubmit={this.handleSearch}>
            <input
              name="searchBar"
              type="text"
              style={this.inputStyle}
              placeholder="Search"
            />
            <button type="submit" style={this.buttonStyle}>
              <Search alt="Search logo" style={this.searchIcon} />
            </button>
          </form>
          <IconButton style={this.iconButtonStyle}>
            <VideoCall style={this.iconStyle} />
          </IconButton>
          <IconButton style={this.iconButtonStyle}>
            <Apps style={this.iconStyle} />
          </IconButton>
          <IconButton style={this.iconButtonStyle}>
            <MoreVert style={this.iconStyle} />
          </IconButton>
          <GoogleLogout
            clientId={config.CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.handleLogoutSuccess}
            onFailure={this.handleLogoutFailure}
          />
        </div>
        <Hidden lgUp>
          <Drawer
            open={this.state.sideListOpen}
            onClose={this.toggleDrawer}
            transitionDuration={200}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}
            >
              {sideList}
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            variant="persistent"
            anchor="left"
            open={this.state.sideListOpen}
            transitionDuration={0}
          >
            {sideList}
          </Drawer>
        </Hidden>
        <Drawer
          open={this.state.watchSideList}
          onClose={this.closeWatchSideList}
          transitionDuration={200}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeWatchSideList}
            onKeyDown={this.closeWatchSideList}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    ) : (
      <div className="navbarSize">
        <div style={{ ...this.topNavStyle, ...this.topNavZIndex }}>
          <IconButton style={this.sideListButtonStyle}>
            <Menu />
          </IconButton>
          <Link to="/">
            <img
              style={this.youtubeLogoStyle}
              src="https://res.cloudinary.com/anuraggothi/image/upload/v1594981089/youtube-logo_fizc2f.png"
              alt="The YoutTube logo"
            />
          </Link>
          <form style={this.searchForm} onSubmit={this.handleSearch}>
            <input
              name="searchBar"
              type="text"
              style={this.inputStyle}
              placeholder="Search"
            />
            <button type="submit" style={this.buttonStyle}>
              <Search alt="Search logo" style={this.searchIcon} />
            </button>
          </form>
          <GoogleLogin
            clientId={config.CLIENT_ID}
            isSignedIn={true}
            // render={(renderProps) => (
            //   <img
            //     style={{ height: "100px", width: "100px" }}
            //     onClick={renderProps.onClick}
            //     disabled={renderProps.disabled}
            //     src="https://img.icons8.com/fluent/48/000000/google-plus.png"
            //     alt="google"
            //   ></img>
            // )}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            scope="https://www.googleapis.com/auth/youtube"
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <Hidden lgUp>
          <Drawer
            open={this.state.sideListOpen}
            onClose={this.toggleDrawer}
            transitionDuration={200}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}
            >
              {sideList}
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            variant="persistent"
            anchor="left"
            open={this.state.sideListOpen}
            transitionDuration={0}
          >
            {sideList}
          </Drawer>
        </Hidden>
        <Drawer
          open={this.state.watchSideList}
          onClose={this.closeWatchSideList}
          transitionDuration={200}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeWatchSideList}
            onKeyDown={this.closeWatchSideList}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}
Navbar.propTypes = {
  getPadding: PropTypes.func,
  sideListPadding: PropTypes.string,
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};
export default withRouter(
  connect(mapStateToProps, { logoutUser, setUser })(Navbar)
);