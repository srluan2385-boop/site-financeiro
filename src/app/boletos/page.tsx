"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, Printer } from "lucide-react"

export default function BoletosPage() {
  const handleGerarBoleto = () => {
    alert("Em uma integração real com Asaas/Efí, isso chamaria a API. Como estamos em modo Sandbox, isso geraria um PDF do Boleto usando jsPDF simulando a via impressa.")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-bb-blueDark">Gestão de Boletos</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-l-4 border-l-bb-yellow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fatura #000{i}</CardTitle>
              <FileText className="h-4 w-4 text-bb-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">R$ 1.250,00</div>
              <p className="text-xs text-muted-foreground mb-4">
                Vencimento: 15/10/2026<br/>
                Cliente Empresa {i} LTDA
              </p>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="w-full text-xs" onClick={handleGerarBoleto}>
                  <Printer className="mr-2 h-3 w-3" /> Imprimir
                </Button>
                <Button size="sm" className="w-full text-xs bg-bb-blue hover:bg-bb-blueDark" onClick={handleGerarBoleto}>
                  <Download className="mr-2 h-3 w-3" /> Baixar PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
