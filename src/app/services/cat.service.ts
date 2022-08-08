import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http"
import { Observable, tap } from "rxjs";
import { ICat } from "../models/cat";

@Injectable ({
    providedIn: 'root'
})
export class CatService {
    constructor(
        private http : HttpClient
    ){}

        
    cats: ICat[] = []
    catsBreeds:any[] =[]

    getAll(x:number):Observable<ICat[]>{
        return this.http.get<ICat[]>('https://api.thecatapi.com/v1/images/search?api_key=2101677a-a5a1-4a78-a4b4-303aab1aa075&has_breeds=1',{
            params: new HttpParams({
                fromObject:{limit:x}
            })
        }).pipe(
            tap(cats => this.cats = cats)
        )
    }

    getAllBreeds(y:number):Observable<any[]>{
        return this.http.get<any[]>('https://api.thecatapi.com/v1/images/search?api_key=2101677a-a5a1-4a78-a4b4-303aab1aa075&has_breeds=1',{
            params: new HttpParams({
                fromObject:{limit:y}
            })
        }).pipe(
            tap(cat => this.catsBreeds = cat)
        )
    }
}