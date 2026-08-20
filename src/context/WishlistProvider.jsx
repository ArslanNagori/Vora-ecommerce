import React from "react";
import { useState, createContext, useEffect } from "react";

// Create the "shared box" itself
export const WishlistContext = createContext();

//Create a Provider component that holds the actual data
export const WishlistProvider = ({ children }) => {
	const [wishlist, setwishlist] = useState(() => {
		const saved = localStorage.getItem('wishlist');
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem('wishlist', JSON.stringify(wishlist));
	}, [wishlist])

	const toggleWishlist = (product) => {
		const exists = wishlist.some((item) => item.id === product.id);

		if (exists) {
			const newWishlist = wishlist.filter(
				(item) => item.id !== product.id
			);

			setwishlist(newWishlist);
		} else {
			const newWishlist = [...wishlist, product];
 
			setwishlist(newWishlist);
		}
	};

	const isInWishlist = (id)=>{
		return wishlist.some((item)=>item.id === id);
	}


	return (
		<WishlistContext.Provider value={{wishlist,toggleWishlist,isInWishlist}} >
			{children}
		</WishlistContext.Provider>
	)
};

