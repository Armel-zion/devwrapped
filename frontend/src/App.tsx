import { useState } from 'react';
import StatsCard from './StatsCard';
import SearchForm from './SearchForm';
import type { GitHubStats } from './types';
import { getStats } from './api';

function App() {
  const [stats, setStats] = useState<GitHubStats | null>(null);   // le résultat (rien au départ)
  const [erreur, setErreur] = useState<string | null>(null);      // le message d'erreur à afficher
  const [chargement, setChargement] = useState(false);            // vrai pendant l'appel à l'API

  const rechercher = async (pseudo: string) => {
    setChargement(true);
    setErreur(null);
    setStats(null);

    try {
      const resultat = await getStats(pseudo);
      setStats(resultat);
    } catch (e) {
      setErreur(e instanceof Error ? e.message : 'Erreur inconnue');
    } finally {
      setChargement(false);
    }
  };

  return (
    <main>
      <h1>DevWrapped</h1>
      <SearchForm onSearch={rechercher} desactive={chargement} />
      {chargement && <p>Chargement…</p>}
      {erreur && <p role="alert">{erreur}</p>}
      {stats && <StatsCard stats={stats} />}
    </main>
  );
}

export default App;
