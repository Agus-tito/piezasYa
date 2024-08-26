import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../@/components/ui/avatar";
import { Badge } from "../../@/components/ui/badge";
import { Button } from "../../@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, AlertTriangle, TrendingUp } from 'lucide-react';

const accountBalanceData = [
  { name: 'AutoParts Inc.', balance: 5000 },
  { name: 'Brake Masters', balance: 3500 },
  { name: 'Suspension Experts', balance: 2800 },
  { name: 'Electrical Systems Co.', balance: 4200 },
  { name: 'Tire Specialists', balance: 3000 },
];

const recentTransactions = [
  { id: 1, supplier: 'AutoParts Inc.', amount: 1500, type: 'credit', date: '2023-07-01' },
  { id: 2, supplier: 'Brake Masters', amount: 2000, type: 'debit', date: '2023-06-30' },
  { id: 3, supplier: 'Suspension Experts', amount: 1000, type: 'credit', date: '2023-06-29' },
];

export default function Dashboard() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard de Cuentas Corrientes de Proveedores</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<DollarSign className="h-8 w-8" />} title="Balance Total" value="$18,500" color="bg-blue-100 text-blue-600" />
        <StatCard icon={<Users className="h-8 w-8" />} title="Proveedores Activos" value="15" color="bg-green-100 text-green-600" />
        <StatCard icon={<AlertTriangle className="h-8 w-8" />} title="Cuentas por Pagar" value="$7,500" color="bg-red-100 text-red-600" />
        <StatCard icon={<TrendingUp className="h-8 w-8" />} title="Transacciones del Mes" value="45" color="bg-purple-100 text-purple-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Balances de Cuentas Corrientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={accountBalanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="balance" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transacciones Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={transaction.supplier} />
                      <AvatarFallback>{transaction.supplier[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{transaction.supplier}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <Badge variant={transaction.type === 'credit' ? 'default' : 'destructive'}>
                    {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="w-full">Registrar Pago</Button>
            <Button className="w-full" variant="outline">Generar Estado de Cuenta</Button>
            <Button className="w-full" variant="secondary">Añadir Nuevo Proveedor</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <Card>
      <CardContent className="flex items-center p-6">
        <div className={`rounded-full p-3 mr-4 ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}