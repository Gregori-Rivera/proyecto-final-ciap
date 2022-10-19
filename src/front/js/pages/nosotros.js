// Página nosotros de la app
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";
// import Chart from "../component/Chart.js";
//import Chart from "Chart.js";
import { Context } from "../store/appContext";
import { Line, Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

<Link to="/home">
<span className="btn btn-secondary btn-lg m-3" href="#" role="button">
  <FontAwesomeIcon icon={ faArrowLeft } />
</span>
</Link>