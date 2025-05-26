export default function Enrollment() {
  return (
    <section
      id="enroll"
      className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join 100+ students who have transformed either their Quranic
            recitation and memorization, Arabic kanguage and Islamic knowledge
            through our courses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Simple 3-Step Enrollment Process
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Fill the Form</h4>
                <p className="opacity-90">
                  Complete our simple registration form with your details
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Make Payment</h4>
                <p className="opacity-90">
                  Send payment to the provided account details
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Submit Proof</h4>
                <p className="opacity-90">
                  Send your payment proof to gain immediate access
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://bit.ly/rawdahatfaal"
                target="_blank"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📝 Fill Registration Form
              </a>
              <a
                href="https://bit.ly/rawdah-director"
                target="_blank"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                💬 Submit Payment Proof
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 inline-block">
              <h4 className="font-semibold mb-2">
                Need Help or Have Questions?
              </h4>
              <p className="mb-4 opacity-90">
                Speak directly with our director for any clarifications
              </p>
              <a
                href="https://bit.ly/rawdah-director"
                target="_blank"
                className="inline-block bg-yellow-400 text-purple-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                💬 Contact Director
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
