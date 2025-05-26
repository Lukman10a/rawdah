export default function CourseOverview() {
  return (
    <section id="course-details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Course Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 5-month journey to master Juz &apos;Amma with proper Tajweed and pronunciation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="card-hover bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">What You&apos;ll Achieve</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Complete memorization of all Juz &apos;Amma</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Proper Tajweed and pronunciation</span>
                </li>
              </ul>
            </div>
            
            <div className="card-hover bg-gradient-to-r from-blue-500 to-teal-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Bonus Learning</h3>
              <ul className="space-y-2 text-sm">
                <li>• Basic Aqeedah</li>
                <li>• Daily Adhkaar (morning & evening supplications)</li>
                <li>• Toilet etiquette supplications</li>
                <li>• Eating and drinking adhkaar</li>
                <li>• New clothes supplications</li>
                <li>• House entry/exit adhkaar</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="card-hover bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">All Ages</h4>
                <p className="text-gray-600 text-sm">Suitable for children and adults</p>
              </div>
            </div>
            
            <div className="card-hover bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">3 Classes/Week</h4>
                <p className="text-gray-600 text-sm">40 minutes per session</p>
              </div>
            </div>
            
            <div className="card-hover bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">20 Weeks</h4>
                <p className="text-gray-600 text-sm">5 months duration</p>
              </div>
            </div>
            
            <div className="card-hover bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Certificate</h4>
                <p className="text-gray-600 text-sm">Upon completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 