import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, img }) => (
  <motion.div
    className="flex flex-col p-6 bg-white rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      <div className="w-20 h-20 overflow-hidden rounded-lg">
        <img src={img} alt={title} className="width={60} height={60} object-cover" />
      </div>
      <div className="ml-4">
        <h4 className="font-poppins font-semibold text-lg text-gray-800 mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default ServiceCard;


