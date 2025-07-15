
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import SafetyNotices from "./pages/SafetyNotices";
import LegalTexts from "./pages/LegalTexts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

// English pages
import EnCommunityGuidelines from "./pages/en/CommunityGuidelines";
import EnSafetyNotices from "./pages/en/SafetyNotices";
import EnLegalTexts from "./pages/en/LegalTexts";
import EnPrivacyPolicy from "./pages/en/PrivacyPolicy";
import EnTermsOfService from "./pages/en/TermsOfService";
import EnCookiePolicy from "./pages/en/CookiePolicy";


import LanguageProvider from "./components/LanguageProvider";
import "./i18n/config";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Spanish routes */}
            <Route path="/" element={<Index />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/normas-de-la-comunidad" element={<CommunityGuidelines />} />
            <Route path="/avisos-de-seguridad" element={<SafetyNotices />} />
            <Route path="/textos-legales" element={<LegalTexts />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-de-servicio" element={<TermsOfService />} />
            <Route path="/politica-de-cookies" element={<CookiePolicy />} />
            
            {/* English routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/community-guidelines" element={<EnCommunityGuidelines />} />
            <Route path="/en/safety-notices" element={<EnSafetyNotices />} />
            <Route path="/en/legal-texts" element={<EnLegalTexts />} />
            <Route path="/en/privacy-policy" element={<EnPrivacyPolicy />} />
            <Route path="/en/terms-of-service" element={<EnTermsOfService />} />
            <Route path="/en/cookie-policy" element={<EnCookiePolicy />} />
            
            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
