import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../@/components/ui/table";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { CreditCard, DollarSign, Calendar } from 'lucide-react';

const payments = [
  { id: 1, proveedor: "AutoParts Inc.", monto: 5000, fecha: "2023-06-30" },
  { id: 2, proveedor: "Brake Masters", monto: 3500, fecha: "2023-07-15" },
  { id: 3, proveedor: "Suspension Experts", monto: 2800, fecha: "2023-07-20" },
];

export default function Payments() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Gestión de Pagos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pagado</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% del mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pagos Pendientes</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">-4 desde la última semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Vencimiento</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Julio 30, 2023</div>
            <p className="text-xs text-muted-foreground">3 pagos programados</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Nuevo Pago</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="proveedor">Proveedor</Label>
                <Input id="proveedor" placeholder="Nombre del proveedor" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monto">Monto</Label>
                <Input id="monto" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha de Pago</Label>
                <Input id="fecha" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metodo">Método de Pago</Label>
                <Input id="metodo" placeholder="Transferencia, Cheque, etc." />
              </div>
            </div>
            <Button className="w-full">Registrar Pago</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pagos Pendientes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Proveedor</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Fecha de Vencimiento</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.proveedor}</TableCell>
                  <TableCell>${payment.monto.toFixed(2)}</TableCell>
                  <TableCell>{payment.fecha}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Pagar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}