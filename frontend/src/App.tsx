import StatsCard from './StatsCard';

function App() {
  return (
    <main>
      <h1>DevWrapped</h1>
      <StatsCard stats={{ repos_count: 14, top_languages: ['TypeScript', 'HTML', 'Python'], total_stars: 0 }} />
    </main>
  );
}

export default App;