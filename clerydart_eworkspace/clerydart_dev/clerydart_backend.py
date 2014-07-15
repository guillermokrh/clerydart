#===============================================================================
# clerydart_backend.py
# Author: Guillermo K. Rojasuch 
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


# Reads the CSV file
csv_sample = open('coordinates_input.csv', 'rU') #opens the sample_input.csv file #works again
csvReader = csv.reader(csv_sample)
crime_objects_list = [] # Empty list where each crime object will be added after it is created by the csvReader 

# Creates crime objects from CSV file
for row in csvReader: # for loop that iterates through all rows in the csv file
    print "raw row information: " + str(row)
    i = 0 # indexes into the list created in each row
    new_crime_object = Crime(row[i],    # .date_occurred method
                             row[i+1],  # .crime_reported method
                             row[i+2],  # .crime_location method
                             row[i+3],  # .date_reported method
                             row[i+4])  # .popup_info method
    crime_objects_list.append(new_crime_object) # appends each new object to a list of crime objects 

# Closes CSV file
csv_sample.close() #closes the file that is opened

#At this point the 'crime' objects have been created 
print "list of crime objects: " + str(crime_objects_list)
print "sample popup information: " + str(crime_objects_list[0].date_occurred) + ": " + str(crime_objects_list[0].crime_reported) # Testing putting different pieces of data together

# Now I want to iterate through the crime_objects_list, and check to see if the .crime_reported method matches up with a crime in the dictionary

print crime_objects_list[1].crime_location #Testing to see if the crime location can be accessed by the .crime_location method
#print campus_coordinates["CollisCenter"]

# Links campus location coordinates from the dictionary to each individual object
if crime_objects_list[1].crime_location in campus_coordinates: #checks to see if the crime location is in the campus coordinates dictionary as a key
    print "True means that the .crime_location method matches a campus_coordinates key: " + str(True)
    crime_objects_list[1].latitude_longitude = campus_coordinates[crime_objects_list[1].crime_location] #latitude_longitude list becomes the value of the key
    print "Testing Latitude and Longitude method in Crime class: " + str(crime_objects_list[1].latitude_longitude)

# Folium Map initialization
clerydart_map = folium.Map(location = [43.70598, -72.28627], zoom_start = 16) # Those are standard Dartmouth coordinates

# Adds single popup
clerydart_map.simple_marker(crime_objects_list[1].latitude_longitude, popup = crime_objects_list[1].popup_info)

#Creates HTML template
clerydart_map.create_map(path = 'object_and_popup_test.html')

