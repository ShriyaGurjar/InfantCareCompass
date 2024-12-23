import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full ">
      <Header />
      <main className='mt-24'>
        <Outlet /> {/* Outlet renders nested routes */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
