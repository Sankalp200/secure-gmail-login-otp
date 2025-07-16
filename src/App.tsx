
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import SectionSelection from "./pages/SectionSelection";
import SGPACalculator from "./pages/SGPACalculator";
import GroupDiscussion from "./pages/GroupDiscussion";
import FacultyContact from "./pages/FacultyContact";
import Helpdesk from "./pages/Helpdesk";
import Premium from "./pages/Premium";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/sections" element={<SectionSelection />} />
              <Route path="/calculator" element={<SGPACalculator />} />
              <Route path="/discussion" element={<GroupDiscussion />} />
              <Route path="/faculty" element={<FacultyContact />} />
              <Route path="/helpdesk" element={<Helpdesk />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/auth" element={<Auth />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
