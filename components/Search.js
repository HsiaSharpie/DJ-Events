import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchStyles from '@/styles/Search.module.css';

function Search() {
    const [term, setTerm] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/events/search?term=${term}`);
        setTerm('');
    }
 
    return (
        <div className={SearchStyles.search}>
            <form onSubmit={handleSubmit}>
                <input 
                 type='text'
                 value={term}
                 onChange={(e) => setTerm(e.target.value)}
                 placeholder='Search Events'
                />
            </form>
        </div>
    )
}

export default Search
