import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";

function Placeholder() {
  return <div className="py-6">TODO: Placeholders</div>;
}
function Placeholder2() {
  return <div className="py-6">TODO: Članovi (Sections)</div>;
}
function Templates() {
  return <div className="py-6">TODO: Predlošci</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placeholders" element={<Placeholder />} />
          <Route path="/placeholders2" element={<Placeholder2 />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
