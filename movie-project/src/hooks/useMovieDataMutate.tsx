"use client";

import axios, {AxiosPromise} from "axios";
import {MovieData} from "@/interface/MovieData";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: MovieData): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/movie");
    return response;
}

export function useMovieDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(["movie-data"])
        }
    })

    return mutate;
}