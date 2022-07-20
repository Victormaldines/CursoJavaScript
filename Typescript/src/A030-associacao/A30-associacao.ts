// ASSOCIAÇÃO - Inversão de dependências

/**
 * PARALELO:
 * Herança - Relação do tipo "É um" - is a
 * Associação - Relação do tipo "Tem um" - has a
 *  "A relação mais fraca que temos entre objetos"
 *  "Ligando os objetos e mantendo-os independentes entre sí"
 *
 *  Exemplo de diagrama craido no yEd live:
 *  https://prnt.sc/QiiD1CyAfni1
 */

export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log("I can't write without a tool");
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;

  get name() {
    return this._name;
  }
}

export class Pen extends Tool {
  write() {
    console.log(`${this.name} is writing...`);
  }
}

export class TypeWriter extends Tool {
  write() {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer('Pato papão');
const pen = new Pen('Bic');
const typeWriter = new TypeWriter('Royal Typewriter');

console.log(writer.name);
console.log(pen.name);
console.log(typeWriter.name);
writer.write();
writer.tool = pen;
writer.write();
writer.tool = typeWriter;
writer.write();
writer.tool = null;
writer.write();
