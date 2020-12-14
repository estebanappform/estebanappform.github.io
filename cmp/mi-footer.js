class MiFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = /* html */ 
         `Copyright &copy; 2020 Guerra Mendoza Esteban.`;
   }
}
customElements.define("mi-footer", MiFooter);
