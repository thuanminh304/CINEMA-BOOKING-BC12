import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import { clientRoutes } from "routes";
import ClientLayout from "layouts/ClientLayout";

//////////////
function App() {
  const renderLayout = (routes,Layout) => {
    return routes.map((route) => {
      const { path, component, exact } = route;
      return <Layout 
      path={path} exact={exact} component={component} />;
    });
  };
  return (
    <div className="App">
      {/* bọc router để sử dụng route */}
      <Router>
        {/* bọc switch để xác định điều kiện đường dẫn path */}
        <Switch>
          {renderLayout(clientRoutes,ClientLayout)}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
