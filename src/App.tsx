import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Layout } from "./components/layout/Layout";
import { SplashScreen } from "./components/SplashScreen";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import RCMPage from "./pages/RCMPage";
import BenefitsPage from "./pages/BenefitsPage";
import SpecialtiesPage from "./pages/SpecialtiesPage";
import MedicalBillingPage from "./pages/MedicalBillingPage";
import DenialManagementPage from "./pages/DenialManagementPage";
import ARClaimServicesPage from "./pages/ARClaimServicesPage";
import QualityAssurancePage from "./pages/QualityAssurancePage";
import AIRevenueAutomationPage from "./pages/AIRevenueAutomationPage";
import ContactPage from "./pages/ContactPage";
import SpecialtyDetailPage from "./pages/SpecialtyDetailPage";
import BenefitDetailPage from "./pages/BenefitDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="rcm" element={<RCMPage />} />
              <Route path="medical-billing" element={<MedicalBillingPage />} />
              <Route path="denial-management" element={<DenialManagementPage />} />
              <Route path="ar-claim-services" element={<ARClaimServicesPage />} />
              <Route path="quality-assurance" element={<QualityAssurancePage />} />
              <Route path="ai-revenue-automation" element={<AIRevenueAutomationPage />} />
              <Route path="benefits" element={<BenefitsPage />} />
              <Route path="benefits/:id" element={<BenefitDetailPage />} />
              <Route path="specialties" element={<SpecialtiesPage />} />
              <Route path="specialties/:id" element={<SpecialtyDetailPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
