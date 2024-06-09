import React from "react"
import { AppContext } from ".."

export default function Footer() {
    
    const a = React.useContext(AppContext)
    return (
        <footer>&#169; 2022 #VANLIFE {a}</footer>
    )
}