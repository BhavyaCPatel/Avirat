import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isFormValid) {
            handleClose();
        } else {
            alert('Enter Valid Data')
        }
    };

    const handleInputChange = (e) => {
        const isValid = e.target.value.trim() !== '';
        setIsFormValid(isValid);
    };

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
                <form className='my-3 mx-4' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder='Full Name' required onChange={handleInputChange}/>
                        <label for="Name" className="form-label">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder='E-mail' required onChange={handleInputChange}/>
                        <label for="Email" className="form-label">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="tel" className="form-control" placeholder='Phone Number' required onChange={handleInputChange}/>
                        <label for="PhoneNo." className="form-label">Phone Number</label>
                    </div>
                    <div className="row">
                        <div className="form-floating col mb-4">
                            <input type="date" className="form-control" placeholder='Travel Dates' required onChange={handleInputChange}/>
                            <label for="Travel Date" className="form-label">Travel Date</label>
                        </div>
                        <div className="form-floating col mb-4">
                            <input type="number" className="form-control" placeholder='Travel Count' required onChange={handleInputChange}/>
                            <label for="Travel Count" className="form-label">Travel Count</label>
                        </div>
                    <button type="submit" className="btn btn-warning btn-lg btn-block mb-5" disabled={!isFormValid}>Send</button>
                    </div>
                </form>
            </Modal>
        </>
    );  
}

export default Example;
