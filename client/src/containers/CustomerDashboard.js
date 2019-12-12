import styles from "../sass/CustomerDashboard.module.scss";
import React, { Component } from "react";
import Reservations from "../containers/Reservations";
import { Link } from "react-router-dom";

class CustomerDashboard extends Component {
  // reservationsHandler = () => {
  //   this.props.history.push("/reservations");
  // };

  // newReservationHandler = () => {
  //   this.props.history.push("/reservations/new");
  // };

  // profileHandler = () => {
  //   this.props.history.push("/you");
  // };
    constructor(props) {
  super(props);
  // N’appelez pas `this.setState()` ici !
  this.logoutHandler =  this.logoutHandler.bind(this);;
}

  logoutHandler = e => {
    console.log(e);
    console.log("test");
    // localStorage.clear();
    localStorage.removeItem("authorization");
    // delete localStorage.key("authorization");
    this.props.history.push("/");
  };
  render() {
    console.log("customer dashboard");
    return (
      <div className={styles.container}>
        <div className={styles.dashHeader}>
          <h2 className="text-capitalize">Welcome to your dashbaord</h2>

          <button
            className="btn btn-danger ml-2 text-capitalize"
            onClick={this.logoutHandler}
          >
            Logout
          </button>
        </div>

        <div>
          <Link to="/reservations/new">
            <button className="btn my-button btn-secondary text-capitalize my-3">
              Make a new reservation
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 ">
            <h2>Upcoming Reservations</h2>
            <Reservations type="accepted" />
          </div>
          <div className="col-sm-12 col-md-4 ">
            <h2>Pending Reservations</h2>
            <Reservations type="pending" />
          </div>
          <div className="col-sm-12 col-md-4 ">
            <h2>Declined Reservations</h2>
            <Reservations type="declined" />
          </div>
        </div>
        {/* <button
          className={styles.buttonDiv}
          onClick={this.newReservationHandler}
        >
          <FaEdit className={styles.dashIcon} />
          <h2 className="text-capitalize">new reservation</h2>
        </button>
        <button className={styles.buttonDiv} onClick={this.reservationsHandler}>
          <FaEye className={styles.dashIcon} />
          <h2 className="text-capitalize">upcoming reservations</h2>
        </button>
        <button className={styles.buttonDiv} onClick={this.profileHandler}>
          <FaJenkins className={styles.dashIcon} />
          <h2 className="text-capitalize">you</h2>
        </button> */}
        {/* <div className={styles.buttonDiv}>
          <FaEye className={styles.dashIcon} />
          <h2 className="text-capitalize">upcoming reservations</h2>
        </div> */}
        {/* <div className={styles.buttonDiv}>
          <FaJenkins className={styles.dashIcon} />
          <h2 className="text-capitalize">You</h2>
        </div> */}

        {/* <Link to="/reservations">
          <span className={styles.buttonDiv1}>
            <FaEdit className={styles.dashIcon} />
            <h2 className="text-capitalize">new reservation</h2>
          </span>
        </Link> */}
      </div>
    );
  }
}

export default CustomerDashboard;
