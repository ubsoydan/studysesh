import { useState, useEffect } from "react";

// CUSTOM HOOK
// Parameters set 'key' and 'value' in local storage
// They will do first registering in local storage if anything was not found
// Or will update it with new values

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            // Check if any save was found in local storage
            const localValue = window.localStorage.getItem(key);
            // If true, return that one. If false, create a new save using initialValue argument
            return localValue ? JSON.parse(localValue) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    useEffect(() => {
        // Update local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    // Update in case of any change in 'value'.
    // 'key' is not relevant since it won't change anyways.

    return [value, setValue];
}
