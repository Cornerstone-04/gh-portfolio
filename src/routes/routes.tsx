import { LandingPage } from "@/pages/landing";
import { ProjectPage } from "@/pages/project";
import { ProjectsPage } from "@/pages/projects";
import { BrowserRouter as Router, Routes, Route } from "react-router";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects">
          <Route index element={<ProjectsPage />} />
          <Route path="/projects:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
