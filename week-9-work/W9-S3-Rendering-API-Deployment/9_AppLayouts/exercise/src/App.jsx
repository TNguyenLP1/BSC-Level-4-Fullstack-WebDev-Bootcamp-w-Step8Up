// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  // State to track which page is currently selected
  const [page, setPage] = useState('home');

  /**
   * How does Layout know which page to render?
   * 
   * Answer: We pass the current page state to Layout via the "selectedPage" prop.
   * Layout can then read this prop and highlight the selected menu item or do
   * any other logic related to which page is active.
   * 
   * We also pass "onSetPage" (setPage function) so Layout can change the page
   * when a user clicks on a menu item. This is called "lifting state up" in React.
   */

  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {/* Conditional rendering based on the current page */}
      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}
    </Layout>
  );
}

export default App;
