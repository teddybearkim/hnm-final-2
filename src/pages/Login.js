import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth, page }) => {

  const navigate = useNavigate();

  return (
    <div className="login-page">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setAuth(true)
          if (page) {
            navigate(page)
          } else {
            navigate('/')
          }
        }}
      >
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            아이디(email)
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="email" placeholder="이메일 주소를 입력하세요" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={3}>
            비밀번호
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
          </Col>
        </Form.Group>



        <Form.Group as={Row} className="mt-4">
          <Col sm={{ span: 10, offset: 3 }}>
            <Button variant="danger" type="submit">로그인</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;