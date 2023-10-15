import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const VerticalFormModal = (props) => {
  const { show, onHide, courseData } = props;

  console.log('masuk modal');
  console.log('data:', courseData);

  // const [form, setForm] = useState({
  //   name: "",
  //   desc: courseData.desc,
  //   image: "",
  //   price: 0,
  //   label: ""
  // });
  const [errorEdit, setErrorEdit] = useState(null);

  const namaBaruRef = useRef(courseData.name);
  const descBaruRef = useRef(courseData.desc);
  const imageBaruRef = useRef(courseData.image);
  const priceBaruRef = useRef(courseData.price);
  const labelBaruRef = useRef(courseData.label);

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('client');
      // console.log('form:', form);
      console.log('nama baur ref:', namaBaruRef.current.value);
      const response = await axios({
        method: "PUT",
        url: `http://localhost:3000/api/courses/update/${courseData.id}`,
        // courseRouter.put('/update/:id', CourseController.editCourse);
        data: { 
          name: namaBaruRef.current.value,
          desc: descBaruRef.current.value,
          image: imageBaruRef.current.value,
          price: priceBaruRef.current.value,
          label: labelBaruRef.current.value
        }
      });

      console.log('response:', response);

      // console.log(response.data.message);
      setErrorEdit(response.data.message);
      window.location.reload();

      // return <Navigate to="/" replace={true} />
    } catch (error) {
      console.log('error:', error);
      setErrorEdit(error.response.data.message);
    } 
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      scrollable
      animation="true"
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter' className='studentdb-body-top'>
          Edit Course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Course Name</Form.Label>
            <Form.Control type="text" name="name" defaultValue={courseData.name} ref={namaBaruRef}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="desc">Course Description</Form.Label>
            <Form.Control type="text" name="desc" defaultValue={courseData.desc} ref={descBaruRef}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="image">Course Image</Form.Label>
            <Form.Control type="text" name="image" defaultValue={courseData.image} ref={imageBaruRef}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="price">Course Price</Form.Label>
            <Form.Control type="number" min="1" name="price" defaultValue={courseData.price} ref={priceBaruRef}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="label">Course Label</Form.Label>
            <Form.Select name="label" defaultValue={courseData.label} ref={labelBaruRef}>
              <option value="Math and Logic">Math and Logic</option>
              <option value="Data Science">Data Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Computer Science">Computer Science</option>
            </Form.Select>
          </Form.Group>

          {errorEdit && <Form.Label>{errorEdit}</Form.Label>} {/* <div className="registerpage-error">{errorEdit}</div> */}

          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group> */}
        </Form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" type='submit' onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalFormModal;