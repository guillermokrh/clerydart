#===============================================================================
# csv_test.py
# Author: Guillermo K. Rojas
# Testing out the csv reader 
#===============================================================================

import csv #imports csv reader
csv_sample = open('sample_input.csv', 'rU') #opens the sample_input.csv file
csvReader = csv.reader(csv_sample)

for row in csvReader: # for loop that prints all rows in the csvReader
    print row
    
csv_sample.close() #closes the file that is opened
