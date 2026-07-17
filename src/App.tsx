import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import { Hero } from './components/sections/Hero';
import { Statement } from './components/sections/Statement';
import { ScrollSequence } from './components/sections/ScrollSequence';
import { FeatureVideo } from './components/sections/FeatureVideo';
import { Specs } from './components/sections/Specs';
import { Outro } from './components/sections/Outro';
import { Footer } from './components/sections/Footer';

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="w-full bg-black text-white selection:bg-primary selection:text-white">
      {/* Pinned Logo (Header) */}
      <header className="fixed top-0 left-0 w-full p-8 md:p-12 z-50 pointer-events-none">
        <img src="/assets/logo.png" alt="VoltStrike" className="h-8 md:h-12 w-auto pointer-events-auto" />
      </header>

      <Hero />
      <Statement />
      <ScrollSequence />
      <FeatureVideo />
      <Specs />
      <Outro />
      <Footer />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
