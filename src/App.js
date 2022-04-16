import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Atividade02/Home";
import About from "./components/Atividade02/About";

import CreateStudent from "./components/Atividade02/crud/students/CreateStudent";
import ListStudent from "./components/Atividade02/crud/students/ListStudent";
import EditStudent from "./components/Atividade02/crud/students/EditStudent";

import Page1 from "./components/Atividade02/Page1";
import Page2 from "./components/Atividade02/Page2";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div
          className="collapse navbar-collapse container-fluid"
          id="navbarSupportedContent"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle navbar-brand"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
            >
              Aluno
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="CreateStudent">
                  CreateStudent
                  <Link to="./CreateStudent" className="nav-link">
                    Create Student
                  </Link>
                </a>
              </li>
            </ul>
          </li>
          <ul className="navbar-nav mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <li className="navitem navbar-dark">
              <Link to="./CreateStudent" className="nav-link">
                Create Student
              </Link>
            </li>
            <li className="navitem">
              <Link to="/listStudent" className="nav-link">
                List Student
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="CreateStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
