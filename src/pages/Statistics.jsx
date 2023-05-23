import { useState, useEffect } from "react";
import "../styles/main.css";
import { Container, Row, Col } from "react-bootstrap";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import OrdersChart from "./charts/OrdersChart";
import Card from "react-bootstrap/Card";
import MoneyChart from "./charts/MoneyChart";
import Cheque from "./charts/Cheque";
import Photos from "./charts/Photos";
import Products from "./charts/Products";

const Statistics = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth > 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="page">
      <Container fluid>
        <>
          <div
            className="header"
            style={{ marginBottom: isMobile ? "40px" : "10px" }}
          >
            <h1>Статистика</h1>
          </div>
          <div
            style={{
              display: isMobile ? "flex" : "block",
              marginBottom: "31px",
            }}
          >
            <h4 style={{ marginRight: "40px" }}>Период</h4>
            <DateRangePicker
              startDate={startDate}
              startDateId="s_id"
              endDate={endDate}
              endDateId="e_id"
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              focusedInput={focusedInput}
              onFocusChange={(e) => setFocusedInput(e)}
              displayFormat="DD/MM/YYYY"
            />
          </div>
        </>
        <Row>
          <Col lg="6" md='12' sm='12' xs='11' className="mb-3">
            <Card>
              <Card.Body>
                <Card.Text>
                  <h5>Заказы</h5>
                </Card.Text>
              </Card.Body>
              <OrdersChart />
            </Card>
          </Col>
          <Col lg="6" md='12' sm='12' xs='11' className="mb-3">
            <Card>
              <Card.Body>
                <Card.Text>
                  <h5>Выручка</h5>
                </Card.Text>
              </Card.Body>
              <MoneyChart/>
            </Card>
          </Col>
          <Col lg="6" md='12' sm='12' xs='11' className="mb-3">
            <Card>
              <Card.Body>
                <Card.Text>
                  <h5>Заказы</h5>
                </Card.Text>
              </Card.Body>
              <Cheque/>
            </Card>
          </Col>
          <Col lg="4" md='6' sm='12' xs='11' className="mb-3 diagram">
            <Card>
              <Card.Body>
                <Card.Text>
                  <h5>Фотографии</h5>
                </Card.Text>
              </Card.Body>
              <Photos/>
            </Card>
          </Col>
          <Col lg="4" md='6' sm='12' xs='11' className="mb-3">
            <Card>
              <Card.Body>
                <Card.Text>
                  <h5>Наличие товаров</h5>
                </Card.Text>
              </Card.Body>
              <Products/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;
