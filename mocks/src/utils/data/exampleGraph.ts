/*
 
data: [{
  nodes: [{
    id:
    label:
    content:
  }],
  links:[
    {
      source: 
      target:
    }
  ]
}]

*/

const data = {
    nodes: [
        {
            id: 0,
            label: 'Numeros Reales y sus Operaciones',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Números Enteros',
                            content:
                                'https://www.cuemath.com/numbers/integers/',
                        },
                        {
                            id: 1,
                            label: 'Fracciones',
                            content:
                                'https://www.cuemath.com/numbers/fractions/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Exponentes',
                            content:
                                'https://www.cuemath.com/algebra/exponents/',
                        },
                        {
                            id: 3,
                            label: 'Orden de Operaciones',
                            content: 'https://www.cuemath.com/numbers/pemdas/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 2,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 1,
            label: 'Ecuaciones Lineales e Inigualdades',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Expresiones con Variables',
                            content:
                                'https://www.cuemath.com/algebra/variable-expressions/',
                        },
                        {
                            id: 1,
                            label: 'Ecuaciones Lineales',
                            content:
                                'https://www.cuemath.com/algebra/linear-equations/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Igualdades e Inigualdades',
                            content:
                                'https://www.cuemath.com/commercial-math/ratio/',
                        },
                        {
                            id: 3,
                            label: 'Proporciones',
                            content:
                                'https://www.cuemath.com/commercial-math/proportion/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 2,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: 'Introducción a Funciones',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: '¿Qué son Funciones?',
                            content:
                                'https://www.cuemath.com/calculus/What-are-functions/',
                        },
                        {
                            id: 1,
                            label: 'Ecuaciones Polinomiales',
                            content:
                                'https://www.cuemath.com/calculus/polynomial-functions/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Gráficas de Funciones',
                            content:
                                'https://www.cuemath.com/calculus/visualizing-functions-through-graphs/',
                        },
                        {
                            id: 3,
                            label: 'Progresiones Aritméticas y Geométricas',
                            content:
                                'https://www.cuemath.com/algebra/arithmetic-and-geometric-progression/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 2,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            label: 'Gráficos de Líneas',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Sistema Cartesiano',
                            content:
                                'https://www.cuemath.com/geometry/cartesian-coordinate-system/',
                        },
                        {
                            id: 1,
                            label: 'Graficando Ecuaciones Lineales',
                            content:
                                'https://www.cuemath.com/algebra/graphing-linear-equations/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Líneas Perpendiculares',
                            content:
                                'https://www.cuemath.com/geometry/parallel-and-perpendicular-lines/',
                        },
                        {
                            id: 3,
                            label: 'Líneas Paralelas',
                            content:
                                'https://www.cuemath.com/geometry/parallel-lines/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 2,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            label: 'Solución de Sistemas Lineales',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Solución por Sustitución',
                            content:
                                'https://www.cuemath.com/algebra/substitution-method/',
                        },
                        {
                            id: 1,
                            label: 'Solución por Multiplicación Cruzada',
                            content:
                                'https://www.cuemath.com/algebra/cross-multiplication-method/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Sistema de Ecuaciones',
                            content:
                                'https://www.cuemath.com/calculators/system-of-equations-calculator/',
                        },
                        {
                            id: 3,
                            label: 'Soluciones de una ecuación lineal',
                            content:
                                'https://www.cuemath.com/algebra/solutions-of-a-linear-equation/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 1,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 5,
            label: 'Polinomios y sus Operaciones',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Polinomios',
                            content:
                                'https://www.cuemath.com/algebra/polynomials/',
                        },
                        {
                            id: 1,
                            label: 'Expresiones Polinomiales',
                            content:
                                'https://www.cuemath.com/algebra/polynomial-expressions/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Polinomios de Grado N',
                            content:
                                'https://www.cuemath.com/algebra/nth-degree-polynomial/',
                        },
                        {
                            id: 3,
                            label: 'Multiplicación de Polinomios',
                            content:
                                'https://www.cuemath.com/algebra/multiplying-polynomials/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 0,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 6,
            label: 'Factorización y Solución por Factorización',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: '¿Qué es un factor?',
                            content: 'https://www.cuemath.com/numbers/factors/',
                        },
                        {
                            id: 1,
                            label: 'Métodos de Factorización',
                            content:
                                'https://www.cuemath.com/algebra/polynomial-expressions/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Factorización de Expresiones Algebráicas',
                            content:
                                'https://www.cuemath.com/algebra/factorization-of-algebraic-expressions/',
                        },
                        {
                            id: 3,
                            label: 'Factorización de Expresiones Cuadráticas',
                            content:
                                'https://www.cuemath.com/algebra/factorization-of-quadratic-equations/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 1,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 7,
            label: 'Exponentes y Funciones Exponenciales',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Exponentes',
                            content:
                                'https://www.cuemath.com/algebra/exponents/',
                        },
                        {
                            id: 1,
                            label: 'Funciones Exponenciales',
                            content:
                                'https://www.cuemath.com/calculus/exponential-functions/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Exponentes Irracionales',
                            content:
                                'https://www.cuemath.com/algebra/irrational-exponents/',
                        },
                        {
                            id: 3,
                            label: 'Operaciones con Términos Exponenciales',
                            content:
                                'https://www.cuemath.com/algebra/operations-on-exponential-terms/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 0,
                            target: 2,
                        },
                        {
                            source: 1,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 8,
            label: 'Expresiones y Ecuaciones Racionales',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Números Racionales',
                            content: 'https://www.cuemath.com/numbers/factors/',
                        },
                        {
                            id: 1,
                            label: 'Funciones Racionales',
                            content:
                                'https://www.cuemath.com/calculus/rational-function/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Exponentes No Enteros',
                            content:
                                'https://www.cuemath.com/algebra/rational-exponents/',
                        },
                        {
                            id: 3,
                            label: 'Simplificando Expresiones Racionales',
                            content:
                                'https://www.cuemath.com/algebra/simplifying-rational-expression/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 3,
                        },
                        {
                            source: 0,
                            target: 2,
                        },
                    ],
                },
            ],
        },
        {
            id: 9,
            label: 'Expresiones y Ecuaciones Radicales',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Números con Raices Impropias',
                            content: 'https://www.cuemath.com/numbers/surds/',
                        },
                        {
                            id: 1,
                            label: 'Cuadrados y Raiz Cuadrada',
                            content:
                                'https://www.cuemath.com/algebra/squares-and-square-roots/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Racionalización',
                            content:
                                'https://www.cuemath.com/numbers/rationalization/',
                        },
                        {
                            id: 3,
                            label: 'Racionalización del Denominador',
                            content:
                                'https://www.cuemath.com/numbers/rationalize-the-denominator/',
                        },
                    ],
                    links: [
                        {
                            source: 1,
                            target: 0,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 2,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 10,
            label: 'Solución de Ecuaciones Cuadráticas y Gráficas de Parabolas',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Cuadrados y Raíz Cuadrada',
                            content:
                                'https://www.cuemath.com/algebra/squares-and-square-roots/',
                        },
                        {
                            id: 1,
                            label: 'Fórmula Cuadrática',
                            content:
                                'https://www.cuemath.com/algebra/quadratic-equations/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Gráfica de una Función Cuadrática',
                            content:
                                'https://www.cuemath.com/calculus/graphing-a-quadratic-function/',
                        },
                        {
                            id: 3,
                            label: 'Números y Soluciones Complejas',
                            content:
                                'https://www.cuemath.com/numbers/complex-numbers/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 1,
                            target: 3,
                        },
                    ],
                },
            ],
        },
        {
            id: 11,
            label: 'Análisis de Datos y Probabilidad',
            data: [
                {
                    nodes: [
                        {
                            id: 0,
                            label: 'Manejo de Datos',
                            content:
                                'https://www.cuemath.com/data/data-handling/',
                        },
                        {
                            id: 1,
                            label: 'Probabilidad y Estadística',
                            content: 'https://www.cuemath.com/data/statistics/',
                        },
                        ,
                        {
                            id: 2,
                            label: 'Datos Categóricos',
                            content:
                                'https://www.cuemath.com/data/categorical-data/',
                        },
                        {
                            id: 3,
                            label: 'Permutaciones y Combinaciones',
                            content:
                                'https://www.cuemath.com/data/permutations-and-combinations/',
                        },
                    ],
                    links: [
                        {
                            source: 0,
                            target: 1,
                        },
                        {
                            source: 1,
                            target: 2,
                        },
                        {
                            source: 1,
                            target: 3,
                        },
                    ],
                },
            ],
        },
    ],
    links: [
        { source: 0, target: 1 },
        { source: 1, target: 2 },
        { source: 2, target: 3 },
        { source: 2, target: 4 },
        { source: 4, target: 5 },
        { source: 5, target: 6 },
        { source: 6, target: 7 },
        { source: 6, target: 8 },
        { source: 6, target: 9 },
        { source: 6, target: 10 },
        { source: 10, target: 11 },
    ],
};

export default data;
