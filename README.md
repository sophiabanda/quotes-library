# Quotes Library

### **Description:**

My intention behind the Quotes Library is to create a simple, aesthetically pleasing place to save and display your favorite quotes. Quotes Library implements user authorization and authentication with Google OAuth2. 

### **Where to start:**
Nodemon was used to spin up the server and keep the work flow more simple, but you can also spin it up with good ol' npm start. Here's a brief overview of the dependencies:

```{
  'name': 'quotes-library',
  'version': '0.0.0',
  'private': true,
  'scripts': {
    'start': 'node ./bin/www'
  },
  'dependencies': {
    'cookie-parser': '~1.4.4',
    'debug': '~2.6.9',
    'dotenv': '^16.4.5',
    'ejs': '~2.6.1',
    'express': '~4.16.1',
    'express-session': '^1.18.0',
    'http-errors': '~1.6.3',
    'method-override': '^3.0.0',
    'mongoose': '^8.3.0',
    'morgan': '~1.9.1',
    'passport': '^0.7.0',
    'passport-google-oauth': '^2.0.0'
  }
}
```

_*Visit the deployed site here [Quotes Library](https://quotes-library-production.up.railway.app/)*_


#### Home Page (Quote of the Moment)

![A screen capture of the landing page, the Quote of the Moment](public/images/QOTM.png 'Screen cap of QOTM')

#### A logged in user's navbar:

![A screen capture of the navbar when logged in](public/images/loggedin_view.png 'Logged in navbar')

#### My Quotes Page:

![A screen capture of My Quotes page](public/images/my-quotes.png 'My quotes page')


### **Technologies Used**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### _*Upcoming Features*_

- API implementation for a more exploratory experience
- Working search functionality
- Enhancements to the ease of use and UX (interconnectedness)
- Single view option
- Downloads
