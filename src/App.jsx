import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
// import Footer from './components/footer';

function App() {
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;