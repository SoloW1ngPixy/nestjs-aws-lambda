import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World'
  }

  getRandom(): string {
    var hello = ['Hello', 'Bonjour', 'Guten tag', 'Buongiorno', '¡Hola!']
    var i = Math.floor(Math.random() * (hello.length - 0) + 0)
    return hello[i];
  }
}
