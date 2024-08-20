import { useEffect, useState } from 'react'

export default function Navbar() {

    const data = [
        {
            id: 1,
            name: 'Home',
            href: '#',
        },
        {
            id: 2,
            name: 'Projects',
            href: '#projects',
        },
        {
            id: 3,
            name: 'About',
            href: '#about',
        },
        {
            id: 4,
            name: 'Contact',
            href: 'mailto:leodevelopercontact@gmail.com',
        }
    ]

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        let position = window.scrollY
        setScrolled(position > 0)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className='w-full py-4 flex justify-center items-center text-white fixed top-0 z-50'>
            <ul className='flex items-center justify-center gap-x-5 font-medium'>
                {data.map((item) => (
                    <a className='hover:text-[#478588] duration-200' href={item.href}>{item.name}</a>
                ))}
            </ul>
        </nav>
    )
}