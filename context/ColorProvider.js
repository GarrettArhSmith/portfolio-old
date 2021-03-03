import React, { useState } from 'react'
export const ColorContext = React.createContext()

function ColorProvider(props) {
    const [colors, setColors] = useState({})

    const getRandomColor = alpha => {
        const hex = `#${Math.random().toString(16).slice(2, 8)}`
        const r = parseInt(hex.slice(1, 3), 16),
              g = parseInt(hex.slice(3, 5), 16),
              b = parseInt(hex.slice(5, 7), 16);
        
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    function changeColor(e, alpha) {
        const { name } = e.target
        setColors(prev => ({
            ...prev,
            [name]: getRandomColor(alpha)
        }))
    }

    function hexToRGB(hex, alpha) {
        if(hex) {
            
        }
    }

    return (
        <ColorContext.Provider
            value={{
                colors,
                changeColor
            }}
        >
            {props.children}
        </ColorContext.Provider>
    );
}

export default ColorProvider;