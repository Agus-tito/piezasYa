import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../@/components/ui/table";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../@/components/ui/select";
import { Search, Plus, Edit, Trash } from 'lucide-react';

const initialSuppliers = [
  { id: 1, nombre: "AutoParts Inc.", categoria: "Motores", contacto: "contact@autoparts.com", balance: 5000 },
  { id: 2, nombre: "Brake Masters", categoria: "Frenos", contacto: "info@brakemasters.com", balance: 3500 },
  { id: 3, nombre: "Suspension Experts", categoria: "Suspensión", contacto: "sales@suspensionexperts.com", balance: 2800 },
  { id: 4, nombre: "Electrical Systems Co.", categoria: "Eléctrico", contacto: "support@electricalsystems.com", balance: 4200 },
  { id: 5, nombre: "Tire Specialists", categoria: "Neumáticos", contacto: "orders@tirespecialists.com", balance: 3000 },
];

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [searchTerm, setSearchTerm] = useState('');
  const [newSupplier, setNewSupplier] = useState({ nombre: '', categoria: '', contacto: '', balance: 0 });
  const [isAddingSupplier, setIsAddingSupplier] = useState(false);

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSupplier = () => {
    setSuppliers([...suppliers, { ...newSupplier, id: suppliers.length + 1 }]);
    setNewSupplier({ nombre: '', categoria: '', contacto: '', balance: 0 });
    setIsAddingSupplier(false);
  };

  const handleDeleteSupplier = (id: number) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Gestión de Proveedores</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Buscar y Agregar Proveedores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <Search className="h-4 w-4 mr-2 text-gray-500" />
            <Input
              placeholder="Buscar proveedor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm mr-4"
            />
            <Dialog open={isAddingSupplier} onOpenChange={setIsAddingSupplier}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Agregar Proveedor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Agregar Nuevo Proveedor</DialogTitle>
                  <DialogDescription>
                    Ingrese los detalles del nuevo proveedor aquí.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="nombre" className="text-right">
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      value={newSupplier.nombre}
                      onChange={(e) => setNewSupplier({ ...newSupplier, nombre: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="categoria" className="text-right">
                      Categoría
                    </Label>
                    <Select
                      onValueChange={(value) => setNewSupplier({ ...newSupplier, categoria: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Seleccione una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Motores">Motores</SelectItem>
                        <SelectItem value="Frenos">Frenos</SelectItem>
                        <SelectItem value="Suspensión">Suspensión</SelectItem>
                        <SelectItem value="Eléctrico">Eléctrico</SelectItem>
                        <SelectItem value="Neumáticos">Neumáticos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="contacto" className="text-right">
                      Contacto
                    </Label>
                    <Input
                      id="contacto"
                      value={newSupplier.contacto}
                      onChange={(e) => setNewSupplier({ ...newSupplier, contacto: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="balance" className="text-right">
                      Balance Inicial
                    </Label>
                    <Input
                      id="balance"
                      type="number"
                      value={newSupplier.balance}
                      onChange={(e) => setNewSupplier({ ...newSupplier, balance: Number(e.target.value) })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleAddSupplier}>Agregar Proveedor</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Proveedores</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell>{supplier.nombre}</TableCell>
                  <TableCell>{supplier.categoria}</TableCell>
                  <TableCell>{supplier.contacto}</TableCell>
                  <TableCell>${supplier.balance.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteSupplier(supplier.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
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