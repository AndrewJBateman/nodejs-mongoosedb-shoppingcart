# Node.js, mongoDB & Mongoose Shopping Cart

Code to learn to learn Node.js. This is part of a Udemy Node.js course.
Working shopping cart where products can be created, read, updated and deleted (CRUD) via a local web browser and are stored in a cloud-based mongoDB database. Products can be added to a cart and 'ordered' under an auto-generated order number. The login now created a session cookie that expires after a time set in app.js.

The [Nodemailer](https://nodemailer.com/about/) module is used with the [SendGrid API](https://sendgrid.com/docs/) to send new users an email when they first sign up. 

This project uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) version 4.0 and [MongoDB Compass](https://www.mongodb.com/download-center/compass) version 1.16.3 on an Azure cloud server. 

[Mongoose](https://mongoosejs.com) version 5.2.17 is used to model the application data. 

This project also uses [Express](http://expressjs.com/) version 4.16.4 and [Express-session](https://www.npmjs.com/package/express-session) version 1.15.6. 

More dependancies:
[Multer](https://github.com/expressjs/multer), node.js middleware for handling multipart/form-data; mainly uploading files.  
[PDFKit](https://pdfkit.org/), a JavaScript PDF generation library for Node and the browser. This is used to create an order invoice pdf.
[stripe](https://stripe.com), an online payment API, is added. 
[Helmet](https://helmetjs.github.io/) added to allow setting of HTTP headers to increase app security. Needs to be configured. 
[Compression](https://www.npmjs.com/package/compression) middleware added to compress response bodies for all requests that traverse through the middleware, unless they include a Cache-Control header with the no-transform directive, as compressing will transform the body.


## Notes
Link to Udemy Course [NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)](https://www.udemy.com/nodejs-the-complete-guide/).<br>
Link to Medium article by Nick Karnik: [Introduction to Mongoose for MongoDB](https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57)