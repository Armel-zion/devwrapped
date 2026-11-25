import type { GitHubStats } from './types'

interface StatsCardProps {
    stats: GitHubStats;
}

// Écrit le nombre à la française (268 822) et accorde le mot (1 dépôt, 2 dépôts)
const accorder = (nombre: number, singulier: string, pluriel: string) =>
    `${nombre.toLocaleString('fr-FR')} ${nombre > 1 ? pluriel : singulier}`;

const StatsCard = ({ stats }: StatsCardProps) => {
    return (
        <article>
            <p>{accorder(stats.repos_count, 'dépôt', 'dépôts')}</p>
            {stats.top_languages.length > 0 && (
                <>
                    <p>Langages principaux :</p>
                    <ul>
                        {stats.top_languages.map((language) => (
                            <li key={language}>{language}</li>
                        ))}
                    </ul>
                </>
            )}
            <p>{accorder(stats.total_stars, 'étoile', 'étoiles')}</p>
        </article>
    )
}

export default StatsCard;
