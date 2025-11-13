// Layout.js
import NavBar from './NavBar';
import Footer from './Footer';

// Define the available pages and their keys
const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
];

const Layout = ({ children, selectedPage, onSetPage }) => {
  /**
   * Props explanation:
   * - children: this is whatever JSX you wrap inside <Layout> in App.js.
   *   In our case, it will be <HomePage />, <AboutPage />, or <ContactPage />
   * - selectedPage: the key of the currently selected page, e.g., 'home'
   * - onSetPage: the function from App.js that updates the current page
   */

  // Function to render the sidebar links dynamically
  const renderPageLinks = () => {
    /**
     * What this does:
     * - Loops over all pages in the "pages" array
     * - For each page, creates a <li> element
     * - If the page key matches selectedPage, apply the "selected" style
     * - Adds onClick to call onSetPage to switch pages
     */
    return pages.map((page) => (
      <li
        key={page.key}
        style={{
          ...styles.sidebarLink,
          ...(page.key === selectedPage ? styles.selected : {}), // highlight active page
        }}
        onClick={() => onSetPage(page.key)}
      >
        {page.name}
      </li>
    ));
  };

  return (
    <div style={styles.container}>
      {/* Top navigation bar */}
      <NavBar />

      <div style={styles.main}>
        {/* Sidebar with page links */}
        <aside style={styles.sidebar}>
          <ul>
            {renderPageLinks()}
          </ul>
        </aside>

        {/* Main content area where the current page component is rendered */}
        <section style={styles.content}>
          {children} {/* Injects HomePage, AboutPage, or ContactPage */}
        </section>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '10px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'block',
    padding: '10px',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    marginBottom: '5px',
  },
  selected: {
    backgroundColor: '#999', // highlight for selected page
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default Layout;
