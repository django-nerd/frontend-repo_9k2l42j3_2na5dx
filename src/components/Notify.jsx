import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function Notify() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="notify" className="relative bg-black">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-medium">Get early access</h3>
              <p className="text-zinc-400 mt-1">Join the list for the next Beast Hustle drop.</p>
            </div>
            <form onSubmit={submit} className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 lg:w-80 rounded-full bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                disabled={status==='loading'}
                className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition"
              >
                {status==='loading' ? 'Sending…' : 'Notify me'}
              </button>
            </form>
          </div>
          {status==='success' && (
            <div className="mt-4 text-green-400">You’re on the list. See you soon.</div>
          )}
          {status==='error' && (
            <div className="mt-4 text-red-400">Something went wrong. Try again.</div>
          )}
        </div>
      </div>
    </section>
  )
}
