import styles from "../styles/top_bar.module.css";

function refreshPage() {
  window.parent.location = window.parent.location.href;
}

// Function component for the navigation bar
export function TopBar(props) {
  return (
    <div className={styles.top_bar}>
      <div className={styles.logo_button_container}>
        <button
          className={` ${styles.logo} ${styles.give_pointer}`}
          onClick={() => refreshPage()}
        >
          OVR.
        </button>
      </div>
      <div className={styles.top_bar_button_container}>
        <button
          className={` ${styles.top_bar_button} ${styles.give_pointer}`}
          onClick={props.onClickAbout}
        >
          About Us
        </button>
        <button
          className={` ${styles.top_bar_button} ${styles.give_pointer}`}
          onClick={props.onClickHelp}
        >
          Help
        </button>
      </div>
    </div>
  );
}
