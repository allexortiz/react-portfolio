import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/footer';
import './app.css'
import backgroundImage from './assets/background.png';

function App() {
  return (
    <section className='container-custom' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
      <NavTabs />
      <main className="mx-3 main">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;