import './App.css';
import Layout from './components/Layout/Layout';
import Music from './containers/Music';

function App() {
  return (
    <div className="App">
      <Layout>
        <Music/>
      </Layout>
    </div>
  );
}

export default App;
