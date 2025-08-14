import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

// Example image imports (replace with your actual paths)
import bylawsImg from "./images/bylaws.jpg";
import officeHoursImg from "./images/OfficeHours.png";
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
  const [modalData, setModalData] = useState({ title: "", img: "" });

  const handleClose = () => setShow(false);
  const handleShow = (title, img) => {
    setModalData({ title, img });
    setShow(true);
  };

  const resources = [
    { title: "By-Laws", img: bylawsImg },
    { title: "Office Hours", img: officeHoursImg },
    { title: "Grocery Stores", img: groceryStoresImg },
    { title: "Pharmacies", img: pharmaciesImg },
    { title: "Local Schools", img: schoolsImg },
    { title: "Utilities", img: utilitiesImg },
    { title: "Work Orders", img: workOrdersImg },
    { title: "Board of Directors", img: boardImg },
    { title: "FAQs", img: faqsImg },
  ];

    return (
    <Container className="text-center mt-6">
      <div className="white-center">
      </div>
      <div className="ResourcesText">
          <img src={resourcesImg}  alt="Resources" className="resources-text" />
        </div>
      <Row className="justify-content-center">
        {resources.map((res, index) => (
          <Col xs={12} sm={6} md={4} className="mb-5" key={index}>
            <Button
              className="resource-btn"
              onClick={() => handleShow(res.title, res.img)}
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
          <img
            src={modalData.img}
            alt={modalData.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}