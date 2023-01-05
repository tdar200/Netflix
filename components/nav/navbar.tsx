import { HtmlHTMLAttributes, MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

interface props {
  username: string;
}

function NavBar(props: props) {
  const { username } = props;
  const router = useRouter();

  const [showDropdown, setShowDropDown] = useState(false);

  const handleOnClickHome = (
    e: React.MouseEvent<EventTarget | MouseEvent | TouchEvent>
  ) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (
    e: React.MouseEvent<EventTarget | MouseEvent | TouchEvent>
  ) => {
    e.preventDefault();
    router.push("/myList");
  };

  const handleShowDropdown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleSignout = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href='/'>
          <div className={styles.logoWrapper}>
            <Image
              src='/static/netflix.svg'
              alt='Netflix logo'
              width='128'
              height='34'
            />
          </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src={"/static/expand_more.svg"}
                alt='Expand dropdown'
                width='24'
                height='24'
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a
                    href='/login'
                    className={styles.linkName}
                    onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
