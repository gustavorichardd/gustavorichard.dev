import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiAtSign,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import styles from "../styles/components/ContactCards.module.scss";

export function ContactCards() {
  return (
    <div className={styles.constactcardContainer}>
      <div className={styles.constactcardCardOption}>
        <FiLinkedin size={40} />
      </div>
      <div className={styles.constactcardCardOption}>
        <FiGithub size={40} />
      </div>
      <div className={styles.constactcardCardOption}>
        <FiTwitter size={40} />
      </div>
      <div className={styles.constactcardCardOption}>
        <FiInstagram size={40} />
      </div>
      <div className={styles.constactcardCardOption}>
        <FiAtSign size={40} />
      </div>
      <div className={styles.constactcardCardOption}>
        <BsWhatsapp size={40} />
      </div>
    </div>
  );
}
