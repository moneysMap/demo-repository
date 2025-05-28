import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      // Adapte para seu backend
      await axios.post("http://localhost:3000/auth/user", { email, password });
      navigate("/home");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Erro ao fazer login");
      } else {
        setError("Erro ao fazer login");
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <div
        style={{
          width: 350,
          padding: 32,
          borderRadius: 16,
          boxShadow: "0 2px 24px #0001",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <img src="/moneymaplogo.png" style={{ width: 120, marginBottom: 24 }} />
        <h3 style={{ margin: "16px 0 8px", fontWeight: 600 }}>
          Entre em sua conta
        </h3>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 12,
              margin: "16px 0 8px",
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 16,
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 12,
              margin: "8px 0 16px",
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 16,
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 12,
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </form>
        <div style={{ margin: "24px 0 8px", color: "#888" }}>or</div>
        <button
          style={{
            width: "100%",
            padding: 12,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 8,
            marginBottom: 8,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            cursor: "pointer",
          }}
        >
          <img src="/logo-google.png" alt="Google" style={{ width: 20 }} />
          Continue with Google
        </button>
        <button
          style={{
            width: "100%",
            padding: 12,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 8,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            cursor: "pointer",
          }}
        >
          <img src="/logo-apple.png" alt="Apple" style={{ width: 20 }} />
          Continue with Apple
        </button>
        {error && <p style={{ color: "red", marginTop: 16 }}>{error}</p>}
        <p style={{ fontSize: 12, color: "#888", marginTop: 24 }}>
          By clicking continue, you agree to our{" "}
          <a href="#" style={{ color: "#000" }}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" style={{ color: "#000" }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
