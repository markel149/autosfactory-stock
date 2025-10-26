# autosfactory-stock — React (Vite) base
 
Minimal React + Vite scaffold added to the repository.
 
Quick start (local)
 
1. Install dependencies:

```zsh
npm install
```

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

Firebase authentication

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

5. The project includes a simple login screen that uses Email & Password authentication. You can sign in with an existing email/password.

Files added for Firebase auth:

* `src/firebase.js` — inicializa Firebase y exporta helpers de autenticación
* `src/Login.jsx` — pantalla de login (Material UI)

## Empaquetado como aplicación de escritorio (Electron)

Este repositorio incluye un scaffold básico para empaquetar la app web en una aplicación de escritorio usando Electron y electron-builder.

Requisitos
- macOS (necesario para generar un .app/.dmg para macOS).
- Node.js (recomendado >=16) y npm.

Instalación de dependencias

```zsh
npm install
```

Desarrollo con Electron (ver la app en una ventana de escritorio)

Esto arranca el servidor de desarrollo de Vite y luego abre una ventana de Electron apuntando a http://localhost:5173

```zsh
npm run electron:dev
```

Compilar / empaquetar para macOS (.app / .dmg)

1. Asegúrate de tener las variables de entorno Vite (`VITE_FIREBASE_*`) en un archivo `.env` en la raíz o configuradas en tu entorno de CI. Vite inyecta estas variables en tiempo de build.
2. Ejecuta el script de construcción de Electron (debe ejecutarse en macOS):

```zsh
npm run electron:build
```

Esto ejecuta `npm run build` (Vite) y luego `electron-builder --mac`. Los artefactos saldrán en `dist_electron/` (por ejemplo `.dmg` y `.zip` que contienen `Autosfactory.app`).

Notas importantes
- electron-builder genera binarios macOS sólo en macOS (o en runners macOS en CI). Si quieres generar .app en CI, usa un runner macOS (por ejemplo GitHub Actions `runs-on: macos-latest`).
- Firma de código y notarización: para distribuciones públicas sin warnings de Gatekeeper necesitarás configurar certificados Apple (Developer ID) y las opciones de `electron-builder` para firmar y enviar a notarizar. Si no firmas, la app funcionará localmente pero macOS mostrará advertencias al abrirla.
- Variables de entorno: las variables VITE_* deben estar disponibles en el momento del build (no en tiempo de ejecución). Añade los secretos en tu CI antes del paso de build.
- Si la build falla revisa la salida del comando (`electron-builder` imprime información útil). Los problemas comunes: versión de Node incompatible, certificados de firma faltantes, dependencias nativas que requieren compilación.

Ejemplo de workflow (GitHub Actions, macOS runner)

```yaml
name: Build macOS App

on: [push]

jobs:
	build-macos:
		runs-on: macos-latest
		steps:
			- uses: actions/checkout@v4
			- name: Install Node
				uses: actions/setup-node@v4
				with:
					node-version: '18'
			- name: Install deps
				run: npm ci
			- name: Build and package
				run: npm run electron:build
				env:
					VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
					# (otros VITE_FIREBASE_* en secrets)
```

Archivos relevantes añadidos
- `electron/main.js` — proceso principal de Electron (carga localhost en dev y `dist/index.html` en producción).
- `electron/preload.js` — preload seguro con `contextBridge`.
- `package.json` — scripts `electron:dev`, `electron:build` y configuración `build` para electron-builder.

Si quieres, puedo:
- Añadir un workflow de GitHub Actions completo para compilar y publicar artefactos (.dmg/.zip).
- Configurar opciones de firma/notarización en `package.json` (necesitarás suministrar certificados y secretos de Apple).
