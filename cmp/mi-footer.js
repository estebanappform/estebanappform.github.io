class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2020 Ricardo Armando Machorro Reyes.`;
  }
}
customElements.define("mi-footer", MiFooter);
