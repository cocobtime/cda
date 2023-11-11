// header-component.js

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <header>
    <div class="logo-container">
      <img src="/assets/logo.png" alt="Coeur D'amour logo">
      <h1>Coeur D'amour</h1>
    </div>
    <div id="mySidepanel" class="sidepanel">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="mission.html">Mission</a>
      <a href="contact.html">Contact</a>
      <a href="donation.html">Donation</a>
    </div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

customElements.define('header-component', Header);
