import { NotificationService } from './components/snackbar/notification.service';
import { ErrorHandler, Injectable,NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private ns:NotificationService, private zone:NgZone){
        super()
    }
    handleError(errorResponse: HttpErrorResponse | any) {
        if(errorResponse instanceof HttpErrorResponse){
            const message  = errorResponse.message;
            this.zone.run(()=>{
                switch(errorResponse.status){
                    case 401:
                      console.log(message || "Não autorizado")
                      this.ns.notify(message || "Não autorizado");
                    break;
                    case 403:
                     console.log(message || "Error consulte o console")
                     this.ns.notify(message || "Error consulte o console");
                    break;
                    case 404:
                     console.log(message || "Pagina não encontrada")
                     this.ns.notify(message || "Pagina não encontrada");
                    break;
                    case 500:
                     console.log(message || "Não autorizado")
                     this.ns.notify(message || "Error consulte o console");
                    break;
                }
            })
            
        }
       super.handleError(errorResponse)
    }
}