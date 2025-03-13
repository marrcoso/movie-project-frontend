import {useState} from "react";

const [isAddModalOpen, setIsAddModalOpen] = useState(false);
const [newMovie, setNewMovie] = useState({ title: "", image: "" });
const openAddModal = () => {
    setIsAddModalOpen(true);
};

const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewMovie({ title: "", image: "" });
};

const handleAddMovie = async () => {
    try {
        const response = await fetch("http://localhost:8080/movie", {
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

        console.log("Filme adicionado com sucesso!");
    } catch (error) {
        console.error("Erro:", error);
    }
};