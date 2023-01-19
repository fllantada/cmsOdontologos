import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import defaultConfig from './defaultConfig';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  // envConfig es una variable de tipo EnvConfig que contiene las variables de entorno
  private readonly envConfig: EnvConfig;
  // constructor recibe como parametro el path del archivo .env
  constructor() {
    //inicializar el envConfig
    this.envConfig = defaultConfig;
    let file: Buffer | undefined;

    try {
      // si no se encuentra el archivo .env se usa el archivo .env.example
      file = fs.readFileSync('.env');

      console.log(file);

      // parseo el archivo .env y lo guardo en envConfig
      this.envConfig = dotenv.parse(file);
      //me pisen el this.envConfig
    } catch (e) {
      console.log(e);
    }
  }
  // get es una funcion que devuelve el valor de una variable de entorno a partir de su key y lo castea a string
  get(key: string): string {
    return this.envConfig[key];
  }
}
