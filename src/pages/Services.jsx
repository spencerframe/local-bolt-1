import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive orthodontic marketing solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Lead Generation</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Facebook & Instagram Advertising
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Google Ads Management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Targeted Local SEO
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Lead Follow-up</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                6-10 Calls Within 3 Days
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Professional Call Center Team
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Direct Schedule Integration
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Practice Integration</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                PMS Software Integration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Automated Appointment Scheduling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Real-time Calendar Sync
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Analytics & Reporting</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Detailed Performance Metrics
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                ROI Tracking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Monthly Strategy Reviews
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
