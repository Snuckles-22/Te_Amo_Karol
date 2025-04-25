function atualizarContador() {
    const dataAlvo = new Date('2025-08-25T00:00:00'); // 🎯 Data e hora alvo
    const agora = new Date();

    let diff = dataAlvo - agora;

    if (diff <= 0) {
      document.getElementById('contador').textContent = 'A data já passou!';
      return;
    }

    const segundosTotais = Math.floor(diff / 1000);
    const segundos = segundosTotais % 60;
    const minutosTotais = Math.floor(segundosTotais / 60);
    const minutos = minutosTotais % 60;
    const horasTotais = Math.floor(minutosTotais / 60);
    const horas = horasTotais % 24;
    const diasTotais = Math.floor(horasTotais / 24);
    const meses = Math.floor(diasTotais / 30); // aproximação
    const dias = diasTotais % 30;

    document.getElementById('contador').textContent =
      `${meses} meses, ${dias} dias, ${horas}h ${minutos}min ${segundos}s restantes`;
  }

  atualizarContador();
  setInterval(atualizarContador, 1000); // atualiza a cada segundo