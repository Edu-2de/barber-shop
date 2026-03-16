import { useState, useEffect } from "react";

// O <T> é o Generics do TypeScript. Significa que este hook aceita qualquer tipo de dado (Tasks, Appointments, Strings...)
export function useLocalStorage<T>(key: string, initialValue: T) {
    // 1. O ESTADO INICIAL (Lê do navegador apenas uma vez quando o componente é montado)
    const [state, setState] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            // Se encontrar o item, converte de texto (JSON) para objeto. Se não, usa o valor inicial.
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn("Erro ao ler do localStorage:", error);
            return initialValue;
        }
    });

    // 2. A SINCRONIZAÇÃO (Fica a observar as mudanças)
    useEffect(() => {
        try {
            // O localStorage só guarda textos, por isso usamos o JSON.stringify
            window.localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.warn("Erro ao guardar no localStorage:", error);
        }
    }, [key, state]); // Sempre que a 'key' ou o 'state' mudarem, este código corre.

    // O "as const" é um truque de Sênior no TypeScript.
    // Garante que o hook devolve exatamente um Array fixo (uma Tupla) com o [valor, funcao],
    // tal como o useState original, evitando o erro "not iterable" que estavas a ter!
    return [state, setState] as const;
}
