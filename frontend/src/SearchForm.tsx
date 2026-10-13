import { useState } from "react";
interface SearchFormProps {
    onSearch: (pseudo: string) => void;
}


const SearchForm = ({onSearch}: SearchFormProps) => {
    const [pseudo, setPseudo] = useState('');
    return (
        <form onSubmit={(e) => { e.preventDefault(); onSearch(pseudo.trim()) }}  >
            <label htmlFor="pseudo">Pseudo GitHub</label>
            <input id="pseudo" type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} required />
            <button type="submit">Générer ma carte</button>
        </form>
    )
}




export default SearchForm;