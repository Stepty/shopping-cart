import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-padding">
          <div className="footer-links">

            <div className="footer-link">
              <h3>Home</h3>
            </div>

            <div className="footer-link">
              <h3>Contact</h3>
            </div>

            <div className="footer-link">
              <h3>Shop</h3>
            </div>

            <div className="footer-link">
              <h3>Social Meida</h3>
            </div>

          </div>

          <hr></hr>

          <div className="footer-below">
            <div className="footer-copyright">
              <p>
                @{new Date().getFullYear()} Shop-A-Lot. All rights reserved.
              </p>
            </div>
            <div className="footer-terms">
              <p>Terms & conditions</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>
        </div>
    </div>
  )
}
