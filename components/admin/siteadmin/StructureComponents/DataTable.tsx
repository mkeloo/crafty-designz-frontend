"use client";

import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DataTableProps {
    fetchData: () => Promise<any[]>; // Function to fetch data
    columns: Array<{ key: string; label: string }>; // Define columns with keys and labels
    onEdit: (row: any) => void; // Callback for edit action
    onDelete: (id: string) => void; // Callback for delete action
}

const DataTable = ({ fetchData, columns, onEdit, onDelete }: DataTableProps) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // State for edit dialog
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [editRow, setEditRow] = useState<any>({});

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const result = await fetchData();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError("Failed to load data.");
                setLoading(false);
            }
        };
        getData();
    }, [fetchData]);

    const handleEditClick = (row: any) => {
        setEditRow(row);
        setIsEditDialogOpen(true);
    };

    const handleEditSave = async () => {
        await onEdit(editRow); // Pass the edited row back to the parent
        setIsEditDialogOpen(false);
    };

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
                        <TableHead className="px-4 py-2 font-semibold text-sm text-neutral-400 uppercase border border-neutral-700">
                            Actions
                        </TableHead>
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
                            <TableCell className="px-4 py-2 text-sm text-neutral-300">
                                <button
                                    className="text-blue-500 hover:underline mr-2"
                                    onClick={() => handleEditClick(row)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => onDelete(row.id)}
                                >
                                    Delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Dialog for Edit */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogTitle>Edit Row</DialogTitle>
                    <DialogDescription>Modify the details below.</DialogDescription>
                    <div className="space-y-4">
                        {columns.map((column) => (
                            column.key !== "id" && column.key !== "created_at" ? (
                                <Input
                                    key={column.key}
                                    defaultValue={editRow[column.key]}
                                    placeholder={`Enter ${column.label}`}
                                    onChange={(e) =>
                                        setEditRow({
                                            ...editRow,
                                            [column.key]: e.target.value,
                                        })
                                    }
                                />
                            ) : null
                        ))}
                    </div>
                    <DialogFooter>
                        <Button onClick={handleEditSave}>Save Changes</Button>
                        <Button variant="secondary" onClick={() => setIsEditDialogOpen(false)}>
                            Cancel
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DataTable;