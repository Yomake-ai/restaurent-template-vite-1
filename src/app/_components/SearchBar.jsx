
import { useCallback, useState } from "react";
import { useSearchParams, useNavigate } from 'react-router-dom'

const SearchBarModule = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const query = searchParams.get('key') || '';

    const [search, setSearch] = useState(query);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const searchChangeHandler = event => {
        setSearch(event.target.value);
    };

    const searchPressHandler = event => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            navigate("/search" + '?' + createQueryString('key', search))
        }
    };

    return (
        <div className="sb-group-input sb-group-with-btn">
            <input 
                type="text"
                value={search}
                onChange={searchChangeHandler}
                onKeyDown={searchPressHandler}
                required
                id="searchField"
                placeholder=" "
            />
            <span className="sb-bar" />
            <label>What you search?</label>
            <button 
                onClick={() => {
                    navigate("/search" + '?' + createQueryString('key', search))
                }}
            >
                <img src="/img/ui/icons/search.svg" alt="search" />
            </button>
        </div>
    )
}
export default SearchBarModule;