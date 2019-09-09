import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(public http: HttpClient) {}
  sendCredentials(credentials, url) {
    console.log(credentials);
    return this.http.post(url, credentials);
  }
}
