"use client";

import Input from "@/components/Input";
import { Card } from "@/components/card/card";
import { MovieData } from "@/interface/MovieData";
import { useMovieData } from "@/hooks/useMovieData";
import NewMovie from "@/components/newMovie";

export default function Home() {
    const { data } = useMovieData();

    return (
        <div>
            <div className="m-5 flex row">
                <Input placeholder="Escreva ou cole um link" />
                <NewMovie />
            </div>
            <div className="text-white flex mx-20 justify-between items-center">
                <h1 className="text-2xl">Popular - Movie</h1>
            </div>
            <div className="text-white flex mx-20">
                <h1 className="text-2xl">Popular - Movie</h1>
            </div>
            <div className="flex bg-amber-300 p-5 m-5 flex-row">
                {data?.map((movieData: MovieData) => (
                    <Card key={movieData.id}
                        title={movieData.title}
                        image={movieData.image}
                    />
                ))}
            </div>
        </div>
    );
}