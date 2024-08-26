// src/components/ProveedoresTable.tsx
import React, { useState } from 'react';

interface Proveedor {
  id: number;
  nombre: string;
  categoria: string;
  contacto: string;
  balance: number;
}

export function ProveedoresTable({ proveedores }: { proveedores: Proveedor[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProveedores = proveedores.filter(proveedor =>
    proveedor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proveedor.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Buscar proveedor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-8 border rounded"
          aria-label="Buscar proveedor"
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Categoría</th>
              <th className="py-2 px-4 border-b">Contacto</th>
              <th className="py-2 px-4 border-b">Balance</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProveedores.map((proveedor) => (
              <tr key={proveedor.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{proveedor.nombre}</td>
                <td className="py-2 px-4 border-b">{proveedor.categoria}</td>
                <td className="py-2 px-4 border-b">{proveedor.contacto}</td>
                <td className="py-2 px-4 border-b">${proveedor.balance.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:text-blue-700 mr-2" aria-label={`Editar ${proveedor.nombre}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <button className="text-red-500 hover:text-red-700" aria-label={`Eliminar ${proveedor.nombre}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}