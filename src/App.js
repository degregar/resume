import "./App.css";
import Resume from "./components/Resume/Resume";

function App() {
  console.log(
    "%cMichał Kukla - frontend developer\n+48 691 059 529\nmichal@kukla.tech%c ",
    "background: #D5E4F0;color:#000;margin:8px;padding:8px 16px;border-radius: 2px;line-height: 24px;",
    ""
  );

  return (
    <div className="App">
      <Resume />
    </div>
  );
}

export default App;
