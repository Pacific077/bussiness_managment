import React from 'react'
import "./Maint.css"
const Maintainance = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-background"></div>
      <div className="maintenance-content">
        <div className="maintenance-icon">🛠️</div>
        <h1>Under Maintenance</h1>
        <p>This Page is Currently Under Maintenance</p>
      </div>
    </div>
  )
}

export default Maintainance