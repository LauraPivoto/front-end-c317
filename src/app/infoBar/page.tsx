'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importando o useRouter para navegação

// Estilo embutido
import { CSSProperties } from "react";

// Estilos para o layout da página
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fdf2e1",
    flexDirection: "column",
    overflow: "hidden",
  },
  headerContainer: {
    backgroundColor: "#fdf2e1",
    width: "100%",
    padding: "40px",
    textAlign: "left",
    color: "white",
    borderTop: "35px solid #d4883a",
    position: "absolute",
    top: "0",
    left: "0",
  },
  header: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "1000px",
    minHeight: "400px",
    marginTop: "150px",
  },
  progressBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  progressStep: {
    fontSize: "14px",
    color: "#6c6c6c",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  activeStep: {
    color: "#d4883a",
    fontWeight: "bold",
  },
  stepCircle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    marginBottom: "5px",
  },
  activeCircle: {
    backgroundColor: "#d4883a",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#3c3c3c",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#d4883a",
    border: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
};

// Componente principal do formulário
const InfoFesta = () => {
  const [formData, setFormData] = useState({
    bebidaTipo: "",
    numBarmans: "",
    extras: [],
    observacoes: "",
  });

  const [currentStep] = useState(2); // Controlando a etapa atual
  const router = useRouter(); // Hook de navegação do Next.js

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com a seleção de múltiplos extras (checkbox)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        extras: [...formData.extras, name],
      });
    } else {
      setFormData({
        ...formData,
        extras: formData.extras.filter((item) => item !== name),
      });
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Enviar os dados para um servidor ou outro lugar
    // Depois de preencher as informações, redireciona para a próxima página
    router.push("/infoBar"); // Redirecionar para a página informações do bar
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={{ ...styles.header, color: "black" }}>Informações da Festa</h1>
        <p style={{ ...styles.paragraph, color: "black" }}>
          Complete as informações sobre a festa para prosseguir:
        </p>
      </div>

      <div style={styles.formContainer}>
        {/* Barra de progresso */}
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressStep,
              ...(currentStep === 1 ? styles.activeStep : {}),
            }}
          >
            <div
              style={{
                ...styles.stepCircle,
                ...(currentStep === 1 ? styles.activeCircle : {}),
              }}
            ></div>
            Suas informações
          </div>
          <div
            style={{
              ...styles.progressStep,
              ...(currentStep === 2 ? styles.activeStep : {}),
            }}
          >
            <div
              style={{
                ...styles.stepCircle,
                ...(currentStep === 2 ? styles.activeCircle : {}),
              }}
            ></div>
            Informações da festa
          </div>
          <div
            style={{
              ...styles.progressStep,
              ...(currentStep === 3 ? styles.activeStep : {}),
            }}
          >
            <div
              style={{
                ...styles.stepCircle,
                ...(currentStep === 3 ? styles.activeCircle : {}),
              }}
            ></div>
            Informações do Bar
          </div>
        </div>

        {/* Formulário de Informações da Festa */}
        <form onSubmit={handleSubmit}>
          <div style={styles.radioGroup}>
            <label style={styles.label}>Escolha o tipo de bebida:</label>
            <label>
              <input
                type="radio"
                name="bebidaTipo"
                value="Basic"
                checked={formData.bebidaTipo === "Basic"}
                onChange={handleChange}
              />
              Basic
              <ul>
                <li>Bebidas Alcoólicas: Capira, Vodka, Tang, Leite com Manda</li>
              </ul>
            </label>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="numBarmans" style={styles.label}>
              Número de Barmans:
            </label>
            <input
              type="number"
              id="numBarmans"
              name="numBarmans"
              value={formData.numBarmans}
              onChange={handleChange}
              style={{ ...styles.input, color: "black" }}
              required
            />
          </div>

          <div style={styles.checkboxGroup}>
            <label style={styles.label}>Extras:</label>
            <label>
              <input
                type="checkbox"
                name="Moscow Mule"
                onChange={handleCheckboxChange}
              />
              Moscow Mule - R$ 15
            </label>
            <label>
              <input
                type="checkbox"
                name="Ginge Beer"
                onChange={handleCheckboxChange}
              />
              Ginge Beer - R$ 15
            </label>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="observacoes" style={styles.label}>
              Observações:
            </label>
            <textarea
              id="observacoes"
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              style={styles.input}
              rows={3}
            />
          </div>

          <button type="submit" style={styles.button}>
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoFesta;