const quotes = [
    { quote: "A paz não chega quando tudo se resolve, mas quando o coração aprende em quem descansar.", author: "Inspirado em C.S. Lewis" },
    { quote: "Nem toda ausência é perda; algumas são o espaço onde Deus nos encontra.", author: "Inspirado em C.S. Lewis" },
    { quote: "O amor verdadeiro não exige perfeição, apenas presença.", author: "Inspirado em Frank Ocean" },
    { quote: "Às vezes o silêncio diz aquilo que o orgulho nunca conseguiria confessar.", author: "Inspirado em Frank Ocean" },
    { quote: "Quem aprende a esperar também aprende a enxergar.", author: "Inspirado em Daniel Caesar" },
    { quote: "Existem pessoas que parecem casa antes mesmo de sabermos seus nomes.", author: "Inspirado em Daniel Caesar" },
    { quote: "A fé cresce onde o controle termina.", author: "Inspirado em John Wesley" },
    { quote: "Uma vida transformada sempre fala mais alto do que um discurso bem escrito.", author: "Inspirado em John Wesley" },
    { quote: "O coração encontra descanso quando deixa de disputar o lugar de Deus.", author: "Inspirado em C.S. Lewis" },
    { quote: "Algumas cicatrizes não desapareceram; elas apenas aprenderam a florescer.", author: "Inspirado em Frank Ocean" },
    { quote: "A graça alcança lugares onde o mérito jamais pisaria.", author: "Inspirado em John Wesley" },
    { quote: "O amor amadurece quando escolhe permanecer mesmo depois do encanto.", author: "Inspirado em Daniel Caesar" },
    { quote: "Nem toda resposta vem em palavras; algumas chegam em paz.", author: "Inspirado em C.S. Lewis" },
    { quote: "A solidão também pode ensinar a linguagem da esperança.", author: "Inspirado em Frank Ocean" },
    { quote: "Quem vive apenas para si sempre termina vazio.", author: "Inspirado em John Wesley" },
    { quote: "O tempo não cura tudo; mas ensina o coração a carregar o que ficou.", author: "Inspirado em Daniel Caesar" },
    { quote: "A eternidade começa quando aprendemos a olhar além de nós mesmos.", author: "Inspirado em C.S. Lewis" },
    { quote: "O amor não precisa ser barulhento para ser inesquecível.", author: "Inspirado em Frank Ocean" },
    { quote: "A santidade nasce nas pequenas escolhas de cada dia.", author: "Inspirado em John Wesley" },
    { quote: "Há beleza em quem continua acreditando mesmo depois da decepção.", author: "Inspirado em Daniel Caesar" },
    { quote: "A verdade nem sempre conforta, mas sempre liberta.", author: "Inspirado em C.S. Lewis" },
    { quote: "A saudade também é uma forma de lembrar que algo foi precioso.", author: "Inspirado em Frank Ocean" },
    { quote: "O caráter é revelado quando ninguém está olhando.", author: "Inspirado em John Wesley" },
    { quote: "Quem ama de verdade aprende a esperar sem possuir.", author: "Inspirado em Daniel Caesar" },
    { quote: "A esperança continua acesa mesmo quando os olhos não conseguem enxergar o caminho.", author: "Inspirado em C.S. Lewis" },
    { quote: "Algumas pessoas passam por nós como canções que nunca esquecemos.", author: "Inspirado em Frank Ocean" },
    { quote: "A graça não diminui a verdade; ela nos fortalece para vivê-la.", author: "Inspirado em John Wesley" },
    { quote: "O coração sempre encontra aquilo que insiste em procurar.", author: "Inspirado em Daniel Caesar" },
    { quote: "A humildade é o começo de toda grandeza.", author: "Inspirado em C.S. Lewis" },
    { quote: "O tempo revela quem realmente permaneceu.", author: "Inspirado em Frank Ocean" },
    { quote: "Servir é uma forma silenciosa de amar.", author: "Inspirado em John Wesley" },
    { quote: "Nem todo adeus encerra uma história; alguns apenas mudam o capítulo.", author: "Inspirado em Daniel Caesar" },
    { quote: "O orgulho constrói muros onde o amor desejava construir pontes.", author: "Inspirado em C.S. Lewis" },
    { quote: "Existem lembranças que continuam respirando dentro de nós.", author: "Inspirado em Frank Ocean" },
    { quote: "A oração muda primeiro quem ora.", author: "Inspirado em John Wesley" },
    { quote: "A beleza mais rara é aquela que permanece depois do tempo.", author: "Inspirado em Daniel Caesar" },
    { quote: "A alma sempre reconhecerá aquilo que foi criado para ela.", author: "Inspirado em C.S. Lewis" },
    { quote: "O amor também mora nas pequenas gentilezas.", author: "Inspirado em Frank Ocean" },
    { quote: "A obediência silenciosa vale mais do que promessas grandiosas.", author: "Inspirado em John Wesley" },
    { quote: "Nem toda distância diminui um sentimento verdadeiro.", author: "Inspirado em Daniel Caesar" },
    { quote: "Deus nunca desperdiça uma dor entregue a Ele.", author: "Inspirado em C.S. Lewis" },
    { quote: "As noites mais longas costumam ensinar as manhãs mais bonitas.", author: "Inspirado em Frank Ocean" },
    { quote: "A fé continua caminhando mesmo sem enxergar o fim da estrada.", author: "Inspirado em John Wesley" },
    { quote: "O coração amadurece quando aprende que amar também é deixar livre.", author: "Inspirado em Daniel Caesar" },
    { quote: "A alegria verdadeira não depende das circunstâncias.", author: "Inspirado em C.S. Lewis" },
    { quote: "As melhores conversas acontecem onde não existe necessidade de fingir.", author: "Inspirado em Frank Ocean" },
    { quote: "A presença de Deus transforma o comum em eterno.", author: "Inspirado em John Wesley" },
    { quote: "Quem encontra paz dentro de si deixa de buscar aprovação em todo lugar.", author: "Inspirado em Daniel Caesar" },
    { quote: "O amor que vem de Deus nunca nos torna menores; ele nos torna mais humanos.", author: "Inspirado em C.S. Lewis" },
    { quote: "A luz sempre encontra uma fresta para entrar.", author: "Inspirado em diversos autores" },
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getRandomQuote() {
    const IndiceAleatorio = Math.floor(Math.random() * quotes.length);
    return quotes[IndiceAleatorio];
}

function displayQuote() {
    const escolhida = getRandomQuote();
    quoteElement.textContent = escolhida.quote;
    authorElement.textContent = "— " + escolhida.author;
}

newQuoteBtn.addEventListener("click", displayQuote);

displayQuote(); 