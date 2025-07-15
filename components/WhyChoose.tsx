export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🌟 Why Choose This Program?
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes our Qur'an learning program exceptional and fun! 🎯
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="card-hover bg-gradient-to-br from-pink-50 to-purple-100 p-8 rounded-3xl shadow-xl text-center border border-pink-200 hover:border-pink-400 transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              👨‍🏫 One-on-One Sessions
            </h3>
            <p className="text-gray-600">
              Personalized Qur'an sessions tailored specifically to your child's learning pace and needs
            </p>
          </div>
          
          <div className="card-hover bg-gradient-to-br from-green-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-center border border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎓 Qualified Salafī Instructors
            </h3>
            <p className="text-gray-600">
              Expert teachers firm in tajwīd and Islamic values, ensuring authentic and proper learning
            </p>
          </div>
          
          <div className="card-hover bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-center border border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ⏰ Flexible Timing
            </h3>
            <p className="text-gray-600">
              Convenient scheduling that works around your academic commitments and family life
            </p>
          </div>
          
          <div className="card-hover bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-center border border-orange-200 hover:border-orange-400 transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📊 Progress Tracking
            </h3>
            <p className="text-gray-600">
              Regular reviews and detailed progress updates to support retention and continuous improvement
            </p>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            🎉 Bonus Features Included!
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pink-500">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold text-gray-800 mb-2">Telegram Support Group</h4>
              <p className="text-gray-600 text-sm">24/7 access to our supportive community</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-800 mb-2">Completion Certificate</h4>
              <p className="text-gray-600 text-sm">Official recognition of your achievements</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-semibold text-gray-800 mb-2">Study Materials</h4>
              <p className="text-gray-600 text-sm">Comprehensive resources and guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 