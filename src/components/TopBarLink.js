import '../styles/top_bar_link.css'

export function TopBarLink(props) {
  return (
      <>
        <input className="input" id="hidden-checkbox" type="checkbox"/>
      <label
        className="label"
        for="hidden-checkbox"
        style={{
          right: props.right
        }}
      >
          <h2>{props.header}</h2>
        </label>
      </>
    );
}