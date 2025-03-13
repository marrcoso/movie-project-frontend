import {useState} from "react";

const [isAddModalOpen, setIsAddModalOpen] = useState(false);
const [newMovie, setNewMovie] = useState({ title: "", image: "", description: "" });
const openAddModal = () => {
    setIsAddModalOpen(true);
};

const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewMovie({ title: "", image: "", description: "" }); // Limpa os campos ao fechar
};

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
};

const handleAddMovie = () => {

    // Aqui você pode adicionar a lógica para enviar o novo filme ao servidor
    console.log("Novo filme:", newMovie);
    closeAddModal();
};