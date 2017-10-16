import { DomCommand } from '../../app/jndom';
export class FakeDivCmd implements DomCommand {
  
    
      current: string;
      constructor(value: string) {
        this.current = value;
      };
      write(value: string) {
        this.current = value;
      }
      removeAll() {
        this.current = '';
      }
      appendToSelect(value: string, label: string) {
      }
      readSelected(): string {
        throw new Error("Method not implemented.");
      }
      readElement(): string {
        return this.current;
      }
      chooseOption(pos: number) {
        throw new Error("Method not implemented.");
      }
    }