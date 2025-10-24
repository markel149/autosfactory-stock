import React, { useState } from 'react'
import { signInWithEmail, signOutUser } from './firebase'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import LoginIcon from '@mui/icons-material/Login'

export default function Login({ user }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const clearForm = () => {
    setEmail('')
    setPassword('')
    setError(null)
  }

  const handleSignIn = async (e) => {
    e && e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await signInWithEmail(email, password)
      clearForm()
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  if (user) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
        {user.photoURL ? (
          <Avatar alt={user.displayName || user.email} src={user.photoURL} />
        ) : (
          <Avatar>{(user.displayName || user.email || 'U')[0]}</Avatar>
        )}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 600 }}>{user.displayName || user.email}</Typography>
          <Typography sx={{ color: '#94a3b8', fontSize: 13 }}>{user.email}</Typography>
        </Box>
        <Box>
          <Button variant="outlined" color="secondary" onClick={() => signOutUser()}>
            Cerrar sesión
          </Button>
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{ mt: 4, maxWidth: 460, mx: 'auto' }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #0f172a 0%, #071127 100%)',
          boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
        }}
      >
        <Typography variant="h6" sx={{ color: '#e6eef8', mb: 2, textAlign: 'center' }}>
          Acceso a autosfactory-stock
        </Typography>

        <Box component="form" onSubmit={handleSignIn}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }}
            InputProps={{ sx: { borderRadius: 2 } }}
            InputLabelProps={{ sx: { color: '#cbd5e1' } }}
            variant="outlined"
          />

          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }}
            InputProps={{ sx: { borderRadius: 2 } }}
            InputLabelProps={{ sx: { color: '#cbd5e1' } }}
            variant="outlined"
          />

          {error && (
            <Typography sx={{ color: 'error.main', mb: 1 }}>{error}</Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
            startIcon={<LoginIcon />}
            sx={{ borderRadius: 6, py: 1.2, mb: 1 }}
          >
            {loading ? 'Procesando…' : 'Entrar'}
          </Button>

          {/* Password reset removed: Firebase reset emails not reliably arriving */}
        </Box>
      </Box>
      {/* reset dialog removed */}
    </Box>
  )
}
