import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../config";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";
const LoginPage = ({ user, setUser }) => {
  const responseGoogle = (response) => {
    if (response.error) {
      console.error(response.error);
    } else if (response.profileObj) {
      setUser({ ...response.profileObj, ...response.tokenObj });
    }
  };
  if (user) return <Redirect to="/" />;
  return (
    <div>
      <br />
      <br />
      <h1>Click Below ICON To Login</h1>
      <GoogleLogin
        clientId={config.CLIENT_ID}
        isSignedIn={true}
        render={(renderProps) => (
          <img
            style={{ height: "100px", width: "100px" }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            src="https://img.icons8.com/fluent/48/000000/google-plus.png"
            alt="google"
          ></img>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        scope="https://www.googleapis.com/auth/youtube"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};
export default connect(mapStateToProps, { setUser })(LoginPage);
