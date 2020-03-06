import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import EditProfileForm from './EditProfileForm'

const EditModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
 
  return (
    <div>
      <Button style={{background: "#6BC6ED", borderRadius: "50%", width: "55px", height: "55px", border: "none", margin: "-50px 0px 0px 20px"}} onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit User Profile</ModalHeader>
        <EditProfileForm />
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;