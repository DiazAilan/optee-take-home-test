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
      if (this.benefit > 50) {
        this.benefit = 50
      }
    }

    protected handleBenefit(): void {
      this.benefit = this.benefit > 0 ? this.benefit - 1 : 0
    }

    protected handleExpires(): void {
      this.expiresIn--;
    }

    protected checkForExpiration(): void {
      if (this.expiresIn < 0) {
        this.handleBenefit()
      }
    }
}

export class HerbalTea extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Herbal Tea', expiresIn, benefit)
    }

    protected handleBenefit(): void {
      this.benefit++;
    }

    protected checkForExpiration(): void {
      if (this.expiresIn < 0) {
        this.benefit++;
      }
    }
}

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Fervex', expiresIn, benefit)
  }

  protected handleBenefit(): void {
    this.benefit++;
  }

  protected checkForExpiration(): void {
    if (this.expiresIn <= 10) {
      this.benefit++;
    }

    if (this.expiresIn <= 5) {
      this.benefit++;
    }

    if (this.expiresIn < 0) {
      this.benefit = 0
    }
  }
}

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Magic Pill', expiresIn, benefit)
  }

  protected handleBenefit(): void {}
  protected handleExpires(): void {}
  protected checkForExpiration(): void {}

}

export class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Doliprane', expiresIn, benefit)
  }
}

export class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
      super('Dafalgan', expiresIn, benefit)
  }

  public handleBenefit(): void {
    this.benefit = this.benefit > 1 ? this.benefit - 2 : 0
  }

  protected checkForExpiration(): void {
    if (this.expiresIn <= 0) {
      this.benefit = this.benefit - 2
    }
  }
}