const covid19ImpactEstimator = (data) => data;

export default covid19ImpactEstimator;

function calculator(){
  
        var reportedCases = Number(document.getElementById("reportedCases").value);
  
        var days = Number(document.getElementById("days").value); 
  
        var totalHospitalBeds = Number(document.getElementById('totalHospitalBeds').value);
  
     var x = days / 3;
  
     var y = 2**x;
  
     var result;
  
  var calc = document.getElementById("choice").value
  
        switch(calc){
            
            currentlyInfected : result = reportedCases * 10; 
            
        break;
            
            severeImpact.currentlyInfected : result = reportedCases * 50; 
            
        break;
            
            infectionsByRequestedTime : result = currentlyInfected * y; 
            
        break;
            
            severeCasesByRequestedTime : result = 0.15 * infectionsByRequestedTime;
            
        break;
            hospitalBedsByRequestedTime : result = 0.35 * totalHospitalBeds;
            
        break;
            
            casesForICUByRequestedTime : result = 0.05 * infectionsByRequestedTime;
            
        break;
            
            casesForVentilatorsByRequestedTime : result = 0.02 * infectionsByRequestedTime;
            
        break;
            
            z : result = infectionsByRequestedTime * 0.65 * 1.5
            
        break;
            
            dollarsInFlight : z / 30; 
            
    }
