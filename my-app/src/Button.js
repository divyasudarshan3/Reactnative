const Button = ({ setToggle, btnTxt }) => {

	// data-testid is a testing id
	// which is used only during tests
	return <button data-testid="button"
				onClick={() => setToggle((prev) => !prev)}>
		{btnTxt}
	</button>
}

export default Button;

//Test 1: Testing if the button is rendered correctly to the DOM.
