export interface DomCommand {
    appendToSelect(value: string, label: string);
    write(value: string);
    removeAll();
    readSelected(): string;
    chooseOption(pos: number);
    readElement(): string;
};

export class Presenter {
    action: DomCommand;
    constructor(command: DomCommand) {
        this.action = command;
    };
    execute = function (action: (DomCommand) => void) {
        action(this.action);
    }
}

export class DomAction implements DomCommand {
    elementId: string;

    constructor(elementId: string) {
        this.elementId = elementId;
    }

    appendToSelect(value: string, label: string) {
        let el = <HTMLSelectElement> document.getElementById(this.elementId);
        let option = document.createElement('option');
        option.text = label;
        option.value = value;
        el.options.add(option);
    }
    write(value: string) {
        var el = document.getElementById(this.elementId);
        el.setAttribute('value', value);
    }
    removeAll() {
        let el = <HTMLSelectElement> document.getElementById(this.elementId);
        let i;
        for (i = el.options.length-1; i>=0;i--){
            el.remove(i);
        }
    }
    readSelected(): string {
        let el = <HTMLSelectElement> document.getElementById(this.elementId);
        let pos = el.selectedIndex;
        return el.options[pos].value;
    }
    chooseOption(pos: number) {
        let el = <HTMLSelectElement> document.getElementById(this.elementId);
        el.selectedIndex = pos;

    }
    readElement(): string {
        var el = document.getElementById(this.elementId);
        return el.getAttribute('value');
    }

}

