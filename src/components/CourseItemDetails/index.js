import { Component } from "react";

import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import {
  Nel,
  Logo,
  View,
  Vi,
  Vd,
  FailCon,
  FailIm,
  Fh,
  Fp,
  Fb,
  Vh,
} from "./style";

import "./index.css";

const apStatus = {
  initial: "initial",
  loading: "loading",
  success: "success",
  fail: "fail",
};

class CourseItemDetails extends Component {
  state = { course: {}, ap: apStatus.initial };

  componentDidMount() {
    this.getItem();
  }

  getItem = async () => {
    this.setState({ ap: apStatus.loading });

    // const { match } = this.props;
    // const { params } = match;
    // const { id } = params;
    let id = this.props.match.params.id;
    const url = `https://fakestoreapi.com/products/${id}`;
    const options = {
      method: "Get",
    };
    const res = await fetch(url, options);
    if (res.ok === true) {
      const dat = await res.json();
      const updateCourse = {
        id: dat.id,
        price: dat.price,
        title: dat.title,
        description: dat.description,
        category: dat.category,
        image: dat.image,
      };
      this.setState({ course: updateCourse, ap: apStatus.success });
    } else {
      this.setState({ ap: apStatus.fail });
    }
  };

  successView = () => {
    const { course } = this.state;
    return (
      <div className="cr">
        <View>
          <Vi src={course.imageUrl} alt={course.name} />
          <div>
            <Vh>{course.title}</Vh>
            <Vd>{course.description}</Vd>
            <Vd>{course.price}</Vd>
            <Vd>{course.category}</Vd>
          </div>
        </View>
      </div>
    );
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

  failView = () => (
    <div>
      <Link to="/" className="link-el">
        <Nel>
          <Logo
            src="  https://img.freepik.com/free-vector/hand-drawn-shop-local-logo-design_23-2149575766.jpg?w=740&t=st=1710075841~exp=1710076441~hmac=fe8de484f7a8d86d5b19f7cc242183d386dc19123b3cdf96d1e82ee76d02abd3"
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
        <Fb type="button" onClick={this.getItem}>
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
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </Nel>
        </Link>
        <div>{this.finalRender()}</div>
      </div>
    );
  }
}

export default CourseItemDetails;
