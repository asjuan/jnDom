import { DomCommand } from '../../app/jndom';
export class FakeSelectCmd implements DomCommand {

    current: string[];
    pos: number;

    constructor() {
        this.current = [];
        this.pos = 0;
    }

    appendToSelect(value: string, label: string) {
        this.current.push(value);
    }
    write(value: string) {
        throw new Error("Method not implemented.");
    }
    removeAll() {
        this.current = [];
        this.pos = 0;
    }
    readSelected(): string {
        return this.current[this.pos];
    }
    readElement(): string {
        throw new Error("Method not implemented.");
    }
    chooseOption(pos: number) {
        this.pos = pos;
    }
}