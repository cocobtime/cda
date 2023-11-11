// header-component.js

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      background-color: #D115F4;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url('/assets/bg.webp');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .logo-container {
      display: flex;
      align-items: center;
    }

    .logo-container img {
      width: 100px;
      height: 100px;
    }

    .logo-container h1 {
      margin-left: 10px;
    }

    .sidepanel {
      /* Add styles for your sidepanel here */
    }

    .sidepanel a {
      color: #fff;
      text-decoration: none;
      padding: 10px;
      display: block;
    }

    .sidepanel a:hover {
      background-color: #fff;
      color: #D115F4;
    }
  </style>

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
