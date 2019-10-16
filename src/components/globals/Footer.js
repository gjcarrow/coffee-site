import React from 'react';

export default function Footer() {
  const x = new Date()
    return (
    <footer className="footer container">
      <div className="columns">
        <div className="column">
          <div className="content has-text-centered">
            <p> 
                <strong>Joe's Coffee All Rights Reserved &copy; {x.getFullYear()}</strong> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}