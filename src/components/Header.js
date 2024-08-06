import  { Component } from 'react';
function Header1(props){
    return(
     <h1>{props.date}</h1>
    );
}
class Hello2 extends  Component {
 render(){
    
    return (
     <h1>come on everybody {this.props.data} </h1>);
}
}
export {Header1,Hello2};