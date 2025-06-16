export class Usuario {
    _id!: string;
    email: string;
    username: string;
    password: string;
    activo: boolean;
    perfil: string;
    nombres: string;
    apellido: string;
    dni: string;
    telefono: string;

    constructor(){
        this.email = "";
        this.username = "";
        this.password = "";
        this.activo = true;
        this.perfil = "";
        this.nombres = "";
        this.apellido = "";
        this.dni = "";
        this.telefono = "";
    }
}
