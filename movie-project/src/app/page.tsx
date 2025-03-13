"use client";

import Image from "next/image";
import Input from "@/components/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import {Card} from "@/components/card/card";
import {MovieData} from "@/interface/MovieData";
import {useMovieData} from "@/hooks/useMovieData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
    const { data } = useMovieData();

    return (
        <div>
        <div className="m-5">
            <Input placeholder="Escreva ou cole um link"/>
        </div>
        <div className="text-white flex mx-20 justify-between items-center">
            <h1 className="text-2xl">Popular - Movie</h1>
            <button
              onClick={openAddModal}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Adicionar Filme
        </button>
        </div>
            <div className="text-white flex mx-20">
                <h1 className="text-2xl">Popular - Movie</h1>
            </div>
        <div className="flex bg-amber-300 p-5 m-5 flex-row">
            {data.map((movieData: MovieData) => (
            <Card key={movieData.id}
                title={movieData.title}
                image={movieData.image}
            />
          ))}
        </div>
        </div>
    );
}
