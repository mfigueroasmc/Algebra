import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "Práctica 11: Espacios con Producto Interior",
    text: "Sea V un K-espacio vectorial con producto interior. Si x, y ∈ V son vectores ortogonales, ¿cuál de las siguientes afirmaciones es verdadera respecto al Teorema de Pitágoras generalizado?",
    options: [
      { id: "a", text: "||x + y||² = ||x||² - ||y||²", isCorrect: false },
      { id: "b", text: "||x + y||² = ||x||² + ||y||²", isCorrect: true },
      { id: "c", text: "||x + y|| = ||x|| + ||y||", isCorrect: false },
      { id: "d", text: "⟨x, y⟩ = ||x|| ||y||", isCorrect: false },
    ],
    explanation: "Si x e y son ortogonales, entonces ⟨x, y⟩ = 0. Al expandir ||x + y||² = ⟨x+y, x+y⟩ = ||x||² + 2⟨x,y⟩ + ||y||², el término cruzado se anula, resultando en ||x||² + ||y||²."
  },
  {
    id: 2,
    topic: "Práctica 14: Valores Propios",
    text: "Considere la matriz A definida por bloques. Determine los valores propios (eigenvalues) de A.",
    matrix: {
      rows: 4,
      cols: 4,
      data: [
        [1, 2, -1, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 1, -1, 1]
      ]
    },
    options: [
      { id: "a", text: "λ = 1 (mult. alg. 4)", isCorrect: false },
      { id: "b", text: "λ = 1, λ = 0, λ = -1", isCorrect: false },
      { id: "c", text: "λ = 1 (mult. 2), λ = 1 + i, λ = 1 - i", isCorrect: true },
      { id: "d", text: "λ = 1, λ = 2, λ = 3, λ = 4", isCorrect: false },
    ],
    explanation: "La matriz es triangular por bloques. El bloque superior izquierdo tiene valores propios 1 (doble). El bloque inferior derecho es una matriz 2x2 [[1, 1], [-1, 1]] cuyos valores propios son complejos conjugados 1 ± i."
  },
  {
    id: 3,
    topic: "Práctica 12: Complemento Ortogonal",
    text: "En R³, considere el conjunto S = {(1, 0, 1), (1, 1, -1), (2, 1, 0)}. ¿Cuál es la dimensión de S?",
    options: [
      { id: "a", text: "Dimensión 3 (Base de R³)", isCorrect: false },
      { id: "b", text: "Dimensión 2", isCorrect: true },
      { id: "c", text: "Dimensión 1", isCorrect: false },
      { id: "d", text: "Dimensión 0", isCorrect: false },
    ],
    explanation: "Note que el tercer vector es la suma de los dos primeros: (1,0,1) + (1,1,-1) = (2,1,0). Por lo tanto, los vectores son linealmente dependientes y generan un subespacio de dimensión 2."
  },
  {
    id: 4,
    topic: "Práctica 13: Transformaciones Lineales",
    text: "Sea T: P₂(R) → P₂(R) tal que T(1) = 1+x, T(x) = 3-x², T(x²) = 4+2x-3x². Calcule T(-2x²).",
    options: [
      { id: "a", text: "-8 - 4x + 6x²", isCorrect: true },
      { id: "b", text: "4 + 2x - 3x²", isCorrect: false },
      { id: "c", text: "0", isCorrect: false },
      { id: "d", text: "8 + 4x - 6x²", isCorrect: false },
    ],
    explanation: "Por linealidad, T(-2x²) = -2 * T(x²). Dado T(x²) = 4 + 2x - 3x², multiplicamos por -2 obteniendo -8 - 4x + 6x²."
  },
  {
    id: 5,
    topic: "Práctica 15: Isomorfismos",
    text: "Considere T: C → C definida por T(1) = 3 + 2i y T(i) = 1 + i. Si B es la base canónica {1, i}, ¿cuál es la matriz representante [T]B?",
    matrix: {
      rows: 2,
      cols: 2,
      data: [
        [3, 1],
        [2, 1]
      ]
    },
    options: [
      { id: "a", text: "La matriz mostrada es correcta.", isCorrect: true },
      { id: "b", text: "Transpuesta: [[3, 2], [1, 1]]", isCorrect: false },
      { id: "c", text: "Identidad: [[1, 0], [0, 1]]", isCorrect: false },
      { id: "d", text: "Nula", isCorrect: false },
    ],
    explanation: "La matriz representante coloca las coordenadas de las imágenes de la base en las columnas. T(1) = (3, 2) en la base canónica, va a la columna 1. T(i) = (1, 1) en la base canónica, va a la columna 2."
  },
  {
    id: 6,
    topic: "Práctica 11: Norma Inducida",
    text: "Sea B una matriz invertible y el producto interior ⟨x, y⟩_B = ⟨Bx, By⟩. ¿Cuál es la expresión para la norma inducida ||v||_B?",
    options: [
      { id: "a", text: "||v||_B = ||Bv||", isCorrect: true },
      { id: "b", text: "||v||_B = ||v||", isCorrect: false },
      { id: "c", text: "||v||_B = ||B⁻¹v||", isCorrect: false },
      { id: "d", text: "||v||_B = ⟨v, v⟩", isCorrect: false },
    ],
    explanation: "Por definición, la norma inducida es la raíz cuadrada del producto interior del vector consigo mismo: ||v||_B = sqrt(⟨v, v⟩_B) = sqrt(⟨Bv, Bv⟩) = ||Bv||."
  }
];