import { heroimage} from "../assets";
import styles from "../style";
import CustomButton from "./CustomButton";


const Hero = () => {
    const handleScroll = () => {
    }
  return (
    <section id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}>
     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
     <div className="flex flex-row
  justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[52px]
     text-black ss:leading-[100px]
    leading-[75px]">
           Find & Consult<br className="sm:block hidden" /> {" "}
            <span className="text-gradient"> Properties </span> {" "}
            - quickly and easily!
          </h1>

        </div>
        <p className={`${styles.paragraph}
    max-w-[470px] mt-5`}>Streamline your property search experience
            with our effortless process.
        </p>
        <CustomButton
          title ="Explore Properties"
          containerStyles = "bg-primary text-white rounded-full mt-10"          
          handleClick = {handleScroll}
          />
     </div>
     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={heroimage} alt="hero"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero