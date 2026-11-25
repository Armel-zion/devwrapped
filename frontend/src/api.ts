import type { GitHubStats } from './types'

  
const API_URL = "http://127.0.0.1:8000";

export const getStats = async (pseudo: string): Promise<GitHubStats> => {
    let reponse: Response;
    try {
         reponse = await fetch(`${API_URL}/users/${encodeURIComponent(pseudo)}/stats`);
    } catch{
        throw new Error("Impossible de joindre l'API. Est-elle lancée ?");
    }


    if (reponse.status === 404) {
        throw new Error('Utilisateur GitHub introuvable');
    }

    if(!reponse.ok) {
        throw new Error(`Erreur ${reponse.status}`);
    }

    return reponse.json();
}
