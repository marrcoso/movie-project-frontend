"use client";

import Input from "@/components/Input";

interface AddMovieModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddMovie: () => void;
    newMovie: { title: string; image: string };
    setNewMovie: (movie: { title: string; image: string }) => void;
}

export default function AddMovieModal({
    isOpen,
    onClose,
    onAddMovie,
    newMovie,
    setNewMovie,
}: AddMovieModalProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">Adicionar Novo Filme</h2>
                <form>
                    <div className="mb-4">
                        <Input
                            label={"Título"}
                            placeholder={"Nome do Filme"}
                            name={"title"}
                            value={newMovie.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            label={"Capa do Filme"}
                            placeholder={"URL da Imagem"}
                            name={"image"}
                            value={newMovie.image}
                            onChange={handleInputChange}
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
                            onClick={onAddMovie}
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