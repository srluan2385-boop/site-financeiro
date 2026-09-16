"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NovoClientePage() {
  const [loadingCep, setLoadingCep] = useState(false)

  const handleCepBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '')
    if (cep.length === 8) {
      setLoadingCep(true)
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await res.json()
        if (!data.erro) {
          // Aqui os dados seriam setados no formulário com react-hook-form
          console.log(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingCep(false)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/clientes">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-bb-blueDark">Novo Cliente</h1>
      </div>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Dados da Empresa</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">CNPJ</label>
              <Input placeholder="00.000.000/0001-00" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Inscrição Estadual</label>
              <Input placeholder="ISENTO ou Número" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Razão Social</label>
              <Input placeholder="Nome da Empresa LTDA" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Nome Fantasia</label>
              <Input placeholder="Nome Fantasia" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Endereço</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">CEP</label>
              <Input 
                placeholder="00000-000" 
                onBlur={handleCepBlur}
                disabled={loadingCep}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Logradouro</label>
              <Input placeholder="Rua, Avenida..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Número</label>
              <Input placeholder="123" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Complemento</label>
              <Input placeholder="Sala 1, Andar 2..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Bairro</label>
              <Input placeholder="Bairro" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Cidade</label>
              <Input placeholder="Cidade" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Estado (UF)</label>
              <Input placeholder="SP" maxLength={2} />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" asChild>
            <Link href="/clientes">Cancelar</Link>
          </Button>
          <Button type="submit" className="bg-bb-blue hover:bg-bb-blueDark">
            Salvar Cliente
          </Button>
        </div>
      </form>
    </div>
  )
}
