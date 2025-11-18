import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import Notify from './components/Notify'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Minimal, luxury header */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-wide">BEAST HUSTLE</div>
          <nav className="text-sm text-zinc-400 flex items-center gap-6">
            <a href="#drop" className="hover:text-white">Drop</a>
            <a href="#notify" className="hover:text-white">Notify</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <ProductShowcase />
        <Notify />
      </main>

      <Footer />
    </div>
  )
}

export default App
