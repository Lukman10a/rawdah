export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600">Real experiences from our satisfied students and parents</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-hover bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-600 font-bold text-lg">UF</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Umm Firdaus</h4>
                <p className="text-gray-500 text-sm">Belgium</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              &quot;I am very satisfied with your accessibility, willingness to help, and flexibility. You go above and beyond to assist, offering Arabic, Aqeedah, Quran, and more. I would definitely recommend signing your kids up for these courses.&quot;
            </p>
            <div className="flex text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          
          <div className="card-hover bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold text-lg">UA</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Umm AbiBakr</h4>
                <p className="text-gray-500 text-sm">Ghana</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              &quot;Markazul Bayaan is one of the best Quranic institutes I have ever come across. Their teachers have patience which makes learning easy. The class is fixed to suit your schedule. It has deepened my Islamic knowledge.&quot;
            </p>
            <div className="flex text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          
          <div className="card-hover bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold text-lg">IK</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sister Iqra Kareem</h4>
                <p className="text-gray-500 text-sm">India</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              &quot;I took Islamic studies, Arabic speaking, and Quran classes for my daughter. The teacher was patient and dedicated. I really saw an improvement in my daughter&apos;s memorization in less than a month.&quot;
            </p>
            <div className="flex text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 