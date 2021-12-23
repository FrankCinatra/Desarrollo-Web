function validateStrings(){
    //Expresiones Regulares
    const mail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    const name = /(\w+\s*)+/
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let usuario = '';
    let user = '', cont=0;

    if(mail.test(email) && name.test(nombre)){
        if(localStorage.getItem('user'+cont)){
            while(localStorage.getItem('user'+cont)){
                cont++;
            }
            usuario = new Usuario(nombre,email,pwd);

            user = {
                Nombre: usuario.name,
                Email: usuario.mail,
                Password: usuario.password
            };

            localStorage.setItem("user"+cont, JSON.stringify(user));

            document.registro.submit();

            alert(''+ usuario.name);
        }else{
            usuario = new Usuario(nombre,email,pwd);

            user = {
                Nombre: usuario.name,
                Email: usuario.mail,
                Password: usuario.password
            };

            localStorage.setItem("user0", JSON.stringify(user));

            document.registro.submit();

            alert(''+ usuario.name);
        }
    }else{
        alert("Verifique sus datos");
    }
}
function signIn(){
    if(localStorage.getItem('user')){
        let email = document.getElementById("email").value;
        let pwd = document.getElementById("pwd").value;
        let user = JSON.parse(localStorage.getItem('user'));

        for(let i=0; i<user.length; i++){
            if(email == user[i]){
                document.sesionInit.submit();
            }else{
                alert("Usuario invalido");
            }
        }
    }else{alert("No hay usuarios registrados");}
}

class Usuario{
    constructor(nombre, email, pwd){
        this.name = nombre;
        this.mail = email;
        this.password = pwd;
    }
}