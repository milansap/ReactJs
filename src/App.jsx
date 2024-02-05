import "./App.css";

import Layout from "./components/Layout";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("Home");
  return (
    <div>
      <Layout setContent={setContent}>
        <Content content={content} />
      </Layout>
    </div>
  );
}

export default App;
