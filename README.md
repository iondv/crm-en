# IONDV. CRM
## Description

IONDV. CRM is a software solution based on the IONDV. Framework, implemented for the organization of registration, accounting, storage and display of business data (incoming requests, calls, visitors, products, services). The system allows you to organize scenarios for answering calls, keep records of emails and calls, conduct sales of products and activities based on them, keep track of marketing events, maintain a data base of individual and company clients, compile directories, make reports, etc.

The demo version shows an example of using the system to provide technical support – it allows you to register incoming requests from users in various forms (letters, calls, meetings, e-mail). In this case, the demo version shows an example of using the system for a store that is selling recreation goods and tourist equipment. The system allows to register incoming requests (calls) and at the same time to show prompts/scripts to the operator registering the request or call on the specified request topic. 

<h1 align="center"> <img src="/iondv-crm-en.jpg" alt="IONDV. CRM" align="center"></h1>  

## Demo

Demo access to view the system without registration: https://crm-ru.iondv.ru

Login: **demo**, password: **ion-demo**.

Additional advantages:
- Open source code for all system components – https://github.com/iondv/crm-ru;
- Open software used for DBMS and server OS (running for linux and windows);
- Any adaptation and modernization of the system is available, including data structures modernization without programming in a visual editor;
- Launch your own version in a few minutes – see [How to get](#how-to-get)

## How to get?

### IONDV. Studio sandbox
Check and build the application in the [IONDV. Studio](https://studio.iondv.com) sandbox.
1. Download the archive file from GitHub
2. Open it in the Studio
3. Click the “play” button
4. Get the link and open it

Watch [How-To video](https://www.youtube.com/watch?v=s7q9_YXkeEo).   

If necessary, make changes to the data structure and rebuild the application.

The application can be saved and deployed locally in the other methods described below.

### Git

Quick start using the IONDV repository.  CRM-en on GitHub – detailed instruction.
1. Install the system environment and global dependencies.
2. Clone the core, module, and application.
3. Build and deploy the app.
4. Launch the application.

Or install and run in a single line with Linux using the iondv-app installer (locally required node.js, MongoDB and Git):
```
curl -L -s https://github.com/iondv/iondv-app/archive/master.zip > iondv-app.zip &&\
  unzip -p iondv-app.zip iondv-app-master/iondv-app > iondv-app &&\
  bash iondv-app -q -i -m localhost:27017 crm-en
  ```

Where instead of `localhost:27017` specify MongoDb adress. After the launch open the link 'http://localhost:8888', back-office account login: **demo**, password: **ion-demo**. 

### Docker
Launching an application using a docker container.

1. Launch the mongodb DBMS: `docker run --name mongodb -v mongodb_data:/data/db -p 27017:27017 -d mongo` 
2. Launch the IONDV. CRM-en `docker run -d -p 80:8888 --link mongodb iondv/crm-en`. 
3. Open the link `http://localhost` in the browser in a minute (it takes time to initialize data). For the back-office the login is: **demo**, password: **ion-demo** 

## Links
For more information, see the following resources:
- [IONDV. Framework](https://iondv.com/portal/index) 
- [Facebook](https://www.facebook.com/iondv/) 
