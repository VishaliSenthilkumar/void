import { selectClasses } from "@mui/material";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EmpUserOrder() {

  const [eorder, setEorder] = useState([]);
  const [norder, setNorder] = useState([]);
  const [user, setUser] = useState([]);
  const [val,setVal] = useState(false)
  const arr = ["not picked","received","checked","packed","delivered","defect"]

  const { id } = useParams();
  const user_id = id;

  const handleStatusChange1 = async(id, status) => {
    setVal(!val)
    const response = await fetch(`http://127.0.0.1:5000/norder/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        status
      }),
      headers: {
        'Content-Type': "application/json"
      }
    })
    console.log(response)
    const json = await response.json()
  }

  const HandleDelete1 = async(id) => {
    setVal(!val)
    console.log(id)
    const response = await fetch(`http://127.0.0.1:5000/norder/${id}`, {
      method: "DELETE"
    })
    console.log(response)
    const json = await response.json()
  }

  const handleStatusChange2 = async(id, status) => {
    setVal(!val)
    const response = await fetch(`http://127.0.0.1:5000/eorder/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        status
      }),
      headers: {
        'Content-Type': "application/json"
      }
    })
    console.log(response)
    const json = await response.json()
  }

  const HandleDelete2 = async(id) => {
    setVal(!val)
    console.log(id)
    const response = await fetch(`http://127.0.0.1:5000/eorder/${id}`, {
      method: "DELETE"
    })
    console.log(response)
    const json = await response.json()
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch(`http://127.0.0.1:5000/user/userid/${user_id}`);
        const userJson = await userRes.json();
        const userVal = userJson.user;
        setUser(userVal);
        console.log(userJson)
        const eorderRes = await fetch(
          `http://127.0.0.1:5000/user/${user_id}/eorder`
        );
        const eorderJson = await eorderRes.json();
        setEorder(eorderJson);
        const norderRes = await fetch(
          `http://127.0.0.1:5000/user/${user_id}/norder`
        );
        const norderJson = await norderRes.json();
        setNorder(norderJson);
        console.log(user, eorder, norder);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [val]);

  return (
    <div>
      {console.log(user,eorder,norder)}

    <div>
      {user.map((order) => {
        return (
          <div key={order._id}>
            <h2>User Information</h2>
            <div className="list-group">
            <div className="d-flex w-90 list-group-item" aria-current="true">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Name : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{order.name}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Address :</span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{order.address}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Contact : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{order.contact}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Email :</span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{order.email}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Date : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{order.date}</span>
            </div>
            <div className="d-flex w-90 list-group-item">
                <span style={{ "padding":10}} className="mb-1 fw-bold">Check defect : </span>
              <span style={{ "padding":10}} className="mb-1 mx-2">{order.enable ? "yes" : "no"}</span>
            </div>
          </div>
            
      </div>
      )
      })}
    </div>

<br></br>

    <div>
    <h2>Orders : </h2>

      {norder.map((order) => {
        return (
          <div key={order._id}>
            
            <div>
            <div className="list-group" style={{"padding":5}}>
            <div className="list-group-item list-group-item-action " aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1" style={{"margin-top":10, "padding":10}}>{order.order_id}</h5>
                <div className="d-flex w-50 justify-content-center">
                <div class="input-group mb-3">
                <select
                  className="btn btn-outline-dark custom-select"
                  id="status"
                  style={{"margin-top":15}}
                  onChange={(event) => handleStatusChange1(order._id, event.target.value)}
                >
                  <option className="dropdown-item " value={order.status}>{order.status}</option>
                  <option className="dropdown-item " value={arr[0]}>{arr[0]}</option>
                  <option className="dropdown-item " value={arr[1]}>{arr[1]}</option>
                  <option className="dropdown-item " value={arr[2]}>{arr[2]}</option>
                  <option className="dropdown-item " value={arr[3]}>{arr[3]}</option>
                  <option className="dropdown-item " value={arr[4]}>{arr[4]}</option>
                  <option className="dropdown-item " value={arr[5]}>{arr[5]}</option>
                </select>
                </div>
                <button type="button" style={{"height":39, "margin-top":15, "margin-right":10}} className="btn btn-default btn-outline-danger" onClick={() => HandleDelete1(order._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      })}
    </div>

<br></br>

    <div>
    <h2>Emergency Orders : </h2>
      {eorder.map((order) => {
        return (
          <div key={order._id}>
            
            <div>
            <div className="list-group" style={{"padding":5}}>
            <div className="list-group-item list-group-item-action " aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1" style={{"margin-top":10, "padding":10}}>{order.order_id}</h5>
                <div className="d-flex w-50 justify-content-center">
                  <div class="input-group mb-3">
                  <select
                    className="btn btn-outline-dark custom-select"
                    id="status"
                    style={{"margin-top":15}}
                    onChange={(event) => handleStatusChange2(order._id, event.target.value)}
                  >
                    <option className="dropdown-item " value={order.status}>{order.status}</option>
                    <option className="dropdown-item " value={arr[0]}>{arr[0]}</option>
                    <option className="dropdown-item " value={arr[1]}>{arr[1]}</option>
                    <option className="dropdown-item " value={arr[2]}>{arr[2]}</option>
                    <option className="dropdown-item " value={arr[3]}>{arr[3]}</option>
                    <option className="dropdown-item " value={arr[4]}>{arr[4]}</option>
                    <option className="dropdown-item " value={arr[5]}>{arr[5]}</option>
                  </select>
                  </div>
                  <button type="button" style={{"height":39, "margin-top":15, "margin-right":10}} className="btn btn-outline-danger" onClick={() => HandleDelete2(order._id)}>Delete</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      })}
    </div>
      
    </div>
  );
}
