"use client"

import Typed from 'typed.js'
import { useEffect, useRef } from 'react'


const TypedText = () => {
    const typedElement = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const options = {
            strings: [
                ' making ideas into reality',
                " the industry's finest visualization experts",
                ' this is the way',
                ' an unstoppable force of creativity',
                ' for when it has to be just perfect'
            ],
            typeSpeed:60,
            backSpeed:35,
            smartBackspace: true,
            loop:true
        };
        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={typedElement}/>
};

export default TypedText