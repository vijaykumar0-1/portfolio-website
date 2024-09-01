"use client"
import { Key } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    }
    ,
    {
        name: 'work',
        path: '/work'
    }
    ,
    {
        name: 'contact',
        path: '/contact'
    }
]

export const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8 ` `">
            {
                Links.map((link, index) => {
                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-green-600 border-b-2 border-green-600"} capitalize font-medium hover:text-green-600 transition-all`}>
                        {link.name}
                    </Link>
                }
                )
            }
        </nav>
    )
}
