import { createContext, useContext } from 'react'

interface RootContextType {
    IMAGE_ENDPOINT: string;
}

export const RootContext = createContext<RootContextType|null>(null);

export const useImageContext = () => useContext(RootContext)?.IMAGE_ENDPOINT;
export const useProductImageContext = () => `${useContext(RootContext)?.IMAGE_ENDPOINT}/products`;
export const useProductThumbContext = () => `${useContext(RootContext)?.IMAGE_ENDPOINT}/products/thumbnails`;
