import { useState } from "react";
import type { FormEvent } from "react";

interface SearchFormProps {
    onSearch: (pseudo: string) => void;
    desactive: boolean;
}

const SearchForm = ({ onSearch, desactive }: SearchFormProps) => {
    const [pseudo, setPseudo] = useState('');

    const envoyer = (e: FormEvent) => {
        e.preventDefault();
        const nettoye = pseudo.trim();
        if (nettoye === '') return; // que des espaces : on n'appelle pas l'API
        onSearch(nettoye);
    };

    return (
        <form onSubmit={envoyer}>
            <label htmlFor="pseudo">Pseudo GitHub</label>
            <input id="pseudo" type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} required />
            <button type="submit" disabled={desactive}>Générer ma carte</button>
        </form>
    )
}

export default SearchForm;
