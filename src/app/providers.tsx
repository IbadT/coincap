"use client";
import {PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// (если нужен кеш при перезагрузке)
// npm install @tanstack/react-query-persist-client

export function ClientProvider({ children}: PropsWithChildren) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                }
            }
        })
    )
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}