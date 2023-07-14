This repository is only to have the assesments sent by Torc to me, Diego Arquieta.

In order to run the API testing, we should have installed newman and to generate the report htmlextra, please follow instructions

Install newman:

npm install -g newman

Install htmlextra

npm install -g newman-reporter-html
npm install -g newman-reporter-htmlextra

Run and export to a HTML report
newman run YourCollectionName.json -n 3 -r htmlextra

Other folders are regarding the cypress testing.

Thanks
