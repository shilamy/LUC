import ServiceCard from "./ServiceCard";
import { features } from "../constants";
import styles from "../style";

const Business = () => {
  return (
    <section id="services" className="relative py-12 bg-gray-100">
     
      <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 bg-lightBlue opacity-30" />

    
      <div className="relative z-10 w-full text-center mb-12">
        <h2 className={styles.heading2}>
          OUR SERVICES
        </h2>
        <p className={`${styles.paragraph} text-center mx-auto max-w-[600px]`}>
          Everything you need to understand the operations on our business anywhere on the planet.
        </p>
      </div>
      <div className="relative z-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-5">
        {features.map((card) => (
          <ServiceCard
            key={card.id}
            title={card.title}
            description={card.description}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
