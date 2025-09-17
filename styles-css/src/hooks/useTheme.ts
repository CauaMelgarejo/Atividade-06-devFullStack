// src/hooks/useTheme.ts

import { useState, useEffect } from 'react';

// Definimos os possíveis valores do tema
type Theme = 'light' | 'dark';

// Nosso custom hook!
export function useTheme() {
  // 1. Criamos o estado, tentando ler do localStorage o tema salvo. O padrão é 'light'.
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'light'
  );

  // 2. Criamos uma função para alternar o tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Usamos o useEffect para reagir a MUDANÇAS no estado 'theme'
  useEffect(() => {
    // Toda vez que 'theme' mudar, nós...
    
    // a) Salvamos a nova escolha no localStorage para persistir
    localStorage.setItem('theme', theme);
    
    // b) Adicionamos um atributo `data-theme` no <body> da página.
    // É isso que vamos usar no CSS para aplicar os estilos do dark mode!
    document.body.setAttribute('data-theme', theme);
  }, [theme]); // A lista de dependências diz: "rode este efeito apenas quando 'theme' mudar"

  // 4. O hook retorna o estado atual e a função para que os componentes possam usá-los
  return { theme, toggleTheme };
}