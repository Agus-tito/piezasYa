import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../@/components/ui/table";
import { Button } from "../../@/components/ui/button";

const salesData = [
  { month: 'Ene', ventas: 4000 },
  { month: 'Feb', ventas: 3000 },
  { month: 'Mar', ventas: 5000 },
  { month: 'Abr', ventas: 4500 },
  { month: 'May', ventas: 6000 },
  { month: 'Jun', ventas: 5500 },
];

const inventoryData = [
  { name: 'Frenos', stock: 120, minimo: 50 },
  { name: 'Filtros', stock: 80, minimo: 100 },
  { name: 'Baterías', stock: 50, minimo: 30 },
  { name: 'Aceite', stock: 200, minimo: 150 },
];

const topProveedores = [
  { nombre: 'AutoParts Inc.', ventas: 50000, pedidos: 120 },
  { nombre: 'Brake Masters', ventas: 45000, pedidos: 100 },
  { nombre: 'Suspension Experts', ventas: 40000, pedidos: 90 },
];

export default function Reports() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Reportes y Análisis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Ventas Mensuales</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ventas" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendencia de Inventario</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="stock" stroke="#8884d8" />
                <Line type="monotone" dataKey="minimo" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Inventario Bajo</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Stock Actual</TableHead>
                <TableHead>Stock Mínimo</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.minimo}</TableCell>
                  <TableCell>
                    {item.stock < item.minimo ? (
                      <span className="text-red-500 font-semibold">Bajo</span>
                    ) : (
                      <span className="text-green-500 font-semibold">OK</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Proveedores</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Proveedor</TableHead>
                <TableHead>Ventas Totales</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProveedores.map((proveedor) => (
                <TableRow key={proveedor.nombre}>
                  <TableCell>{proveedor.nombre}</TableCell>
                  <TableCell>${proveedor.ventas.toLocaleString()}</TableCell>
                  <TableCell>{proveedor.pedidos}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Ver Detalles</Button>
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