import { Navbar, Hero,Company, Business, GetStarted, Footer } from './componets';
import "./output.css";
import styles from "./style";

const App = () => (
  <div className='bg-secondary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className= {`${styles.boxWidth}`} >

      <Navbar/>
      </div>
    </div>

    <div   className=' bg-lightWhite w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>


<Hero/>
</div> 
</div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      
      <Company/>
      <Business/>
      <GetStarted/>
      <Footer/>
    </div>
    </div>

  </div>
)

export default App
