const isIntersecting = (entry) => {
  //funcion importante porq se puede usar si pej esta a 200 px hacer x o y cosa
  return entry.isIntersecting; //true dentro de la pantalla
};

const accion = (entry) => {
  //carga imagen

  const container = entry.target; //es un contenedor (div), aqui esta el data-src
  const url = container.dataset.src; // devuelve un img
  //const url = imagen.dataset.src;
  //load image
  container.src = url;
  console.log("holis");

  //desregistra la imagen (unlisten)
  observer.unobserve(container);
};

//new intersectionObserver(funcionQueHacerPorImagen)
const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
  //Intersection Observador -> observer(imagen)
  observer.observe(imagen);
};
