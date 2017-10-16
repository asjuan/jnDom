import { DomCommand, Presenter, DomAction } from '../../app/jndom';
import { FakeDivCmd } from './divCommand';
import { FakeSelectCmd } from './selectCommand';

describe('Fake Div Element', () => {
  let presenter: Presenter;
  let command: FakeDivCmd;

  beforeEach(() => {
    command = new FakeDivCmd('1');
    presenter = new Presenter(command);
  });

  it('should write 5 to div', () => {
    presenter.execute(cmd => {
      let calculated = '5';
      cmd.write(calculated);
    });
    expect(command.readElement()).toEqual('5');
  });

  it('should show no value after removeAll', () => {
    presenter.execute(cmd => {
      cmd.removeAll();
    });
    expect(command.readElement()).toEqual('');
  });
});

describe('Fake Select Element', () => {
  let presenter: Presenter;
  let command: FakeSelectCmd;

  beforeEach(() => {
    command = new FakeSelectCmd();
    presenter = new Presenter(command);
  });

  it('should append a letter to list and read', () => {
    presenter.execute(cmd => {
      cmd.appendToSelect('a', 'a');
    });
    expect(command.readSelected()).toEqual('a');
  });

  it('should remove all, append b and return letter b', () => {
    presenter.execute(cmd => {
      cmd.appendToSelect('a', 'a');
      cmd.removeAll();
      cmd.appendToSelect('b', 'b');
    });
    expect(command.readSelected()).toEqual('b');
  });

  it('should append b, then choose b, returns b', () => {
    presenter.execute(cmd => {
      cmd.appendToSelect('a', 'a');
      cmd.appendToSelect('b', 'b');
      cmd.chooseOption(1);
    });
    expect(command.readSelected()).toEqual('b');
  });
});

describe('Actual Div Element', () => {
  let presenter: Presenter;
  let cmd: DomAction;

  beforeEach(() => {
    cmd = new DomAction('Div1');
    presenter = new Presenter(cmd);
  });

  it('should write 5 to div', () => {
    presenter.execute(cmd => {
      let calculated = '5';
      cmd.write(calculated);
    });
    expect(cmd.readElement()).toEqual('5');
  });
});

describe('Actual Select Element', () => {
  let presenter: Presenter;
  let command: DomAction;

  beforeEach(() => {
    command = new DomAction('sampleOptions');
    presenter = new Presenter(command);
  });

  it('should append a letter to list and read', () => {
    presenter.execute(cmd => {
      cmd.appendToSelect('a', 'a');
    });
    expect(command.readSelected()).toEqual('a');
  });

  it('should remove all, append b and return letter b', () => {
    presenter.execute(cmd => {
      cmd.appendToSelect('a', 'a');
      cmd.removeAll();
      cmd.appendToSelect('b', 'b');
    });
    expect(command.readSelected()).toEqual('b');
  });

  it('should append b, then choose b, returns b', () => {
    presenter.execute(cmd => {
      cmd.appendToSelect('a', 'a');
      cmd.appendToSelect('b', 'b');
      cmd.chooseOption(1);
    });
    expect(command.readSelected()).toEqual('b');
  });
  
  afterEach(() => {
    command.removeAll();
  });
});