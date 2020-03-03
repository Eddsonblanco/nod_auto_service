[Web Reference ](https://elkgrovetirepros.com/)

# Home 
    - header - nav
        *  logo
            * alt text
        * schedule a appoiment
        * links sections
        * about 

    - banner call to action (SLIDER)
        * Imagen
        * titulo H1
        * descripcion
        * botton


    - empresas que confian
        * logos     -Fox Rent A Car 
                    -Enterprise Rent-A-Car®
                    -SIXT rent a car
                    -Advantage Rent A Car
        *^alt text  

    - seguros con los que trabajan (SLIDER)
        * logos
        * alt text
    
    - servicios
        Air Filters
        Batteries
        Belt & Hoses
        Brake Repair
        Cooling System
        Alternator Repair
        Diagnositcs
        Oil Changes
        Maintenance
        Suspension Repair
        Tire Balancing
        Tire Installation
        Tire Repair
        Tire Rotation
        Transmission Repair
        Tune Up
        Alignments
        Wiper Blades
        Headlight Restoration
        A/C Repair

    - modal
        Contact Information
            First Name*:
            Last Name*:
            Phone*:
            Email*:
            Address:
            Address 2:
            City:
            State:
            Zip:
            Contact by:
        Vehicle Information
            Vehicle Year*:
            Vehicle Make*:
            Vehicle Model*:
            Vehicle Mileage:
            Service Information
        Services Needed:
            (Check all that Apply)

        Brief Description Of Service Needed:
            Appointment Times
                First Choice:
                Date*:
                Time*:

                Second Choice:
                Date*:
                Time*:
                
    - footer
        * copyright
        * social links
        * contacto
        * direction
        * 


# About us

    * Title
    * Content Text

# Database

    
### users
 
 Key  | Type
  ------------- | -------------
  _id  | ObjectId
  email | string
  password | string
  first_name | String
  last_name | String

### configs
Solo es un registro

  Key  | Type
  ------------- | -------------
  _id  | ObjectId
  Title |  String - nombre de la empresa |
  Direction | String - direccion de la empresa
  Phone | String - telefon
  phone_extra | String
  logo | String - url de la imagen
  copyright | String - 
  email | String - Email de contacto

### Banners

  Key | Type
  ------ | ------
  _id | ObjectId
  title | String
  image | String 
  alt_text | String
  description | String
  link | String
  text_link | String

### Companies

  key | type
  ---- | ----
  _id | ObjectId
  image | String
  alt_text  | String
  
### insurance
 key | type
  ---- | ----
  _id | ObjectId
  image | String
  alt_text  | String

### Services

 key | type
 ---- | ---
 _id | ObjectId
 title | String
 image | String
 text | String

### Social

 key | type 
 --- | ---
 _id | ObjectId
 url | String

 ### Seo

key | type 
 --- | ---
 _id | ObjectId
 title_facebook | String
 desc_facebook | String

### Reservation
key | type 
 --- | ---
 _id | ObjectId
 First Name | String
 Last Name | String
 Phone | String
 Email | String
 Address | String
 Address_2 | String
 City | String
 State | String
 Zip | String
 Contact by | String
 Vehicle Year | String
 Vehicle Make | String
 Vehicle Model | String
 Vehicle Mileage | string
 Services | Array ObjectsId
 Date1 | String
 Time1 | String
 Date2 | String
 Time2 | String