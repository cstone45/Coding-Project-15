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
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function() {
        riskDashboard.removeChild(item);
    });
    const increaseButton = document.createElement("button");
    increaseButton.textContent = "Increase Risk Levels";
    increaseButton.classList.add("increase-button");
    increaseButton.addEventListener("click", function() {
        if (item.classList.contains("Low")) {
            let riskLevel = "Medium"
        };
        if (item.classList.contains("Medium")) {
            let riskLevel = "High"
        };
        if (item.classList.contains("High")) {
            let riskLevel = "High"
        };
    });
    function highlightLowRiskItems() {
        const lowRiskItems = document.querySelectorAll(".low-risk");
        Array.from(lowRiskItems).forEach(item => {
            item.style.backgroundColor = "green";
        });
    };
    function highlightMediumRiskItems() {
        const mediumRiskItems = document.querySelectorAll(".medium-risk");
        Array.from(mediumRiskItems).forEach(item => {
            item.style.backgroundColor = "yellow";
        });
    };
    function highlightHighRiskItems() {
        const highRiskItems = document.querySelectorAll(".high-risk");
        Array.from(highRiskItems).forEach(item => {
            item.style.backgroundColor = "red"
        });
    };
    item.appendChild(nameHeading);
    item.appendChild(levelParagraph);
    item.appendChild(departmentLabel);
    item.appendChild(resolveButton);
    item.appendChild(increaseButton);
    riskDashboard.appendChild(item);
    highlightLowRiskItems("green");
    highlightMediumRiskItems("yellow");
    highlightHighRiskItems("red");
}
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task 3: Removing Risk Items
//See Modifications to Task 2 Above
addRiskItem("Market Fluctuations", "High", "Finance");

//Task 4: Categorizing Risk By Level
//See Modifications to Task 2
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

//Task 5: Implementing Bulk Updates
//See Above Changes to Task 2
addRiskItem("Employee Retention", "Low", "HR");

//Task 6: Handling Event Propagation