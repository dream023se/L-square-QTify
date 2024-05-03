import styles from "./Hero.module.css"
import HeroImage from "../../assets/vibrating-headphone 1.png"
const Hero = () =>{
    return(
        <div className={styles.container}>  
        <div className={styles.Hero}>
            <div className={styles.HeroTitle}>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <div> <img className={styles.HeroImage} src={HeroImage} alt='headphone'/></div>
               
        </div>
    </div>
    );
}
export default Hero;