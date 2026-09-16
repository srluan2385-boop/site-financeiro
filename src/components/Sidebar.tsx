import Link from "next/link"
import { LayoutDashboard, Users, ShoppingCart, FileText, Calendar, BellRing, Settings, LogOut } from "lucide-react"

export function Sidebar() {
  const routes = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Clientes", icon: Users, href: "/clientes" },
    { label: "Vendas", icon: ShoppingCart, href: "/vendas" },
    { label: "Boletos", icon: FileText, href: "/boletos" },
    { label: "Calendário", icon: Calendar, href: "/calendario" },
    { label: "Cobranças", icon: BellRing, href: "/cobrancas" },
    { label: "Relatórios", icon: FileText, href: "/relatorios" },
  ]

  return (
    <div className="flex h-screen w-64 flex-col bg-bb-blue text-white">
      <div className="flex h-16 items-center justify-center border-b border-bb-blueDark bg-bb-blue">
        <h1 className="text-2xl font-bold text-bb-yellow tracking-wider">ERP FIN</h1>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-bb-blueDark hover:text-bb-yellow transition-colors"
            >
              <route.icon className="mr-3 h-5 w-5 flex-shrink-0 text-bb-yellow" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-bb-blueDark p-4">
        <Link
          href="/configuracoes"
          className="group flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-bb-blueDark hover:text-bb-yellow transition-colors"
        >
          <Settings className="mr-3 h-5 w-5 text-bb-yellow" />
          Configurações
        </Link>
        <button
          className="mt-2 w-full group flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-bb-blueDark hover:text-bb-yellow transition-colors text-left"
        >
          <LogOut className="mr-3 h-5 w-5 text-bb-yellow" />
          Sair
        </button>
      </div>
    </div>
  )
}
