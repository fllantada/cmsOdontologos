import { Injectable } from '@nestjs/common';
import configDefault from './configDefault';
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
  constructor() {
    let file: Buffer;
    try {
      file = fs.readFileSync('.env');
      this.envConfig = dotenv.parse(file);
    } catch (error) {
      this.envConfig = configDefault;
      console.log('No se encontro el archivo .env, se usaran las variables de entorno por defecto');
    }
  }
  // get es una funcion que devuelve el valor de una variable de entorno a partir de su key y lo castea a string
  get(key: string): string {
    return this.envConfig[key];
  }
}