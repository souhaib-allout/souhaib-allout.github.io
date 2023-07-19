// import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Script from 'next/script'

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
            <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet"/>

            {/* Animate.css */}
            {/*<link rel="stylesheet" href="css/animate.css"/>*/}
            {/* Icomoon Icon Fonts*/}
            <link rel="stylesheet" href="css/icomoon.css"/>
            {/* Bootstrap  */}
            <link rel="stylesheet" href="css/bootstrap.css"/>
            {/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"*/}
            {/*      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"*/}
            {/*      crossOrigin="anonymous"/>*/}
            {/*    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"*/}
            {/*            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"*/}
            {/*            crossOrigin="anonymous"/>*/}
            {/* Flexslider  */}
            <link rel="stylesheet" href="css/flexslider.css"/>
            {/* Flaticons  */}
            {/*<link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">*/}
            {/* Owl Carousel */}
            <link rel="stylesheet" href="css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
            {/* Theme style  */}
            <link rel="stylesheet" href="css/style.css"/>

            <link rel="stylesheet" href="aos/dist/aos.css"/>

            {/* Modernizr JS */}
            <Script src="js/modernizr-2.6.2.min.js"/>
            {/* FOR IE9 below */}
            {/*[if lt IE 9]>
                <Script src="js/respond.min.js"/>
                <![endif]*/}

        </head>

        <body className={inter.className}>

            {children}
        </body>

        {/* jQuery */}
        <Script src="js/jquery.min.js"/>
        {/* jQuery Easing */}
        <Script src="js/jquery.easing.1.3.js"/>
        {/* Bootstrap */}
        {/*<Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"*/}
        {/*        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"*/}
        {/*        crossOrigin="anonymous"/>*/}
        {/*<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"*/}
        {/*        integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"*/}
        {/*        crossOrigin="anonymous"/>*/}
        <Script src="js/bootstrap.min.js"/>
        {/* Waypoints */}
        <Script src="js/jquery.waypoints.min.js"/>
        {/* Flexslider */}
        <Script src="js/jquery.flexslider-min.js"/>
        {/* Owl carousel */}
        <Script src="js/owl.carousel.min.js"/>
        {/* Counters */}
        <Script src="js/jquery.countTo.js"/>

        <Script src="aos/dist/aos.js"/>

        {/*/!* MAIN JS *!/*/}
        <Script src="js/main.js"/>

        </html>
    )
}
