import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import Iot from "./pages/domains/Iot";
import Medical from "./pages/domains/Medical";
import Automotive from "./pages/domains/Automotive";
import Soc from "./pages/domains/Soc";
import Hardware from "./pages/domains/Hardware";
import Testing from "./pages/domains/Testing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/domains/iot" element={<Iot />} />
          <Route path="/domains/medical" element={<Medical />} />
          <Route path="/domains/automotive" element={<Automotive />} />
          <Route path="/domains/soc" element={<Soc />} />
          <Route path="/domains/hardware" element={<Hardware />} />
          <Route path="/domains/testing" element={<Testing />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
