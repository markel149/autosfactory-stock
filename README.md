# autosfactory-stock — React (Vite) base
 
Minimal React + Vite scaffold added to the repository.
 
Quick start (local)
 
1. Install dependencies:

```zsh
npm install
```

2. Run dev server:

```zsh
npm run dev
```

3. Build for production:

```zsh
npm run build
```

Notes
 - This repo was scaffolded with Vite and React 18. Update versions in `package.json` if your environment requires different Node or package versions.
 - If you want, I can open a draft PR with these files and add CI configuration (GitHub Actions) to run lint/tests on push.

Firebase authentication (Google Sign-In)

1. Create a Firebase project at https://console.firebase.google.com/ and add a Web App.
2. In the Firebase console go to "Authentication" → "Sign-in method" and enable "Email/Password" (this project uses email+password authentication).
3. Copy the Firebase config values from the web app settings and create a local `.env` file (do NOT commit it). You can start from `.env.example`.
	 - Example variable names (already in `.env.example`):
		 - VITE_FIREBASE_API_KEY
		 - VITE_FIREBASE_AUTH_DOMAIN
		 - VITE_FIREBASE_PROJECT_ID
		 - VITE_FIREBASE_STORAGE_BUCKET
		 - VITE_FIREBASE_MESSAGING_SENDER_ID
	 	 - VITE_FIREBASE_APP_ID
	 	 - VITE_FIREBASE_MEASUREMENT_ID (optional — used for Firebase Analytics, looks like G-XXXXXXX)
4. Install dependencies and run the dev server:

```zsh
npm install
npm run dev
```

5. The project includes a simple login screen that uses Firebase Google Sign-In. Open the app, click "Iniciar sesión con Google", and select your account.
5. The project includes a simple login screen that uses Email & Password authentication. You can create an account using the "Registrarse" button or sign in with an existing email/password. There's also a "Reset pass" flow to request a password reset email.

Files added for Firebase auth:
