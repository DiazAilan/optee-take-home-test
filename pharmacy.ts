import { Drug } from "./types/drug";

export class Pharmacy {

  private drugs: Drug[]

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue(): Drug[] {
    this.drugs.forEach(drug => drug.updateBenefitValue())
    return this.drugs;
  }
}
