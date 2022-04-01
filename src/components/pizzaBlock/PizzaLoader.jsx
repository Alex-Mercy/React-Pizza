import React from 'react'
import ContentLoader from "react-content-loader"

function PizzaLoader() {
    return (
        <ContentLoader 
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="275" rx="6" ry="6" width="280" height="24" /> 
        <circle cx="130" cy="130" r="130" /> 
        <rect x="3" y="322" rx="6" ry="6" width="280" height="39" /> 
        <rect x="3" y="384" rx="6" ry="6" width="113" height="21" /> 
        <rect x="132" y="376" rx="6" ry="6" width="151" height="35" />
      </ContentLoader>
    )
}

export default PizzaLoader