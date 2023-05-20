export function cambiarColor(event) {
    const button = event.currentTarget;
    button.classList.add('clicked');
    setTimeout(function() {
      button.classList.remove('clicked');
      
    }, 100);
  }

export function moverOutput(event) {
  
}