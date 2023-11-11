// header-component.js

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      background-color: #D115F4;
      padding: 10px;
    }

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .logo-container img {
      width: 50px; /* Adjust the size of the logo */
      height: 50px; /* Adjust the size of the logo */
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
