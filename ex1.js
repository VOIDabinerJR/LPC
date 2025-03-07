function matchSelect(text) {
    const keywordVariants = [['s', 'S'], ['e', 'E'], ['l', 'L'], ['e', 'E'], ['c', 'C'], ['t', 'T']];
    let matches = [];

    for (let i = 0; i <= text.length - 6; i++) { 
        if (
            keywordVariants[0].includes(text[i]) &&
            keywordVariants[1].includes(text[i+1]) &&
            keywordVariants[2].includes(text[i+2]) &&
            keywordVariants[3].includes(text[i+3]) &&
            keywordVariants[4].includes(text[i+4]) &&
            keywordVariants[5].includes(text[i+5])
        ) {
            matches.push(i);
        }
    }

    return matches;
}


const text = " SELECT, select, SeLeCt ";
const positions = matchSelect(text);
console.log("posições de ocorrência:", positions);
