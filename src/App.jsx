import './styles/App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {Routes, Route} from "react-router-dom"
import Feed from './pages/Feed';
import Header from './components/Header';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />}>Feed</Route>
        </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
