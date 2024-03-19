import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Search = () => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState(null);

    const searchHandler = (event) => {
        setQuery(event.target.value);

        if (null === query || query.length < 3) {
            setResults([]);

            return;
        }

        fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify({ query: event.target.value }),
        })
            .then(response => response.json())
            .then(json => {
                setResults(json.results);
            })
    };

    const textPart = (item) => {
        const firstMatch = Object.values(item.match)[0];
        const queriedString = Object.keys(item.match)[0];
        let text = '';

        firstMatch.forEach((dest) => {
            const pos = item[dest].indexOf(queriedString);

            if (dest !== 'title') {
                text = item[dest].slice(pos, pos + queriedString.length + 50) + '...';
            }
        });

        return text;
    };

    return (
        <div>
            <Image
                src="images/components/looking-glass.svg"
                width={20}
                height={15}
                alt="hledat"
                className="search-glass"
            />
            <input type="text" className="w-1/2 search-bar" onChange={searchHandler} />
            <div id="search-results" className={results.length > 0 ? "block" : "hidden"}>
                {Object.values(results).map((item) => {
                    return (
                        <div key={item.page}>
                            <Link href={item.page}>{item.title}</Link><br />
                            <p className="text-sm text-gray-700">{textPart(item)}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
