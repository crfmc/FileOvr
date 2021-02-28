import styles from "../styles/top_bar.module.css";

function refreshPage() {
  window.parent.location = window.parent.location.href;
}

// Function component for the navigation bar
export function TopBar(props) {
  return (
    <div className={styles.top_bar}>
      <div className={styles.logo_button_container}>
        <h1
          className={` ${styles.logo} ${styles.give_pointer}`}
          onClick={() => refreshPage()}
        >
          OVR.
        </h1>
      </div>
      <div className={styles.top_bar_button_container}>
        <p
          className={` ${styles.top_bar_button} ${styles.give_pointer}`}
          onClick={props.onClickHelp}
        >
          Help
        </p>
        <p
          className={` ${styles.top_bar_button} ${styles.give_pointer}`}
          onClick={props.onClickAbout}
        >
          About
        </p>
      </div>
    </div>
  );
}
