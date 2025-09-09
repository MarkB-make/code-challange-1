// prompt-sync for calculating on terminus
//calculating gross salary
const prompt = require("prompt-sync")();

const basicSalary = 30000;
const benefits = 70000;

const grossSalary = basicSalary + benefits;
console .log("Gross Salary:", grossSalary);

//calculating PAYE
function calculatePAYE(grossSalary){
	if (grossSalary <= 24000) {
	  return grossSalary * 0.1;
	} else if (grossSalary <= 32333) {
		return grossSalary * 0.25;
	} else {
		return grossSalary * 0.3;
	}
}
const paye = calculatePAYE(grossSalary);


console.log("PAYE", paye);

//calculating NHIF Kenyan Rates
function calculateNHIF(grossSalary){
	if (grossSalary <= 5999) {
		return 150;
	} else if (grossSalary <= 7999){
		return 300;
	} else if (grossSalary <= 11999){
		return 400;
	} else if (grossSalary <= 14999){
		return 500;
	}else if (grossSalary <= 19999){
		return 600;
	}else if ( grossSalary <= 24999){
		return 750;
	} else if ( grossSalary <= 29999){
		return 850;
	} else if ( grossSalary <= 34999){
		return 900;
	} else if ( grossSalary <= 39999){
		return 950;
	} else if ( grossSalary <= 44999){
		return 1000;
	} else if ( grossSalary <= 49999){
		return 1100;
	} else if (grossSalary <= 59999) {
		return 1200;
	} else if ( grossSalary <= 69999){
		return 1300;
	} else if ( grossSalary <= 79999){
		return 1400;
	} else if (grossSalary <= 89999){
		return 1500;
	} else if (grossSalary <= 99999){
		return 1600;
	}else {
		return 1700;
	}
}
const nhif = calculateNHIF(grossSalary);
console.log( "Gross Salary", grossSalary);
console.log("NHIF:", nhif);

 // calculating NSSF Kenya rates
function calculateNSSF(grossSalary){
	if ( grossSalary <= 7000) {
		return grossSalary * 0.06;
	}
	//max tier 1
    if (grossSalary <= 36000){
    	return grossSalary * 0.06;
    }
    //max tier 2
    else {
    	return nssf;
    }
}  
const nssf = calculateNSSF(grossSalary);
console.log("NSSF:", nssf);

  // calculate deductions
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);



//calculate net salary
const netsalary = grossSalary - (paye+nhif+nssf);



