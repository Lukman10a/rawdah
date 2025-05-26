export default function AdditionalCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Additional Courses Available</h2>
          <p className="text-xl text-gray-600">Expand your Islamic knowledge with our other offerings</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-hover bg-gradient-to-br from-green-400 to-blue-500 p-8 rounded-2xl text-white text-center">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V6h10v2z"/>
            </svg>
            <h3 className="text-2xl font-bold mb-4">The Quran</h3>
            <p className="opacity-90">Comprehensive Quranic studies and recitation improvement</p>
          </div>
          
          <div className="card-hover bg-gradient-to-br from-purple-400 to-pink-500 p-8 rounded-2xl text-white text-center">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.51-6.81-1.66-2.39-4.84-2.95-7.11-1.25-2.27 1.7-2.84 4.89-1.28 7.14 1.56 2.25 4.57 2.82 6.84 1.31l2.54 2.51 1.01-1.36zM10.5 8.5c0 1.38-1.12 2.5-2.5 2.5S5.5 9.88 5.5 8.5 6.62 6 8 6s2.5 1.12 2.5 2.5zM20.5 19l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.51-6.81-1.66-2.39-4.84-2.95-7.11-1.25-2.27 1.7-2.84 4.89-1.28 7.14 1.56 2.25 4.57 2.82 6.84 1.31l2.54 2.51L20.5 19z"/>
            </svg>
            <h3 className="text-2xl font-bold mb-4">Arabic Language</h3>
            <p className="opacity-90">Master Arabic speaking, reading, and writing skills</p>
          </div>
          
          <div className="card-hover bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white text-center">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h3 className="text-2xl font-bold mb-4">Reading & Writing</h3>
            <p className="opacity-90">Develop proficiency in Arabic literacy and comprehension</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            <strong>Special Note:</strong> Limited slots available for adults across all our programs
          </p>
          <a href="https://wa.link/2fgoky" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            Inquire About Other Courses
          </a>
        </div>
      </div>
    </section>
  )
} 