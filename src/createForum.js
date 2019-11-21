import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component{
    render(){
        return(
          <div>
             <nav>
                <ul>
                  <li><i>Logo</i></li>
                  <li><i>Home</i></li>
                  <li><span>Perfil</span></li>
                  <li><span>Amgos</span></li>
                </ul>
             </nav>
          </div>
        )
    }
}

