declare type _contractTest = (accounts: string[]) => void;
declare function contract(name: string, test: _contractTest): void;
declare interface TransactionMeta {
  from: string;
}

declare interface Contract<T> {
  "new"(): Promise<T>;
  deployed(): Promise<T>;
  at(address: string): T;
}

declare interface CalculatorInstance {
  getResult(): number;
  addToNumber(num: number): void;
  minusToNumber(num: number): void;
  multiplyToNumber(num: number): void;
  divideToNumber(num: number): void;
  //   getBalance(account: string): number;
  //   getBalanceInEth(account: string): number;
  //   sendCoin(account: string, amount: number, meta?: TransactionMeta): Promise<void>;
}

interface Artifacts {
  require(name: "./Calculator.sol"): Contract<CalculatorInstance>;
}

declare var artifacts: Artifacts;
