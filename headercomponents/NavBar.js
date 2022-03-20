import NavBarCSS from "/headercomponents/NavBar.css";
import React, { useState, useEffect } from "react";

export default function Nav() {
  return (
    <div class="navbar row" style={NavBarCSS}>
      <ul class="nav-list one row">
        <li class="nav-item">
          <a href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a href="#">DONATE</a>
        </li>
      </ul>

      <ul class="nav-list two row">
        <li class="nav-item">
          <a href="#">SIGN IN</a>
        </li>
        <li class="nav-item bg">
          <a href="#">SIGN UP</a>
        </li>
      </ul>
    </div>
  );
}
