import React, { useEffect, useState } from 'react';
import './FontDinamica.css'; 

const FontDinamica = () => {
    
    const fonts = ['font1', 'font2', 'font3'];

    const [currentFont, setCurrentFont] = useState(fonts[0]);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentFont(prevFont => {

                const currentIndex = fonts.indexOf(prevFont);

                return fonts[(currentIndex + 1) % fonts.length];

            });

        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (

        <h1 className={currentFont}>Micael Ribeiro Rocha | Software Engineering</h1>

    );

};

export default FontDinamica;
