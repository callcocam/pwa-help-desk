import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MEAT_API, MEAT_BASE } from '../api';

@Injectable()
export class ShareService {
  public email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  public number = /^[0-9]*$/;
  public cpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  public cnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  public documentCpCn = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;

  public API  = {
          url:MEAT_API,
          base:MEAT_BASE,
  } ;
  public resultado = new Cep();
  constructor(public http: HttpClient) { }

  public getCover(cover:string) {
    return `${this.API.base}${cover}`;
  }
  public converterRespostaParaCep(cepNaResposta): Cep {
  
    let cep = new Cep();
    cep.zip = cepNaResposta.cep;
    cep.street = cepNaResposta.logradouro;
    cep.complement = cepNaResposta.complemento;
    cep.district = cepNaResposta.bairro;
    cep.city = cepNaResposta.localidade;
    cep.state = cepNaResposta.uf;
    return cep;
  }
  convertToCpfCnpj(num) {
    if (num) {
      num = num.toString().trim();
      num = num.replace(/\D/g, "");

      switch (num.length) {
        case 4:
          num = num.replace(/(\d+)(\d{3})/, "$1.$2");
          break;
        case 5:
          num = num.replace(/(\d+)(\d{3})/, "$1.$2");
          break;
        case 6:
          num = num.replace(/(\d+)(\d{3})/, "$1.$2");
          break;
        case 7:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, "$1.$2.$3");
          break;
        case 8:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, "$1.$2.$3");
          break;
        case 9:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, "$1.$2.$3");
          break;
        case 10:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
          break;
        case 11:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
          break;
        case 12:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4");
          break;
        case 13:
          num = num.replace(
            /(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/,
            "$1.$2.$3/$4-$5"
          );
          break;
        case 14:
          num = num.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/,
            "$1.$2.$3/$4-$5"
          );
          break;
      }
    }
    return num;
  }
}

export class Cep {
  public zip = '';
  public street = '';
  public complement = '';
  public district = '';
  public city = '';
  public state = '';
}
