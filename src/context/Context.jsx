import React from 'react';

const Cart = React.createContext();

const Context = ({children}) => {
  return (
    <Cart.Provider>
      {children}
    </Cart.Provider>
    
  )
}

export default Context;