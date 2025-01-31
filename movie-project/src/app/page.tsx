import Image from "next/image";
import Input from "@/components/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import {Card} from "@/components/card/card";
import {MovieData} from "@/interface/MovieData";

export default function Home() {
    const data: MovieData[] = [];

    return (
    <div className="">
      <div>
        <div className="m-5">
            <Input placeholder="Escreva ou cole um link"/>
        </div>
          <div className="text-white flex mx-20">
              <h1 className="text-2xl">Popular - Movie</h1>
          </div>
          <div className="flex bg-amber-300 p-5 m-5 flex-row">
              data.map(movieData =>
              <Card
                  title={movieData.title}
                  image={movieData.image}
              />
          </div>
      </div>
    </div>
    );
    }
