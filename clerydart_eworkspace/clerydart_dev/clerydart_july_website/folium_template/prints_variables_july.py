#===============================================================================
# prints_variables_july.py
# Auteur: Guillermo K. Rojas
# July 26, 2014
#
# Prints the name of marker variables, in the marker_# format created by Folium,
# for the CleryDart .js code in clerydart_homepage_july.html
#
# Created to make it easier to add "crime type" layers to the Leaflet legend.  
# (This is a nasty shortcut while I learn JavaScript)
# Archived for reference on August 10, 2014
#===============================================================================

# Static Variables
numberOfVariables = 178

# Functions
def print_variable_names(numberOfVariables):
    i = 1 # Index is set to 1
    listOfVariables = [] # initialize empty list of variables
    while i <= numberOfVariables: # loop
        current_variable = "marker_" + str(i) # prints variable text
        listOfVariables.append(current_variable) #appends current variable to the list of variables
        i = i + 1 # Adds 1 to the counter
        
    print ', '.join(listOfVariables) # prints the list of variables without quotes, joined by a comma

        
# Function Calls
print_variable_names(numberOfVariables)