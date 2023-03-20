import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error:any) {
    console.error(error)
    this.handleError = ()=>{}
  }
}
