"use client";

import Input from "@/components/Input";
import { Card } from "@/components/card/card";
import { MovieData } from "@/interface/MovieData";
import { useMovieData } from "@/hooks/useMovieData";
import NewMovie from "@/components/newMovie";

export default function Home() {
    const { data } = useMovieData();

    return (
        <div className="bg-gradient-to-bl from-[#19092E] to-[#301A4E]  min-h-screen flex flex-col">
            <div className="m-10 flex justify-between items-center">
                <div className="flex-1 flex justify-center">
                    <Input placeholder="Escreva ou cole um link" />
                </div>
                <NewMovie />
            </div>
            <div className="text-white flex mx-20 justify-between items-center">
                <h1 className="text-2xl">Popular - Movie</h1>
            </div>
            <div className="grid grid-cols-1 bg-amber-300 p-5 m-5 gap-4">
                {data?.map((movieData: MovieData) => (
                    <Card key={movieData.id}
                        title={movieData.title}
                        image={movieData.image}
                    />
                ))}
            </div>
            <div className="text-white flex mx-20">
                <h1 className="text-2xl">Popular - Movie</h1>
            </div>
            
        </div>
    );
}