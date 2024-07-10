import { Pharmacy } from "./pharmacy";
import { Drug, Fervex, HerbalTea, MagicPill, Dafalgan } from "./types/drug"

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

  it("should limit the benefit to 50", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 54)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 50)]);
  });

  it("should limit the benefit increase to 50", () => {
    expect(
      new Pharmacy([new HerbalTea(0, 50)]).updateBenefitValue()
    ).toEqual([new HerbalTea(-1, 50)]);
  });

  it("should not change its values in case of MagicPill", () => {
    expect(
      new Pharmacy([new MagicPill(2, 3)]).updateBenefitValue()
    ).toEqual([new MagicPill(2, 3)]);
  })

  it("should increase the benefit of Fervex twice as fast while lasting 10 or less days for its expiration", () => {
    expect(
      new Pharmacy([new Fervex(10, 3)]).updateBenefitValue()
    ).toEqual([new Fervex(9, 5)]);
  });

  it("should increase the benefit of Fervex thrice as fast while lasting 5 or less days for its expiration", () => {
    expect(
      new Pharmacy([new Fervex(5, 3)]).updateBenefitValue()
    ).toEqual([new Fervex(4, 6)]);
  });

  it("should decrease the benefit twice as fast for Dafalgan", () => {
    expect(
      new Pharmacy([new Dafalgan(10, 5)]).updateBenefitValue()
    ).toEqual([new Dafalgan(9, 3)]);
  });

  it("should decrease the benefit four times as fast for an expired Dafalgan", () => {
    expect(
      new Pharmacy([new Dafalgan(1, 5)]).updateBenefitValue()
    ).toEqual([new Dafalgan(0, 1)]);
  });
});
