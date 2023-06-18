import React from "react";
import userImg from "../assets/user.png";
import startFilled from "../assets/star-filled.png";
import startEmpty from "../assets/star-empty.png";

export default class ComplexState extends React.Component {
  state = {
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  };

  toggleFavorite = () => {
    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
    }));
  };
  render() {
    let starIcon = this.state.isFavorite ? startFilled : startEmpty;
    return (
      <main>
        <article className="contact-card">
          <img src={userImg} className="card--image" />
          <div className="card--info">
            <img
              src={starIcon}
              className="card--favorite"
              onClick={this.toggleFavorite}
            />
            <h2 className="card--name">
              {this.state.firstName} {this.state.lastName}
            </h2>
            <p className="card--contact">{this.state.phone}</p>
            <p className="card--contact">{this.state.email}</p>
          </div>
        </article>
      </main>
    );
  }
}
