export class Drug {

    public name: string;
    public expiresIn: number;
    public benefit: number;
  
    constructor(name: string, expiresIn: number, benefit: number) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }

    public updateBenefitValue(input: number): void {
      this.benefit = input
    }
}

export class HerbalTea extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Herbal Tea', expiresIn, benefit)
    }

    public updateBenefitValue(input: number): void {
      if (this.benefit < 50) {
        this.benefit = this.benefit + 1
      }

      this.expiresIn = this.expiresIn - 1;

      if (this.benefit < 50) {
        this.benefit = this.benefit + 1;
      }
    }
}

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Fervex', expiresIn, benefit)
  }

  public updateBenefitValue(input: number): void {
    if (this.benefit < 50) {
      this.benefit = this.benefit + 1

      if (this.expiresIn < 11) {
        if (this.benefit < 50) {
          this.benefit = this.benefit + 1;
        }
      }
      if (this.expiresIn < 6) {
        if (this.benefit < 50) {
          this.benefit = this.benefit + 1;
        }
      }
    }
    this.expiresIn = this.expiresIn - 1;

    this.benefit = this.benefit - this.benefit;
  }
}

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Magic Pill', expiresIn, benefit)
  }

  public updateBenefitValue(input: number): void {
    
  }
}

export class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Doliprane', expiresIn, benefit)
  }

  public updateBenefitValue(input: number): void {
    if (this.benefit > 0) {
      this.benefit = this.benefit - 1;
    }
    this.expiresIn = this.expiresIn - 1;
    this.benefit = this.benefit - 1;
  }
}