//Task 1: Creating the Base Structure
const riskDashboard= document.getElementById("riskDashboard");
console.log("Risk Dashboard Has Loaded");

//Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const item = document.createElement("div");
    item.classList.add("risk-card");
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = riskName;
    const levelParagraph = document.createElement("p");
    levelParagraph.textContent = riskLevel;
    const departmentLabel = document.createElement("span");
    departmentLabel.textContent = department;
    item.appendChild(nameHeading);
    item.appendChild(levelParagraph);
    item.appendChild(departmentLabel);
    riskDashboard.appendChild(item);
}
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");