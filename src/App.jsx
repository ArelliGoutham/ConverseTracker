import { Provider } from "react-redux";
import './App.css'

function App() {
  return (
		<>
			<Provider store = {store}>

			{/* <LoginProvider> For context API*/}
            	<AppRoutes />
			{/* </LoginProvider> */}

			</Provider>
        </>
	);
}

export default App
