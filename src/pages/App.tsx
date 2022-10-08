import { useLocation, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Markdown from "components/Markdown";
import Layout from "components/Layout";

import { useTitle } from "utils/useTitle";

function App() {
  let { pathname, hash } = useLocation();
  let path: any = useLoaderData();
  const [markdown, setMarkdown] = useState<string>("");
  useTitle(path);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    markdown.length !== 0 && scrollToElement();
  }, [markdown]);

  const fetchData = () => {
    const markdownURL = pathname === "/" ? "README.md" : `${pathname}.md`;
    axios.get(markdownURL).then((res) => {
      setMarkdown(res.data);
    });
  };

  const scrollToElement = () => {
    if (hash.length > 0) {
      const removeHash = hash.slice(1);
      const getElement = document.getElementById(
        removeHash
      ) as HTMLDivElement | null;
      getElement?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Markdown children={markdown} />
    </Layout>
  );
}

export default App;
