import { createContext, useContext } from 'react'

interface RootContextType {
    IMAGE_ENDPOINT_FULL: string;
    IMAGE_ENDPOINT_THUMB: string;
}

export const RootContext = createContext<RootContextType|null>(null);

export const useProductImageContext = () => useContext(RootContext)?.IMAGE_ENDPOINT_FULL;
export const useProductThumbContext = () => useContext(RootContext)?.IMAGE_ENDPOINT_THUMB;
