import StatsCard from './StatsCard';
import SearchForm from './SearchForm';
import { getStats } from './api'

function App() {
  
  return (
    <main>
      <h1>DevWrapped</h1>
      <StatsCard stats={{ repos_count: 14, top_languages: ['TypeScript', 'HTML', 'Python'], total_stars: 0 }} />
      <SearchForm onSearch={async (pseudo) => {
         const start = await getStats(pseudo);
         console.log(start)
      }} />
  
    </main>
  );
}

export default App;