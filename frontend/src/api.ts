import type { GitHubStats } from './types'

  
const API_URL = "http://127.0.0.1:8000";

export const getStats = async (pseudo: string): Promise<GitHubStats> => {
    const reponse = await fetch(`${API_URL}/users/${pseudo}/stats`)
    if(!reponse.ok) {
        throw new Error(`Erreur ${reponse.status}`);
    }
    return reponse.json();
}
