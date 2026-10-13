export interface GitHubUser {
    login: string;
    name: string | null;
    public_repos: number;
    followers: number;
    created_at: string;
}


export interface GitHubStats {
    repos_count:  number;
    top_languages: string[];
    total_stars : number;
}
