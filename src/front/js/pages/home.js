// Página principal de la app
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Chart from "../component/Chart.js";
//import Chart from "Chart.js";
import { Context } from "../store/appContext";
import { Line, Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import logoDona from "../../img/donut-chart.png";
import { object, string } from "prop-types";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [chartDataDoughnut, setChartDataDoughnut] = useState({
    labels: [],
    datasets: [],
  });
  const [key, setKey] = useState("home");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const locale = "es";
  const [today, setDate] = React.useState(new Date());
  // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Esto crea un intervale que va ir actualizando cada minuto
      // Este trigger va rerenderizar cada componente que use el hook useDate
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Returna una funcion que limpia el timer
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `${(hour < 12 && "Buenos Días") || (hour < 17 && "Buenas Tardes") || "Buenas Noches"}, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  useEffect(() => {
    const fetchPrices = async () => {
      let productos = {};
      for (let i = 0; i < store.banks.length; i++) {
        if (productos[store.banks[i].producto] == undefined) {
          productos[store.banks[i].producto] = 1;
          console.log("estoy en el if");
        } else {
          console.log("estoy en el else");
          productos[store.banks[i].producto] =
            productos[store.banks[i].producto] + 1;
        }
      }

      let ambientes = {};
      for (let i = 0; i < store.banks.length; i++) {
        if (ambientes[store.banks[i].ambiente] == undefined) {
          ambientes[store.banks[i].ambiente] = 1;
          console.log("estoy en el if");
        } else {
          console.log("estoy en el else");
          ambientes[store.banks[i].ambiente] =
            ambientes[store.banks[i].ambiente] + 1;
        }
      }

      setChartDataDoughnut({
        labels: Object.keys(ambientes),
        datasets: [
          {
            label: "",
            data: Object.values(ambientes),
            backgroundColor: [
            "#1870d5",
            "#E74C3C",
            "#28B463",
            "#F8D529"],
          },
        ],
      });

      setChartData({
        labels: Object.keys(productos),
        datasets: [
          {
            label: "borrame",
            data: Object.values(productos),
            backgroundColor: [
              "#1870d5",
              "#E74C3C",
              "#28B463",
              "#F8D529"],
          },
        ],
      });
    };
    fetchPrices();
  }, [store.banks]);

  return (
    <div className="container">
      <div className="m-1 d-flex align-items-center">
        <a
          className="btn btn-warning"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <FontAwesomeIcon className="fs-2" icon={faBars} />
        </a>
        <span className="d-flex fs-3 mx-3">
          {date}
          {time}
          <pre> </pre>
          {wish} Bienvenido a G.I.B
        </span>
        <div className="d-flex"></div>
      </div>

      <div className="Graficando">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 d-flex justify-content-center"
      >
        <Tab eventKey="home" 
        title={<img src={logoDona} height="35px"/>}>
        <div className="bg-light fs-1 d-flex justify-content-center">
        <div
          className="barchart"
          style={{ zIndex: "1", height: "700px", width: "700px" }}
        >
          <Doughnut
            data={chartDataDoughnut}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div
          className="fs-1 m-auto d-flex justify-content-center align-items-center"
          style={{
            zIndex: "2",
            position: "absolute",
            height: "700px",
            width: "700px",
            animation: "fadeMe 2.5s ease-out",
            animationFillMode: "forwards",
          }}
        >
          <span>Cargando gráfica...</span>
        </div>
      </div>
        </Tab>
        <Tab eventKey="profile" 
        title={<FontAwesomeIcon className="fs-2" icon={faChartPie} />}>
        <div className="bg-light fs-1 d-flex justify-content-center">
        <div
          className="piechart"
          style={{ zIndex: "1", height: "700px", width: "700px" }}
        >
          <Pie
            data={chartData}
            options={{ maintainAspectRatio: false, labels: { fontSize: 0 } }}
          />
        </div>
        <div
          className="fs-1 m-auto d-flex justify-content-center align-items-center"
          style={{
            zIndex: "2",
            position: "absolute",
            height: "700px",
            width: "700px",
            animation: "fadeMe 2.5s ease-out",
            animationFillMode: "forwards",
          }}
        >
          <span>Cargando gráfica...</span>
        </div>
      </div>
        </Tab>
      </Tabs>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fs-2" id="offcanvasExampleLabel">
            Opciones
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group list-group-flush">
            {store.nav_items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-start align-items-center"
                  style={{ background: item.background }}
                >
                  <div className="iconBox d-flex justify-content-center">
                    {index === 0 ? (
                      <FontAwesomeIcon
                        className="fs-2 mx-auto"
                        icon={faFileAlt}
                      />
                    ) : index === 1 ? (
                      <FontAwesomeIcon
                        className="fs-2 mx-auto"
                        icon={faFileImport}
                      />
                    ) : index === 2 ? (
                      <FontAwesomeIcon
                        className="fs-2 mx-auto"
                        icon={faFileExcel}
                      />
                    ) : index === 3 ? (
                      <FontAwesomeIcon
                        className="fs-2 mx-auto"
                        icon={faFileSignature}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="fs-2 mx-auto"
                        icon={faChartPie}
                      />
                    )}
                  </div>
                  <Link to={item.link}>
                    <button className="btn btn-warning sidebarButtons">
                      {item.title}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="m-4 d-flex align-items-center">
          <FontAwesomeIcon
            className="text-danger fs-2 me-2"
            icon={faToggleOff}
          />
          <Link to="/">
            <button className="btn btn-danger fs-5 mx-auto">
              Cerrar Sesión
            </button>
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};
