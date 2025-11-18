import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Luxury spotlight */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              Beast Hustle
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-zinc-300 text-lg leading-relaxed"
            >
              Luxury, limited‑drop performance supplements. The Strength Stick arrives in a matte black wooden case with magnetic closure — 30 precision‑dosed sticks crafted for those who move different.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#drop" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition">Shop the Drop</a>
              <a href="#notify" className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/40 transition">Get notified</a>
            </motion.div>

            <p className="mt-6 text-sm text-zinc-500">Ships in 24h • Limited quantities • Free returns</p>
          </div>

          {/* Product hero visuals */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 flex items-center justify-center">
              {/* Placeholder composition */}
              <div className="w-full h-full rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)] flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-xl bg-zinc-950 border border-white/10 shadow-2xl shadow-black/60 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-lg bg-black/60 border border-white/10" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 text-zinc-500 text-xs">Matte black wood • Magnetic closure • 30 sticks</div>
          </div>
        </div>
      </div>
    </section>
  )
}
