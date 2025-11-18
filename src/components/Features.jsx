export default function Features() {
  const feats = [
    { title: 'Matte Black Wood', desc: 'Premium case with deep matte finish and precision edges.' },
    { title: 'Magnetic Closure', desc: 'Satisfying snap. Secure, elegant, functional.' },
    { title: '30 Strength Sticks', desc: 'Consistency engineered. Precision‑dosed performance.' },
    { title: 'Limited Drops', desc: 'Small‑batch releases. No compromises. No overstock.' },
  ]

  return (
    <section className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {feats.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <div className="text-white font-medium">{f.title}</div>
              <div className="mt-2 text-zinc-400 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
