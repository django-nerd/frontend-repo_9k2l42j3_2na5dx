import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function ProductShowcase() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="drop" className="relative bg-black">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold">Current Drop</h2>
          <span className="text-zinc-500 text-sm">Limited release</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 aspect-[4/3]" />
          <div>
            {loading ? (
              <div className="text-zinc-400">Loading…</div>
            ) : products.length === 0 ? (
              <div className="text-zinc-400">No products yet. Check back soon.</div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="text-white text-2xl font-medium">{products[0].title}</div>
                  {products[0].subtitle && <div className="text-zinc-400 mt-1">{products[0].subtitle}</div>}
                </div>
                <div className="text-zinc-300 leading-relaxed">{products[0].description}</div>
                <div className="text-white text-3xl tracking-tight">${'{'}products[0].price.toFixed(2){'}'}</div>
                <a href="#notify" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition w-fit">Request Access</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
