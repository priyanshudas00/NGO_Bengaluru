import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Foundation pages
import FoundationLayout from "./components/foundation/FoundationLayout";
import FoundationHome from "./pages/foundation/FoundationHome";
import FoundationAbout from "./pages/foundation/FoundationAbout";
import Programs from "./pages/foundation/Programs";
import FoundationImpact from "./pages/foundation/FoundationImpact";
import Help from "./pages/foundation/Help";
import Transparency from "./pages/foundation/Transparency";
import FoundationContact from "./pages/foundation/FoundationContact";

// Admin page
import Admin from "./pages/Admin";
import AdminSetup from "./components/AdminSetup";

// Gallery page
import Gallery from "./pages/Gallery";

// School pages
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Needs from "./pages/Needs";
import Teachers from "./pages/Teachers";
import Future from "./pages/Future";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Foundation Routes (Main Site) */}
          <Route path="/" element={<FoundationLayout><FoundationHome /></FoundationLayout>} />
          <Route path="/about" element={<FoundationLayout><FoundationAbout /></FoundationLayout>} />
          <Route path="/programs" element={<FoundationLayout><Programs /></FoundationLayout>} />
          <Route path="/impact" element={<FoundationLayout><FoundationImpact /></FoundationLayout>} />
          <Route path="/help" element={<FoundationLayout><Help /></FoundationLayout>} />
          <Route path="/transparency" element={<FoundationLayout><Transparency /></FoundationLayout>} />
          <Route path="/contact" element={<FoundationLayout><FoundationContact /></FoundationLayout>} />
          
          {/* School Routes (Sub-section at /school) */}
          <Route path="/school" element={<Layout><Home /></Layout>} />
          <Route path="/school/about" element={<Layout><About /></Layout>} />
          <Route path="/school/impact" element={<Layout><Impact /></Layout>} />
          <Route path="/school/needs" element={<Layout><Needs /></Layout>} />
          <Route path="/school/teachers" element={<Layout><Teachers /></Layout>} />
          <Route path="/school/future" element={<Layout><Future /></Layout>} />
          <Route path="/school/contact" element={<Layout><Contact /></Layout>} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/setup" element={<AdminSetup />} />
          
          <Route path="/gallery" element={<FoundationLayout><Gallery /></FoundationLayout>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
