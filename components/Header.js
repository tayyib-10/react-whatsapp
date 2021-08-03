import React from 'react';
import "../css/header.css"

export default function Header() {
  return (
    <div id="header">
    <div id="logo">
      <span><img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Whatsapp.webp" alt="" id="logo__image"/></span>
      <p id="logo__text">WhatsApp</p>
    </div>
    
    <div id="links">
      <p id="links__text">WHATSAPP WEB</p>
      <p id="links__text">FEATURES</p>
      <p id="links__text">SECURITY</p>
      <p id="links__text">DOWNLOAD</p>
      <p id="links__text">HELP CENTER</p>
    </div>
  </div>
  )
}
