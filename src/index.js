import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./css/index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class Navo extends React.Component {
  render() {
    return (
      <header>
        <div className="logoType">
          <img
            src="https://carlisletheacarlisletheatre.org/images/yugioh-logo-transparent-5.png"
            alt="Logo"
            className="logo"
          ></img>
        </div>
      </header>
    );
  }
}
//Barra de navegacion principal de la pagina
class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className="logoType">
          <img
            src="https://carlisletheacarlisletheatre.org/images/yugioh-logo-transparent-5.png"
            alt="Logo"
            className="logo"
          ></img>
        </div>
        <nav>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Perfil</span>
            </li>
            <li>
              <span>Amigos</span>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
//Footer de la pagina, informacion de redes sociales, y de contacto
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li>
            <img
              src="https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png"
              alt="face"
              className="facebook"
            ></img>
          </li>
          <li className="info">
            <span>
              <a href="/info/">Acerca de</a>
            </span>
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="insta"
              className="instagram"
            ></img>
          </li>
        </ul>
      </footer>
    );
  }
}

//Enlace de informacion en el footer de la pagina
class Informacion extends React.Component {
  render() {
    return (
      <div>
        <p>
          Yu-Gi-Masters nació por la nececidad de la creciente comunidad, de El
          Salvador, de jugadores del popular juego de cartas, Yu-Gi-Oh!, de
          compartir entre si, de manera más amigable, sus inquietudes sobre el
          juego, torneos locales, estrategias, encontrar jugadores cercanos con
          quienes interactuar, competir, y aprender. Ya que la comunidad esta
          llena de gente muy experimentada, de nivel medio, y novatos, Yu-Gi-Web
          es el lugar perfecto para que todo tipo de jugador pueda aprender de
          los más veteranos, foguearse con gente de nivel medio, y conocer
          jugadores recientes.
          <br />
          <br />
          Nuevo fundador, Mario Rene Villalobos Mejía, tiene la visión de hacer
          crecer, y conectar aun mas la comunidad de Yu-Gi-Oh!, darle las
          erramientas para que comparta conocimiento, y convertirla en una
          comnuidad culta, y entendida profundamente en todo lo que implica ser
          un buen jugador de Yu-Gi. El equipo comprometido con al creacion de
          esta web, comparte la misma vision de Mario, y tiene la mision de
          llevar a la comunidad de jugadores de Yu-Gi-Oh de El Salvador, en la
          mejor comunidad a nivel de juego, y conocimiento del juego en toda la
          región centroamericana.
        </p>
      </div>
    );
  }
}

//Ventana para la creacion de publicacion dentro de un foro

//Formulario para la creacion de la publicacion
class PostCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: " ",
      title: " ",
      text: " "
    };
  }

  render() {
    return (
      <div className="body">
        <section className="bodySection">
          <br></br>
          <div className="span">
            <span className="frase">
              Crea un post para interactuar con la comunidad
            </span>
          </div>
          <div className="article">
            <form>
              <h3>Titulo</h3>
              <div className="title">
                <input
                  className="boxTitle"
                  type="text"
                  placeholder="Un título creativo..."
                  value={this.state.title}
                  onChange={this.setTitle.bind(this)}
                ></input>
              </div>
              <br></br> <br></br>
              <h3 className="postCont">Contenido</h3>
              <div className="content">
                <textarea
                  className="BigText"
                  type="text2"
                  placeholder="Discusion"
                  value={this.state.text}
                  onChange={this.setText.bind(this)}
                />
              </div>
              <div className="submitBtn">
                <button> Publicar </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }

  setTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  setText(event) {
    this.setState({
      text: event.target.value
    });
  }
}

//Vetana de creacion

class Create_Post_Window extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <PostCreation />
        <Footer />
      </div>
    );
  }
}

//Ventana para crear los foros del usuario

class CreateForo extends React.Component {
  state = {
    nombre: "",
    id_usuario: "",
    numero_miembros: "",
    miembros: "",
    publicaciones: "",
    fecha_creacion: ""
  };

  render() {
    return (
      <section>
        <span>Crea un foro a tu gusto</span>
        <article>
          <h3>Nombre de tu foro</h3>
          <form onSubmit={this.handleForum}>
            <input
              type="text"
              placeholder="Nombre creativo..."
              name="nombre"
              onChange={this.AgregarNombre.bind(this)}
            />
            <br></br> <br></br>
            <button className="submit"> Crear </button>
          </form>
        </article>
      </section>
    );
  }

  //Cambia el estado del atributo de nombre que tendra el foro

  AgregarNombre(event) {
    this.setState({
      nombre: event.target.value
    });
  }
}

//Componente de creacion de foro

class CreateForumWindow extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <CreateForo />
        <Footer />
      </div>
    );
  }
}

//Ventana para mostrar un foro seleccionado
class Foro_Seleccionado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_usuario: "",
      nombre: "Foro de prueba",
      numero_miembros: 0,
      fecha_creacion: "",
      id_miembros: [],
      publicaciones: []
    };
  }

  render() {
    return (
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
      </seccion>
    );
  }
}

//Ventana de Foro
class Foro_Page extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Foro_Seleccionado />
        <Footer />
      </div>
    );
  }
}

//Pagina principal a la redirige el login

class Info_Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_usuario: "MrPintoS8",
      seguidores: 3,
      correo: "00156618@uca.edu.sv"
    };
  }

  render() {
    return (
      <section>
        <aside>
          <h2>{this.state.nombre_usuario}</h2>
          <span>Seguidores: {this.state.seguidores}</span>
          <br></br>
          <span>Tus mazos</span>
        </aside>
      </section>
    );
  }
}

class Foros_Dispobles extends React.Component {
  render() {
    return (
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
    );
  }
}

class Botones_De_Creacion extends React.Component {
  render() {
    return (
      <div>
        <button className="submit"> Crear Foro </button>
        <br></br> <br></br>
        <button className="submit"> Crear Mazo</button>
      </div>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Info_Personal />
        <Foros_Dispobles />
        <Botones_De_Creacion />
        <Footer />
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Informacion} />
            <Route path="/login" component={Login} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/info" component={Informacion} />
            <p>hola</p>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

class Try extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Register />
        <Footer />
      </div>
    );
  }
}

class Register extends React.Component {
  state = {
    name: "",
    password: "",
    email: "",
    auth: null
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangePass = event => {
    this.setState({ password: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    };

    axios
      .post("http://localhost:3001/users/register", user)
      .then(res => {
        this.setState({ auth: res.data.registed });
      })
      .catch(err => {
        console.log("Noooooooo ");
      });
  };

  render() {
    if (this.state.auth) {
      return <Redirect to="/login/" />;
    }
    return (
      <div className="register-form">
        <div className="present">
          <p>
            Bienvenido a la versión Beta de Yu-Gi-Masters. Buscamos que los
            usuarios puedan encontrar información sobre mazos, cartas <br></br>{" "}
            y apoyo de la comunidad.
          </p>
        </div>
        <a href="/login/">¿Ya tienes cuenta? ¡Ingresa aquí!</a>
        <form onSubmit={this.handleSubmit} className="rf">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChangeName}
          ></input>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={this.handleChangePass}
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            onChange={this.handleChangeEmail}
          ></input>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      auth: null
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangePass = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const logger = {
      name: this.state.name,
      password: this.state.password
    };

    axios
      .post("http://localhost:3001/users/log", logger)
      .then(res => {
        console.log(res);
        this.setState({ auth: res.data.auth });
      })
      .catch(err => {
        console.log("NO SE HA INICIADO SESIÓN");
      });
  };

  render() {
    if (this.state.auth) {
      return <Redirect to="/homepage" />;
    }

    return (
    <div className="Login">
      <div className="LoginForm">
        <form method="POST">
          <label htmlFor="name"> Usuario: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChangeName}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            name="password"
            onChange={this.handleChangePass}
          ></input>
          <br></br>
          <br></br>
          <div className="Btn">
          <button type="button" onClick={this.handleSubmit}>
            ¡Ingresar!
          </button>
          <button type="button"> ¿Registrarse?</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

// ============ LLAMADA AL INDEX.HTML
