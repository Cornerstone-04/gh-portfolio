import { Layout } from "@/components/layout/layout";
import { useParams } from "react-router";

export const ProjectPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <h1>Project {id}</h1>
    </Layout>
  );
};
