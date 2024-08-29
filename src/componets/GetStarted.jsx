import styles from "../style"
import Button from "./Button";

const GetStarted = () => {

  
  return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
  <div className="flex-1 flex flex-col">
  <h2 className={styles.heading2}>Take a leap and try our service now!</h2>
  <p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
    Everything you need for solar installation, Fumigation, guidance in 
    and consultation on property sales access it from anywhere in your region. 
  </p>
  </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
<Button/>

  </div>
    
  </section>
  )
};
export default GetStarted