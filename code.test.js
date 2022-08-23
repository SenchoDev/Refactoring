const code = require("./code.js");

describe("Statement", () => {
  const fakePlays = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As You Like It", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
  };

  const fakeInvoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  };
  let expected1 = "Hamlet: $410.00 (55 seats)"
  let expected2 = "Othello: $410.00 (40 seats)"

  it("should return length greater than 50", () => {
    expect(code.statement(fakeInvoice, fakePlays).length).toBeGreaterThan(50);
  });
  it("should contain expected values", () => {
    expect(code.statement(fakeInvoice, fakePlays)).toContain(expected1);
    expect(code.statement(fakeInvoice, fakePlays)).toContain(expected2);
  });
});
