import { Eyebrow } from "@/components/ui/Section";

export default function Hero() {
  return (
    <section className="bg-ivory islamic-pattern">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <Eyebrow>
              Rawdatul Atfaal — Online Qur’an Memorization Program
            </Eyebrow>
            <h1 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.1] tracking-tight text-forest">
              Memorize Juz ’Amma Completely —{" "}
              <span className="text-cta">With Personal Guidance</span> Every
              Step of the Way
            </h1>
            <p className="mt-4 text-[15.5px] leading-7 text-charcoal/70 max-w-[560px]">
              A structured{" "}
              <span className="font-semibold text-charcoal">
                20-week, one-on-one
              </span>{" "}
              Qur’an memorization program designed to help students complete Juz
              ’Amma with correct Tajweed, pronunciation, revision and consistent
              guidance.
            </p>
            <div id="hero-cta" className="mt-7 flex flex-wrap gap-3">
              <a
                href="#enroll"
                className="bg-cta hover:bg-ctaHover text-white font-semibold px-7 py-3.5 rounded-[12px] shadow-soft transition-colors"
              >
                Enroll in the Juz ’Amma Program
              </a>
              <a
                href="#how-it-works"
                className="bg-white border border-sage text-forest font-semibold px-7 py-3.5 rounded-[12px] hover:bg-sage/40 transition-colors"
              >
                See How the Program Works
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "One-on-One Live Classes",
                "4 Sessions Every Week",
                "40 Minutes Per Session",
                "20 Weeks",
                "Online Worldwide",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-sage rounded-full px-3 py-1.5"
                >
                  <span className="w-4 h-4 rounded-full bg-sage grid place-items-center text-[10px] leading-none">
                    ✓
                  </span>
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-charcoal/50">
              For children and adults • Online worldwide • Certificate upon
              completion
            </p>
          </div>
          {/* RIGHT visual placeholder */}
          <div className="lg:col-span-6">
            <div className="relative bg-gradient-to-br from-[#E8F0EA] to-[#FAF8F2] rounded-[24px] border border-sage p-6 lg:p-8 overflow-hidden">
              <div className="absolute inset-0 islamic-pattern opacity-40 pointer-events-none" />
              <div className="relative bg-white rounded-[20px] border border-sage/60 p-6 lg:p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest grid place-items-center text-white text-sm">
                    ۞
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.16em] uppercase font-semibold text-gold">
                      Rawdatul Atfaal
                    </p>
                    <p className="font-semibold text-forest leading-none">
                      Juz ’Amma Program
                    </p>
                  </div>
                  <span className="ml-auto text-[10px] tracking-widest uppercase bg-sage px-2.5 py-1 rounded-full font-semibold text-forest">
                    Enrollment Open
                  </span>
                </div>
                {/* geometric open book illustration - CSS only */}
                <div className="mt-6 rounded-2xl bg-ivory border border-sage/50 p-6 flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-[86px] h-[108px] bg-white border border-sage rounded-l-xl shadow-sm relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent 0 14px, #123C32 14px 15px)",
                        }}
                      />
                      <div className="absolute top-6 left-3 right-3 h-1.5 bg-sage/60 rounded" />
                      <div className="absolute top-10 left-3 right-6 h-1.5 bg-sage/40 rounded" />
                      <div className="absolute top-14 left-3 right-4 h-1.5 bg-sage/40 rounded" />
                    </div>
                    <div className="w-[86px] h-[108px] bg-white border border-sage rounded-r-xl shadow-sm relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent 0 14px, #123C32 14px 15px)",
                        }}
                      />
                      <div className="absolute top-6 left-3 right-3 h-1.5 bg-sage/60 rounded" />
                      <div className="absolute top-10 left-6 right-3 h-1.5 bg-sage/40 rounded" />
                      <div className="absolute top-14 left-4 right-3 h-1.5 bg-sage/40 rounded" />
                      <span className="absolute bottom-3 right-3 text-[8px] font-arabic text-forest/70">
                        بِسْمِ اللهِ
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["20 Weeks", "5-Month Program"],
                    ["4 / Week", "One-on-One"],
                    ["40 Minutes", "Each Session"],
                  ].map(([a, b]) => (
                    <div
                      key={a}
                      className="bg-ivory rounded-xl border border-sage/50 py-3"
                    >
                      <p className="font-bold text-forest text-sm leading-none">
                        {a}
                      </p>
                      <p className="text-[10px] text-charcoal/60 mt-1">{b}</p>
                    </div>
                  ))}
                </div>
                {/* glass card overlay mimic */}
                <div className="mt-4 glass-card rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-forest">
                      Live • One-on-One • Worldwide
                    </p>
                    <p className="text-xs text-charcoal/60">
                      Zoom • Google Meet • Classroom • Telegram
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-cta text-white grid place-items-center text-sm">
                    ↗
                  </span>
                </div>
              </div>
              {/* <p className="relative mt-3 text-center text-[11px] text-charcoal/45">No faces — respectful, calm learning atmosphere</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
