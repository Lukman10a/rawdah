export default function HeroSection() {
  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <div className="inline-block p-4 bg-purple-100 bg-opacity-80 rounded-full mb-4">
              <svg
                className="w-16 h-16 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V6h10v2z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-gray-800">
              Markazul Bayaan
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-700">
              Rawdatul Atfaal - Juz &apos;Amma Course
            </h2>
          </div>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700">
            Master the correct recitation and memorization of all Juz
            &apos;Amma with personalized one-on-one guidance in 20 weeks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#enroll"
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Enroll Now
            </a>
            <a
              href="#course-details"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 bg-opacity-30 rounded-full animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 bg-opacity-30 rounded-full animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 bg-opacity-30 rounded-full animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}
