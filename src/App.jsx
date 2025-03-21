import Calculator from './components/calculator';

function App() {
	return (
		<>
			<Header />
			<Calculator />
			<Footer />
		</>
	);
}

function Header() {
	return (
		<header>
			<h1>CalculatorS.</h1>
		</header>
	);
}

function Footer() {
	return (
		<footer>
			<p>Copyright Shrekko</p>
		</footer>
	);
}
export default App;
