import React, { Children, useState, useEffect, useMediaQuery } from "react";
import { NavLink } from "react-router-dom";
import bar from "../icons/bar.svg";
import delivery_radius from "../icons/delivery_radius_icon.svg";
import history from "../icons/history_icon.svg";
import menu from "../icons/menu_icon.svg";
import orders from "../icons/orders_icon.svg";
import settings from "../icons/settings_icon.svg";
import statistics from "../icons/statistics_icon.svg";
import mini_logo from "../icons/mini_logo.svg";
import profilePicture from "../icons/profilePicture.svg";
import { Container, Row, Nav, Navbar, Form } from "react-bootstrap";
import "./sidebar.css";

const Sidebar = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth > 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItem = [
    {
      path: "/",
      name: "Статистика",
      icon: <img className="stat" src={statistics} />,
    },
    {
      path: "/menu",
      name: "Меню",
      icon: <img src={menu} />,
    },
    {
      path: "/orders",
      name: "Заказы",
      icon: <img src={orders} />,
    },
    {
      path: "/delivery_radius",
      name: "Радиус доставки",
      icon: <img src={delivery_radius} />,
    },
    {
      path: "/history",
      name: "История",
      icon: <img src={history} />,
    },
    {
      path: "/settings",
      name: "Настройка",
      icon: <img src={settings} />,
    },
  ];
  return (
    <Container fluid>
      <Row>
        {!isMobile && (
          <Navbar bg="light" expand="lg">
            <Container>
              <img className="mini_logo" src={mini_logo} alt="" />
              <h3 className="logo">KCHRMARKET.RU</h3>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <div className="profile">
                  <img className="profilePicture" src={profilePicture} alt="" />
                  <h4>Алексей Гаврилов</h4>
                  <h5>alexgeov@mail.com</h5>
                </div>
                <h7 className="Menu_h7">Меню</h7>
                {menuItem.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="link"
                    activeclassName="active"
                  >
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                  </NavLink>
                ))}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
        <div style={{ display: "flex" }}>
          {isMobile && (
            <div className="sidebar">
              <div className="top_section">
                <img className="mini_logo" src={mini_logo} alt="" />
                <h3 className="logo">KCHRMARKET.RU</h3>
                <div className="bars">
                  <img src={bar} alt="" />
                </div>
              </div>
              <div className="footer">
                <div className="profile">
                  <img className="profilePicture" src={profilePicture} alt="" />
                  <h4>Алексей Гаврилов</h4>
                  <h5>alexgeov@mail.com</h5>
                </div>
                <h7 className="Menu_h7">Меню</h7>
                {menuItem.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="link"
                    activeclassName="active"
                  >
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
          <div className="children">
            <Form.Select size="sm" style={{maxWidth: '252px', float: 'right'}}>
              <option>Uzden Ash Карачаевск</option>
            </Form.Select>
            {children}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Sidebar;
