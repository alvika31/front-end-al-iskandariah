export const MenuMobile = ({ menuMobile }) => {
    return (
        <div
            className={`md:hidden fixed w-full h-screen bg-green-600 transform transition-transform ease-in-out duration-300 ${
                menuMobile
                    ? 'translate-x-0'
                    : '-translate-x-full md:translate-x-0'
            }`}>
            <div>
                <ul className="flex flex-col gap-y-3 pt-10 px-4 text-sm font-normal text-white">
                    <li className="hover:bg-green-700 hover:text-white p-3 rounded-md transition duration-500 ease-in-out">
                        Home
                    </li>
                    <li className="hover:bg-green-700 hover:text-white p-3 rounded-md transition duration-500 ease-in-out">
                        Tentang
                    </li>
                    <li className="hover:bg-green-700 hover:text-white p-3 rounded-md transition duration-500 ease-in-out">
                        Jadwal Kegiatan
                    </li>
                    <li className="hover:bg-green-700 hover:text-white p-3 rounded-md transition duration-500 ease-in-out">
                        Berita
                    </li>
                    <li className="hover:bg-green-700 hover:text-white p-3 rounded-md transition duration-500 ease-in-out">
                        Kontak
                    </li>
                </ul>
            </div>
        </div>
    )
}

export const MenuDekstop = () => {
    return (
        <div className="hidden md:block ">
            <ul className="flex gap-x-5 text-sm font-normal text-black ">
                <li className="hover:bg-green-700 hover:text-white p-2 rounded-md transition duration-500 ease-in-out">
                    Home
                </li>
                <li className="hover:bg-green-700 hover:text-white p-2 rounded-md transition duration-500 ease-in-out">
                    Tentang
                </li>
                <li className="hover:bg-green-700 hover:text-white p-2 rounded-md transition duration-500 ease-in-out">
                    Jadwal Kegiatan
                </li>
                <li className="hover:bg-green-700 hover:text-white p-2 rounded-md transition duration-500 ease-in-out">
                    Berita
                </li>
                <li className="hover:bg-green-700 hover:text-white p-2 rounded-md transition duration-500 ease-in-out">
                    Kontak
                </li>
            </ul>
        </div>
    )
}
