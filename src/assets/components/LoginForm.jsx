import React from "react";
import { Form, Button } from "react-bootstrap";
import "../css/LoginForm.css";

export const LoginForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label className="form-label">Email</Form.Label>
        <Form.Control
          className="form-input"
          type="email"
          placeholder="Contoh: wibu@nutaku.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label className="form-label">Password</Form.Label>
        <Form.Control
          className="form-input"
          type="password"
          placeholder="6+ karakter"
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" className="form-button">
          Sign In
        </Button>
      </div>
    </Form>
  );
};
