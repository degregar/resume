import "./App.css";
import Resume from "./components/Resume/Resume";

function App() {
  setTimeout(
    console.log.bind(
      console,
      "%cMichał Kukla - frontend developer\n+48 691 059 529\nmichal@kukla.tech%c ",
      "background: #3F51B5;color:#FFF;margin:5px;padding:5px;border-radius: 5px;line-height: 26px;",
      ""
    )
  );

  return (
    <div className="App">
      <Resume />
    </div>
  );
}

export default App;
