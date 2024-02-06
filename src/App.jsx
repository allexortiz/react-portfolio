import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/footer';
import './app.css'

function App() {
  return (
    <section className='container-custom'>
      <NavTabs />
      <main className="mx-3 main">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;