import { Component } from "react";

import { Link } from "react-router-dom";

import { TailSpin } from "react-loader-spinner";

import { Nel, Logo, FailCon, FailIm, Fh, Fp, Fb, ListCon } from "./style";

import Item from "../Item";

import "./index.css";

const apStatus = {
  initial: "initial",
  loading: "loading",
  success: "success",
  fail: "fail",
};

class CourseItem extends Component {
  state = { ap: apStatus.initial, courseList: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ ap: apStatus.loading });
    const url = "https://fakestoreapi.com/products";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const formatData = data.map((each) => ({
        id: each.id,
        logoUrl: each.image,
        title: each.title,
      }));
      this.setState({ courseList: formatData, ap: apStatus.success });
    } else {
      this.setState({ ap: apStatus.fail });
    }
  };

  loadingView = () => (
    <div data-testid="loader" className="loader-con">
      render(
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
      )
    </div>
  );

  successView = () => {
    const { courseList } = this.state;
    return (
      <div className="s-con">
        <ListCon>
          {courseList.map((i) => (
            <Item details={i} key={i.id} />
          ))}
        </ListCon>
      </div>
    );
  };

  failView = () => (
    <div>
      <Link to="/" className="link-el">
        <Nel>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-log-img."
            alt="website logo"
          />
        </Nel>
      </Link>
      <FailCon>
        <FailIm
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <Fh>Oops! Something Went wRONG</Fh>
        <Fp>We cannot seem to find the page you are looking for</Fp>
        <Fb type="button" onClick={this.getData}>
          Retry
        </Fb>
      </FailCon>
    </div>
  );

  finalRender = () => {
    const { ap } = this.state;
    switch (ap) {
      case apStatus.loading:
        return this.loadingView();
      case apStatus.success:
        return this.successView();
      case apStatus.fail:
        return this.failView();
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <Link to="/" className="link-el">
          <Nel>
            <Logo
              src="https://img.freepik.com/free-vector/hand-drawn-shop-local-logo-design_23-2149575766.jpg?w=740&t=st=1710075841~exp=1710076441~hmac=fe8de484f7a8d86d5b19f7cc242183d386dc19123b3cdf96d1e82ee76d02abd3"
              alt="website logo"
            />
          </Nel>
        </Link>
        {this.finalRender()}
      </div>
    );
  }
}

export default CourseItem;
