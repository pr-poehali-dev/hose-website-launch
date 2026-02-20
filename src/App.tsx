
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Series1000MS from "./pages/Series1000MS";
import Series100 from "./pages/Series100";
import Series301 from "./pages/Series301";
import Series190 from "./pages/Series190";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog/1000ms" element={<Series1000MS />} />
          <Route path="/catalog/100" element={<Series100 />} />
          <Route path="/catalog/301" element={<Series301 />} />
          <Route path="/catalog/190" element={<Series190 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
