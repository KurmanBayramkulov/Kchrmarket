import { Container} from "react-bootstrap";
import "../styles/main.css";


const Menu = () => {
  return (
    <div className="page">
      <Container fluid>
        <>
          <div className="header">
            <h1>Меню</h1>
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "31px",
            }}
          ></div>
        </>
      </Container>
    </div>
  );
};

export default Menu;
