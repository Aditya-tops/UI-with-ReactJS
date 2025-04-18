import React from "react";

const List = ({ catoons }) => {
    return (
        <>
            {catoons.map((hero) =>
            {
                const { id, name, age, image } = hero
                return (
                    <>
                        <div key={id} className="person" >
                            <img src={image} alt="image" />
                            <div>
                                <h4>{name}</h4>
                                <p>{age}</p>
                            </div>
                        </div>
                    </>
                )
                
            }
            )}
        </>
    )
}

export default List;