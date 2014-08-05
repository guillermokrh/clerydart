# CleryDart: http://clerydart.info

  This is the CleryDart repository, including the CSS, HMTL, Python, and JavaScript files. 

  CleryDart is a campus safety web application, which maps crimes listed on Dartmouth College's Daily Crime Log.  


### How does CleryDart.info work?

  The way CleryDart currently works is by using a combination of HTML & CSS, JavaScript, Leaflet.js, folium, Python, and OpenStreetMap.org.  I designed the Dartmouth-inspired CleryDart HTML homepage and CSS theme, and I use OpenStreetMap.org for mapping.  In terms of data workflow, I use Python to process crime data and crime locations from .csv files.  Once the data has been processed, folium is used to generate a basic .html/.js template for CleryDart that uses Leaflet.  After that, I add the Leaflet.js code generated by folium to the current CleryDart HTML homepage, and add more Leaflet.js code to customize the map and create a legend for sorting crimes.  


Author: Guillermo K. Rojas Hernandez 
