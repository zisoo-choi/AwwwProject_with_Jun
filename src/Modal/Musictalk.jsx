import React from 'react';
import {Modal, Button,Form, Container} from 'react-bootstrap'

const Musictalk = ({show,onHide}) => {
    return (
        <Modal
     show={show}
     onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    > <Container>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          MusicTalk
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button block variant="info" type="submit">
        Submit
      </Button>
    </Form>
      </Modal.Body>
      
      </Container>
    </Modal>
    );
};

export default Musictalk;