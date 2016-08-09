import {Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {SlackerDocument} from './slacker_document';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScriptService {
    hooks : Array<any> = new Array<any>(); 

    constructor(private http: Http){
        
    }

    public getList() : Promise<SlackerDocument[]>{
        return this.http.get("/script/list")
            .toPromise()
            .then(response => response.json() as SlackerDocument[]);
    }
    public create(name : string) : Promise<SlackerDocument> {
        return this.http.post("/script", {name : name})
            .toPromise()
            .then(response => response.json());
    }

    public update(doc : SlackerDocument) : Promise<boolean> {
        return this.http.put("/script", {item : doc})
            .toPromise()
            .then(response => response.json());
    }
}