import type { GitHubStats } from './types'


interface StatsCardProps {
    stats: GitHubStats;
}

const StatsCard = ({ stats }: StatsCardProps) => {
    return (
        <div>
            <p>{stats.repos_count} dépôts</p>
            <p>Top 3 des langages :</p>
            <ul>
                {
                    stats.top_languages.map((language) => (
                        <li key={language}>{language}</li>
                    ))
                }
            </ul>
            <p>{stats.total_stars} étoiles</p>
        </div>

    )
}


export default StatsCard;