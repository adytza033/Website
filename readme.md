[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/GGwkV7WK)
# CTEC3905 Assignment

This repository contains basic boilerplate code for you to get started with.

You will need to replace the contents of these files with your own code.

## Description
This is a website containing the new technology that is being used by a lot of people
and it will keep your knowledge up to date with some gadgets that just hit the market.
It contains 3 different pages with different subjects but also allows to view different 
gadgets in different colours or learn about all the models a brand of phones made.


## index.html
The first page of the website is the index also used for the home screen, this is also named "Computer". Here are some details about some videocards that can be used for the pc. 
Here are some specifications about the videocards, some buttons which redirects the user to the amazon website where there the product can be found. When using the computer this will ahve efects
like hover and the button will go from red to green, the navigation bar also has hover atributes which it makes it underline. Coming back to the van bar, on the mobile this is a small button that 
can be pressed and will bring a menu where it can be used to navigate to different pages fof the website. However, as the bigger the resolution goes on the computer this will display the contents of
the navbar in the header where all names of the other pages are shown. It has 3 breakdown points of looking different at 3 different screen sizes. This page also contains grids to display the content 
in a more interesting way.

The `index.html` file is linked to the `css/styles.css` file where all the style of the content is modified, after the main there is another link to the `js/scripts.js` file where all the coding for the 
back-end is situated.

## mobile.html
The second page of the website is the mobile one, where this contains data about the best trending mobiles, this contains a slide show where a button push will show the next image or the previous one.
The phones can also be seen in different colours using the color cercles to chose the desired color oput of 4 dinsint colours which this will change the phone colour and let you see it from 3 different 
angles but also changing the text above it. The phones also include a description showning 3 feautures about them and also the price. At the bottom of the page is an search bar and a button, this can be 
used to search all models made by a brand, the content that is displayed comes from an API, this is a Mobile Phone Specs Database API. The API makes requests to pull the data desired which comes from the
text entered in the search bar.

The `mobile.html` file is linked to the `css/styles.css` file where all the style of the content is modified, after the main there is another link to the `js/scripts.js` and also to the `css/mobile.css` where 
data is made to be unerstood easily but not repeated files where all the coding for the back-end is situated.

## entertaiment.html
On the last page a full screen animation is situated, where 30 hexagones move around the screen randomly. This page has the new tranding technology containing anything that is amazing, starting with the 
apple vision pro where it was very popular, this contins a slide show where images can be viewed by using the next and prev buttons to check all the availabe images, having a radio to make them look profesional, 
the text are also inside of a white box to make them look featurisic, containg different websites to get the gadgets.

The `entertaiment.html` file is linked to the `css/style.css` file where all the style of the content is modified, after the main there is another link to the `js/scripts.js` file where all the coding for the 
back-end is situated.


## css/styles.css

The `css/styles.css` file contains a basic starting template for a responsive page. This contains 3 diffeernt sized, one for mobile, one for tablet and one for the pc, depending of what screen resolution is used
the content will look different. 

## js/scripts.js

The `js/scripts.js` file contains the coding for the navigation menu, making it appear and disapear. It also hold the4 code for the keyframe where it randomly gives directions to the hexagones. The last part is holding
the code for the slides, where the images, can be skipped and go the previous one.

## js/mobile.js

The `js/mobile.js` file contains coding for the mobile slides picture, also chosing the colour for the phones, only showing pictures at the specific index , conected to the name of the colour pressed. In the last part
is the coding for the API, where it makes a request and also retrives the data when the search button is pressed, getting the information related to the searched word.


## websites used for content
www.amazon.com for directing this website to the spesific videocard for the customer to buy
kickstarter.com and (https://shiftrobotics.io/) for the moonwalkers shoes content.
The website Three was used to get some content https://www.three.co.uk/

W3Schools was used for validating the HTML file at https://validator.w3.org/.
Iphone and Samsung website to get informations about the mobiles 
-https://www.apple.com/uk/shop/buy-iphone/iphone-15-pro
-https://www.samsung.com/uk/smartphones/galaxy-s24-ultra/buy/?cid=UK_PPC_4586843643_ID~GLB00058GD_CN~f1h24-e3_PR~f1h24-e3_SB~smart_PH~on_KS~bap_MK~gb_OB~conv_FS~hobl_FF~-&gad_source=1&gclid=CjwKCAjwoa2xBhACEiwA1sb1BCI6N6AOgK30YYglRsmqzI0yf2fr8odN59lZ2fUKZZC1hyMDvwOXxRoCb7QQAvD_BwE&gclsrc=aw.ds

Rapid API 
-https://rapidapi.com/makingdatameaningful/api/mobile-phone-specs-database/