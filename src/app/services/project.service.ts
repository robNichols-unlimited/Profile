import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../project-card/project-card.component';

@Injectable()
export class ProjectService {
    private path = '../../assets/files/alt-project.json';

    constructor(private http: HttpClient) {}

    getProjects(): Promise<Array<Project>> {
        return this.http.get<Array<Project>>(this.path).toPromise();
    }
}