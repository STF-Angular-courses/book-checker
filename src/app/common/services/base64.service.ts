import { Injectable } from '@angular/core';

@Injectable()
export class Base64Service {
  getCorrectBase64(base64: string): string {
    return `data:image/jpeg;base64,${base64}`;
  }
}
