//JavaScript for CleryDart
//Created by Guillermo K. Rojas Hernandez

				//Loads the Map
				window.onload = function () {

               				var openstreetmapUrl = 'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

					//Old Lat&Lng for the Various Dartmouth Buildings

				/*
				//	var triKap = new L.LatLng(43.70638, -72.29006);
				//	var gammaDeltaChi = new L.LatLng(43.70668, -72.29008);
					var fairchildHall = new L.LatLng(43.70600, -72.28642);
					var southMass = new L.LatLng(43.70363, -72.29073);
				//	var tuckHall = new L.LatLng(43.70563, -72.29442);
					var balchSt = new L.LatLng(43.70455, -72.28066);
					var nadHouse = new L.LatLng(43.70747, -72.28872);
				//	var fiftyThreeCommons = new L.LatLng(43.70325, -72.29064);
				//	var frenchHall = new L.LatLng(43.7043, -72.2970);
				//	var novackCafe = new L.LatLng(43.70590, -72.28876);
					var judgeHall = new L.LatLng(43.70436, -72.29655);
					var dartmouthGreen = new L.LatLng(43.70338, -72.28869);
				*/

					//Things I need to do in the JavaScript code:
					//Create for and while loops to manage the variables 
					//Input data from a text file.  /
	
					//NEW LAT&LONG FOR DARTMOUTH BUILDINGS
					var dicksHouse1 = new L.LatLng(43.70877,-72.28690);
					var dicksHouse2 = new L.LatLng(43.70873 ,-72.28694);

					var fiftyThreeCommons1 = new L.LatLng(43.70302, -72.29067);
					var fiftyThreeCommons2 = new L.LatLng(43.70306, -72.29108);

					var alphaChi1 = new L.LatLng(43.70698,-72.29281);
					var alphaChi2 = new L.LatLng(43.70705 ,-72.29277);

					var alphaDelta1 = new L.LatLng(43.70367 ,-72.28478 );
					var alphaDelta2 = new L.LatLng(43.70363 ,-72.28474 );
					var alphaDelta3 = new L.LatLng(43.70358 ,-72.28471 );

					var alumniGym = new L.LatLng(43.70275 ,-72.28397 );
					var amarnaSociety = new L.LatLng(43.70448 ,-72.28121 );
					var aquinasHouse = new L.LatLng(43.70758 ,-72.29406 );
					var bakerBerry = new L.LatLng(43.70534 ,-72.28867 );
					var berryHall = new L.LatLng(43.70704 ,-72.28626 );

					var betaFrat1 = new L.LatLng(43.70602 ,-72.29090 );
					var betaFrat2 = new L.LatLng(43.70601 ,-72.29084 );
					var betaFrat3 = new L.LatLng(43.70605 ,-72.29102 );

					var bildnerHall = new L.LatLng(43.70721 ,-72.28600 );
					var bonesGate = new L.LatLng(43.70621 ,-72.29184 );
					var bossTennisCenter = new L.LatLng(43.70102 ,-72.27908 );
					var braceCommons = new L.LatLng(43.70426 ,-72.28392 );

					var brownHall1 = new L.LatLng(43.70731 ,-72.29031 );
					var brownHall2 = new L.LatLng(43.70726,-72.29040 );

					var carpenterHall = new L.LatLng(43.70551 ,-72.28925 );
					var carsonHall = new L.LatLng(43.70583 ,-72.28910 );
					var channingCox = new L.LatLng(43.70363 ,-72.29588 );
					var cohenHall = new L.LatLng(43.70764 ,-72.29146 );

					var collisCenter1 = new L.LatLng(43.70270 ,-72.28976 );
					var collisCenter2 = new L.LatLng(43.70268 ,-72.28991 );
					var collisCenter3 = new L.LatLng(43.70279 ,-72.28987 );
					var collisCenter4 = new L.LatLng(43.70277 ,-72.29002 );
					var collisCenter5 = new L.LatLng(43.70285 ,-72.29003 );
					var collisCenter6 = new L.LatLng(43.70275,-72.28990);

					var deweyLot = new L.LatLng(43.70887 ,-72.28299 );
					var dicksHouseAdmin = new L.LatLng(43.70887 , -72.28681);
					var dowdCountryInn1 = new L.LatLng(43.81095, -72.15724);
					var dowdCountryInn2 = new L.LatLng(43.81128, -72.15732);
					var faheyHall = new L.LatLng(43.70539 ,-72.29151 );

					var frenchHall1 = new L.LatLng(43.70402, -72.29694);
					var frenchHall2 = new L.LatLng(43.70398 , -72.29706);

					var gammaDeltaChi = new L.LatLng(43.70658, -72.28995);

					var gileHall = new L.LatLng(43.70475 ,-72.29121 );

					var hanoverInn1 = new L.LatLng(43.70221 ,-72.28869 );
					var hanoverInn2 = new L.LatLng(43.70216 ,-72.28892 );

					var hanoverPd1 = new L.LatLng(43.71982,-72.27322 ); //Note:have to expand the map to see this
					var hanoverPd2 = new L.LatLng(43.71980,-72.27320 );
					var hanoverPd3 = new L.LatLng(43.71981,-72.27325 );
					var hanoverPd4 = new L.LatLng(43.71984,-72.27322);

					var hitchcockHall1 = new L.LatLng(43.70469 ,-72.29061 );
					var hitchcockHall2 = new L.LatLng(43.70477 ,-72.29067 );

					var hoodMuseum = new L.LatLng(43.70201 ,-72.28732 );
					var hopkinsCenter = new L.LatLng(43.70192 ,-72.28810 );

					var triKap1 = new L.LatLng(43.70629, -72.28987);
					var triKap2 = new L.LatLng(43.70631, -72.28994);
					var triKap3 = new L.LatLng(43.70633, -72.29003);

					var lalacsHouse = new L.LatLng(43.70780 , -72.28879);
					var mcullochHall = new L.LatLng(43.70459 ,-72.28335 );

					var mclaneHall1 = new L.LatLng(43.70552 ,-72.29179 );
					var mclaneHall2 = new L.LatLng(43.70556 ,-72.29192);
					var mclaneHall3 = new L.LatLng(43.70562 ,-72.29207 );
					var mclaneHall4 = new L.LatLng(43.70557,-72.29195 );

					var midFayerweatherHall = new L.LatLng(43.70374 , -72.28639 );
					var mortonHall = new L.LatLng(43.70405 ,-72.28356 );
					var newHampshireHall = new L.LatLng(43.70245 ,-72.28675 );
					var northFayerweatherHall = new L.LatLng(43.70406 ,-72.28635 );

					var novackCafe1 = new L.LatLng(43.70577, -72.28838);
					var novackCafe2 = new L.LatLng(43.70582 ,-72.28863 );

					var twentyWestWheelock = new L.LatLng(43.70228, -72.29315);
					var psiUpsilon = new L.LatLng(43.70272 ,-72.29062 );

					var raunerResidenceHall1 = new L.LatLng(43.70749 , -72.28588);
					var raunerResidenceHall2 = new L.LatLng(43.70739 , -72.28575);

					var raunerLibrary = new L.LatLng(43.70447 ,-72.28817 );
					var ripleyHall = new L.LatLng(43.70408 ,-72.28572 );
					var robinsonHall = new L.LatLng(43.70311 ,-72.28988 );

					var russellSage1 = new L.LatLng(43.70551 ,-72.29062 );
					var russellSage2 = new L.LatLng(43.70543 ,-72.29064 );
					var russellSage3 = new L.LatLng(43.70543, -72.29076 );
					var russellSage4 = new L.LatLng(43.70542,-72.29067 );

					var sanbornLibrary = new L.LatLng(43.70472 ,-72.28922);

					var sigmaAlphaEpsilon1 = new L.LatLng(43.70584 ,-72.28782 );
					var sigmaAlphaEpsilon2 = new L.LatLng(43.70583 ,-72.28771 );
					var sigmaAlphaEpsilon3 = new L.LatLng(43.70584,-72.28769);
					var sigmaAlphaEpsilon4 = new L.LatLng(43.70582,-72.28782);

					var tabard1 = new L.LatLng(43.70645 ,-72.29058 );
					var tabard2 = new L.LatLng(43.70650 ,-72.29067 );
					var tabard3 = new L.LatLng(43.70643,-72.29056);

					var thayerEngineering = new L.LatLng(43.70454 ,-72.29485 );
					var thompsonArena = new L.LatLng (43.70106 ,-72.28023 );

					var topliffHall1 = new L.LatLng (43.70269 ,-72.28594 );
					var topliffHall2 = new L.LatLng (43.70268 ,-72.28617 );

					var tuckHall = new L.LatLng(43.70563, -72.29442);

					var wheelerHall1 = new L.LatLng (43.70508 ,-72.28720 );
					var wheelerHall2 = new L.LatLng (43.70512 ,-72.28738 );

					var zetaPsi1 = new L.LatLng (43.70610 ,-72.29148 );
					var zetaPsi2 = new L.LatLng (43.70610 ,-72.29143 );
					var zetaPsi3 = new L.LatLng (43.70604 ,-72.29161 );
					var zetaPsi4 = new L.LatLng (43.70607 ,-72.29156 );
					var zetaPsi5 = new L.LatLng (43.70603 ,-72.29147 );
					var zetaPsi6 = new L.LatLng (43.70609 ,-72.29161 );
					var zetaPsi7 = new L.LatLng (43.70603 ,-72.29158 );

			/* Hack thanks to Paolo Vieria: (https://groups.google.com/forum/#!topic/leaflet-js/qXVBcD3juL4) */
				/***  little hack starts here ***/
				L.Map = L.Map.extend({
   					 openPopup: function(popup) {
    				    //        this.closePopup();  // just comment this
     					   this._popup = popup;

  					      return this.addLayer(popup).fire('popupopen', {
  					          popup: this._popup
  					      });
  					  }
				}); /***  end of hack ***/
			/* Hack keeps multiple pop-ups open*/




				/*Sample Crimes, and Group Layers according to Type of Crime*/

				/*
					
					//Thefts					
					var april20Trikap = L.marker(triKap).bindPopup("Theft - April 20, 2013"),
					    april20Fairchild = L.marker(fairchildHall).bindPopup("Theft - April 20, 2013"),
					    april20Tuck = L.marker(tuckHall).bindPopup("Theft - April 20-22, 2013"),
					    march25French = L.marker(frenchHall).bindPopup("Theft - March 25-April 25, 2013");

					var thefts = L.layerGroup([april20Trikap, april20Fairchild, april20Tuck, march25French]);

					//Drug Offenses
					var april21SouthMass = L.marker(southMass).bindPopup("Drug Offense - April 21, 2013");
					var drugOffenses = L.layerGroup([april21SouthMass]);

					//Criminal Mischief
					var april19Balch = L.marker(balchSt).bindPopup("Criminal Mischief - April 19, 2013");
					var criminalMischief = L.layerGroup([april19Balch]);

					//SimpleAssault
					var april19Commons = L.marker(fiftyThreeCommons).bindPopup("Simple Assault - April 19, 2013"),
					    april25French = L.marker(frenchHall).bindPopup("Simple Assault - April 25, 2013");
					var simpleAssault = L.layerGroup([april19Commons, april25French]);

					//Sex Offenses
					var sexOffenseTwoTwelve = L.marker(dartmouthGreen).bindPopup("Sex Offense - 2012");
					var sexOffense = L.layerGroup([sexOffenseTwoTwelve]);

					//Alchol Law Violations
					var april20Gamma = L.marker(gammaDeltaChi).bindPopup("Alcohol Law Violation - April 20, 2013"),
					    april21Nadhouse = L.marker(nadHouse).bindPopup("Alcohol Law Violation - April 23, 2013"),
					    april26Novack = L.marker(novackCafe).bindPopup("Alcohol Law Violation - April 26, 2013");
					var alcoholViolation = L.layerGroup([april20Gamma, april21Nadhouse, april26Novack]);	

				*/


				/*Most Recent Crimes, and Group Layers according to Type of Crime*/

					//Sample					

					//Assault
					var assault1 = L.marker(bossTennisCenter).bindPopup("2/8/2014: Assault"),
					    assault2 = L.marker(collisCenter1).bindPopup("2/15/2014: Assault"),
					    assault3 = L.marker(lalacsHouse).bindPopup("2/10/2014: Assault");
					    assault4 = L.marker(sigmaAlphaEpsilon1).bindPopup("2/1/2014: Assault");
					    assault5 = L.marker(tabard1).bindPopup("2/22/2014: Assault");
					    assault6 = L.marker(tuckHall).bindPopup("2/26/2014: Assault");
					    assault7 = L.marker(zetaPsi1).bindPopup("3/2/2014: Assault");

					var assaultLayer = L.layerGroup([assault1, assault2, assault3, assault4, assault5, assault6, assault7]);

					//Burglary/Larceny - Theft
					var burglary1 = L.marker(hitchcockHall1).bindPopup("2/6/2014: Burglary/Larceny - Theft");
					var burglaryLayer = L.layerGroup([burglary1]);

					//Disorderly Conduct
					var disConduct1 = L.marker(collisCenter2).bindPopup("2/15/2014: Disorderly Conduct"),
 					    disConduct2 = L.marker(gammaDeltaChi).bindPopup("2/22/2014: Disorderly Conduct"),
					    disConduct3 = L.marker(mclaneHall1).bindPopup("2/15/2014: Disorderly Conduct");
					    disConduct4 = L.marker(newHampshireHall).bindPopup("2/28/2014: Disorderly Conduct");
					    disConduct5 = L.marker(russellSage2).bindPopup("2/8/2014: Disorderly Conduct");
					    disConduct6 = L.marker(tabard2).bindPopup("2/22/2014: Disorderly Conduct");
					    disConduct7 = L.marker(zetaPsi2).bindPopup("3/2/2014: Disorderly Conduct");
					    disConduct8 = L.marker(zetaPsi3).bindPopup("3/6/2014: Disorderly Conduct");

					var disConductLayer = L.layerGroup([disConduct1, disConduct2, disConduct3, disConduct4, disConduct5, disConduct6, disConduct7, disConduct8]);

					
					//Driving Under Influence
					var drivingUInfluence1 = L.marker(hanoverPd1).bindPopup("2/9/2014: Driving Under Influence");
					var drivingUInfluenceLayer = L.layerGroup([drivingUInfluence1]);

					//Drug Abuse, Sale, Possession
					var drugAbuseSalePoss1 = L.marker(hanoverPd2).bindPopup("2/9/2014: Drug Abuse, Sale, Possession"),
					    drugAbuseSalePoss2 = L.marker(russellSage1).bindPopup("2/8/2014: Drug Abuse, Sale, Possession");

					var drugAbuseSalePossLayer = L.layerGroup([drugAbuseSalePoss1, drugAbuseSalePoss2]);
				
					//Forcible Rape
					var forcibleRape1 = L.marker(dicksHouse1).bindPopup("Date Not Listed:  Forcible Rape"),
					    forcibleRape2 = L.marker(dicksHouse2).bindPopup("Date Not Listed:  Forcible Rape");
					    forcibleRape3 = L.marker(brownHall1).bindPopup("2/16/2014: Forcible Rape");
					    forcibleRape4 = L.marker(midFayerweatherHall).bindPopup("11/1/2010: Forcible Rape");

					var forcibleRapeLayer = L.layerGroup([forcibleRape1, forcibleRape2, forcibleRape3, forcibleRape4]);


					//Larceny-Theft
					var larcenyTheft1 = L.marker(fiftyThreeCommons1).bindPopup("3/5/2014: Larceny-Theft"),
					    larcenyTheft2 = L.marker(alphaChi1).bindPopup("2/7/2014: Larceny-Theft");
					    larcenyTheft3 = L.marker(alphaChi2).bindPopup("3/1/2014: Larceny-Theft");
					    larcenyTheft4 = L.marker(alphaDelta3).bindPopup("2/9/2014: Larceny-Theft");
					    larcenyTheft5 = L.marker(alumniGym).bindPopup("3/8/2014: Larceny-Theft");
					    larcenyTheft6 = L.marker(betaFrat1).bindPopup("2/8/2014: Larceny-Theft");
					    larcenyTheft7 = L.marker(betaFrat2).bindPopup("2/6/2014: Larceny-Theft");
					    larcenyTheft8 = L.marker(brownHall2).bindPopup("2/21/2014: Larceny-Theft");
					    larcenyTheft9 = L.marker(carpenterHall).bindPopup("2/6/2014: Larceny-Theft");
					    larcenyTheft10 = L.marker(carsonHall).bindPopup("2/22/2014: Larceny-Theft");
					    larcenyTheft11 = L.marker(cohenHall).bindPopup("2/21/2014: Larceny-Theft");
					    larcenyTheft12 = L.marker(deweyLot).bindPopup("2/20/2014: Larceny-Theft");
					    larcenyTheft13 = L.marker(gileHall).bindPopup("2/14/2014: Larceny-Theft");
					    larcenyTheft14 = L.marker(hoodMuseum).bindPopup("2/21/2014: Larceny-Theft");
					    larcenyTheft15 = L.marker(triKap1).bindPopup("2/6/2014: Larceny-Theft");
					    larcenyTheft16 = L.marker(mcullochHall).bindPopup("2/28/2014: Larceny-Theft");
					    larcenyTheft17 = L.marker(mclaneHall2).bindPopup("2/14/2014: Larceny-Theft");
					    larcenyTheft18 = L.marker(mclaneHall3).bindPopup("2/21/2014: Larceny-Theft");
					    larcenyTheft19 = L.marker(mortonHall).bindPopup("2/7/2014: Larceny-Theft");
					    larcenyTheft20 = L.marker(twentyWestWheelock).bindPopup("3/1/2014: Larceny-Theft"); //add the off campus apartment to the layerGroup
					    larcenyTheft21 = L.marker(psiUpsilon).bindPopup("2/28/2014: Larceny-Theft");
					    larcenyTheft22 = L.marker(raunerResidenceHall1).bindPopup("2/25/2014: Larceny-Theft");
					    larcenyTheft23 = L.marker(raunerLibrary).bindPopup("3/3/2014: Larceny-Theft");
					    larcenyTheft24 = L.marker(ripleyHall).bindPopup("2/20/2014: Larceny-Theft");
					    larcenyTheft25 = L.marker(thayerEngineering).bindPopup("2/6/2014: Larceny-Theft");
					    larcenyTheft26 = L.marker(topliffHall1).bindPopup("2/17/2014: Larceny-Theft");
					    larcenyTheft27 = L.marker(wheelerHall1).bindPopup("6/1/2013: Larceny-Theft"); 


					var larcenyTheftLayer = L.layerGroup([larcenyTheft1, larcenyTheft2, larcenyTheft3, larcenyTheft4, larcenyTheft5, larcenyTheft6, larcenyTheft7, larcenyTheft8, larcenyTheft9, larcenyTheft10, larcenyTheft11, larcenyTheft12, larcenyTheft13, larcenyTheft14, larcenyTheft15,larcenyTheft16, larcenyTheft17, larcenyTheft18, larcenyTheft19, larcenyTheft20, larcenyTheft21, larcenyTheft22, larcenyTheft23, larcenyTheft24, larcenyTheft25, larcenyTheft26, larcenyTheft27]);

					//Liquor Laws
					var liquorLaws1 = L.marker(alphaDelta1).bindPopup("2/8/2014: Liquor Laws"),
					    liquorLaws2 = L.marker(alphaDelta2).bindPopup("2/23/2014: Liquor Laws");
					    liquorLaws3 = L.marker(amarnaSociety).bindPopup("2/23/2014: Liquor Laws");
					    liquorLaws4 = L.marker(berryHall).bindPopup("2/8/2014: Liquor Laws");
					    liquorLaws5 = L.marker(betaFrat3).bindPopup("2/8/2014: Liquor Laws");
					    liquorLaws6 = L.marker(bildnerHall).bindPopup("3/1/2014: Liquor Laws");
					    liquorLaws7 = L.marker(bonesGate).bindPopup("2/6/2014: Liquor Laws");
					    liquorLaws8 = L.marker(channingCox).bindPopup("2/8/2014: Liquor Laws");
					    liquorLaws9 = L.marker(collisCenter3).bindPopup("2/2/2014: Liquor Laws");
					    liquorLaws10 = L.marker(collisCenter4).bindPopup("2/7/2014: Liquor Laws");
					    liquorLaws11 = L.marker(collisCenter5).bindPopup("2/7/2014: Liquor Laws");
					    liquorLaws12 = L.marker(collisCenter6).bindPopup("3/2/2014: Liquor Laws");
					    liquorLaws13 = L.marker(dicksHouseAdmin).bindPopup("3/5/2014: Liquor Laws");
					    liquorLaws14 = L.marker(dowdCountryInn1).bindPopup("3/1/2014: Liquor Laws");
					    liquorLaws15 = L.marker(dowdCountryInn2).bindPopup("3/2/2014: Liquor Laws");
					    liquorLaws16 = L.marker(faheyHall).bindPopup("2/1/2014: Liquor Laws");
					    liquorLaws17 = L.marker(frenchHall1).bindPopup("2/6/2014: Liquor Laws");
					    liquorLaws18 = L.marker(frenchHall2).bindPopup("3/1/2014: Liquor Laws");
					    liquorLaws19 = L.marker(hanoverInn1).bindPopup("3/5/2014: Liquor Laws");
					    liquorLaws20 = L.marker(hanoverInn2).bindPopup("3/5/2014: Liquor Laws");
					    liquorLaws21 = L.marker(hanoverPd3).bindPopup("2/8/2014: Liquor Laws");
					    liquorLaws22 = L.marker(hanoverPd4).bindPopup("2/9/2014: Liquor Laws");
					    liquorLaws23 = L.marker(triKap2).bindPopup("2/1/2014: Liquor Laws");
					    liquorLaws24 = L.marker(triKap3).bindPopup("2/27/2014: Liquor Laws");
					    liquorLaws25 = L.marker(mclaneHall4).bindPopup("2/15/2014: Liquor Laws");
					    liquorLaws26 = L.marker(northFayerweatherHall).bindPopup("2/7/2014: Liquor Laws");
					    liquorLaws27 = L.marker(novackCafe1).bindPopup("2/7/2014: Liquor Laws");
					    liquorLaws28 = L.marker(novackCafe2).bindPopup("3/9/2014: Liquor Laws");
					    liquorLaws29 = L.marker(raunerResidenceHall2).bindPopup("2/22/2014: Liquor Laws");
					    liquorLaws30 = L.marker(russellSage3).bindPopup("2/8/2014: Liquor Laws");
					    liquorLaws31 = L.marker(russellSage4).bindPopup("2/1/2014: Liquor Laws");
					    liquorLaws32 = L.marker(sigmaAlphaEpsilon2).bindPopup("2/1/2014: Liquor Laws");
					    liquorLaws33 = L.marker(sigmaAlphaEpsilon3).bindPopup("2/2/2014: Liquor Laws");
					    liquorLaws34 = L.marker(tabard3).bindPopup("2/22/2014: Liquor Laws");
					    liquorLaws35 = L.marker(thompsonArena).bindPopup("2/2/2014: Liquor Laws");
					    liquorLaws36 = L.marker(topliffHall2).bindPopup("2/8/2014: Liquor Laws");
					    liquorLaws37 = L.marker(wheelerHall2).bindPopup("3/2/2014: Liquor Laws");
					    liquorLaws38 = L.marker(zetaPsi4).bindPopup("3/2/2014: Liquor Laws");
					    liquorLaws39 = L.marker(zetaPsi5).bindPopup("3/6/2014: Liquor Laws");




					var liquorLawsLayer = L.layerGroup([liquorLaws1, liquorLaws2, liquorLaws3, liquorLaws4, liquorLaws5, liquorLaws6,
										liquorLaws7, liquorLaws8, liquorLaws9, liquorLaws10, liquorLaws11, liquorLaws12,
										liquorLaws13, liquorLaws14, liquorLaws15, liquorLaws16, liquorLaws17, liquorLaws18,
										liquorLaws19, liquorLaws20, liquorLaws21, liquorLaws22, liquorLaws23, liquorLaws24,
										liquorLaws25, liquorLaws26, liquorLaws27, liquorLaws28, liquorLaws29, liquorLaws30,
										liquorLaws31, liquorLaws32, liquorLaws33, liquorLaws34, liquorLaws35, liquorLaws36,
										liquorLaws37, liquorLaws38, liquorLaws39]);

					//Other Offenses
					var otherOffenses1 = L.marker(aquinasHouse).bindPopup("2/16/2014: Other Offenses"),
					    otherOffenses2 = L.marker(hitchcockHall2).bindPopup("1/25/2014: Other Offenses");
					    otherOffenses3 = L.marker(zetaPsi6).bindPopup("3/6/2014: Other Offenses");

					var otherOffensesLayer = L.layerGroup([otherOffenses1, otherOffenses2, otherOffenses3]);

					//Sex Offenses
					var sexOffenses1 = L.marker(hopkinsCenter).bindPopup("3/8/2014: Sex Offenses");
					var sexOffensesLayer = L.layerGroup([sexOffenses1]);

					//Vandalism
					var vandalism1 = L.marker(fiftyThreeCommons2).bindPopup("2/8/2014: Vandalism"),
					    vandalism2 = L.marker(bakerBerry).bindPopup("2/11/2014: Vandalism");
					    vandalism3 = L.marker(braceCommons).bindPopup("2/6/2014: Vandalism");
					    vandalism4 = L.marker(robinsonHall).bindPopup("2/25/2014: Vandalism");
					    vandalism5 = L.marker(sanbornLibrary).bindPopup("3/10/2014: Vandalism");
					    vandalism6 = L.marker(sigmaAlphaEpsilon4).bindPopup("2/1/2014: Vandalism");
					    vandalism7 = L.marker(zetaPsi7).bindPopup("3/6/2014: Vandalism");

					var vandalismLayer = L.layerGroup([vandalism1, vandalism2, vandalism3, vandalism4, vandalism5, vandalism6, vandalism7]);


					//Baselayer of the Map								
                			var baseMap = new L.TileLayer(openstreetmapUrl, {
							attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
							maxZoom: 18,
							minZoom: 14
					}); 
						
					//The Map
                			var map = new L.Map('map', {
					    center: new L.LatLng(43.70510, -72.28855), //the center of the map is it's latitute and longitude
					    zoom: 16, 
					    layers: [baseMap, assaultLayer, burglaryLayer, disConductLayer, drivingUInfluenceLayer, drugAbuseSalePossLayer, 
						     forcibleRapeLayer, larcenyTheftLayer, liquorLawsLayer, otherOffensesLayer, sexOffensesLayer, vandalismLayer],
					    closePopupOnClick: false
					});
					
					var overlayMaps = {
						"Assaults (7)": assaultLayer,
					    	"Burglaries (1)": burglaryLayer,
						"Disorderly Conduct (8)": disConductLayer,
						"Driving Under Influence (1)": drivingUInfluenceLayer,
						"Drug Abuse, Sale, Possession (2)": drugAbuseSalePossLayer,
						"Forcible Rape (4)": forcibleRapeLayer,
						"Larceny - Theft (27)": larcenyTheftLayer,
						"Liquor Laws (39)": liquorLawsLayer,
						"Other Offenses (3)": otherOffensesLayer,
						"Sex Offenses (1)": sexOffensesLayer,
						"Vandalism (7)": vandalismLayer,
					};

					//Controls which layers are visible on the upper right hand corner
					L.control.layers(null, overlayMaps, {collapsed: false}).addTo(map);

					//My attempt to add a legend wahhhh
					/*var legend = L.control({position: 'bottomright'});

					legend.onAdd = function (map) {
						    var div = L.DomUtil.create('div', 'info legend'),
							grades=[],
							labels=[];
						    return div;
					};

					legend.addTo(map);
					*/
									
            			};
						
            
