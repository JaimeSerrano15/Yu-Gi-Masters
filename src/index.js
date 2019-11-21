import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//Barra de navegacion principal de la pagina
class Nav extends React.Component{
    render(){
        return(
          <div>
             <nav>
                <ul>
                  <li><i>Logo</i></li>
                  <li><i>Home</i></li>
                  <li><span>Crear</span></li>
                  <li><span>Amigos</span></li>
                </ul>
             </nav>
          </div>
        )
    }
}

//Footer de la pagina, informacion de redes sociales, y de contacto

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

//Ventana para la creacion de publicacion dentro de un foro

//Formulario para la creacion de la publicacion
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
        };

    axios.post('http://localhost:3001/posts', post)
    .then((res) => {
        console.log(res);
       })
       .catch((err) => {
           console.log(err);
       })
    }
    
    //Renderizacion del formulario de creacion de publicaciones
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



//Vetana de creacion

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

//Ventana para crear los foros del usuario

class CreateForo extends React.Component{ 
    state = {
        nombre: "",
        id_usuario: "",
        numero_miembros: "",
        miembros: "",
        publicaciones: "",
        fecha_creacion: ""
    }

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

//Cambia el estado del atributo de nombre que tendra el foro

AgregarNombre(event){
    this.setState({
        nombre: event.target.value
    })
}
}

//Componente de creacion de foro

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

//Ventana para mostrar un foro seleccionado 
class Foro_Seleccionado extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id_usuario: '',
            nombre: 'Foro de prueba',
            numero_miembros: 0,
            fecha_creacion: '',
            id_miembros: [],
            publicaciones: []
        }
    }

    render(){
        return(
        <seccion>
            <h1>{this.state.nombre}</h1>
                <span>Seguir Foro</span>
                <h2>Publicaciones</h2>
                <ul>
                    <li>Post 1</li>
                    <li>Post 2</li>
                    <li>Post 3</li>
                    <li>Post 4</li>
                    <li>Post 5</li>
                </ul>
                <h3>Seguidores</h3>
                <ul>
                    <li>Seguidor 1</li>
                    <li>Seguidor 2</li>
                    <li>Seguidor 3</li>
                    <li>Seguidor 4</li>
                </ul>
                
                <button className="publicar"> Publicacion Nueva </button>
        </seccion>)
    }
}

//Ventana de Foro 
class Foro_Page extends React.Component{
    render(){
        return(
        <div>
            <Nav />
            <Foro_Seleccionado />
            <Footer />
        </div>)
    }
}

//Pagina principal a la redirige el login

class Info_Personal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre_usuario: 'MrPintoS8',
            seguidores: 3,
            correo: '00156618@uca.edu.sv'
        };
    }

    render(){
        return(
        <section>
            <aside>
              <h2>{this.state.nombre_usuario}</h2>
              <span>Seguidores: {this.state.seguidores}</span>
              <br></br>
              <span>Tus mazos</span>
            </aside>
        </section>
        )
    }
}

class Foros_Dispobles extends React.Component{
    render(){
        return(
            <section>
            <h3>Foros de la comunidad</h3> 
                 <input type="text" placeholder="Filtrar..." name="buscar" />
                 <button className="submit"> Buscar </button>
                <ul> 
                    <li>Foro 1</li>
                    <li>Foro 2</li>
                    <li>Foro 3</li>
                    <li>Foro 4</li>
                </ul>
            </section>
        )
    }
}

class Botones_De_Creacion extends React.Component{
    render(){
        return(
            <div>
                <button className="submit"> Crear Foro </button>
                <br></br> <br></br>
                 <button className="submit"> Crear Mazo</button>
            </div>
        )
    }
}

class HomePage extends React.Component{
    render(){
        return(
          <div>
                <Nav />
                <Info_Personal />
                <Foros_Dispobles />
                <Botones_De_Creacion />
                <Footer />
          </div>
        )
    }
}

ReactDOM.render(<Foro_Page />, document.getElementById("root"));

// ============ LLAMADA AL INDEX.HTML

