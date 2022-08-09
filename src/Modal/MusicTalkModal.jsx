import React from 'react';
import {Modal, Button,Form, Container} from 'react-bootstrap'
import {ModalTitle,
ModalBtn,
ModalWriteTitle} from '../Modal/ModalStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMusic
} from '@fortawesome/free-solid-svg-icons';
import '../Modal/ModalStyle.css'

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
      
      
      
      <Form.Group className="mb-3" >
      <ModalTitle><Form.Label>제목</Form.Label></ModalTitle>
      <ModalBtn>
      <Button  variant="info" type="submit"  >
        작성 완료
      </Button>
      </ModalBtn>
      
        <Form.Control type="text" placeholder="제목을 입력하세요" />
      
      </Form.Group>
      
      
      
     
      <Form.Group className="mb-3" >
        <Form.Label>내용</Form.Label>
       
      </Form.Group>
      <Form.Group className="mb-3" >
        
      </Form.Group>
     
    </Form>
    <input  type="text" placeholder="내용을 입력하세요" />
    <hr/>
    <FontAwesomeIcon icon={faMusic} />
      </Modal.Body>
      
      </Container>
    </Modal>
    );
};

export default Musictalk;