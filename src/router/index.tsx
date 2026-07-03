import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { RootLayout } from '@shared/components/layout/RootLayout'

const DashboardPage = () => <div>Dashboard</div>
const GanttPage = () => <div>Gantt</div>
const ConfigPage = () => <div>Configuración</div>
const SimulationPage = () => <div>Simulación</div>

const rootRoute = createRootRoute({
  component: RootLayout,
})

// Rutas hijas
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashboardPage,
})

const ganttRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gantt',
  component: GanttPage,
})

const configRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/config',
  component: ConfigPage,
})

const simulationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/simulation',
  component: SimulationPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  ganttRoute,
  configRoute,
  simulationRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}