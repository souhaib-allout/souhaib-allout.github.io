'use client'
import AOS from "aos";
import {useEffect} from "react";

export const InitializeAos = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            // delay: 200,
        });
    }, [])

}
