import { useContext, Suspense } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import { Loading } from "./components/Loading";
import { TaskProvider } from "./context/TaskContext";
import { TaskContext } from "./context/TaskContext";

function App() {
  return (
    <div className="grid h-screen font-sans font-medium place-content-center">
      <Suspense fallback={<Loading />}>
        <TaskProvider>
          <div className="text-4xl font-black">🧁 React Starter</div>
          <Router>
            <div className="flex justify-center space-x-4 font-medium text-blue-400 ">
              <Link to="/">Home</Link>
              <Link to="/pie">Pie</Link>
            </div>
            <Route path="/pie">
              <Pie />
            </Route>
          </Router>
        </TaskProvider>
      </Suspense>
    </div>
  );
}

const Pie = () => {
  const task = useContext(TaskContext);
  console.log(task?.createTab("first"));
  return <div>🥧 Pie</div>;
};

export default App;
