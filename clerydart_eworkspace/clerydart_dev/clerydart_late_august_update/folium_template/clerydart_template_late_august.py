#===============================================================================
# clerydart_template_late_august.py
# Author: Guillermo K. Rojas
# Modified: August 26, 2014
# CleryDart Python-to-Leaflet JavaScript Template used in CleryDart Late August Update
#
# How it Works:
# Uses a .csv reader make a dictionary with lat & long coordinates for each campus location from a csv file
# Uses a .csv reader to make a a list of crime objects from a .csv file; each crime object represents one crime reported
# Uses the location data from each object to match up with the key in the dictionary
#      # If the crime's location is not located as a key in the dictionary, it creates an error message.
# Uses the value from that key to create a random nearby coordinate to allow for multiple markers for one crime location
# Uses Folium to create an Leaflet.js template based on this information 
# Folium exports the Leaflet.js template as an HTML file, complete with markers and popups for each crime  
#
# CSVReader help from pg. 402; "The Practice of Computing Using Python"; book by 
# William Punch and Richard Enbody, Published 2011
#===============================================================================

# Imports 
import csv #imports csv reader
import folium #imports Folium, which will create a html friendly Leaflet.js template
from crime_late_august import Crime # Imports Crime class

### CREATION OF [('KEY: LOCATION', 'VALUE: LATITUDE/LONGITUDE')] DICTIONARY ###
# Creates a dictionary with the latitude and longitudes of each location
campus_coordinates = dict() # initializes the campus_coordinates dictionary

# Reads the CSV file containing the latitude and longitude of each campus location
csv_campus_coordinates = open('campus_coordinates_late_august.csv', 'rU') #opens .csv file with campus location coordinates
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
csv_sample = open('crimes_input_formatted_by_type_late_august.csv', 'rU') #opens the crimes_input.csv file #
csvReader = csv.reader(csv_sample)
crime_objects_list = [] # Empty list where each crime object will be added after it is created by the for-loop 

# Creates crime objects from CSV file
for row in csvReader: # for loop that iterates through all rows in the csv file
    print "raw crime objects row information: " + str(row)
    i = 0 # indexes into the list created in each row
    new_crime_object = Crime(row[i],    # .date_reported instance variable
                             row[i+1],  # .nature_of_crime instance variable
                             row[i+2],  # .date_occurred instance variable
                             row[i+3],  # .time_occurred instance variable
                             row[i+4],  # .crime_location instance variable
                             row[i+5])  # .case_disposition instance variable
    crime_objects_list.append(new_crime_object) # appends each new object to the list of crime objects 

# Closes CSV file
csv_sample.close() #closes the file that is opened

# At this point the 'crime' objects have been created 
print "List of crime objects: " + str(crime_objects_list)

### Folium Map Initialization ###
clerydart_map = folium.Map(location = [43.70598, -72.28627], zoom_start = 16) # Those are standard Dartmouth latitudes and longitudes

# Links campus location coordinates from the dictionary to each individual object
# Adds a marker for each crime object, attaches the .latitude_longitude information to the marker, as well as the .popup_info
for crime_object in crime_objects_list: # For each crime object in the list of crime objects
    
    if crime_object.crime_location in campus_coordinates: # If the string associated with the .crime_location method matches a key in the campus_coordinates dictionary
        print "True means that the .crime_location method matches a campus_coordinates key: " + str(True) #print true
        crime_object.latitude_longitude = campus_coordinates[crime_object.crime_location] # Adds campus location coordinates to each object

        print "Testing Latitude and Longitude method of " + str(crime_object.crime_location) + " Crime Object in Crime class: " + str(crime_object.latitude_longitude)
        
        # Generates the slightly random [latitude, longitude] coordinates close to the main [latitude, longitude] coordinates
        crime_object.marker_position(crime_object.crime_location, crime_object.latitude_longitude)
        
        print "Testing Latitude and Longitude .marker_position method: " + str(crime_object.plot_points)
        
        clerydart_map.simple_marker(crime_object.plot_points, popup = crime_object.popup_info) # Adds marker to clerydart_map, with the correct latitude and longitude
        
    else:
        # Prints error statement if the crime location of the object does not currently have coordinates
        print "Auxilio! '" + str(crime_object.crime_location) + "' not in campus_coordinates dictionary.  Please add." # "Auxilio" is Spanish for "help".
        
#Creates HTML template
clerydart_map.create_map(path = 'clerydart_larger_marker_area_test2.html')

