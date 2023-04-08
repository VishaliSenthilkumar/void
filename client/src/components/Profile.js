import { Link } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

export default function Profile() {


  // useEffect( async() => {
    
  //   const response = await fetch('http://127.0.0.1:5000/user/'+user.user_id+'/update', {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       // data
  //     }),
  //     headers: {
  //       'Content-Type': "application/json"
  //     }
  //   })
  // }, [])



//   const response = await fetch('http://127.0.0.1:5000/user/'+user.user_id+'/update', {
//   method: "GET",
//   headers: {
//     'Content-Type': "application/json"
//   }
// })

const user = JSON.parse(localStorage.getItem('user'))


  const name = user.user.name
  const address = user.user.address
  const contact = user.user.contact
  const email = user.user.email
  const date = user.user.date
  const enable = user.user.enable
  const user_id = user.user.user_id

  useEffect(() => {
    console.log(name)
    console.log(user.name)
    console.log(user)
  })

  return (
    <div className="text-center w-50"
    style={{
      margin: "auto",
    }}>
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
                <span style={{ "padding":10}} className="mb-1 fw-bold">User Id :</span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{user_id}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Date : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{date}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Check defect : </span>
                <span style={{ "padding":10}} className="mb-1">{enable ? "yes" : "no"}</span>
            </div>
          </div>
          <Link to={`/user/${user.user._id}/edit`}>
          <button type="button" style={{"height":39, "margin-top":15, "margin-right":10}} className="btn btn-default btn-outline-dark" >Edit</button>
          </Link>
    </div>
  )
}

