import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const itemsPerPage = 5; // Jumlah item per halaman

const data = [
  { id: 1, name: "Jakarta", population: 11000000 },
  { id: 2, name: "Jawa Barat", population: 49000000 },
  { id: 3, name: "Jawa Tengah", population: 36000000 },
  { id: 4, name: "Jawa Timur", population: 41000000 },
  { id: 5, name: "Sumatera Utara", population: 15000000 },
  { id: 6, name: "Banten", population: 12000000 },
  { id: 7, name: "Bali", population: 4300000 },
  { id: 8, name: "Sulawesi Selatan", population: 9000000 },
  { id: 9, name: "Kalimantan Timur", population: 3700000 },
  { id: 10, name: "Papua", population: 3100000 }
]; // Dummy data penduduk Indonesia 2024

const ChartPenduduk = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2>Chart Penduduk Indonesia 2024</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="population" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPenduduk;
