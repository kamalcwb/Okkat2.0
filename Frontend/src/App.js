import styles from "./App.module.css"
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import Home from "./pages/Home/Home.jsx"
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.blur} style={{ top: '-18%', right: '0' }}></div>
      <div className={styles.blur} style={{ top: '36%', left: '-8rem' }}></div>
      {/* <Home /> */}
      <Profile />
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
