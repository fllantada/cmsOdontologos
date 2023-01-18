import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  // envConfig es una variable de tipo EnvConfig que contiene las variables de entorno
  private readonly envConfig: EnvConfig;
  // constructor recibe como parametro el path del archivo .env
  constructor(filePath: string) {
    let file: Buffer | undefined;
    try {
      // filePath es el path del archivo .env que se pasa como parametro en el constructor
      file = fs.readFileSync(filePath);
    } catch (error) {
      // si no se encuentra el archivo .env se usa el archivo .env.example
      file = fs.readFileSync('.env');
    }
    // parseo el archivo .env y lo guardo en envConfig
    this.envConfig = dotenv.parse(file);
  }
  // get es una funcion que devuelve el valor de una variable de entorno a partir de su key y lo castea a string
  get(key: string): string {
    return this.envConfig[key];
  }
}