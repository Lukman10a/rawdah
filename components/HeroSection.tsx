import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/rawdah_logo2.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Islamic Symbols */}
        <div className="absolute top-20 left-10 text-white/10 text-6xl animate-bounce" style={{ animationDelay: "0s" }}>
          ☪️
        </div>
        <div className="absolute top-40 right-20 text-white/10 text-4xl animate-bounce" style={{ animationDelay: "1s" }}>
          📖
        </div>
        <div className="absolute bottom-40 left-20 text-white/10 text-5xl animate-bounce" style={{ animationDelay: "2s" }}>
          🌟
        </div>
        <div className="absolute bottom-20 right-40 text-white/10 text-3xl animate-bounce" style={{ animationDelay: "3s" }}>
          ✨
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rotate-45 animate-spin" style={{ animationDuration: "20s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-2xl">
                <Image
                  src={logo}
                  alt="Markazul Bayaan Logo"
                  className="w-20 h-20 rounded-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
                Markazul Bayaan
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-yellow-200 drop-shadow-md">
                Rawdatul Atfaal - Juz &apos;Amma Course
              </h2>
            </div>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              🌟 Master the correct recitation and memorization of all Juz &apos;Amma
              with personalized one-on-one guidance in 20 weeks! 🎯
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">👨‍🏫</div>
                <p className="text-white font-semibold">Expert Teachers</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-white font-semibold">Personalized Learning</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">⏰</div>
                <p className="text-white font-semibold">Flexible Schedule</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🏆</div>
                <p className="text-white font-semibold">Certificate</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
              >
                🚀 Enroll Now
              </Link>
              <Link
                href="/#course-overview"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 backdrop-blur-sm"
              >
                📚 Learn More
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Juz &apos;Amma Course</h3>
                  <div className="space-y-3 text-white/90">
                    <div className="flex items-center justify-between">
                      <span>📅 Duration:</span>
                      <span className="font-semibold">20 Weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>👥 Sessions:</span>
                      <span className="font-semibold">3x per week</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>🎯 Focus:</span>
                      <span className="font-semibold">Memorization & Tajweed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>🌟 Bonus:</span>
                      <span className="font-semibold">Telegram Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-full shadow-lg animate-bounce">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-4 rounded-full shadow-lg animate-bounce" style={{ animationDelay: "1s" }}>
                <span className="text-2xl">🎓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
