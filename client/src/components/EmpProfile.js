import { Link } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, Button }from 'react-bootstrap';

export default function EmpProfile() {


  // useEffect( async() => {
    
  //   const response = await fetch('http://127.0.0.1:5000/emp/'+emp.emp_id+'/update', {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       // data
  //     }),
  //     headers: {
  //       'Content-Type': "application/json"
  //     }
  //   })
  // }, [])



//   const response = await fetch('http://127.0.0.1:5000/emp/'+emp.emp_id+'/update', {
//   method: "GET",
//   headers: {
//     'Content-Type': "application/json"
//   }
// })

const emp = JSON.parse(localStorage.getItem('emp'))


  const [name, setName] = useState(emp.emp.name)
  const [address, setAddress] = useState(emp.emp.address)
  const [contact, setContact] = useState(emp.emp.contact)
  const [email, setEmail] = useState(emp.emp.email)
  const pass_other = emp.emp.pass_other
  const emp_ids = emp.emp.emp_ids;

  useEffect(() => {
    console.log(name)
    console.log(emp.name)
    console.log(emp)
  })

  return (
    <div>
          <div className="list-group">
            <div className="d-flex w-90 list-group-item" aria-current="true">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Name : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{name}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Address :</span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{address}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Contact : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{contact}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Email : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{email}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Employee Id :</span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{emp_ids}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Password for other websites : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{pass_other}</span>
            </div>
          </div>
          <Link to={`/emp/${emp.emp._id}/edit`}>
          <button type="button" style={{"height":39, "margin-top":15, "margin-right":10}} className="btn btn-default btn-outline-dark" >Edit</button>
          </Link>
    </div>
  )
}
