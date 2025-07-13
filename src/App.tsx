
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageProvider from "./components/LanguageProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import SafetyNotices from "./pages/SafetyNotices";
import LegalTexts from "./pages/LegalTexts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import FAQ from "./pages/FAQ";

// English pages
import CommunityGuidelinesEN from "./pages/en/CommunityGuidelines";
import SafetyNoticesEN from "./pages/en/SafetyNotices";
import LegalTextsEN from "./pages/en/LegalTexts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Spanish routes */}
            <Route path="/community-guidelines" element={<CommunityGuidelines />} />
            <Route path="/safety-notices" element={<SafetyNotices />} />
            <Route path="/legal-texts" element={<LegalTexts />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* English routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/community-guidelines" element={<CommunityGuidelinesEN />} />
            <Route path="/en/safety-notices" element={<SafetyNoticesEN />} />
            <Route path="/en/legal-texts" element={<LegalTextsEN />} />
            <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/en/terms-of-service" element={<TermsOfService />} />
            <Route path="/en/cookie-policy" element={<CookiePolicy />} />
            <Route path="/en/faq" element={<FAQ />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
