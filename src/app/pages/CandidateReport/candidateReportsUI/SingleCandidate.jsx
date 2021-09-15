import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { formatDate } from "../../../../Data/formatDate";
import "./singleCandidate.css";

const SingleCandidate = ({ candidate, reports }) => {
  console.log(reports);
  const img =
    "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png";
  return (
    <main>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={4} className="imgH">
            <Image src={img} alt="no img" fluid />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <p>Name:</p>
            <p className="leftM">{candidate.name}</p>
            <p>Email:</p>
            <p className="leftM">{candidate.email}</p>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <p>Date of birth:</p>
            <p className="leftM">{formatDate(candidate.birthday)}</p>
            <p>Education:</p>
            <p className="leftM">{candidate.education}</p>
          </Col>
        </Row>
        <Table className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Interview date</th>
              <th>Status</th>
            </tr>
            {reports.map((report, index) => {
                return(
                    <tr key={index}>
                        <th>{index+1}</th>
                        <th>{report.companyName}</th>
                        <th>{formatDate(report.interviewDate)}</th>
                        <th>{report.status} <button>Show modal</button></th>
                    </tr>
                )
            })}
          </thead>
        </Table>
      </Container>
    </main>
  );
};

export default SingleCandidate;