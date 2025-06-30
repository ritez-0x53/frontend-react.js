import React from 'react'
import "./App.css"
import useCounterStore from './hooks/counter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodosContainer from './components/TodosContainer';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';


function App() {
  // const { count , increment , decrement } = useCounterStore();
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
      <TodosContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App