import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
  // Estado para el enlace que escribe el usuario
  const [url, setUrl] = useState<string>('');
  // Estado para el enlace que se está mostrando actualmente en el QR
  const [qrValue, setQrValue] = useState<string>('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      setQrValue(url.trim());
    }
  };

  return (
    <div className="app-container">
      <h1>Generador de Código QR</h1>
      <p>Ingresa un enlace para generar su código QR</p>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://ejemplo.com"
          className="url-input"
        />
        <button type="submit" className="generate-btn">
          Generar QR
        </button>
      </form>

      {/* Mostrar el QR solo si hay un valor */}
      {qrValue && (
        <div className="qr-container">
          <QRCodeSVG
            value={qrValue}
            size={256}
            level="H" // Nivel de corrección de errores alto
            includeMargin={true}
          />
          <p className="qr-text">Escanea este código</p>
        </div>
      )}
    </div>
  );
}

export default App;