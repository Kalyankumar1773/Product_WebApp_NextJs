const Sidebar = () => {
    return (
      <div style={styles.sidebar}>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem}>
            <a href="/">Home</a>
          </li>
          <li style={styles.sidebarItem}>
            <a href="/about">About</a>
          </li>
          <li style={styles.sidebarItem}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  };
  
  const styles = {
    sidebar: {
      backgroundColor: '#333',
      color: '#fff',
      height: '100vh',
      width: '250px',
      padding: '20px',
      position: 'fixed',
    },
    sidebarList: {
      listStyleType: 'none',
      padding: 0,
    },
    sidebarItem: {
      marginBottom: '20px',
    }
  };
  
  export default Sidebar;
  