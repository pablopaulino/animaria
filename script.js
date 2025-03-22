function redirecionarWhatsApp(numero = '17997853265', mensagem = 'Confirmo a presença no aniversário da Maria Heloísa!') {
    const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(linkWhatsApp, "_blank");
    }
  
  
            
