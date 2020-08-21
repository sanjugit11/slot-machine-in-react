import React from 'react';

const Matching = (props) =>{
  console.log(props);
   const a= props.a;
   const b= props.b;
   const c= props.c;
   if(a===b && b===c){
     return(`this is matching ${a}${b}${c}`);
   }else{
     return(`this is  not matching ${a}${b}${c}`);
   }

}

 
const App = () =>{
  return (
  <>
    <h1> 🎰 wlcome to <span style={{color:"red"}}>SLOT MACHINE GAME  🎰</span> </h1>
     <Matching a='😏' b='😏'c='😏'  />
     <Matching a='😏' b='📦' c='😏'  />
     <Matching a='😏' b='😏'c='🔒'  />
   
   
    </>
  
  )
};
export default App;