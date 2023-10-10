'use client'
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type props = {
    children: ReactNode
};

const Provider = ({ children }: props) => {
    return (
        <>
            <SessionProvider>
                {children}
            </SessionProvider>
        </>
    )
}

export default Provider;