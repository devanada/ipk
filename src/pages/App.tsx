import { useLocation, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Markdown from "components/Markdown";
import Layout from "components/Layout";

import { useTitle } from "utils/useTitle";

function App() {
  let { pathname } = useLocation();
  let path: any = useLoaderData();
  const [markdown, setMarkdown] = useState<string>("");
  useTitle(path);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const markdownURL = pathname === "/" ? "README.md" : `${pathname}.md`;
    axios.get(markdownURL).then((res) => {
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
