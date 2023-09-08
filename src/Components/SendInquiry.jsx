import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow} className='mx-3'>
        Send Inquiry
      </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Connect with Our Tour Expert</Modal.Title>
            </Modal.Header>
            <form>
                <div className="mb-3">
                    <label for="Name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder='Your Name'/>
                </div>
                <div className="mb-3">
                    <label for="Email1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='Your Email'/>
                </div>
                <div className="mb-3">
                    <label for="PhoneNo." className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" placeholder='Phone'/>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label for="Travel Date" className="form-label">Travel Date</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col mb-3">
                        <label for="Travel Count" className="form-label">Travel Count</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-warning btn-lg btn-block" onClick={handleClose}>Send</button>
                </div>
            </form>
        </Modal>
    </>
  );
}

export default Example;