import Head from 'next/head'
import {
    IconMenu2,
    IconX,
    IconBrandYoutube,
    IconBrandInstagram,
    IconMapPinFilled,
} from '@tabler/icons-react'
import { useState } from 'react'
import { MenuMobile, MenuDekstop } from '../Menu'
import Footer from '../Footer'

const GuestLayout = ({ children }) => {
    const [menuMobile, setMenuMobile] = useState(false)
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>
            <div className="bg-white py-2 px-3 md:px-0 drop-shadow">
                <div className="md:container">
                    <div className="flex justify-between items-center">
                        <img
                            src="http://localhost:8000/logo.png"
                            width={150}
                            alt="logo"
                        />
                        <button
                            onClick={() => setMenuMobile(!menuMobile)}
                            className="md:hidden text-black">
                            {menuMobile === true ? <IconX /> : <IconMenu2 />}
                        </button>
                        <MenuDekstop />
                    </div>
                </div>
            </div>
            <MenuMobile menuMobile={menuMobile} />
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
            <Footer
                IconBrandYoutube={IconBrandYoutube}
                IconBrandInstagram={IconBrandInstagram}
                IconMapPinFilled={IconMapPinFilled}
            />
        </div>
    )
}

export default GuestLayout
