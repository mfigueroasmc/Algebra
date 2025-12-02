import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: "quiz-1",
    title: "Test 1: Geometría Vectorial",
    description: "Producto interior, normas, proyecciones y ortogonalidad (Prácticas 11-12).",
    icon: "geometry",
    difficulty: "Básico",
    questions: [
      {
        id: 101,
        topic: "Fórmulas: Producto Interior Generalizado",
        text: "Según la definición de producto interior generalizado ⟨u, v⟩ = uᵀMv, ¿qué propiedad fundamental debe cumplir la matriz M?",
        options: [
          { id: "a", text: "Debe ser ortogonal.", isCorrect: false },
          { id: "b", text: "Debe ser simétrica definida positiva.", isCorrect: true },
          { id: "c", text: "Debe ser diagonal.", isCorrect: false },
          { id: "d", text: "Debe tener determinante nulo.", isCorrect: false },
        ],
        explanation: "Para que defina un producto interior válido (cumpliendo positividad), la matriz M debe ser simétrica y definida positiva (xᵀMx > 0 para todo x ≠ 0)."
      },
      {
        id: 102,
        topic: "Práctica 11: Pitágoras Generalizado",
        text: "Si x, y son vectores ortogonales en un espacio con producto interior, ¿cuál es la relación correcta?",
        options: [
          { id: "a", text: "||x + y||² = ||x||² + ||y||²", isCorrect: true },
          { id: "b", text: "||x + y|| = ||x|| + ||y||", isCorrect: false },
          { id: "c", text: "⟨x, y⟩ = ||x||·||y||", isCorrect: false },
          { id: "d", text: "||x - y||² = ||x||² - ||y||²", isCorrect: false },
        ],
        explanation: "Es el Teorema de Pitágoras. Al desarrollar ⟨x+y, x+y⟩, los términos cruzados 2⟨x,y⟩ se anulan porque son ortogonales."
      },
      {
        id: 103,
        topic: "Fórmulas: Proyección",
        text: "La fórmula para la proyección de un vector 'a' sobre un vector 'b' (proj_b(a)) es:",
        options: [
          { id: "a", text: "(a·b / ||a||²) * a", isCorrect: false },
          { id: "b", text: "(a·b / ||b||) * b", isCorrect: false },
          { id: "c", text: "(a·b / ||b||²) * b", isCorrect: true },
          { id: "d", text: "a - (a·b)b", isCorrect: false },
        ],
        explanation: "La proyección es un vector en la dirección de b, escalado por el factor (a·b)/(b·b)."
      },
      {
        id: 104,
        topic: "Práctica 12: Complemento Ortogonal",
        text: "Si S = {(1, 0, 1), (1, 1, -1), (2, 1, 0)} en R³, determine la dimensión del espacio generado.",
        options: [
          { id: "a", text: "3", isCorrect: false },
          { id: "b", text: "2", isCorrect: true },
          { id: "c", text: "1", isCorrect: false },
          { id: "d", text: "0", isCorrect: false },
        ],
        explanation: "El tercer vector es suma de los dos primeros: (1,0,1)+(1,1,-1)=(2,1,0). Son LD, por lo que generan un plano (Dim 2)."
      },
      {
        id: 105,
        topic: "Fórmulas: Gram-Schmidt",
        text: "En el proceso de Gram-Schmidt, para obtener el vector ortogonal u_k a partir de v_k, restamos:",
        options: [
          { id: "a", text: "La proyección de v_k sobre todos los u_i anteriores.", isCorrect: true },
          { id: "b", text: "El promedio de los vectores anteriores.", isCorrect: false },
          { id: "c", text: "El vector v_{k-1} normalizado.", isCorrect: false },
          { id: "d", text: "Nada, v_k ya es ortogonal.", isCorrect: false },
        ],
        explanation: "La fórmula es u_k = v_k - Σ proj_{ui}(v_k). Se eliminan las componentes en las direcciones ya procesadas."
      }
    ]
  },
  {
    id: "quiz-2",
    title: "Test 2: Transformaciones Lineales",
    description: "Kernel, Imagen, Matrices Representantes (Prácticas 13, 15).",
    icon: "transform",
    difficulty: "Intermedio",
    questions: [
      {
        id: 201,
        topic: "Fórmulas: Definición de Kernel",
        text: "El Kernel (o núcleo) de una matriz A, denotado ker(A), se define como:",
        options: [
          { id: "a", text: "{ b : Ax = b tiene solución }", isCorrect: false },
          { id: "b", text: "{ x : Ax = 0 }", isCorrect: true },
          { id: "c", text: "El conjunto de columnas linealmente independientes.", isCorrect: false },
          { id: "d", text: "La inversa de A.", isCorrect: false },
        ],
        explanation: "El kernel es el espacio nulo: el conjunto de todos los vectores x que la transformación envía al vector cero."
      },
      {
        id: 202,
        topic: "Práctica 13: Cálculo de T",
        text: "Sea T: P₂(R) → P₂(R) tal que T(1)=1+x, T(x)=3-x², T(x²)=4+2x-3x². Calcule T(2 - 4x + 5x²).",
        options: [
          { id: "a", text: "10 + 14x - 11x²", isCorrect: true },
          { id: "b", text: "5 + x - x²", isCorrect: false },
          { id: "c", text: "0", isCorrect: false },
          { id: "d", text: "20 + 2x - 15x²", isCorrect: false },
        ],
        explanation: "Por linealidad: 2T(1) - 4T(x) + 5T(x²). \n= 2(1+x) - 4(3-x²) + 5(4+2x-3x²) \n= (2+2x) + (-12+4x²) + (20+10x-15x²) \n= 10 + 14x - 11x²."
      },
      {
        id: 203,
        topic: "Práctica 13: Matriz Representante",
        text: "Considere T(a,b,c) = (a+2b+c, a+b, b+c, a-c) de R³ a R⁴. ¿Cuál es el tamaño de la matriz representante?",
        options: [
          { id: "a", text: "3x3", isCorrect: false },
          { id: "b", text: "3x4", isCorrect: false },
          { id: "c", text: "4x3", isCorrect: true },
          { id: "d", text: "4x4", isCorrect: false },
        ],
        explanation: "La matriz tiene dimensiones (dim llegada) x (dim partida). U es R⁴ (implícito por 4 componentes) y V es R³. Tamaño 4x3."
      },
      {
        id: 204,
        topic: "Fórmulas: Rango e Imagen",
        text: "La dimensión de la imagen de una matriz A (rank(A)) es igual a:",
        options: [
          { id: "a", text: "Número de filas menos número de columnas.", isCorrect: false },
          { id: "b", text: "Número de columnas linealmente independientes.", isCorrect: true },
          { id: "c", text: "Dimensión del Kernel.", isCorrect: false },
          { id: "d", text: "El determinante de A.", isCorrect: false },
        ],
        explanation: "El rango se define como el número máximo de columnas (o filas) linealmente independientes."
      },
      {
        id: 205,
        topic: "Práctica 15: Isomorfismos",
        text: "Si T: V → W es un isomorfismo, entonces:",
        options: [
          { id: "a", text: "dim(V) = dim(W) y Ker(T) = {0}", isCorrect: true },
          { id: "b", text: "dim(V) > dim(W)", isCorrect: false },
          { id: "c", text: "T no tiene inversa.", isCorrect: false },
          { id: "d", text: "La matriz representante tiene determinante 0.", isCorrect: false },
        ],
        explanation: "Un isomorfismo es una biyección lineal. Requiere inyectividad (Kernel={0}) y sobreyectividad (mismas dimensiones)."
      }
    ]
  },
  {
    id: "quiz-3",
    title: "Test 3: Diagonalización",
    description: "Valores propios, ecuación característica y traza (Práctica 14).",
    icon: "spectrum",
    difficulty: "Avanzado",
    questions: [
      {
        id: 301,
        topic: "Fórmulas: Ecuación Característica",
        text: "Los valores propios λ de una matriz A se encuentran resolviendo la ecuación:",
        options: [
          { id: "a", text: "Ax = b", isCorrect: false },
          { id: "b", text: "det(A - λI) = 0", isCorrect: true },
          { id: "c", text: "tr(A) = 0", isCorrect: false },
          { id: "d", text: "A⁻¹ = λI", isCorrect: false },
        ],
        explanation: "Esta es la definición fundamental para encontrar los valores propios."
      },
      {
        id: 302,
        topic: "Práctica 14: Valores Propios Triangular",
        text: "Determine los valores propios de la matriz A.",
        matrix: {
          rows: 3,
          cols: 3,
          data: [
            [2, 5, 1],
            [0, -3, 4],
            [0, 0, 7]
          ]
        },
        options: [
          { id: "a", text: "λ = 2, λ = 5, λ = 1", isCorrect: false },
          { id: "b", text: "λ = 2, λ = -3, λ = 7", isCorrect: true },
          { id: "c", text: "λ = 0", isCorrect: false },
          { id: "d", text: "No tiene valores propios reales.", isCorrect: false },
        ],
        explanation: "Para una matriz triangular (superior o inferior), los valores propios son simplemente los elementos de la diagonal principal."
      },
      {
        id: 303,
        topic: "Fórmulas: Diagonalización",
        text: "Si A es diagonalizable, se puede descomponer como A = PDP⁻¹. ¿Qué contiene la matriz D?",
        options: [
          { id: "a", text: "Los vectores propios en las columnas.", isCorrect: false },
          { id: "b", text: "Los valores propios en la diagonal.", isCorrect: true },
          { id: "c", text: "Unos en la diagonal y ceros fuera.", isCorrect: false },
          { id: "d", text: "Los valores singulares.", isCorrect: false },
        ],
        explanation: "D es una matriz diagonal donde los elementos d_ii son los valores propios de A."
      },
      {
        id: 304,
        topic: "Práctica 14: Nilpotencia",
        text: "Si A es una matriz nilpotente (A^k = 0 para algún k), ¿cuál es su único valor propio?",
        options: [
          { id: "a", text: "λ = 1", isCorrect: false },
          { id: "b", text: "λ = k", isCorrect: false },
          { id: "c", text: "λ = 0", isCorrect: true },
          { id: "d", text: "λ = -1", isCorrect: false },
        ],
        explanation: "Si Ax = λx, entonces A^k x = λ^k x. Si A^k = 0, entonces λ^k = 0, lo que implica λ = 0."
      },
      {
        id: 305,
        topic: "Fórmulas: Traza",
        text: "La traza de una matriz A, tr(A), cumple la siguiente propiedad importante relacionada con los valores propios:",
        options: [
          { id: "a", text: "tr(A) = producto de los valores propios.", isCorrect: false },
          { id: "b", text: "tr(A) = suma de los valores propios.", isCorrect: true },
          { id: "c", text: "tr(A) = mayor valor propio.", isCorrect: false },
          { id: "d", text: "tr(A) = 0 siempre.", isCorrect: false },
        ],
        explanation: "La traza es invariante bajo similaridad y es igual a la suma de los valores propios (contando multiplicidad)."
      }
    ]
  }
];
