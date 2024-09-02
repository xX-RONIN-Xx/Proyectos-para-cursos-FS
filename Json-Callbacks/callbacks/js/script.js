window.addEventListener('load', () => {
  console.log('Página cargada');
  document.querySelector('#button').addEventListener('click', () => {
    const items = ['feriado', 'trabajando', 'nohayclases', 'banana', 'papaya'];
    setTimeout(() => {
      items.forEach(item => {
        console.log(`Item: ${item}`);
      })
    }, 2000)
  });
});