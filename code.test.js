const { statement, htmlStatement } = require("./statement.js");

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

  describe("Plain string statement", () => {
    let expectedHamletData= "Hamlet: $650.00 (55 seats)";
    let expectedOthelloData = "Othello: $500.00 (40 seats)";

    let testStatement = jest.fn(statement);

    it("should return length greater than 50", () => {
      expect(testStatement(fakeInvoice, fakePlays).length).toBeGreaterThan(50);
    });

    it("should render expected string values", () => {
      expect(testStatement(fakeInvoice, fakePlays)).toContain(expectedHamletData);
      expect(testStatement(fakeInvoice, fakePlays)).toContain(expectedOthelloData);
    });
  });

  describe("HTML Text statement", () => {
    let testHtmlStatement = jest.fn(htmlStatement);

    let expectedTableColumnNames =
      "<tr><th>play</th><th>seats</th><th>cost</th></tr>";

    let expectedHtmlAsYouLikeItData = '<tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>'
    let expectedHtmlOthelloData = '<tr><td>Othello</td><td>40</td><td>$500.00</td></tr>'

    it("should contain table that has plays seats and costs column", () => {
      expect(testHtmlStatement(fakeInvoice, fakePlays)).toContain(
        expectedTableColumnNames
      );
    });


    it("should render expected html values", () => {
      expect(testHtmlStatement(fakeInvoice, fakePlays)).toContain(
        expectedHtmlAsYouLikeItData
      );
      expect(testHtmlStatement(fakeInvoice, fakePlays)).toContain(
        expectedHtmlOthelloData
      );
    });

  });
});
