# bts-v1



So this is a very simple REST server built with express. 

Its purpose is to demo scheduling different services that businesses may have. The idea is that a customer will log in, search for a business (eg: dentist), and make an appointment with that business. The business should be able to see their scheduled appointments and manage them appropriately.


This is not a complete server app though. It is still in the works. It's just something I'm working on just because. Many improvements can be made but feel free to make comments/suggestions.


You only need to clone the repo, run `npm install` and then `node server.js` to start using the app.


#Available Endpoints

GET, PUT, POST, DELETE all work for the endpoints below

/api/customers

/api/clients

/api/schedules

/api/staff

/api/categories

/api/users



eg: http://localhost:3000/api/customers as a GET request will return an array of stored customers. You may do a POST request with the customer object you would like to store to the same endpoint to add a new customer.




#Please note
Much is needed for this to be anywhere near an MVP. However I will keep updating it over time. I may also simplify it to make the project easier to maintain. Maybe booking for one company as a start rather than registering several companies.

It needs so much work.....