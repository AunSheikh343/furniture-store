import {
    createContext,
    useContext,
    useState
} from "react";

const WishlistContext=createContext();

export function WishlistProvider({children}){

const [wishlist,setWishlist]=useState([]);

const addWishlist=(product)=>{

setWishlist(prev=>{

if(prev.find(i=>i.id===product.id))
return prev;

return [...prev,product];

});

};

const removeWishlist=id=>{

setWishlist(prev=>

prev.filter(i=>i.id!==id)

);

};

return(

<WishlistContext.Provider
value={{
wishlist,
addWishlist,
removeWishlist
}}
>

{children}

</WishlistContext.Provider>

);

}

export function useWishlist(){

return useContext(WishlistContext);

}