import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Revolutionizing orthodontic practice growth</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We're dedicated to transforming how orthodontic practices acquire and convert leads. By combining cutting-edge marketing strategies with our unique in-house follow-up system, we help practices grow efficiently and sustainably.
            </p>
            <p className="text-gray-600">
              Our commitment to making 6-10 calls within 3 days for each lead sets us apart, ensuring no opportunity is missed and every potential patient receives the attention they deserve.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">What Makes Us Different</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <span>Dedicated in-house follow-up team</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <span>Direct integration with practice management software</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <span>Comprehensive multi-channel marketing approach</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="mb-6">Let's discuss how we can help you grow your orthodontic practice.</p>
          <button className="btn bg-white text-primary hover:bg-gray-100">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  )
}
