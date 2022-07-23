import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Layout from './views/Layout';

// Create a client
const queryClient = new QueryClient()


function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
