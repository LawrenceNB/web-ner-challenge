import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { nerResponse } from '../response/nerResponse.module';

const root = "http://127.0.0.1:5000";

@Injectable({
    providedIn: 'root'
  })

  export class nerService {
    constructor(
      private http : HttpClient
    ) {}

    getNer(ner : String): Observable<nerResponse> {
        return this.http.post<nerResponse>(root + "/ner", ner);
      }
    
    }