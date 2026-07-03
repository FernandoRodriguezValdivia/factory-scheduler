import { Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                🏭 Factory Scheduler
              </h1>
            </div>
            <nav className="flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                activeProps={{ className: 'bg-gray-100 text-gray-900' }}
              >
                Dashboard
              </Link>
              <Link
                to="/gantt"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                activeProps={{ className: 'bg-gray-100 text-gray-900' }}
              >
                Gantt
              </Link>
              <Link
                to="/config"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                activeProps={{ className: 'bg-gray-100 text-gray-900' }}
              >
                Configuración
              </Link>
              <Link
                to="/simulation"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                activeProps={{ className: 'bg-gray-100 text-gray-900' }}
              >
                Simulación
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </div>
  )
}