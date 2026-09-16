import { Sidebar } from "@/components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h2 className="text-xl font-semibold text-gray-800">Sistema de Gestão</h2>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-bb-blue text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
