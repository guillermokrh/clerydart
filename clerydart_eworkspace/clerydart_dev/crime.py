#------------------------------------------------------------------------------ 
# crime.py
# Author: Guillermo K. Rojas
# Defines the Crime class for csv_test.py
# Saves data from csv file into instance variables of the Crime object
#------------------------------------------------------------------------------ 

import random

# Defines Crime class
class Crime:
    
    # Initilizes the Crime Class
    def __init__(self, date_occurred, crime_reported, crime_location, date_reported):
        self.date_occurred = date_occurred 
        self.crime_reported = crime_reported
        self.crime_location = crime_location
        self.date_reported = date_reported
        self.popup_info = str(self.date_occurred) + ": " + str(self.crime_reported)
        self.latitude_longitude = None # Will hold the general [latitude, longitude] value provided by the dictionary look-up
        self.gen_lat = None # Will hold the generated latitude value
        self.gen_long = None # Will hold the generated longitude value
        self.plot_points = None # Will hold the generated [latitude, longitude] list for the object
    
    # Method that returns a string of the data from the object    
    def __string__(self):
        return str(self.date_occurred) + "," + str(self.crime_reported) + "," + str(self.crime_location) + "," + str(self.date_reported) + "," + str(self.popup_info)
    
    # Returns a generated marker position
    def marker_position(self, latitude_longitude):
        i = 0 #indexes into the latitude_longitude coordinates list
        self.gen_lat = random.uniform(latitude_longitude[i] - 0.00015, latitude_longitude[i] + 0.00015) 
        self.gen_long = random.uniform(latitude_longitude[i+1] - 0.00023, latitude_longitude[i+1] + 0.00023)
        self.plot_points = [self.gen_lat, self.gen_long]
        return self.plot_points 