import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function EmpHome() {
  const [orders, setOrders] = useState([])

  const emp = JSON.parse(localStorage.getItem('emp'))
  const emp_ids = emp.emp.emp_ids

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/emp/${emp_ids}/users`).then(res => res.json()).then(data => {
      setOrders(data)

    })
  }, [])

  return (
    <div className='emphome'>
      {orders.map(order => {
        return (
          <Link style={{"textDecoration":"none"}} to={`/emp/user/${order.user_id}`} key={order._id}>
            
            <div>
            <div className="list-group" style={{"margin-top":20}}>
            <div className="list-group-item list-group-item-action " aria-current="true">
                <h5 className="mb-1" style={{ "padding":10}}>{order.user_id}</h5>
            </div>
            
          </div>
          
    </div>

          </Link>
        )
      })}
    </div>
  )
}

