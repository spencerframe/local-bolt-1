import { motion } from 'framer-motion'
import { FaFacebookSquare, FaInstagram, FaGoogle, FaPhoneAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Orthodontic Practice
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Premium lead generation with unmatched follow-up services
            </p>
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary rounded-full text-white">
                  <FaPhoneAlt size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Follow-up Team</h3>
              <p>6-10 calls within 3 days for each lead</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary rounded-full text-white">
                  <FaGoogle size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Channel Marketing</h3>
              <p>Strategic presence on Google, Facebook, and Instagram</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary rounded-full text-white">
                  <FaPhoneAlt size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Scheduling</h3>
              <p>We schedule leads directly in your practice management software</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Generate Leads</h3>
              <p className="text-sm">Through targeted social media and Google campaigns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm">Immediate follow-up with potential patients</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Multiple Touchpoints</h3>
              <p className="text-sm">6-10 calls within 3 days</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Direct Scheduling</h3>
              <p className="text-sm">Book appointments in your system</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
