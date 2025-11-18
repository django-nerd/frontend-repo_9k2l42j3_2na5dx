export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/80">© {new Date().getFullYear()} Beast Hustle</div>
        <div className="text-zinc-500 text-sm">Strength engineered. Luxury applied.</div>
      </div>
    </footer>
  )
}
