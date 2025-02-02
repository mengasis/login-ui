# **Login Authentication Module**

This project is a **frontend module** for implementing **multiple authentication methods** built with **Svelte** and powered by **Bun.js**. It provides a flexible and secure way to integrate various authentication methods into your application, making it easy to offer users different login options while maintaining security best practices.

---

## **Features**

- 🔐 **Multiple Authentication Methods**:
  - **Password-based**: Traditional username/password authentication
  - **Passkeys**: WebAuthn/FIDO2 support for passwordless authentication
  - **Magic Links**: Email-based passwordless authentication
  - **Social Login**: Social login integration
- 🌟 **Modular Design**: Each authentication method is a self-contained module
- ⚡ **Powered by Bun.js**: Blazing-fast performance and modern tooling
- 🎨 **Theming**: Includes light and dark mode with clean transitions
- 🔗 **API-Ready**: Designed to easily connect to any authentication backend


---

## **Tech Stack**

- **Svelte**: Lightweight and reactive UI framework.
- **Bun.js**: Ultra-fast JavaScript runtime and build tool.
- **TailwindCSS**: For utility-first styling with flexibility.
- **TypeScript**: Extendable for type safety.

---

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed:

- [Bun.js](https://bun.sh/) (latest version)
- A modern browser for testing

---

### **Installation**

1. Clone the repository:

```
git clone https://github.com/yourusername/login-module-template.git
cd login-module-template
```

2. Install dependencies using **Bun**:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open your browser at [http://localhost:3000](http://localhost:3000) to view the project.

---

## **Project Structure**

```
src/
├── lib/
│   ├── components/   # Reusable Svelte components
│   ├── stores/       # Authentication state management
├── routes/
│   ├── +layout.svelte     # Global layout
│   ├── auth/
│   │   ├── methods/       # Authentication method selector
│   │   ├── password/      # Traditional password login
│   │   ├── passkey/       # WebAuthn/FIDO2 authentication
│   │   ├── magic-link/    # Email-based authentication
│   ├── home/           # WIP
│   ├── example/        # WIP
```

---

## **Usage**

### **Run in Development Mode**

```
npm run dev
```

### **Build for Production**

```
npm run build
```

---

## **Roadmap**

- [x] Traditional password authentication
- [x] Passkey (WebAuthn/FIDO2) support
- [x] Authentication method selector
- [ ] Magic Link implementation
- [-] OAuth social logins (Google, GitHub, etc.)
- [ ] Multi-factor authentication (MFA)
- [ ] Enhanced security features (rate limiting, breach detection)

---

## **License**

This project is licensed under the [MIT License](LICENSE).
