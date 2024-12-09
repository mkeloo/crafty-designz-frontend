"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DataTableProps {
    fetchData: () => Promise<any[]>; // Function to fetch data
    columns: Array<{ key: string; label: string }>; // Define columns with keys and labels
}

const DataTable = ({ fetchData, columns }: DataTableProps) => {
    const [data, setData] = useState<any[]>([]); // State for fetched data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const result = await fetchData(); // Fetch data from the provided function
                setData(result);
                setLoading(false);
            } catch (err) {
                setError("Failed to load data.");
                setLoading(false);
            }
        };
        getData();
    }, [fetchData]);

    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="w-full bg-neutral-900 p-4 rounded shadow">
            <Table className="w-full border-collapse border border-neutral-700">
                <TableHeader className="bg-neutral-800">
                    <TableRow className="text-neutral-200 border-b border-neutral-700">
                        {columns.map((column) => (
                            <TableHead
                                key={column.key}
                                className="px-4 py-2 font-semibold text-sm text-neutral-400 uppercase border border-neutral-700"
                            >
                                {column.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            className={`border-b border-neutral-700 ${rowIndex % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900"
                                } hover:bg-neutral-700 transition-colors`}
                        >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.key}
                                    className="px-4 py-2 text-sm text-neutral-300 border-r border-neutral-700 last:border-r-0"
                                >
                                    {row[column.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DataTable;