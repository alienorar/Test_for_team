import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { About, Home, News, NotFound, Portfolio } from "@modules";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
