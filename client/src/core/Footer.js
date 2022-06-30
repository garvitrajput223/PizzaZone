import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white p-2 container-fluid" id="#footer">
      <div className="container text-center">
        <br />
        Copyright &copy; {new Date().getFullYear()}{" "}@PizzaZone 
        <i className="india flag"></i>
      </div>
    </footer>
  );
}
