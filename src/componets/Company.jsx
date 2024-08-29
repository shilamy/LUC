import { solar } from "../assets";
import styles, {layout} from "../style";
const Company = () => {
  return (
     <section id = "about"className={layout.section}>
     <div className={layout.sectionImgReverse}>
    <img src={solar} alt="panel" className="w-[100%] h-[100%] relative z-[5]" />
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>
     <div className={layout.sectionInfo}>
     <h2 className={styles.heading2}>
     Consult our team, <br className="sm:block hidden"/> for Best
     Ideas on land updates.
     </h2>
     <p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
           With the right Land in the right Location, 
           you can improve your  life Standards by
           building homes and estates, earning rewards and saving money
           With Us by your side.
     </p>
     <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        
      </div>
      </div>
     </section>
  )
}

export default Company