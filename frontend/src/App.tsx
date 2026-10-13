import StatsCard from './StatsCard';
import SearchForm from './SearchForm';
import { useState } from 'react';
function App() {
  const [pseudoRecherche, setPseudoRecherche] = useState('');
  return (
    <main>
      <h1>DevWrapped</h1>
      <StatsCard stats={{ repos_count: 14, top_languages: ['TypeScript', 'HTML', 'Python'], total_stars: 0 }} />
      <SearchForm onSearch={setPseudoRecherche} />
      <p>Recherche : {pseudoRecherche}</p>
    </main>
  );
}

export default App;