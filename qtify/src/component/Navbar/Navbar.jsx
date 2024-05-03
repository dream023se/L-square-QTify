import Logo from "../Logo/Logo";

import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar()
{
  return (
  
    <>
     <nav className={styles.navbar}>
   {/* <Link to="/"> */}
    <Logo />
 {/* </Link>  */}
   <Search
  placeholder="search a song of your choice"/>
  <button className={styles.feedback}><strong>Give FeedBack</strong></button> 
</nav>
</>
  )
  
}

export default Navbar;
