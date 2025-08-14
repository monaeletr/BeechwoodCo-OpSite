// function AboutCoOps() {
//   return <div>All About Co-Ops!</div>;
// }

// export default AboutCoOps;


// src/AboutCoOps.js
import React from "react";
import coopSign from "./images/coopSign.jpg";    // <- put your images in src/images
import playground from "./images/playground.jpg";
import artWall from "./images/artWall.jpg";
import "./App.css";
// import houseIcon from "./images/houseicon.jpg";

export default function AboutCoOps() {
  return (
    <div className="about-page">
      <main className="about-content">
        <h2 className="section-title">About Co-Ops</h2>

        <div className="image-row">
          <img src={coopSign} alt="Co-op Sign" className="about-image" />
          <img src={playground} alt="Playground" className="about-image" />
          <img src={artWall} alt="Art Wall" className="about-image" />
        </div>

        <p className="lead">
          From the outside, a housing co-op looks like any other townhouse development. But a housing co-op is different – here’s how:
        </p>

        <div className="circle-row">
          <div className="circle">Owned<br/>By<br/>Members</div>
          <div className="circle">Managed<br/>By<br/>Members</div>
          <div className="circle">Involved<br/>By<br/>Members</div>
        </div>

        <section className="extra-section">
          <h3>Owned By Members</h3>
          <p>
            People who live in a housing co-op are members. The co-op owns the whole property, and provides a housing unit to each member household. A household can consist of one or more adults – with or without children. Members do NOT own their units.
          </p>
        </section>
        <section className="extra-section1">
          <h3>Managed By Members</h3>
          <p>
            All members have an equal say in how major decisions are made – “one member, one vote.” Members come together at meetings to elect a Board of Directors, to approve the annual budget and approve by-laws. Each director is a member and lives in the co-op. Other members work on committees or they perform various tasks to help with the work involved in running the co-op. A co-op also employs staff in the co-op’s office who look after the day-to-day business of the co-op.
          </p>
        </section>
        <section className="extra-section2">
          <h3>Involved By Members</h3>
          <p>
            The key difference between co-ops and other kinds of non-profit housing is that co-op members are actively involved in running their housing community. Each co-op member must volunteer time to serve on the Board or on a committee, or volunteer for some other co-op task. Members do not need special skills to get involved. They learn from one another and in special training sessions designed for co-op members. Members get to know each other through their working together in the co-op. This involvement creates a sense of community and a safe place for children and adults.
          </p>
        </section>
        <section className="extra-section2">
          <h3>Who Can Live In A Housing Co-Op?</h3>
          <p>
            Anyone can apply to live in a housing co-op. People of all backgrounds and cultures – young and old, married or single, with or without children – live in co-ops. Co-ops are also home to people with different kinds of disabilities and who have special needs. There is no minimum or maximum income level. Co-ops select their own members from those applicants who will be willing to share the responsibility of running the co-op once they become members. A willingness to live in a diverse community is important in order to be a co-op member.
          </p>
        </section>
      </main>
    </div>
  );
}
