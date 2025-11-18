import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function ProductShowcase() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showPreorder, setShowPreorder] = useState(false)
  const [form, setForm] = useState({
    customer_name: '',
    email: '',
    shipping_address: '',
    quantity: 1,
    note: ''
  })
  const [orderStatus, setOrderStatus] = useState('idle')

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

  const product = products[0]

  async function submitOrder(e) {
    e.preventDefault()
    if (!product) return
    setOrderStatus('loading')
    const items = [{
      product_id: product.id || product._id || 'unknown',
      quantity: Number(form.quantity) || 1,
      unit_price: product.price
    }]
    const payload = {
      customer_name: form.customer_name,
      email: form.email,
      shipping_address: form.shipping_address,
      items,
      total: items.reduce((s, it) => s + it.quantity * it.unit_price, 0),
      note: form.note || undefined
    }
    try {
      const res = await fetch(`${API}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setOrderStatus('success')
      setForm({ customer_name: '', email: '', shipping_address: '', quantity: 1, note: '' })
      setShowPreorder(false)
    } catch (e) {
      console.error(e)
      setOrderStatus('error')
    }
  }

  return (
    <section id="drop" className="relative bg-black">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold">Current Drop</h2>
          <span className="text-zinc-500 text-sm">Presale live now</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {/* Visual placeholder; swap with real image */}
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 aspect-[4/3] flex items-center justify-center">
            {product?.images?.length ? (
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-zinc-600">Product imagery coming soon</div>
            )}
          </div>
          <div>
            {loading ? (
              <div className="text-zinc-400">Loading…</div>
            ) : !product ? (
              <div className="text-zinc-400">No products yet. Check back soon.</div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="text-white text-2xl font-medium">{product.title}</div>
                  {product.subtitle && <div className="text-zinc-400 mt-1">{product.subtitle}</div>}
                </div>
                <div className="text-zinc-300 leading-relaxed">{product.description}</div>
                <div className="text-white text-3xl tracking-tight">{(product.currency || 'EUR') === 'EUR' ? '€' : '$'}{Number(product.price).toFixed(2)}</div>

                <div className="flex gap-3">
                  <button onClick={() => setShowPreorder(true)} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition w-fit">
                    Preorder now
                  </button>
                  <a href="#notify" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/40 transition w-fit">
                    Get notified
                  </a>
                </div>

                {orderStatus === 'success' && (
                  <div className="text-green-400">Thank you — your preorder has been captured. We’ll email next steps.</div>
                )}
                {orderStatus === 'error' && (
                  <div className="text-red-400">Something went wrong. Please try again.</div>
                )}

                {showPreorder && (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950 p-6">
                    <form onSubmit={submitOrder} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          required
                          placeholder="Full name"
                          value={form.customer_name}
                          onChange={e => setForm({ ...form, customer_name: e.target.value })}
                          className="rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>
                      <input
                        required
                        placeholder="Shipping address"
                        value={form.shipping_address}
                        onChange={e => setForm({ ...form, shipping_address: e.target.value })}
                        className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                      <div className="grid sm:grid-cols-3 gap-4 items-center">
                        <div className="sm:col-span-1">
                          <label className="block text-sm text-zinc-400 mb-1">Quantity</label>
                          <input
                            type="number"
                            min={1}
                            value={form.quantity}
                            onChange={e => setForm({ ...form, quantity: e.target.value })}
                            className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                          />
                        </div>
                        <div className="sm:col-span-2 text-zinc-400 text-sm">
                          Total updates automatically.
                        </div>
                      </div>
                      <textarea
                        placeholder="Notes (optional)"
                        value={form.note}
                        onChange={e => setForm({ ...form, note: e.target.value })}
                        className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                      <button
                        type="submit"
                        disabled={orderStatus==='loading'}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition"
                      >
                        {orderStatus==='loading' ? 'Submitting…' : 'Place preorder'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
