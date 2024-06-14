"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

const ClientProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const queryClient = new QueryClient()  
  
  return (
    <QueryClientProvider client={queryClient}>
     
        <Toaster />
        {children}
    
    </QueryClientProvider>
  )
}

export default ClientProvider