import '../styles/top_bar.css';

// Function component for the navigation bar
export function TopBar(props) {
    return (
        <div className="top_bar">
            <div className="logo_button_container">
                <a className="logo give_pointer" href="">
                    OVR.
                </a>
            </div>
            <div className="top_bar_button_container">
                <button
                    className="top_bar_button give_pointer"
                    onClick={props.onClickAbout}
                >
                    About Us
                </button>
                <button
                    className="top_bar_button give_pointer"
                    onClick={props.onClickHelp}
                >
                    Help
                </button>
            </div>
      </div>  
    );
}