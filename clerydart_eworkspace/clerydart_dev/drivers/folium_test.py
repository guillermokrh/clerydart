#===============================================================================
# folium_test.py
# Author: Guillermo K. Rojas
# Goal: To test folium, a python library that works with leaflet, to see
# how it works
# July 14, 2014
#===============================================================================

import folium
map_osm = folium.Map(location = [43.70598, -72.28627], zoom_start = 16)


bakerBerryLat = 43.70534
bakerBerryLong = -72.28867
bakerBerryList = [43.70533, -72.28876] # lists work!  Leaflet reads latitude and longitude as lists

map_osm.simple_marker(bakerBerryList, popup = 'Baker Berry List')
map_osm.simple_marker(bakerBerryList, popup = 'Second Popup')

map_osm.create_map(path='dartmouth_map_list.html')