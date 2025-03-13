"use client";

import {useState} from "react";
import Input from "@/components/Input";

interface AddMovieModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddMovie: (movie: { title: string; image: string; }) => void;
}

export default function AddMovieModal({isOpen, onClose, onAddMovie}: AddMovieModalProps) {
    const [newMovie, setNewMovie] = useState({title: "", image: ""});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setNewMovie({...newMovie, [name]: value});
    };

    const handleSubmit = () => {
        onAddMovie(newMovie);
        setNewMovie({title: "", image: ""});
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">Adicionar Novo Filme</h2>
                <form>
                    <div className="mb-4">
                        <Input label={"Título"} className={"w-full p-2 border rounded-lg"} placeholder={"Nome do Filme"}
                               value={newMovie.title} onChange={handleInputChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Imagem (URL)</label>
                        <input
                            type="text"
                            name="image"
                            value={newMovie.image}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg"
                            placeholder="URL da imagem"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}