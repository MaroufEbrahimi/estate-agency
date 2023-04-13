import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import "./assets/fonts/font-awesome/css/font-awesome.min.css"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App />)
