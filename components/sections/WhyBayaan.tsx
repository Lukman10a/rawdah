import { Eyebrow } from "@/components/ui/Section";

export default function WhyBayaan() {
  return (
    <section id="why-bayaan" className="py-14 lg:py-20 bg-ivory">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[720px]">
          <Eyebrow>Why Markazul Bayaan?</Eyebrow>
          <h2 className="mt-3 text-[26px] lg:text-[34px] font-bold tracking-tight text-forest">
            Learn Qur’an From Teachers Who Take Their Knowledge Seriously
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-charcoal/70">
            Our instructors are upon the way of the Salaf and committed to
            teaching Qur’an and Islamic knowledge according to the understanding
            of Ahlus-Sunnah.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            [
              "Study & Ijazah",
              "Teachers have studied under scholars from Saudi Arabia, Algeria and Libya and hold written ijazah / thabat from some teachers.",
            ],
            [
              "Experience",
              "More than 5 years of online teaching experience, plus additional physical teaching.",
            ],
            [
              "Methodology",
              "Teaching grounded in the Qur’an, Sunnah and understanding of the Salaf.",
            ],
            [
              "Recommendation",
              "Recommended by some Mashaayikh — names and documentation available on request.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="bg-white rounded-[20px] border border-sage/60 p-6 shadow-card relative overflow-hidden"
            >
              <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="w-8 h-8 rounded-lg bg-sage grid place-items-center text-cta text-sm">
                ◆
              </div>
              <h3 className="mt-3 font-semibold text-forest">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-charcoal/65">{d}</p>
            </div>
          ))}
        </div>
        {/* <p className="mt-4 text-xs text-charcoal/50">All wording is factual and modest — no invented names, institutions or guarantees (§34).</p> */}
      </div>
    </section>
  );
}
