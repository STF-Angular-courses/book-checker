import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class RestAbstract<OneElementType> {
  protected abstract readonly http: HttpClient;
  protected abstract readonly path: string;

  private readonly prefix: string = 'http://localhost/api';

  list(): Observable<OneElementType[]> {
    return this.http.get<OneElementType[]>(`${this.prefix}/${this.path}`);
  }

  create(data: FormData) {
    return this.http.post<OneElementType>(`${this.prefix}/${this.path}`, data);
  }

  get(id: number): Observable<OneElementType> {
    return this.http.get<OneElementType>(`${this.prefix}/${this.path}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.prefix}/${this.path}/${id}`);
  }
}
