import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { SecurityPage } from "./pages/SecurityPage";
import { DocsPage } from "./pages/DocsPage";
import { BlogPage } from "./pages/BlogPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
