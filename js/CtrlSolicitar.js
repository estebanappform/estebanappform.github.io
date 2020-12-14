export class CtrlSolicitar {
  /** @param {string} nombre */ 
  calculaSolicitar(nombre) {
    const nombreSinEspacios = nombre ? nombre.trim() : "";
    if (!nombreSinEspacios) {
      throw new Error("Falta proporcinar el nombre.");
    }  
    return `Hola ${nombreSinEspacios}.`;
  } 
}
