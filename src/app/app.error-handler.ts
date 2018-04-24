import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    handleError(errorResponse: HttpErrorResponse | any) {
        if(errorResponse instanceof HttpErrorResponse){
            const message  = errorResponse.message;
            switch(errorResponse.status){
                case 401:
                  console.log(message || "Não autorizado")
                break;
                case 403:
                 console.log(message || "Não autorizado 403")
                break;
                case 404:
                 console.log(message || "Pagina não encontrada")
                break;
                case 500:
                 console.log(message || "Não autorizado")
                break;
            }
        }
       super.handleError(errorResponse)
    }
}