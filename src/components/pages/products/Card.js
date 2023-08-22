import React from 'react'

const Card = () => {
    return (
        <div className="product">
            <h3>Nom du produit</h3>
            <div className="info_product">
                <p>Prix du produit</p>
                <button type="button">Ajouter</button>
            </div>
        </div>
    )
}

export default Card