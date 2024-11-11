// src/once-ui/components/SearchBar/SearchBar.tsx

"use client";

import React, { useState, ChangeEvent, useEffect } from 'react';
import classNames from 'classnames';
import styles from './SearchBar.module.scss';
import { Icon, Input } from '@/once-ui/components';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Debounce the search input to improve performance
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300); // 300ms delay

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        onSearch(debouncedQuery);
    }, [debouncedQuery, onSearch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <Input
                type="text"
                value={query}
                onChange={handleChange}
                className={styles.input}
                aria-label="Search in Frequently Asked Questions"
                id="faq-search"
                label="Search in Frequently Asked Questions"
                hasPrefix={<Icon name="search" size="s" decorative className={styles.searchIcon} />}
            />
        </div>
    );
};

export default SearchBar;



{/* <div className={styles.searchBar}>
<Input
    type="text"
    value={query}
    onChange={handleChange}
    className={styles.input}
    aria-label="Buscar en Preguntas Frecuentes" id={''} label={'Search'}
    hasPrefix={<Icon name="search" size="s" decorative className={styles.searchIcon} />}
/>
</div> */}