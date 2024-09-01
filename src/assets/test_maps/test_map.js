export const test = {
    "id": "626dc19c89d1920ec2525c46",
    "description": "Un curso de mate de pruebas",
    "name": "Matematica General",
    "status": "active",
    "code": "MA-0002",
    "dependecies": [],
    "graph": {
      "id": "626dc1a189d1920ec2525c4a",
      "links": [
        {
          "source": "Numeros Reales y Conjuntos",
          "target": "Expresiones Algebraicas"
        },
        {
          "source": "Expresiones Algebraicas",
          "target": "Ecuaciones Algebraicas"
        }
      ],
      "nodes": [
        {
          "id": "Numeros Reales y Conjuntos",
          "subjectId": "1"
        },
        {
          "id": "Expresiones Algebraicas",
          "subjectId": "2"
        },
        {
          "id": "Ecuaciones Algebraicas",
          "subjectId": "3"
        }
      ],
      "courseId": "626dc19c89d1920ec2525c46"
    },
    "subjects": [
      {
        "id": "1",
        "name": "Numeros Reales y Conjuntos",
        "resources": [
          {
            "data": "Numeros Reales, Potencias y Raices",
            "path": "./html_files/1_numeros_reales_y_conjuntos/1_numeros_reales_potencias_raices/reales_5_1.html",
            "link": "https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/ecuaciones-lineales.html"
          },
          {
            "data": "Operaciones Combinadas",
            "link": "https://www.youtube.com/watch?v=qaDV-0I1lek"
          }
        ],
        "courseId": "626dc19c89d1920ec2525c46",
        "dependencies": [
          "2"
        ]
      },
      {
        "id": "2",
        "name": "Expresiones Algebraicas",
        "resources": [
          {
            "data": "Concepto y Valor Numerico",
            "path": "src/assets/html_files/2_expresiones_algebraicas/1_concepto_y_valor_numerico/Expresiones_1_1.html",
            "link": "https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/ecuaciones-lineales.html"
          },
          {
            "data": "Polinomios y Operaciones",
            "path": "src/assets/html_files/2_expresiones_algebraicas/2_polinomios_y_operaciones/Expresiones_2_1.html",
            "link": "https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/ecuaciones-lineales.html"
          },
          {
            "data": "Formulas Notables",
            "path": "src/assets/html_files/2_expresiones_algebraicas/3_formulas_notables/Expresiones_3_1.html",
            "link": "https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/ecuaciones-lineales.html"
          }
        ],
        "courseId": "626dc19c89d1920ec2525c46",
        "dependencies": [
          "3"
        ]
      },
      {
        "id": "3",
        "name": "Ecuaciones Algebraicas",
        "resources": [
          {
            "data": "Ecuaciones Polinomiales",
            "path": "src/assets/html_files/3_ecuaciones_algebraicas/1_ecuaciones_polinomiales/Ecuaciones_1_1.html",
            "link": "https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/ecuaciones-lineales.html"
          },
          {
            "data": "Ecuaciones con Raices",
            "path": "src/assets/html_files/3_ecuaciones_algebraicas/2_ecuaciones_con_raices/Ecuaciones_2_1.html",
            "link": "https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/ecuaciones-lineales.html"
          },
          {
            "data": "Ecuaciones con Raices",
            "path": "src/assets/html_files/3_ecuaciones_algebraicas/3_ecuaciones_racionales/Ecuaciones_3_1.html",
            "link": "https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/ecuaciones-lineales.html"
          }
          
          
        ],
        "courseId": "626dc19c89d1920ec2525c46",
        "dependencies": []
      }
    ]
  }

