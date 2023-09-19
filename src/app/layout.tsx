// import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Souhaib ALLOUT',
    description: 'Souhaib ALLOUT software engineer portfolio',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                rel="stylesheet"/>

            <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
            {/*<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>*/}
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
            <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

            <link href="assets/css/style.css" rel="stylesheet"/>

        </head>

        <body className={inter.className}>

        {children}
        </body>

        <Script src="assets/vendor/purecounter/purecounter_vanilla.js"/>
        <Script src="assets/vendor/aos/aos.js"/>
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
        <Script src="assets/vendor/glightbox/js/glightbox.min.js"/>
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"/>
        <Script src="assets/vendor/swiper/swiper-bundle.min.js"/>
        <Script src="assets/vendor/typed.js/typed.umd.js"/>
        <Script src="assets/vendor/waypoints/noframework.waypoints.js"/>

        <Script src="assets/js/main.js" />

        </html>
    )
}
