import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import { Image, Grid, GridColumn, Divider } from "semantic-ui-react";
import mainImage from "./images/glass-graph.jpg";
import enforcement from "./images/enforcement.jpg";
import computer from "./images/computer.svg";
import winner from "./images/winner.svg";
import employee from "./images/employee.svg";
import monitor from "./images/monitor.jpg";
import screen from "./images/screen.jpg";
import newMain from "./images/Grouped_graphic_green_black.svg";
import "./App.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main1">Welcome to</span>
              <span className="heading-primary-main1">Clear Cut Analytics</span>
              <span className="heading-primary-sub">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </span>
              <span className="heading-primary-sub">
                Lorem Ipsum has been the industry's standard dummy text ever
              </span>
              <span className="heading-primary-sub">
                of type and scrambled it to make a type specimen book. It has
              </span>
              <span className="heading-primary-sub">
                electronic typesetting, remaining essentially unchanged. It was.
              </span>
              {/* <span className="heading-primary-sub">
                to sections 1.10.32–33 of Cicero's work, with the most notable
                passage excerpted.
              </span> */}
            </h1>

            <NavLink to="/actionForm">
              <button className="btnAction">Click me</button>
            </NavLink>
          </div>
          <div className="image-box">
            <Image className="main-image" src={newMain} />
          </div>
        </header>
        <ScrollableAnchor id={"section-1"}>
          <div className="section-1-container">
            <div className="section-1-header">
              <h1 className="section-1-title">Why Us?...</h1>
            </div>
            <div className="small-grid">
              <div className="grid-item">
                <Image src={winner} className="iconImage" />
                <h1 className="section-1-subTitle">Industry Leaders</h1>
                <p>
                  cases are perfectly simple and easy to distinguish. In a free
                  hour, when our power of choice is untrammelled and when
                </p>
              </div>
              <div className="grid-item">
                <Image src={computer} className="iconImage" />
                <h1 className="section-1-subTitle">Proprietary Software</h1>
                <p>
                  cases are perfectly simple and easy to distinguish. In a free
                  hour, when our power of choice is untrammelled and when
                  nothing.
                </p>
              </div>
              <div className="grid-item">
                <Image src={employee} className="iconImage" />
                <h1 className="section-1-subTitle">10 years of experience</h1>
                <p>
                  cases are perfectly simple and easy to distinguish. In a free
                  hour, when our power of choice is untrammelled and when
                  nothing.
                </p>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <Divider />
        <ScrollableAnchor id={"section-2"}>
          <div className="section-2-contaier">
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={7}>
                  <div className="section-2-textBox">
                    <h1 className="section-2-subTitle">Analytics</h1>
                    <p className="section-2-text">
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided. But in certain circumstances and owing to the
                      claims of duty or the obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man therefore
                    </p>
                  </div>
                </Grid.Column>
                <GridColumn>
                  <Image src={monitor} />
                </GridColumn>
              </Grid.Row>
            </Grid>
          </div>
        </ScrollableAnchor>
        <Divider />
        <ScrollableAnchor id={"section-3"}>
          <div className="section-3-container">
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Image src={enforcement} />
                </Grid.Column>
                <Grid.Column width={6}>
                  <div className="section-2-textBox">
                    <h1 className="section-2-subTitle">Enforcement</h1>
                    <p className="section-2-text">
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided. But in certain circumstances and owing to the
                      claims of duty or the obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man therefore
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default LandingPage;
