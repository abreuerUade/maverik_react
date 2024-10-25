export const testInvestorQuestions = [
{
    id: "q1",
    question: "¿Cómo defines tu conocimiento sobre las distintas alternativas de inversión en el mercado de capitales?",
    possible_answers: [
        {
            answer: "Nulo",
            description: "No conozco ni realicé inversiones.",  
            value: 1
        },
        {
            answer: "Poco",
            description: "Sólo utilizo servicios bancarios (ej. Plazo fijo).", 
            value: 2
        },
        {
            answer: "Mínimo",
            description: "No realicé nunca inversiones fuera del banco, pero conozco sobre algunas opciones para invertir.", 
            value: 3
        },
        {
            answer: "Intermedio",
            description: "Realicé inversiones en forma ocasional y conozco los riesgos del mercado de capitales.", 
            value: 4
        },
        {
            answer: "Experto o profesional en finanzas",
            description: "Tengo mucho conocimiento y experiencia en inversiones. Conozco el riesgo y rentabilidad de los distintos productos.", 
            value: 5
        }
    ]
},
{
    id: "q2",
    question: "¿Cuánta experiencia tienes invirtiendo?",
    possible_answers: [
        {
            answer: "Ninguna",
            description: "Como mucho compré o vendí moneda extranjera en el banco.", 
            value: 1
        },
        {
            answer: "Mínima",
            description: "Realicé depósitos en Plazo Fijo bancario y/o compra/venta de moneda extrajera.", 
            value: 2
        },
        {
            answer: "Intermedia",
            description: "Invertí en Fondos Comunes de Inversión y/o algunas de las anteriores.", 
            value: 3
        },
        {
            answer: "Avanzada",
            description: "Realicé compra/venta de acciones y/o bonos y/o algunas de las anteriores.", 
            value: 4
        },
        {
            answer: "Experto o profesional en finanzas",
            description: "Invertí en derivados financieros y/o algunas de las anteriores.", 
            value: 5
        }
    ]
},
{
    id: "q3",
    question: "¿Qué porcentaje de tu ingreso puedes ahorrar mensualmente?",
    possible_answers: [
        {
            answer: "Hasta el 10%",
            description: null, 
            value: 1
        },
        {
            answer: "Hasta el 25%",
            description: null,
            value: 2
        },
        {
            answer: "Hasta el 50%",
            description: null, 
            value: 3
        },
        {
            answer: "Hasta el 75%",
            description: null, 
            value: 4
        }
    ]
},
{
    id: "q4",
    question: "¿Qué porcentaje de tus ahorros invertirías?",
    possible_answers: [
        {
            answer: "Hasta el 10%",
            description: null, 
            value: 1
        },
        {
            answer: "Hasta el 25%",
            description: null, 
            value: 2
        },
        {
            answer: "Hasta el 50%",
            description: null, 
            value: 3
        },
        {
            answer: "Hasta el 75%",
            description: null, 
            value: 4
        }
    ]
},
{
    id: "q5",
    question: "¿Por cuánto tiempo estarías dispuesto a mantener una inversión?",
    possible_answers: [
        {
            answer: "Menos de 1 año.",
            description: null, 
            value: 1
        },
        {
            answer: "Entre 1 y 5 años.",
            description: null, 
            value: 2
        },
        {
            answer: "Entre 5 y 10 años.",
            description: null,
            value: 3
        },
        {
            answer: "Más de 10 años.",
            description: null, 
            value: 4
        }
    ]
},
{
    id: "q6",
    question: "¿Qué buscas al invertir?",
    possible_answers: [
        {
            answer: "Mantener el valor de mis ahorros.",
            description: null, 
            value: 1
        },
        {
            answer: "Ganarle a la inflación.",
            description: null, 
            value: 2
        },
        {
            answer: "Obtener rendimientos entre la tasa de inflación y hasta 5% más que la misma.",
            description: null, 
            value: 3
        },
        {
            answer: "Obtener rendimientos mayores a 5% sobre la tasa de inflación, aún si eso implica asumir mayores riesgos.",
            description: null,
            value: 4
        }
    ]
},
{
    id: "q7",
    question: "Si al recibir información de tus inversiones, observas una baja importante en el valor de uno de tus activos ¿Qué proporción de tus inversiones mantendrías?",
    possible_answers: [
        {
            answer: "Me retiro inmediatamente (vendo el total).",
            description: null, 
            value: 1
        },
        {
            answer: "Rescato parte de la inversión y el resto lo asigno a productos de menor riesgo.",
            description: null, 
            value: 2
        },
        {
            answer: "Mi estrategia no varía, ya creo que para obtener rentabilidades superiores, existe la posibilidad de que hayan rentabilidades negativas (mantengo el total).",
            description: null, 
            value: 3
        },
        {
            answer: "Obtener rendimientos mayores a 5% sobre la tasa de inflación, aún si eso implica asumir mayores riesgos.",
            description: null,
            value: 4 
        }
    ]
},
];

export const goals = [
    {
        description: "Comprar una casa o un departamento",
        value: 1,
    },
    {
        description: "Comprar un vehículo",
        value: 2,
    },
    {
        description: "Crear un fondo para estudios universitarios (propios o de un familiar)",
        value: 3,
    },
    {
        description: "Crear un fondo para el retiro jubilatorio",
        value: 4,
    },
    {
        description: "Preservar el valor de los ahorros en el tiempo",
        value: 5,
    },
    {
        description: "Ahorrar para realizar un viaje",
        value: 6,
    },
    {
        description: "Generar un fondo para iniciar un emprendimiento",
        value: 7,
    }
]

export const riskTolerances = [
    {
        name: "Alta",
        description: "Puedes obtener mejores rendimientos con mayor probabilidad de perdidas",
        value: 3,
    },
    {
        name: "Media",
        description: "Puedes obtener rendimientos aceptables con una probabilidad de perdidas equilibrada",
        value: 2,
    },
    {
        name: "Baja",
        description: "Puedes obtener rendimientos bajos con una probabilidad de pérdida mucho más baja", 
        value: 1,
    }
]

export const sessionPorpuses = [
    {
        description: "Fortalecer mis conocimientos financieros",
        value: 1,
        path: "/wizard",
    },
    {
        description: "Busco asistencia para lograr un objetivo personal",
        value: 2,
        path: "/wizard/goals",
    },
    {
        description: "Obtener información de los mercados y realizar investigación financiera",
        value: 3,
        path: "/wizard",
    }
]
