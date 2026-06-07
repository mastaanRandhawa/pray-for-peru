import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const PeruMinistryPage = lazy(() => import("@/pages/PeruMinistryPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const TestimoniesPage = lazy(() => import("@/pages/TestimoniesPage"));
const TimelinePage = lazy(() => import("@/pages/TimelinePage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-muted-foreground">
      Loading...
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="peru-ministry" element={<PeruMinistryPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="testimonies" element={<TestimoniesPage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
