// minimal preload - keep context isolated for security
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  // placeholder for future APIs
})
