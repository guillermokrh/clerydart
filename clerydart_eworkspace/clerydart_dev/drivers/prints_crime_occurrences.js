/* prints_crime_occurences.js
 * Author: Guillermo K. Rojas
 * Date: 7/29/14
 * 
 * Supposed to be used to generate text for Leaflet Layer controls, but the layer control only accepts
 * strings as the first parameter.  Can still be used, if console.log(); is used to print the variable,
 * and then you manually copy and paste the print statement.  Would be useful if there were too many
 * markers to count, or if they weren't sequential, but as it is, this is slower than counting
 * the marker objects in each list.  
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
			larcenyText = "Larceny-Theft (" + listOfLarcenyTheft.length.toString() + ")";
			liquorText = "Liquor Laws (" + listOfLiquorLaws.length.toString() + ")";
			resistingText = "Resisting Arrest (" + listOfResistingArrest.length.toString() + ")";
			robberyText = "Robbery (" + listOfRobbery.length.toString() + ")";
			sexOffensesText = "Sex Offenses (" + listOfSexOffenses.length.toString() + ")";
			unauthorizedEntryText = "Unauthorized Entry/Presence (" + listOfUnauthorizedEntryPresence.length.toString() + ")";
			vandalismText = "Vandalism (" + listOfVandalism.length.toString() + ")";

		/* Each variable is printed, resulting in formatted "Type of Crime (# of occurences)" */
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
		console.log(larcenyText);
		console.log(liquorText);
		console.log(resistingText);
		console.log(robberyText);
		console.log(sexOffensesText);
		console.log(unauthorizedEntryText);
		console.log(vandalismText);