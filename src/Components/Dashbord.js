import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const reportData = [
  { id: 1, title: 'Sales Report Q1', author: 'John Doe', date: '2023-01-15', content: 'This report covers sales data for the first quarter.' },
  { id: 2, title: 'Customer Feedback Report', author: 'Jane Smith', date: '2023-02-10', content: 'This report summarizes customer feedback from the last survey.' },
  { id: 3, title: 'Inventory Status Report', author: 'Alice Johnson', date: '2023-03-05', content: 'An overview of current inventory levels and shortages.' },
];

const Dashboard = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReportSelection = (report) => {
    setSelectedReport(report);
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={4}>
          <h4>Reports List</h4>
          <ListGroup>
            {reportData.map((report) => (
              <ListGroup.Item 
                key={report.id} 
                action 
                onClick={() => handleReportSelection(report)}
              >
                <strong>ID:</strong> {report.id} <br />
                <strong>Title:</strong> {report.title} <br />
                <strong>Author:</strong> {report.author} <br />
                <strong>Date:</strong> {report.date}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          <h4>Report Details</h4>
          {selectedReport ? (
            <Card>
              <Card.Header>{selectedReport.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>ID:</strong> {selectedReport.id} <br />
                  <strong>Author:</strong> {selectedReport.author} <br />
                  <strong>Date:</strong> {selectedReport.date} <br />
                  <strong>Content:</strong> {selectedReport.content}
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <p>Select a report to view details.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;