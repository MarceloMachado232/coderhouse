function sumar1(equipo, nombreEquipo) {
    let jugador;
    while (equipo.length < 5) {
        jugador = prompt(`Ingresa el nombre del Jugador que quieras sumar al ${nombreEquipo} (equipo tiene ${equipo.length}/5 jugadores) o escribe 'cancelar' para terminar`);
        if (jugador.toLowerCase() === 'cancelar') {
            alert("Operación cancelada.");
            return false;
        }
        equipo.push(jugador);
    }
    return true;
}

function elegirDia() {
    const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    let diaElegido;
    while (true) {
        diaElegido = prompt("Elige un día de la semana para jugar el partido (lunes, martes, etc.) o escribe 'cancelar' para salir").toLowerCase();
        if (dias.includes(diaElegido)) {
            return diaElegido;
        } else if (diaElegido === 'cancelar') {
            alert("Operación cancelada.");
            return null;
        } else {
            alert("Día no válido. Por favor, elige un día de la semana.");
        }
    }
}

function adicionarArbitro() {
    let respuesta = prompt("¿Quieres adicionar un árbitro al encuentro? (si/no)").toLowerCase();
    return respuesta === 'si';
}

const equipo1 = [];
const equipo2 = [];

alert("Bienvenido a CoderFutbol");

const nombreEquipo1 = prompt("Ingresa el nombre del primer equipo:");
const nombreEquipo2 = prompt("Ingresa el nombre del segundo equipo:");

if (!nombreEquipo1 || !nombreEquipo2) {
    alert("Debes ingresar los nombres de ambos equipos. Intenta nuevamente.");
} else {
    const equipo1Completo = sumar1(equipo1, nombreEquipo1);

    if (equipo1Completo) {
        sumar1(equipo2, nombreEquipo2);
    }

    const diaDelPartido = elegirDia();
    if (diaDelPartido) {
        const arbitroAdicional = adicionarArbitro();

        console.log(`${nombreEquipo1}:`);
        for (const jugador of equipo1) {
            console.log(jugador);
        }

        console.log(`${nombreEquipo2}:`);
        for (const jugador of equipo2) {
            console.log(jugador);
        }

        console.log(`El partido se jugará el ${diaDelPartido}.`);
        console.log(`¿Se adicionará un árbitro? ${arbitroAdicional ? 'Si' : 'No'}`);

        // Crea el mensaje del alert final
        const resumenPartido = `
        Partido entre ${nombreEquipo1} y ${nombreEquipo2}.
        Día del partido: ${diaDelPartido}.
        ¿Con árbitro? ${arbitroAdicional ? 'Si' : 'No'}.

        Jugadores del ${nombreEquipo1}:
        ${equipo1.join(', ')}

        Jugadores del ${nombreEquipo2}:
        ${equipo2.join(', ')}
        `;

        // Muestra el resumen del partido en un alert
        alert(resumenPartido);
    }
}