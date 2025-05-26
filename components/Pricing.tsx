
export default function HeroSection() {
    return (
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-4">
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Investment in Your Learning</h2>
        <p className="text-xl text-gray-600">Choose the payment option that works best for you</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="card-hover bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-purple-300">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Payment</h3>
                <div className="mb-6">
                    <span className="text-5xl font-bold text-purple-600">$500</span>
                    <p className="text-gray-600 mt-2">Complete 5-month course</p>
                </div>
                <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>20 weeks of intensive learning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>3 one-on-one sessions per week</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Telegram support group access</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Certificate upon completion</span>
                    </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                    Choose Full Payment
                </button>
            </div>
        </div>
        
        <div className="card-hover bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Monthly Payment</h3>
                <div className="mb-6">
                    <span className="text-5xl font-bold text-purple-600">$105</span>
                    <p className="text-gray-600 mt-2">Per month for 5 months</p>
                </div>
                <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Same comprehensive curriculum</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Flexible payment schedule</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>All course materials included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Budget-friendly option</span>
                    </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    Choose Monthly Plan
                </button>
            </div>
        </div>
    </div>
    
    <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
            <strong>Important:</strong> All payments must be made upfront (either in full or monthly basis)
        </p>
        <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
            <h4 className="font-semibold text-gray-800 mb-2">Payment Details</h4>
            <p className="text-gray-600">Bank Name: GTBank</p>
            <p className="text-gray-600">Account: 0431141470</p>
            <p className="text-gray-600">Name: AbdulRauf Lukman Olamide</p>
            <p className="pt-8">Note: You can pay using <a href="https://www.sendwave.com/" className="text-blue-600">Sendwave</a> , <a href="https://www.remitly.com/" className="text-blue-600">Remitly</a> , <a href="https://www.wise.com/" className="text-blue-600">Wise</a> etc</p>
        </div>
    </div>
</div>
</section>
    )
}
