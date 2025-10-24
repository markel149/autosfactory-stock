import React, { useEffect, useState, useMemo } from 'react'
import Login from './Login'
import { onAuth, signOutUser } from './firebase'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export default function App() {
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'dark')

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            background: { default: '#071127', paper: '#0f172a' },
          }
        : {
            background: { default: '#ffffff', paper: '#ffffff' },
          }),
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: { styleOverrides: { root: { borderRadius: 999 } } },
      MuiTextField: { styleOverrides: { root: { borderRadius: 8 } } },
    },
  }), [mode])

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  // Add a lightweight body class so global CSS can react to light/dark mode
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (mode === 'light') {
        document.body.classList.add('light-theme')
      } else {
        document.body.classList.remove('light-theme')
      }
    }
    return () => {
      if (typeof document !== 'undefined') document.body.classList.remove('light-theme')
    }
  }, [mode])

  useEffect(() => {
    const unsub = onAuth((u) => {
      setUser(u)
      setAuthChecked(true)
    })
    return () => unsub()
  }, [])

  if (!authChecked) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                autosfactory-stock
              </Typography>
              <IconButton color="inherit" onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}>
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box sx={{ mt: 6 }}>
            <Typography>Comprobando sesión…</Typography>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }

  // If not authenticated show login screen centered
  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ display: 'flex', minHeight: '80vh', alignItems: 'center' }}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Inicia sesión para continuar
            </Typography>
            <Login user={null} />
          </Box>
        </Container>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              autosfactory-stock
            </Typography>
            <IconButton color="inherit" onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
              {user.photoURL ? (
                <Avatar alt={user.displayName || user.email} src={user.photoURL} />
              ) : (
                <Avatar>{(user.displayName || user.email || 'U')[0]}</Avatar>
              )}
              <Typography variant="body1">{user.displayName || user.email}</Typography>
              <Button color="inherit" onClick={() => signOutUser()} startIcon={<DarkModeIcon />}>
                Sign out
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              Bienvenido, {user.displayName || user.email}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Home</Typography>
              <Typography>Contenido protegido visible solo tras iniciar sesión.</Typography>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  )
}
