import { Pharmacy } from "./pharmacy";
import { Drug, HerbalTea } from "./types/drug"

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease the benefit twice as fast when expired", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });

  it("should increase the benefit of Herbal Tea", () => {
    expect(
      new Pharmacy([new HerbalTea(2, 3)]).updateBenefitValue()
    ).toEqual([new HerbalTea(1, 4)]);
  });

  it("should increase the benefit of Herbal Tea twice as fast in expiration", () => {
    expect(
      new Pharmacy([new HerbalTea(0, 3)]).updateBenefitValue()
    ).toEqual([new HerbalTea(-1, 5)]);
  });
});
