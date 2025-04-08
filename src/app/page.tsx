'use client';
import React from "react";
import { useRouter } from "next/navigation"; // Importando o useRouter do novo sistema de navegação

// Estilo embutido
import { CSSProperties } from "react";

// Estilos para o layout da página
const styles: { [key: string]: CSSProperties } = {
  // Estilo para o contêiner principal
  container: {
    display: "flex", // Usando Flexbox para alinhar os elementos
    justifyContent: "center", // Alinhando os itens horizontalmente
    alignItems: "center", // Alinhando os itens verticalmente
    height: "100vh", // Garantindo que a altura ocupe 100% da tela
    backgroundColor: "#fdf2e1", // Cor de fundo da página
    flexDirection: "column", // Os elementos ficam na direção de coluna
    overflow: "hidden", // Impede a rolagem
  },

  // Estilo para o botão
  button: {
    padding: "20px 40px", // Preenchimento do botão
    backgroundColor: "#d4883a", // Cor de fundo do botão
    border: "none", // Sem borda
    color: "white", // Cor do texto
    fontSize: "20px", // Tamanho da fonte
    fontWeight: "bold", // Negrito
    borderRadius: "4px", // Bordas arredondadas
    cursor: "pointer", // Cursor de ponteiro para indicar que é clicável
    textAlign: "center", // Texto centralizado
  },
};

// Componente principal da página
const Home = () => {
  const router = useRouter(); // Hook de navegação do Next.js

  // Função para lidar com o clique do botão e redirecionar para a página suaInfo
  const handleClick = () => {
    router.push("/suaInfo"); // Redirecionar para a página suaInfo
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleClick}>
        Fazer Orçamento
      </button>
    </div>
  );
};

export default Home;