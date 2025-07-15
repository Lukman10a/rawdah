import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-purple-100 via-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Back to Home Button */}
        <div className="text-left mb-8">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>← Back to Home</span>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            💰 Investment in Your Learning
          </h2>
          <p className="text-xl text-gray-600">
            Choose the payment option that works best for you! 🎯
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-purple-300 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                💳 Full Payment
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$500</span>
                <p className="text-gray-600 mt-2">Complete 5-month course</p>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>📅 20 weeks of intensive learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>👥 3 one-on-one sessions per week</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>📱 Telegram support group access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>🏆 Certificate upon completion</span>
                </li>
              </ul>
              <Link href="#enroll">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🚀 Choose Full Payment
                </button>
              </Link>
            </div>
          </div>

          <div className="card-hover bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⭐ Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                💳 Monthly Payment
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">$105</span>
                <p className="text-gray-600 mt-2">Per month for 5 months</p>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>📚 Same comprehensive curriculum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>⏰ Flexible payment schedule</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>📖 All course materials included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>💰 Budget-friendly option</span>
                </li>
              </ul>
              <Link href="#enroll">
                <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🎯 Choose Monthly Plan
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200 max-w-4xl mx-auto">
            <h4 className="font-bold text-gray-800 text-2xl mb-6">
              💳 Payment Details
            </h4>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <p className="text-gray-600 mb-2"><strong>🏦 Bank Name:</strong> GTBank</p>
                <p className="text-gray-600 mb-2"><strong>📝 Account:</strong> 0431141470</p>
                <p className="text-gray-600"><strong>👤 Name:</strong> AbdulRauf Lukman Olamide</p>
              </div>
              <div className="text-left">
                <p className="text-gray-600 mb-2"><strong>⚠️ Important:</strong> All payments must be made upfront</p>
                <p className="text-gray-600 mb-2"><strong>🇳🇬 Note:</strong> Nigerians should pay in Naira, not USD</p>
                <p className="text-gray-600"><strong>💡 Tip:</strong> You can use Sendwave, Remitly, Wise, etc.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
              <p className="text-gray-700">
                💡 <strong>Payment Options:</strong> You can pay using{" "}
                <a href="https://www.sendwave.com/" className="text-blue-600 hover:text-purple-600 underline font-semibold">
                  Sendwave
                </a>
                ,{" "}
                <a href="https://www.remitly.com/" className="text-blue-600 hover:text-purple-600 underline font-semibold">
                  Remitly
                </a>
                ,{" "}
                <a href="https://www.wise.com/" className="text-blue-600 hover:text-purple-600 underline font-semibold">
                  Wise
                </a>
                , or other international payment services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
