#------------------------------------------------------------------------------ 
# crime.py
# Author: Guillermo K. Rojas
# Defines the Crime class for csv_test.py
# Saves data from csv file into instance variables of the Crime object
#------------------------------------------------------------------------------ 

# Defines Crime class
class Crime:
    def __init__(self, date_occurred, crime_reported, crime_location, date_reported):
        self.date_occurred = date_occurred 
        self.crime_reported = crime_reported
        self.crime_location = crime_location
        self.date_reported = date_reported
        self.popup_info = str(self.date_occurred) + ": " + str(self.crime_reported)
        self.latitude_longitude = None
    
    # Method that returns a string of the data from the object    
    def __string__(self):
        return str(self.date_occurred) + "," + str(self.crime_reported) + "," + str(self.crime_location) + "," + str(self.date_reported) + "," + str(self.popup_info)
    