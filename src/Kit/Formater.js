export function formatCssCode(text){
    let formattedText = text.replace(/;/g, ';\n  ');

    formattedText = formattedText.replace(/{/g, '{\n  ');

    formattedText = formattedText.replace(/}/g, '}\n\n');

    return formattedText
}

export function formatJavaScriptCode(text) {
    let formattedText = text.replace(/\/\*([\s\S]*?)\*\//g, match => {
        // Mantener los comentarios multilinea
        return match.replace(/\n\s*\*\s*/g, '\n  '); // Agregar dos espacios después de cada * en los comentarios
    });

    formattedText = formattedText.replace(/(\/\/[^\n]*)/g, match => {
        // Manejar comentarios de una sola línea
        return match.replace(/\n/g, '\n  '); // Agregar dos espacios después de cada salto de línea en los comentarios de una sola línea
    });
    
    formattedText = formattedText.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, match => {
        // Manejar cadenas de texto
        return match.replace(/\n/g, '\n  '); // Agregar dos espacios después de cada salto de línea dentro de las cadenas de texto
    });

    formattedText = formattedText.replace(/(;|{|})/g, match => {
        // Agregar dos espacios al principio de cada línea después de los puntos y comas, llaves de apertura y llaves de cierre
        return match + '\n  ';
    });

    return formattedText;
}



export function formatHTMLCode(html) {
    let formattedHTML = '';
    let indentationLevel = 0;

    html.split(/(<[^>]*>)/).forEach((part) => {
        if (part.startsWith('<') && part.endsWith('>')) {
            if (part.startsWith('</')) {
                indentationLevel -= 1;
            }
            formattedHTML += '\n' + '  '.repeat(indentationLevel) + part.trim();
            if (!part.startsWith('</')) {
                indentationLevel += 1;
            }
        } else {
            if (part.trim() !== '') {
                formattedHTML += part.trim();
            }
        }
    });

    return formattedHTML.trim();
}