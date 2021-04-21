export class Usuario {
    nombreCompleto!: string;
    dni!: number;
    cuit!: string;
    direccion!: string;
    cuentas!: Cuenta[];
}

export class Cuenta {
    codigo!: string;
    saldo!: number;
}