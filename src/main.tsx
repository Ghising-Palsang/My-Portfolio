import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import RouterConfig from './config/router.config'
import { LightProvider } from './context/light.context'



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LightProvider>
      <RouterConfig />
    </LightProvider>
  </StrictMode>,
);
