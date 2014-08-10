#------------------------------------------------------------------------------ 
# crime_july.py
# Author: Guillermo K. Rojas
# Defines the Crime class for clerydart_template_july.py
# Saves data from csv file into instance variables of the Crime object
# Used in the CleryDart July 2014 Update
#
# crime_july.py was archived for reference: August 10, 2014
#------------------------------------------------------------------------------ 

import random

# Defines Crime class
class Crime:
    
    # Initilizes the Crime Class, Declares Instance Variables 
    def __init__(self, date_reported, nature_of_crime, date_occurred, time_occurred, crime_location, case_disposition):
        self.date_reported = date_reported 
        self.nature_of_crime = nature_of_crime
        self.date_occurred = date_occurred
        self.time_occurred = time_occurred
        self.crime_location = crime_location
        self.case_disposition = case_disposition
        self.popup_info = "Crime Location: " + str(self.crime_location) + ";  Type of Crime: " + str(self.nature_of_crime) + ";  Date Occurred: " + str(self.date_occurred) 
        self.latitude_longitude = None # Will hold the general [latitude, longitude] value provided by the dictionary look-up
        self.gen_lat = None # Will hold the generated latitude value
        self.gen_long = None # Will hold the generated longitude value
        self.plot_points = None # Will hold the generated [latitude, longitude] list for the object
    
    # Method that returns a string of the data from the object    
    def __string__(self):
        return str(self.date_occurred) + "," + str(self.nature_of_crime) + "," + str(self.crime_location) + "," + str(self.date_reported) + "," + str(self.popup_info)
    
    # Returns a generated marker position
    def marker_position(self, latitude_longitude):
        i = 0 #indexes into the latitude_longitude coordinates list
        self.gen_lat = random.uniform(latitude_longitude[i] - 0.00010, latitude_longitude[i] + 0.00010) 
        self.gen_long = random.uniform(latitude_longitude[i+1] - 0.00010, latitude_longitude[i+1] + 0.00010)
        self.plot_points = [self.gen_lat, self.gen_long]
        return self.plot_points 