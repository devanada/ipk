import { useState, useEffect } from "react";
import axios from "axios";

import Markdown from "components/Markdown";
import Layout from "components/Layout";

import { useTitle } from "utils/useTitle";

function Redux() {
  const [markdown, setMarkdown] = useState<string>("");
  useTitle("React - Redux | Learn FrontEnd");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("react/global-state/redux.md").then((res) => {
      setMarkdown(res.data);
    });
  };

  return (
    <Layout>
      <Markdown children={markdown} />
    </Layout>
  );
}

export default Redux;
