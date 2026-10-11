export default function Footer(){
  return (
    <footer className="bg-forestDark text-white/80">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h3 className="text-white font-bold">Markazul Bayaan</h3>
            <p className="text-sm text-white/60 mt-2 max-w-[420px] leading-6">Dedicated to providing quality Islamic education and Qur’an studies through personalized, one-on-one instruction.</p>
            <div className="flex gap-3 mt-4">
              <a href="https://t.me/bayanbenefits" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-9 h-9 rounded-full bg-white/10 border border-white/5 grid place-items-center text-white hover:bg-white/15 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l10 3.5-2.3 12.3-4.2-1.5-2.5 2.4-1.5-1.2 1.1-1.8L4 11 12 2zm7.5 5.2l-6 5.3 1.2 3.6 4.8-8.9zM8.2 13.5l3.5 1.2-1.4 2.2-2.1-3.4z"/></svg>
              </a>
              <a href="https://www.facebook.com/share/1CcmxXuA79/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 border border-white/5 grid place-items-center text-white hover:bg-white/15 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.76 0-4 1.24-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8c0-.55.45-1 1-1z"/></svg>
              </a>
              <a href="https://whatsapp.com/channel/0029VarQvHiLY6d000oWu82O" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Channel" className="w-9 h-9 rounded-full bg-white/10 border border-white/5 grid place-items-center text-white hover:bg-white/15 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.07 4.93A9.91 9.91 0 0012.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.26-1.38a9.86 9.86 0 004.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.85 9.85 0 00-2.89-6.99zm-7.03 14.6h-.01a8.17 8.17 0 01-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.26.86 5.81 2.41a8.17 8.17 0 012.41 5.81c0 4.53-3.69 8.22-8.22 8.22zm4.51-6.15c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.13-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.68 4.24 3.76.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.47-.29z"/></svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-white text-sm font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><a href="#program" className="hover:text-white">Course</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#enroll" className="hover:text-white">Enrollment</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-white text-sm font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>markazulbayaan9@gmail.com</li>
              <li>+234 808 928 7065</li>
              <li><a href="https://bit.ly/rawdah-director" target="_blank" className="text-white underline underline-offset-4">Direct Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <span>© 2026 Markazul Bayaan. All rights reserved.</span>
          <span>Transforming lives through Islamic education</span>
        </div>
      </div>
    </footer>
  )
}
