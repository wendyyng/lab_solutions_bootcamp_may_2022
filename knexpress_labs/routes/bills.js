const express = require("express");
const router = express.Router();
const knex = require("../db/client");

router.get("/new", (request, response) => {
  response.render("bills/new");
});

router.post("/", (request, response) => {
  const billTotal = request.body.billTotal;
  const taxPercent = request.body.taxPercent;
  const tipPercent = request.body.tipPercent;
  const groupSize = request.body.groupSize;

  knex("bills")
    .insert(
      {
        bill_total: billTotal,
        tax_percent: taxPercent,
        tip_percent: tipPercent,
        group_size: groupSize,
      },
      "*"
    )
    .then((bills) => {
      const bill = bills[0];
      response.redirect(`bills/${bill.id}`);
    });
});

router.get("/:id", (request, response) => {
  const id = request.params.id;

  knex("bills")
    .where("id", id)
    .first()
    .then((bill) => {
      if (bill) {
        const { bill_total, tax_percent, tip_percent, group_size } = bill;
        const totalBill =
          (bill_total * (1 + tax_percent / 100) * (1 + tip_percent / 100)) /
          group_size;

        const finalBill = Math.round(totalBill * 100) / 100;
        response.render("bills/details", {
          bill,
          finalBill,
        });
      }
    });
});

router.get("/", (request, response) => {
  knex
    .select("*")
    .from("bills")
    .orderBy("created_at", "desc")
    .then((bills) => {
      response.render("bills/index", { bills });
    });
});

module.exports = router;
