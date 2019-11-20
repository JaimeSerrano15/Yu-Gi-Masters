import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

class PostCreation extends React.Component {
        state = {
          comentarios: "",
          autor: "",
          titulo: "",
          contenido: "",
          id_usuario: ""
        };

    handlePost = event => {
        event.preventDefault();

        const post ={
        comentarios: " ",
        titulo: this.state.titulo,
        contenido: this.state.contenido,
        id_usuario: " "
        }

    axios.post('http://localhost:3001/posts', post)
    .then((res) => {
        console.log(res);
       })
       .catch((err) => {
           console.log(err);
       })
    }

    render(){
        return(
            <div>
              <section>
               <span>Crea un post para interactuar con la comunidad</span>
               <article>
                    <h3>Titulo de Post</h3>
                    <form onSubmit={this.handlePost}>
                       <input type="text" placeholder="Un título creativo..." name="titulo"onChange={this.AgregarTitulo.bind(this)}/>
                       <br></br> <br></br>
                       <textarea type="text" placeholder="Discusion" name="contenido" onChange={this.AgregarContenido.bind(this)}/>
                        <button className="submit"> Publicar </button>
                    </form>
               </article>
              </section>
            </div>
        )
    }

    AgregarTitulo(event){
        this.setState({
            titulo: event.target.value
        })
    }

    AgregarContenido(event){
        this.setState({
            contenido: event.target.value
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

class Create_Post_Window extends React.Component{
    render(){
        return(
            <div>
                 <Nav />
                 <PostCreation />
                 <Footer />
            </div>
        )
    }
}

// ============ LLAMADA AL INDEX.HTML

//ReactDOM.render(<Create_Post_Window />, document.getElementById("root"));

