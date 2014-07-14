#===============================================================================
# csv_test.py
# Author: Guillermo K. Rojas
# Testing out the csv reader 
# Much help from pg. 402; "The Practice of Computing Using Python"; book by 
# William Punch and Richard Enbody, Published 2011
#===============================================================================

# Imports 
import csv #imports csv reader
from crime import Crime # Imports Crime class

csv_sample = open('sample_input.csv', 'rU') #opens the sample_input.csv file
csvReader = csv.reader(csv_sample)
crime_objects_list = [] # Empty list where each crime object will be added after it is created by the csvReader 

for row in csvReader: # for loop that prints all rows in the csvReader
    #print row
    i = 0 # indexes into the list created in each row
    new_crime_object = Crime(row[i], row[i+1], row[i+2], row[i+3], row[i+4])
    crime_objects_list.append(new_crime_object) # appends each new object to a list of crime objects 
    
csv_sample.close() #closes the file that is opened

print crime_objects_list
print str(crime_objects_list[0].date_occurred) + ":" + str(crime_objects_list[0].crime_reported) # Testing putting different pieces of data together
#Now I want to add this information into objects so that it gets stored 
# Yes two crime instances!!!
# Crime classes work 