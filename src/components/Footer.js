const Footer = ({ IconBrandYoutube, IconBrandInstagram, IconMapPinFilled }) => {
    return (
        <div className="bg-black py-10">
            <div className="md:container">
                <div className="flex flex-col md:flex-row gap-y-10 p-4 justify-end text-white">
                    <div className="md:w-1/3">
                        <h1 className="font-bold text-lg">Follow Us:</h1>
                        <div className="flex gap-x-3 mt-5">
                            <IconBrandYoutube size={30} />
                            <IconBrandInstagram size={30} />
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <h1 className="font-bold text-lg">Alamat Masjid:</h1>
                        <p className="mt-5 text-sm inline-flex gap-x-3">
                            <IconMapPinFilled /> Bojongmanggu, Kec. Pameungpeuk,
                            Kabupaten Bandung, Jawa Barat 40376
                        </p>
                    </div>
                    <div className="md:w-1/3 md:ml-20">
                        <h1 className="font-bold text-lg">Tentang:</h1>
                        <p className="mt-5 text-sm inline-flex gap-x-3">
                            Selamat Datang Di Website Resmi Masjid Al -
                            Iskandariah. Memberdayakan Umat Dan Menyuarakan
                            Moderasi Islam.
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-white text-center mt-52">
                Copyright 2023 | Masjid Al Iskandariah
            </p>
        </div>
    )
}

export default Footer
