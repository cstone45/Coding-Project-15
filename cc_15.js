//Task 1: Creating the Base Structure
const riskDashboard= document.getElementById("riskDashboard"); //Selects the riskDashboard for Modification
console.log("Risk Dashboard Has Loaded"); //Generates the Risk Dashboard Has Loaded Message in the Console

//Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) { //Establishes the Function to add Risk Items to the Dashboard
    const item = document.createElement("div"); //Creates the new Item Div
    item.classList.add("risk-card"); //Creates the risk card and prepares it to have specific formatting added
    const nameHeading = document.createElement("h3"); //Creates the Heading for the Risk Card
    nameHeading.textContent = riskName; //Establishes the Risk Name as the Heading component of the card
    const levelParagraph = document.createElement("p"); //Creates the Paragraph Element for the Risk Card
    levelParagraph.textContent = riskLevel; //Establishes Risk Level as the Paragraph Element in the Risk Card
    const departmentLabel = document.createElement("span"); //Establishes the span element for tthe Risk Card
    departmentLabel.textContent = department; //Establishes department as the span element in the Risk Card
    const resolveButton = document.createElement("button"); //Creates the Resolve Button Element in the Risk Card
    resolveButton.textContent = "Resolve" //Establishes the identifying text on the Button as Resolve
    resolveButton.classList.add("resolve-button"); //Creates the resolve Button class-list
    resolveButton.addEventListener("click", function() { 
        riskDashboard.removeChild(item); //Declares the click events purpose to delete the Risk Card from the Dashboard upon click
    });
    const increaseButton = document.createElement("button"); //Creates a New Button in the Risk Card
    increaseButton.textContent = "Increase Risk Levels"; //Establishes the Buttons Text as "Increase Risk Levels"
    increaseButton.classList.add("increase-button"); //Declares a new class list for increase-button
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
    }); //Creates the Function for the Increase Button to Increase the Risk Level in the Risk Card
    
    function highlightLowRiskItems() {
        const lowRiskItems = document.querySelectorAll(".low-risk");
        Array.from(lowRiskItems).forEach(item => {
            item.style.backgroundColor = "green";
        });
    }; //Creates a function to Highlight Low Risk Items With A Green Background
    
    function highlightMediumRiskItems() {
        const mediumRiskItems = document.querySelectorAll(".medium-risk");
        Array.from(mediumRiskItems).forEach(item => {
            item.style.backgroundColor = "yellow";
        });
    }; //Crreates a function to highlight Medium Risk Items with a Yellow Background
    
    function highlightHighRiskItems() {
        const highRiskItems = document.querySelectorAll(".high-risk");
        Array.from(highRiskItems).forEach(item => {
            item.style.backgroundColor = "red"
        });
    }; //Creates a function to Highlight High Risk Items with a Red Background

    item.appendChild(nameHeading); //Append the Heading for the Risk Card to the Risk Card
    item.appendChild(levelParagraph); //Appends the Paragraph Section of the Card to the Risk Card
    item.appendChild(departmentLabel); //Append the Department Lable Section of the Card to the Risk Card
    item.appendChild(resolveButton); //Appends the Resolve Button to the Risk Card
    item.appendChild(increaseButton); //Appends the Increase Button to the Risk Card
    riskDashboard.appendChild(item); //Appends the Item Element to the Dashboard
    highlightLowRiskItems("green"); //Highlights Relevant Cards Green
    highlightMediumRiskItems("yellow"); //Highlights Relevant Cards Yellow
    highlightHighRiskItems("red"); //Highlights Relevant Cards Red
}
addRiskItem("Data Breach", "High", "IT"); //Creates a New High Risk Item titled Data Breach
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); //Creates a new Medium Risk Item titled Supply Chain Disruption

//Task 3: Removing Risk Items
//See Modifications to Task 2 Above
addRiskItem("Market Fluctuations", "High", "Finance"); //Creates a new Risk Item titled Market Fluctuations

//Task 4: Categorizing Risk By Level
//See Modifications to Task 2
addRiskItem("Cybersecurity Threat", "High", "IT"); //Creates a new risk item "Cybersecurity Threat"
addRiskItem("HR Compliance Issue", "Low", "Human Resources"); //Creates a new Risk Item "HR Compliance Issue"

//Task 5: Implementing Bulk Updates
//See Above Changes to Task 2
addRiskItem("Employee Retention", "Low", "HR"); //Creates a new Risk Item "Employee Retention"

//Task 6: Handling Event Propagation
stopPropagation() //Prevents Event Propagation in the Console and on the Dashboard