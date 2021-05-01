import Link from "next/link";
import ArrowRightIcon from "../icon/arrow-right-icon";
import styles from "./button.module.css";

function AddButton(props) {
  return (
    <Link href={props.link}>
      <a className={styles.button}>
        <span className={styles.link_text}>{props.children}</span>
        <span className={styles.arrow}>
          <ArrowRightIcon />
        </span>
      </a>
    </Link>
  );
}

export default AddButton;
