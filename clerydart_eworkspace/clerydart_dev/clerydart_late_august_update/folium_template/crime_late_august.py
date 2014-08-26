#------------------------------------------------------------------------------ 
# crime_late_august.py
# Author: Guillermo K. Rojas
# Defines the Crime class for clerydart_template_july.py
# Saves data from csv file into instance variables of the Crime object
# Used in the CleryDart Late August 2014 Update
#
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
    def marker_position(self, crime_location, latitude_longitude): # Passes crime_location name into marker_position method
                                                                   # Used to specify which buildings need
                                                                   # more room for markers
        if crime_location == "Baker/Berry Library" or "Black Family Visual Arts Center" or "The Green" or "Dartmouth Green":
            lat_long_offset = 0.00025 # testing with something more noticeable # works!
        if crime_location == "53 Commons" or "Collis" or "Life Sciences Center":
            lat_long_offset = 0.00020
        if crime_location == "Hitchcock Hall" or "Fahey Hall" or "McLane Hall" or "Cohen Hall" or "Middle Fayerweather Hall" or "Kappa Kappa Kappa":
            lat_long_offset = 0.00015
        else:
            lat_long_offset = 0.00010
        i = 0 #indexes into the latitude_longitude coordinates list
        self.gen_lat = random.uniform(latitude_longitude[i] - lat_long_offset, latitude_longitude[i] + lat_long_offset) 
        self.gen_long = random.uniform(latitude_longitude[i+1] - lat_long_offset, latitude_longitude[i+1] + lat_long_offset)
        self.plot_points = [self.gen_lat, self.gen_long]
        return self.plot_points 