import { useState, useEffect } from "react";
import axios from "axios";

import Markdown from "components/Markdown";
import Layout from "components/Layout";

import { useTitle } from "utils/useTitle";

function App() {
  const [markdown, setMarkdown] = useState<string>("");
  useTitle("Home - Learn FrontEnd");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("README.md").then((res) => {
      setMarkdown(res.data);
    });
  };

  return (
    <Layout>
      <Markdown children={markdown} />
    </Layout>
  );
}

export default App;
