export default function Footer(){
  return (
    <footer className="bg-forestDark text-white/80">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h3 className="text-white font-bold">Markazul Bayaan</h3>
            <p className="text-sm text-white/60 mt-2 max-w-[420px] leading-6">Dedicated to providing quality Islamic education and Qur’an studies through personalized, one-on-one instruction.</p>
            <div className="flex gap-3 mt-4 text-sm">
              <a href="https://t.me/+5xdX-Dy2lKAwYWRk" target="_blank" className="w-8 h-8 rounded-full bg-white/10 grid place-items-center hover:bg-white/15">TG</a>
              <a href="https://www.instagram.com/markazulbayaanbenefits/" target="_blank" className="w-8 h-8 rounded-full bg-white/10 grid place-items-center hover:bg-white/15">IG</a>
              <a href="https://whatsapp.com/channel/0029VarQvHiLY6d000oWu82O" target="_blank" className="w-8 h-8 rounded-full bg-white/10 grid place-items-center hover:bg-white/15">WA</a>
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
