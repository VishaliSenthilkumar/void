import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
            <h3>404</h3>
            <h3>PAGE NOT FOUND</h3>
            <Link to='/'>click to go to the home page</Link>
        </div>
     );
}
