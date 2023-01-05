import styles from "./card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

interface props {
  imgSrc: string;
  size: "large" | "medium" | "small";
}

//node js authentication?

function Card(props: props) {
  const { imgSrc, size } = props;

  const handleOnError = () => {
    throw "no image";
  };

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        {...shouldHover}>
        <Image
          src={imgSrc}
          alt='image'
          layout='fill'
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
}

export default Card;
