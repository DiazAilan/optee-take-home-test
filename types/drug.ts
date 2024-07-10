export class Drug {

    public name: string;
    public expiresIn: number;
    public benefit: number;
  
    constructor(name: string, expiresIn: number, benefit: number) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }

    public updateBenefitValue(): void {
      this.handleBenefit()
      this.handleExpires()
      this.checkForExpiration()
    }

    protected handleBenefit(): void {
      this.benefit = this.benefit > 0 ? this.benefit - 1 : 0
    }

    protected handleExpires(): void {
      this.expiresIn = this.expiresIn - 1
    }

    protected checkForExpiration(): void {
      if (this.expiresIn <= 0) {
        this.benefit = this.benefit - 1
      }
    }
}

export class HerbalTea extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Herbal Tea', expiresIn, benefit)
    }

    protected handleBenefit(): void {
      this.benefit = this.benefit + 1
    }

    protected checkForExpiration(): void {
      if (this.expiresIn <= 0) {
        this.benefit = this.benefit + 1
      }
    }
}

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Fervex', expiresIn, benefit)
  }

  public updateBenefitValue(): void {
    if (this.benefit < 50) {
      this.benefit = this.benefit + 1

      if (this.expiresIn < 11) {
        this.benefit = this.benefit + 1;
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

  public updateBenefitValue(): void {
    
  }
}

export class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Doliprane', expiresIn, benefit)
  }

  public updateBenefitValue(): void {
    if (this.benefit > 0) {
      this.benefit = this.benefit - 1;
    }
    this.expiresIn = this.expiresIn - 1;
    this.benefit = this.benefit - 1;
  }
}