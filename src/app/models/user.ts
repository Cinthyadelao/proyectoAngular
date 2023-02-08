export interface User {
    id: number;
    nombre: string;
    edad: number;
    correo: string;
    pasatiempos: string[];
    permisos: {
        mostrar: boolean;
        editar: boolean;
        eliminar: boolean;
    }
    nacionalidad?: string;
}