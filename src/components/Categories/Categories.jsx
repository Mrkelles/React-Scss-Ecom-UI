import React from 'react'
import "./Categories.scss"
import{Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src='https://images.unsplash.com/photo-1503342250614-ca440786f637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='' />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
        <img src='https://images.unsplash.com/photo-1580991584164-a4e12c31521d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='' />
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src='https://images.unsplash.com/photo-1555085506-82b8d30d8380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='' />
          <button>
            <Link className="link" to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
      <div className="row">
        <div className="col">
        <div className="row">
        <img src='https://images.unsplash.com/photo-1623975522547-3d7ad176973e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80' alt='' />
          <button>
            <Link className="link" to="/products/1">Men</Link>
          </button>
        </div>
        </div>
        <div className="col">
          <div className="row">
          <img src='https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=361&q=80' alt='' />
          <button>
            <Link className="link" to="/products/1">Accessories</Link>
          </button>
          </div>
        </div>
      </div>
      <div className="row">
      <img src='https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80' alt='' />
          <button>
            <Link className="link" to="/products/1">Shoes</Link>
          </button>
      </div>
      </div>
    </div>
  )
}

export default Categories