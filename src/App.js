import { Header } from "./parts";
import { ToastContainer } from 'react-toastify';
import AppRoute from "./routes/AppRoute";
function App() {
  return (
    <div className="App">
        <Header />
        <AppRoute/>
        <ToastContainer />
    </div>
  );
}

export default App;
