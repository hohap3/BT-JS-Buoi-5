function main() {
  // BT 1 : Quản lý sinh viên

  function totalScore(a, b, c, d, e) {
    return a + b + c + d + e;
  }

  function handleManagerStudent() {
    var admissionScore = document.querySelector("#admissionScore");
    var location = document.querySelector(".select-location");
    var subject = document.querySelector(".select-subject");

    var firstSubject = document.querySelector("#firstSubject");
    var secondSubject = document.querySelector("#secondSubject");
    var thirdSubject = document.querySelector("#thirdSubject");

    var result = document.querySelector(".result-bt-1");

    if (
      !admissionScore ||
      !location ||
      !subject ||
      !firstSubject ||
      !secondSubject ||
      !thirdSubject ||
      !result
    )
      return;

    var hasPassed = false;

    var scoreTotal = totalScore(
      Number(firstSubject.value),
      Number(secondSubject.value),
      Number(thirdSubject.value),
      Number(location.value),
      Number(subject.value)
    );

    if (scoreTotal >= Number(admissionScore.value)) hasPassed = true;

    result.textContent = hasPassed
      ? "Bạn đã đậu. Tổng điểm: " + scoreTotal
      : "Bạn đã rớt. Tổng điểm: " + scoreTotal;
  }

  function managerStudent() {
    var buttonBT1 = document.querySelector(".button-bt-1");

    if (!buttonBT1) return;

    buttonBT1.addEventListener("click", handleManagerStudent);
  }

  // BT 2 : Tính tiền điện

  function totalMoney(kw) {
    if (typeof kw !== "number" || !kw) return;

    var FIRST_CHARGE = 500;
    var SECOND_CHARGE = 650;
    var THIRD_CHARGE = 850;
    var FOURTH_CHARGE = 1100;
    var LAST_CHARGE = 1300;

    if (kw <= 50) return FIRST_CHARGE * kw;
    else if (kw > 50 && kw <= 100)
      return FIRST_CHARGE * 50 + SECOND_CHARGE * (kw - 50);
    else if (kw > 100 && kw <= 200)
      return FIRST_CHARGE * 50 + SECOND_CHARGE * 50 + THIRD_CHARGE * (kw - 100);
    else if (kw > 200 && kw <= 350)
      return (
        FIRST_CHARGE * 50 +
        SECOND_CHARGE * 50 +
        THIRD_CHARGE * 100 +
        FOURTH_CHARGE * (kw - 200)
      );
    else
      return (
        FIRST_CHARGE * 50 +
        SECOND_CHARGE * 50 +
        THIRD_CHARGE * 100 +
        FOURTH_CHARGE * 150 +
        LAST_CHARGE * (kw - 350)
      );
  }

  function handleElectricityBill() {
    var userName = document.querySelector("#name");
    var kw = document.querySelector("#kw");

    var result = document.querySelector(".result-bt-2");

    if (!userName || !kw || !result) return;

    var moneyTotal = totalMoney(Number(kw.value));

    result.textContent =
      "Họ tên: " +
      userName.value +
      ", Tiền điện: " +
      moneyTotal.toLocaleString();
  }

  function electricityBill() {
    var buttonBT2 = document.querySelector(".button-bt-2");

    if (!buttonBT2) return;

    buttonBT2.addEventListener("click", handleElectricityBill);
  }

  // BT 3 : Đóng tiền thuế

  function calculateTax(salary, people) {
    if (!salary || typeof salary !== "number" || !people) return;

    return salary - 4e6 - people * 1.6e6;
  }

  function handleTaxMoney() {
    var nameInput = document.querySelector("#name");
    var salaryInput = document.querySelector("#salary");
    var peopleInput = document.querySelector("#people");

    var result = document.querySelector(".result-bt-3");

    if (!nameInput || !salaryInput || !peopleInput || !result) return;

    var totalMoney = calculateTax(
      Number(salaryInput.value),
      Number(peopleInput.value)
    );

    if (totalMoney <= 60e6) totalMoney *= 0.05;
    else if (totalMoney <= 12e6) totalMoney *= 0.1;
    else if (totalMoney <= 21e6) totalMoney *= 0.15;
    else if (totalMoney <= 384e6) totalMoney *= 0.2;
    else if (totalMoney <= 624e6) totalMoney *= 0.25;
    else if (totalMoney <= 960e6) totalMoney *= 0.3;
    else totalMoney *= 0.35;

    result.textContent =
      "Họ tên: " +
      nameInput.value +
      ", Thuế thu nhập cá nhân: " +
      totalMoney.toLocaleString() +
      " VND";
  }

  function taxMoney() {
    var buttonBT3 = document.querySelector(".button-bt-3");

    if (!buttonBT3) return;

    buttonBT3.addEventListener("click", handleTaxMoney);
  }

  // BT 4 : Tính tiền cáp

  function totalMoneyCable(customer, channel, cable) {
    var CIVILIAN_BILL = 4.5;
    var CIVILIAN_SERVICES = 20.5;
    var CIVILIAN_CHANNEL = 7.5;

    var ENTERPRISE_BILL = 15;
    var ENTERPRISE_CHANNEL = 50;
    var ENTERPRISE_SERVICES_FIRST = 75;
    var ENTERPRISE_SERVICES_SECOND = 5;

    switch (customer) {
      case "civilian":
        return CIVILIAN_BILL + CIVILIAN_SERVICES + CIVILIAN_CHANNEL * channel;
      case "enterprise":
        if (cable <= 10)
          return (
            ENTERPRISE_BILL +
            ENTERPRISE_CHANNEL * channel +
            ENTERPRISE_SERVICES_FIRST
          );
        return (
          ENTERPRISE_BILL +
          ENTERPRISE_CHANNEL * channel +
          ENTERPRISE_SERVICES_FIRST +
          ENTERPRISE_SERVICES_SECOND * (cable - 10)
        );
    }
  }

  function handleCalculateCable(customerSelect, cable) {
    if (customerSelect.value === "") {
      alert("Hãy chọn loại khách hàng!");
      customerSelect.focus();
      return;
    }

    var customer = document.querySelector("#customer");
    var channel = document.querySelector("#channel");
    var result = document.querySelector(".result-bt-4");

    if (!customer || !channel || !result) return;

    var totalMoney = new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
    }).format(
      totalMoneyCable(
        customerSelect.value,
        Number(channel.value),
        Number(cable.value)
      )
    );

    result.textContent =
      "Mã khác hàng:" + customer.value + "; Tiền cáp: " + totalMoney;
  }

  function calculateCable() {
    var buttonBT4 = document.querySelector(".button-bt-4");

    var customerSelect = document.querySelector(".select-customer");

    var cableGroup = document.querySelector(".input-group-cable");
    var cable = document.querySelector("#cable");

    if (!customerSelect || !cableGroup || !cable) return;

    customerSelect.addEventListener("change", (e) => {
      var valueSelect = e.target.value;

      if (valueSelect === "enterprise") cableGroup.classList.remove("d-none");
      else {
        cableGroup.classList.add("d-none");
        cable.value = 0;
      }
    });

    buttonBT4.addEventListener("click", function () {
      handleCalculateCable(customerSelect, cable);
    });
  }

  taxMoney();
  calculateCable();
  electricityBill();
  managerStudent();
}

main();
