import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import NetworkMonitoring from './pages/NetworkMonitoring'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Investors from './pages/Investors'
import Contact from './pages/Contact'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Values from './pages/Values'
import WhyUs from './pages/WhyUs'
import Vision from './pages/Vision'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/network-monitoring" element={<NetworkMonitoring />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="investors" element={<Investors />} />
        <Route path="contact" element={<Contact />} />
        <Route path="support" element={<Support />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="values" element={<Values />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="vision" element={<Vision />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
