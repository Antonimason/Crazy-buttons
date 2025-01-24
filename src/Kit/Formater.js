export function formatCssCode(text) {
    let formattedText = text
        .replace(/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)/g, match => match.replace(/\n\s*/g, '\n'))  // Limpiar comentarios
        .replace(/(['"])(?:(?=(\\?))\2.)*?\1/g, match => match.replace(/\n/g, '\n  '))  // Manejar cadenas
        .replace(/(\{|\}|;|\))/g, '$1\n')  // Añadir saltos de línea después de llaves, punto y coma, y paréntesis
        .replace(/\n\s*\n/g, '\n\n')  // Limpiar saltos de línea dobles
        .replace(/\n\s*;/g, ';')  // Eliminar saltos de línea antes de punto y coma
        .replace(/}\s*;$/g, '}'); // Eliminar ";" al final del archivo después de "}"

    return formattedText.trim(); // Asegurarse de no dejar espacios o saltos de línea al inicio o al final
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