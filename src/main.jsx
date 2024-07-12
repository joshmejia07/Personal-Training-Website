import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/momntm">
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
)
