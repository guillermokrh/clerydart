/* prints_crime_occurences_august.js
 * Author: Guillermo K. Rojas
 * Date: 7/29/14 Modified: 8/13/14
 * 
 * Supposed to be used to generate text for Leaflet Layer controls, but the layer control only accepts
 * strings as the first parameter.  Can still be used, if console.log(); is used to print the variable,
 * and then you manually copy and paste the print statement.  
 *  
 * How to use: copy and paste to Leaflet JavaScript code on homepage .html file.  
 * 
 */		

/*Generates text for layers control*/
		   
		/* String + length of each crime list are concatenated and stored as a variable*/
		var assaultText = "Assault (" + listOfAssault.length.toString() + ")";
			biasText = "Bias Incident (" + listOfBiasIncident.length.toString() + ")";
			burglaryText = "Burglary (" + listOfBurglary.length.toString() + ")";
			criminalThreateningText = "Criminal Threatening (" + listOfCriminalThreatening.length.toString() + ")";
			criminalStalkingText = "Criminal Threatening/Stalking (" + listOfCriminalThreateningStalking.length.toString() + ")";
			disorderlyConductText = "Disorderly Conduct (" + listOfDisorderlyConduct.length.toString() + ")";
			disorderlyUrinationText = "Disorderly/Public Urination (" + listOfDisorderlyPublicUrination.length.toString() + ")";
			dogsAMenaceText = "Dogs a Menace (" + listOfDogsAMenace.length.toString() + ")";
			drivingText = "Driving Under Influence (" + listOfDrivingUnderInfluence.length.toString() + ")";
			drugAbuseText = "Drug Abuse, Sale, Possession (" + listOfDrugAbuseSalePossession.length.toString() + ")";
			endangeringText = "Endangering Behavior (" + listOfEndangeringBehavior.length.toString() + ")";
			falseFireText = "False Fire Alarm (" + listOfFalseFireAlarm.length.toString() + ")";
			fraudText = "Fraud (" + listOfFraud.length.toString() + ")";
			larcenyText = "Larceny-Theft (" + listOfLarcenyTheft.length.toString() + ")";
			liquorText = "Liquor Laws (" + listOfLiquorLaws.length.toString() + ")";
			resistingText = "Resisting Arrest (" + listOfResistingArrest.length.toString() + ")";
			robberyText = "Robbery (" + listOfRobbery.length.toString() + ")";
			sexOffensesText = "Sex Offenses (" + listOfSexOffenses.length.toString() + ")";
			unauthorizedEntryText = "Unauthorized Entry/Presence (" + listOfUnauthorizedEntryPresence.length.toString() + ")";
			vandalismText = "Vandalism (" + listOfVandalism.length.toString() + ")";
			violationOfPrivacyText = "Violation of Privacy (" + listOfViolationOfPrivacy.length.toString() + ")";

		/* Each variable is printed, resulting in formatted "Type of Crime (# of occurrences)" */
		console.log(assaultText);
		console.log(biasText);
		console.log(burglaryText);
		console.log(criminalThreateningText);
		console.log(criminalStalkingText);
		console.log(disorderlyConductText);
		console.log(disorderlyUrinationText);
		console.log(dogsAMenaceText);
		console.log(drivingText);
		console.log(drugAbuseText);
		console.log(endangeringText);
		console.log(falseFireText);
		console.log(fraudText);
		console.log(larcenyText);
		console.log(liquorText);
		console.log(resistingText);
		console.log(robberyText);
		console.log(sexOffensesText);
		console.log(unauthorizedEntryText);
		console.log(vandalismText);
		console.log(violationOfPrivacyText);