import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './SignUpPage.module.css'
import { VscDeviceMobile } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const SignUpPage = ({ setSignUpToggle }) => {
  return (
    <>
      <div className={`container ${styles.mainContainer}`}>

        <div className={styles.backButton} onClick={() => { setSignUpToggle(false) }}><RxCross2 /></div>

        <div className={styles.content}>

          <h3>Sign Up</h3>

          <p>By continuing, you agree to our <a href="#">User Agreement</a> and acknowledge that you understand the <a href="#">Privacy Policy</a>.</p>

          <div className={styles.options}>
            <button className={`btn ${styles.buttonOptions}`}><VscDeviceMobile /> Continue With Phone Number</button>
            <button className={`btn ${styles.buttonOptions}`}><FcGoogle /> Continue With Google</button>
            <button className={`btn ${styles.buttonOptions}`}><RiAppleFill /> Continue With Apple</button>
          </div>

          <p>OR</p>

          <div>
            <input type="email" class={styles.emailInput} aria-describedby="emailHelp" placeholder='Email*' />
          </div>

          <p className={styles.TextAlignLeft}>Already a redditor? <a href="#">Log In</a></p>

        </div>

        <button className={`${styles.continueButton}`} >Continue</button>

      </div>
    </>
  )
}

export default SignUpPage