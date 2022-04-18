import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";
import PersonPage from "./pages/PersonPage"
import "./styles/style.css"
import { PersonContext } from "./contexts/PersonContext"

function App() {



  return (
    <PersonContext.Provider value={[]} >
      <BrowserRouter  >
        <Routes >
          <Route path="/" element={<PersonPage />} />

          <Route path="/:personName" element={<PersonPage />} />
          <Route path="*" element={
            <div>
              <Link to={"/"}>
                go
              </Link>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </PersonContext.Provider>

  );
}

export default App;
