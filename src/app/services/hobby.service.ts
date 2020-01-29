import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hobbies } from '../models/hobbies';

@Injectable()
export class HobbyService {
    private path = '../../assets/files/hobbies.json';

    constructor(private http: HttpClient) {}

    getHobbies(): Promise<Array<Hobbies>> {
        return this.http.get<Array<Hobbies>>(this.path).toPromise();
    }
}