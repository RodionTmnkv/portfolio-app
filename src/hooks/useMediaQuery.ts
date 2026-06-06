import { useSyncExternalStore } from 'react';

const subscribeToMediaQuery = (
    query: string,
    callback: () => void
): (() => void) => {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', callback);

    return () => {
        mediaQueryList.removeEventListener('change', callback);
    };
};

const getSnapshot = (query: string): boolean => {
    return window.matchMedia(query).matches;
};

const getServerSnapshot = (): boolean => {
    return false;
};

export const useMediaQuery = (query: string): boolean => {
    return useSyncExternalStore(
        (callback) => subscribeToMediaQuery(query, callback),
        () => getSnapshot(query),
        getServerSnapshot
    );
};
