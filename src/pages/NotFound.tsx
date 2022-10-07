import Layout from "components/Layout";

import { useTitle } from "utils/useTitle";

function NotFound() {
  useTitle(":( - Learn FrontEnd");

  return (
    <Layout>
      <p>You are looking at the wrong place {":("}</p>
    </Layout>
  );
}

export default NotFound;
