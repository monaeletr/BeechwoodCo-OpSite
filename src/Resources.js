import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

import groceryStoresImg from "./images/groceries.png";
import pharmaciesImg from "./images/pharmacies.png";
import schoolsImg from "./images/localschools.png";
import utilitiesImg from "./images/bylaws.jpg";
import workOrdersImg from "./images/bylaws.jpg";
import boardImg from "./images/bylaws.jpg";
import faqsImg from "./images/bylaws.jpg";
import resourcesImg from "./images/resourcestitle.png";

export default function Resources() {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({ title: "", links: [] });

  const handleClose = () => setShow(false);
  const handleShow = (title, links = [], text = "") => {
    setModalData({ title, links, text });
    setShow(true);
  };

  const resources = [
    { 
      title: "By-Laws",  
      links: [
        { label: "General Bylaw", url: "./files/1Bylaw-1-General.pdf" },
        // { label: "COCHF", url: "https://cochf.coop/" }
        { label: "Financial Authorization Bylaw", url: "/files/2Bylaw-2-Financial-Authorization.pdf "},
        { label: "Director Renumeration Bylaw", url: "/files/3Bylaw-3-Director-Remuneration.pdf" },
        { label: "Occupancy Bylaw", url: "/files/4Bylaw-4-Occupancy.pdf" },
        { label: "Internal Subsidy Bylaw", url: "/files/5Bylaw-5-Internal-Subsidy.pdf" },
        { label: "Member Selection Bylaw", url: "/files/6Bylaw-6-Member-Selection.pdf" },
        { label: "Social Housing Act", url: "/files/7Bylaw-7-Social-Housing-Act-Compliance.pdf" },
        { label: "Human Rights Bylaw", url: "/files/8Bylaw-8-Human-Rights.pdf" },
        { label: "Investment Bylaw", url: "/files/8Bylaw-8-Investment.pdf" },

      ] 
    },
    { 
      title: "Office Hours", 
      text: "Our office is open Monday, Tuesday, and Thursday from 12:00pm-4:00pm" },
    { 
      title: "Grocery Stores", 
      img: groceryStoresImg, 
      links: [
        { label: "Zehrs", url: "https://www.zehrs.ca" },
        { label: "Walmart", url: "https://www.walmart.ca" },
        { label: "Costco", url: "https://www.costco.ca" },
        { label: "Dollarama", url: "https://www.dollarama.ca" },
        { label: "Canadian Tire", url: "https://canadiantire.ca" },
        { label: "Shopper's Drugmart", url: "https://www.shoppersdrugmart.ca/" },
      ]
    },
    { 
      title: "Pharmacies", 
      img: pharmaciesImg,
      links: [
        { label: "Shopper's Drugmart Pharmacy", url: "https://mypharmacy.shoppersdrugmart.ca" },
        { label: "Walmart Pharmacy", url: "https://www.walmart.ca" },
        { label: "Costco Pharmacy", url: "https://www.costcopharmacy.ca" },
        { label: "Alphamed Pharmacy", url: "https://www.rxhealthmed.ca" },
      ] 
    },
    { 
      title: "Local Schools", 
      img: schoolsImg,
      links: [
        { label: "Vista Hills Public School", url: "https://vis.wrdsb.ca" },
        { label: "Edna Staebler Public School", url: "https://est.wrdsb.ca" },
        { label: "Laurel Heights Secondary School", url: "https://lhs.wrdsb.ca" },
        { label: "Waterloo Collegiate Institute", url: "https://wci.wrdsb.ca" },
      ]
     },
    { title: "Utilities", img: utilitiesImg },
    { title: "Work Orders", img: workOrdersImg },
    { title: "Board of Directors", img: boardImg },
    { title: "FAQs", img: faqsImg },
  ];

  return (
    <Container className="text-center mt-6">
      <div className="white-center"></div>
      <div className="ResourcesText">
        <img src={resourcesImg} alt="Resources" className="resources-text" />
      </div>

      <Row className="justify-content-center">
        {resources.map((res, index) => (
          <Col xs={12} sm={6} md={4} className="mb-5" key={index}>
            <Button
              className="resource-btn"
              onClick={() => handleShow(res.title, res.links, res.text)}
            >
              {res.title}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  {modalData.links && modalData.links.length > 0 ? (
    <ul>
      {modalData.links.map((link, i) => (
        <li key={i}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  ) : modalData.text ? (
    <p>{modalData.text}</p>
  ) : (
    <p>No information available.</p>
  )}
</Modal.Body>
      </Modal>
    </Container>
  );
}