"use client";

import { useState } from "react";
import AddMovieModal from "@/components/modal/addMovieModal";
import { useMovieData } from "@/hooks/useMovieData";

export default function NewMovie() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newMovie, setNewMovie] = useState({ title: "", image: "" });
    const { refetch } = useMovieData();

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
        setNewMovie({ title: "", image: "" });
    };

    const handleAddMovie = async () => {
        try {
            const response = await fetch("http://localhost:8080", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMovie),
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar filme");
            }

            closeAddModal();
            refetch();
            console.log("Filme adicionado com sucesso!");
        } catch (error) {
            console.error("Erro:", error);
        }
    };

    return (
        <>
            <button
                onClick={openAddModal}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
                Adicionar Filme
            </button>

            <AddMovieModal
                isOpen={isAddModalOpen}
                onClose={closeAddModal}
                onAddMovie={handleAddMovie}
                newMovie={newMovie}
                setNewMovie={setNewMovie}
            />
        </>
    );
}