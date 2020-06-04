export const revisarPresupuesto = (presupuesto, restate) => {
    let clase;

    if ((presupuesto / 4) > restate) {
        clase = 'alert alert-danger';
    } else if ((presupuesto / 2) > restate) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }

    return clase;
}