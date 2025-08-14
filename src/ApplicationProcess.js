import React from "react";
import coopSign from "./images/coopSign.jpg";    // <- put your images in src/images
import "./App.css";

export default function AboutCoOps() {
  // const housingData = [
  //   { name: "2 Bdrm Accessible", price: 930 },
  //   { name: "2 Bdrm Stacked Lower", price: 844 },
  //   { name: "2 Bdrm Stacked Upper", price: 849 },
  //   { name: "2 Bdrm 2 Storey", price: 872 },
  //   { name: "2 Bdrm 3 Storey", price: 918 },
  //   { name: "3 Bdrm Stacked Upper", price: 967 },
  //   { name: "3 Bdrm 2 Storey", price: 996 },
  //   { name: "3 Bdrm 3 Storey", price: 996 },
  //   { name: "4 Bdrm", price: 1061 },
  // ];
  return (
    <div className="about-page">

      {/* MAIN CONTENT */}
      <main className="about-content">
        <h2 className="section-title">How To Become A Member</h2>

        <div className="image-row">
          <img src={coopSign} alt="Co-op Sign" className="about-image" />
        </div>

        <p className="lead">
          The Beechwood Co-operative Homes Market waiting list is closed and the Co-op is not accepting any new Market applications at this time.
        </p>
        <p className="lead">
          We have no availability for the foreseeable future. If you’re interested in living at Beechwood Cooperative Homes, you’d have to apply to the Region of Waterloo wait-list for housing.
        </p>
        <p className="lead">
          Once through this process and wait-list, prospective members would come in for an interview. A small information session and a chance to ask questions with two of our members. The board of directors will review your application and any pertinent information, then make the final decision on approval.
        </p>
        <p className="lead">
          At minimum our members are required to attend our yearly members meetings, keep their units and outdoor spaces maintained and tidy. There are many volunteer opportunities available to our membership, we encourage everyone to join in and have fun.
        </p>
        <p className="lead">
          All of our units require you to pay your own utilities, water heater rental, and an air conditioning fee.
        </p>
      </main>
    </div>
  );
}
