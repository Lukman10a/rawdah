export default function AdditionalCourses() {
  return (
    <section className="py-12 bg-ivory border-y border-sage/50">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-cta">
              Beyond Juz ’Amma
            </p>
            <h2 className="text-xl font-bold text-forest mt-1">
              Continue Learning Beyond Juz ’Amma
            </h2>
          </div>
          <a
            href="https://wa.link/2fgoky"
            target="_blank"
            className="text-sm font-semibold text-cta underline underline-offset-4"
          >
            Explore Other Courses →
          </a>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4 max-w-[900px]">
          {[
            [
              "The Qur’an",
              "Comprehensive Qur’anic studies and recitation improvement.",
            ],
            [
              "Arabic Language",
              "Master Arabic speaking, reading, and writing skills.",
            ],
            [
              "Reading & Writing",
              "Develop proficiency in Arabic literacy and comprehension.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="bg-white rounded-[16px] border border-sage/60 p-5"
            >
              <div className="w-8 h-8 rounded-lg bg-ivory border border-sage grid place-items-center text-cta text-xs">
                ◈
              </div>
              <h3 className="mt-3 font-semibold text-forest text-sm">{t}</h3>
              <p className="text-sm text-charcoal/60 mt-1">{d}</p>
            </div>
          ))}
        </div>
        {/* <p className="mt-4 text-xs text-charcoal/50">Secondary section — does not distract from the primary Juz ’Amma enrollment goal. Limited slots for adults.</p> */}
      </div>
    </section>
  );
}
