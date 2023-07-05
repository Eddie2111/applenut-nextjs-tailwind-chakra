// create next page using tsx
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {
    return(
        <>
        <p>test page for <Link href="/about">nothing</Link></p>
        </>
    )
}
