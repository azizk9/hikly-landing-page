import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // أضف .jsx للتأكد من المسار
import "./index.css"; // تأكد من وجود هذا الملف أو حذفه إذا كنت تعتمد فقط على global.css
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);