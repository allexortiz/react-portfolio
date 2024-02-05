import { useState } from 'react';
import NavTabs from "./NavTabs";
import Aboutme from "../pages/Aboutme";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <Aboutme />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
    </div>
  );

}