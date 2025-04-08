import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>Bem-vindo ao Meu Projeto Next.js!</h1>
        <p>Essa é a página inicial onde você pode começar a codar.</p>
      </header>

      <main>
        <section>
          <h2>O que você pode fazer aqui:</h2>
          <ul>
            <li>Estudar Next.js com React e TypeScript.</li>
            <li>Desenvolver páginas dinâmicas e interativas.</li>
            <li>Integrar com APIs externas.</li>
          </ul>
        </section>

        <section>
          <h2>Links úteis:</h2>
          <ul>
            <li>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                Documentação do Next.js
              </a>
            </li>
            <li>
              <a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer">
                Documentação do React
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer style={{ textAlign: "center", marginTop: "40px" }}>
        <p>&copy; 2025 Meu Projeto</p>
      </footer>
    </div>
  );
};

export default Home;