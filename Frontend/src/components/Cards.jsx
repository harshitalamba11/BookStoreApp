import React from 'react'

function Cards({ item }) {
    // console.log(item);
    return (
        <div className="m-4 card bg-base-100 shadow-lg transition-transform transform hover:scale-105 duration-150">
            <figure>
                <img
                    src={item.image} // Use item.image instead of item.img
                    alt={item.name} // Use item.name for better accessibility
                    className="w-full h-44 object-cover" // Responsive image
                />
            </figure>
            <div className="card-body p-3">
                <h2 className="card-title text-lg font-semibold">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p className="text-gray-600">{item.title}</p>
                <div className="card-actions justify-between mt-4">
                    <div className="badge badge-outline p-4">${item.price}</div>
                    <button className="btn btn-primary hover:bg-pink-500 hover:border-none">Buy Now</button>
                </div>
            </div>
        </div>
    );

}

export default Cards
