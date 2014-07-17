#------------------------------------------------------------------------------ 
# random_floats_test.py
# Driver that:
# Tests how randomizing floats works
# Tests how generating latitude and longitude will work
#------------------------------------------------------------------------------ 

import random
from crime import Crime


#print random.uniform(1.00,5.00)
new_crime_object = Crime("4/3/14", "Assault", "Berry Library", "4/4/14")
print new_crime_object.latitude_longitude # Prints out the latitude, longitude assigned in the crime class 
print new_crime_object.marker_position(new_crime_object.latitude_longitude)


