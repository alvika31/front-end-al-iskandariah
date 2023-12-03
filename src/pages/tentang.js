import GuestLayout from '@/components/Layouts/GuestLayout'
import Link from 'next/link'

const Tentang = () => {
    return (
        <GuestLayout>
            <div className="container ">
                <h1 className="md:font-bold">Tentang</h1>
                <p>
                    Website ini adalah media komunikasi dan informasi Takmir
                    Masjid Raya Al Jabbar Jl. Cimencrang No. 14 Kecamatan
                    Gedebage, Kota Bandung, Jawa Barat, Indonesia, 40294.
                    Menyajikan berita dan informasi kegiatan pemakmuran masjid,
                    program, acara, fasilitas, layanan, dinamika, pengajian,
                    ceramah, dll.
                </p>

                <p className="font-normal md:font-bold text-2xl mt-6">
                    Follow us:
                </p>
                <ul>
                    <li>
                        1.
                        <Link href="#" className="text-blue-600 ">
                            Twitter
                        </Link>
                    </li>
                    <li>
                        2.
                        <Link href="#" className="text-blue-600 ">
                            Instagram
                        </Link>
                    </li>
                    <li>
                        3.
                        <Link href="#" className="text-blue-600 ">
                            Youtube
                        </Link>
                    </li>
                    <li>
                        4.
                        <Link href="#" className="text-blue-600 ">
                            Facebook
                        </Link>
                    </li>
                    <li>
                        5.
                        <Link href="#" className="text-blue-600 ">
                            TikTok
                        </Link>
                    </li>
                </ul>
            </div>
        </GuestLayout>
    )
}

export default Tentang
