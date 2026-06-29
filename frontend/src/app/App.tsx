import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainPage } from "../pages/main/ui/MainPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
