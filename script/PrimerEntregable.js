let usuarioConEmail = "ana123gmail.com"
let contrasenia = "supercontrasenia"
const nombre = prompt("Ingrese su nombre")
const usuario = prompt("Ingrese su usuario")
const contra = prompt("Ingrese su contraseña")


const usuarioCompleto = (elUsuario, laContrasenia) => {
    if (usuarioConEmail != elUsuario && contrasenia != laContrasenia){
        alert("Su usuario y contraseña son erroneos")
    } else if (usuarioConEmail != elUsuario){
        alert("Su usuario es erroneo")
    } else if ( contrasenia != laContrasenia){
        alert("Su contraseña es erronea")
    }
}

usuarioCompleto(usuario, contra)

const validacionBienvenida = (elUsuario, laContrasenia, elNombre) => {
    if (usuarioConEmail === elUsuario && contrasenia === laContrasenia){
        alert(`Bienvenido/a ${elNombre}`)
    }
} 

validacionBienvenida(usuario, contra, nombre)

const tieneArroba = (elUsuario) => {
    let arroba = false; 
    for(let i = 0; i < elUsuario.length; i++) {
        if( elUsuario[i]=== "@"){
            arroba = true;
            
            break;
            
        }
    } 
    usuarioConEmail = prompt("El email debe contener @ ") 
}

tieneArroba(usuarioConEmail)

const longitudContrasenia = (contra) => {
    if( contra.length < 8) {
        alert ("Su contraseña es insegura")
    }
}

longitudContrasenia(contra)


const contraseniaNum = (laContrasenia) => {
    for( let i = 0; i < laContrasenia.length ; i++) {

        if (laContrasenia[i].match(/[0123456789]/)) {
            alert("Su contraseña posee un caracter alfanumérico")

            break;

        } else {

           let respuestaContra = (prompt( "Su contraseña debería tener caracteres alfanuméricos. Desea cambiarla? Indique Si o No")).toLowerCase()

            if (respuestaContra === "si"){
                contrasenia = prompt("A continuación cambie la contraseña")

                break;
            }

        }
    }
}

contraseniaNum(contrasenia)

console.log(contrasenia)
console.log(usuarioConEmail)