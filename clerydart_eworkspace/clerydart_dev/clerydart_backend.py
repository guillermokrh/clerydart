#===============================================================================
# clerydart_backend.py
# Author: Guillermo K. Rojas
# Testing out the new CleryDart backend 
# CSVReader help from pg. 402; "The Practice of Computing Using Python"; book by 
# William Punch and Richard Enbody, Published 2011
# Goal: to use a .csv reader make a dictionary with lat & long coordinates for each campus location
# Then to use a .csv reader to make a a list of objects, holding the data for each crime
# Then to use the data from the objects to match up with the key in the dictionary
# And use the value from that key to map the Leaflet.js marker 
#===============================================================================

# Imports 
import csv #imports csv reader
import folium #imports Folium, which will create a html friendly Leaflet.js template
from crime import Crime # Imports Crime class

### CREATION OF [('KEY: LOCATION', 'VALUE: LATITUDE/LONGITUDE')] DICTIONARY ###
# Creates a dictionary with the latitude and longitudes of each location
campus_coordinates = dict() # initializes the campus_coordinates dictionary

# Reads the CSV file containing the latitude and longitude of each campus location
csv_campus_coordinates = open('collis_tennis_coordinates.csv', 'rU') #opens .csv file with Collis and Boss Tennis Center coordinates
csvCoordinatesReader = csv.reader(csv_campus_coordinates) # read the .csv file with coordinates

for row in csvCoordinatesReader: #for loop that iterates through all rows in .csv file
    print "raw coordinates row information: " + str(row)
    i = 0 #indexes into the list created by each row
    campus_coordinates[row[i]] = [float(row[i+1]), float(row[i+2])] #creates a key-value dictionary pair for each data in list

# Closes Campus Coordinates CSV file
csv_campus_coordinates.close()

# Print Dictionary Key-Value Pairs to see if they have been properly entered
print "campus_coordinate dictionary: " + str(campus_coordinates.items()) #checks to see if the key-value pair has been entered into the dictionary; works!!

### CREATION OF CRIME OBJECTS ###
# Reads the CSV file
csv_sample = open('collis_multiple_popups.csv', 'rU') #opens the sample_input.csv file #works again
csvReader = csv.reader(csv_sample)
crime_objects_list = [] # Empty list where each crime object will be added after it is created by the for-loop 

# Creates crime objects from CSV file
for row in csvReader: # for loop that iterates through all rows in the csv file
    print "raw crime objects row information: " + str(row)
    i = 0 # indexes into the list created in each row
    new_crime_object = Crime(row[i],    # .date_occurred method
                             row[i+1],  # .crime_reported method
                             row[i+2],  # .crime_location method
                             row[i+3])  # .date_reported method
    crime_objects_list.append(new_crime_object) # appends each new object to the list of crime objects 

# Closes CSV file
csv_sample.close() #closes the file that is opened

#At this point the 'crime' objects have been created 
print "List of crime objects: " + str(crime_objects_list)

# Folium Map initialization
clerydart_map = folium.Map(location = [43.70598, -72.28627], zoom_start = 16) # Those are standard Dartmouth latitudes and longitudes

# Links campus location coordinates from the dictionary to each individual object
# Adds a marker for each crime object, attaches the .latitude_longitude information to the marker, as well as the .popup_info
for crime_object in crime_objects_list: # For each crime object in the list of crime objects
    
    if crime_object.crime_location in campus_coordinates: # If the string associated with the .crime_location method matches a key in the campus_coordinates dictionary
        print "True means that the .crime_location method matches a campus_coordinates key: " + str(True) #print true
        crime_object.latitude_longitude = campus_coordinates[crime_object.crime_location] # Adds campus location coordinates to each object

        print "Testing Latitude and Longitude method of " + str(crime_object.crime_location) + " Crime Object in Crime class: " + str(crime_object.latitude_longitude)
        
        # Generates the slightly random [latitude, longitude] coordinates close to the main [latitude, longitude] coordinates
        crime_object.marker_position(crime_object.latitude_longitude)
        
        print "Testing Latitude and Longitude .marker_position method: " + str(crime_object.plot_points)
        
        clerydart_map.simple_marker(crime_object.plot_points, popup = crime_object.popup_info) # Adds marker to clerydart_map, with the correct latitude and longitude
        
#Creates HTML template
clerydart_map.create_map(path = 'collis_multiple_popups_test.html')

