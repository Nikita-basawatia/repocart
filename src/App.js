import "./styles.css";
import Shop from "./Shop";
import OrderSummary from "./OrderSummary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
}
