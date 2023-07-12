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
            <link rel="stylesheet" href="css/animate.css"/>
            {/* Icomoon Icon Fonts*/}
            <link rel="stylesheet" href="css/icomoon.css"/>
            {/* Bootstrap  */}
            <link rel="stylesheet" href="css/bootstrap.css"/>
            {/* Flexslider  */}
            <link rel="stylesheet" href="css/flexslider.css"/>
            {/* Flaticons  */}
            {/*<link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">*/}
            {/* Owl Carousel */}
            <link rel="stylesheet" href="css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
            {/* Theme style  */}
            <link rel="stylesheet" href="css/style.css"/>

            {/* Modernizr JS */}
            <Script src="js/modernizr-2.6.2.min.js"/>
            {/* FOR IE9 below */}
            {/*[if lt IE 9]>
                <Script src="js/respond.min.js"/>
                <![endif]*/}

        </head>

        <body className={inter.className}>{children}</body>

        {/* jQuery */}
        <Script src="js/jquery.min.js"/>
        {/* jQuery Easing */}
        <Script src="js/jquery.easing.1.3.js"/>
        {/* Bootstrap */}
        <Script src="js/bootstrap.min.js"/>
        {/* Waypoints */}
        <Script src="js/jquery.waypoints.min.js"/>
        {/* Flexslider */}
        <Script src="js/jquery.flexslider-min.js"/>
        {/* Owl carousel */}
        <Script src="js/owl.carousel.min.js"/>
        {/* Counters */}
        <Script src="js/jquery.countTo.js"/>

        {/*/!* MAIN JS *!/*/}
        <Script src="js/main.js"/>

        </html>
    )
}
