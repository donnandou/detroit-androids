import React from "react"

const ItemListContainer = ({propGreeting}) => {
    
    return (
        <section>
            <h1 className="font-weight-light m-1 text-danger display-2" >{propGreeting}</h1>
        </section>
    )
}

export default ItemListContainer