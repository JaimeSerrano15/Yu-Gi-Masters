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

class CreateForo extends React.Component{ 
        state = {
            nombre: "",
            id_usuario: "",
            numero_miembros: "",
            miembros: "",
            publicaciones: "",
            fecha_creacion: ""
        };

    render(){
        return(
        <section>
            <span>Crea un foro a tu gusto</span>
            <article>
                 <h3>Nombre de tu foro</h3>
                 <form onSubmit={this.handleForum}>
                    <input type="text" placeholder="Nombre creativo..." name="nombre" onChange={this.AgregarNombre.bind(this)}/>
                    <br></br> <br></br>
                     <button className="submit"> Crear </button>
                 </form>
            </article>
         </section>
        )
    }

    AgregarNombre(event){
        this.setState({
            nombre: event.target.value
        })
    }
}

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <span>Info</span>
                <span>Facebook</span>
                <span>Insta</span>
            </footer>
        )
    }
}

class CreateForumWindow extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <CreateForo />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<CreateForumWindow/>, document.getElementById("root"));