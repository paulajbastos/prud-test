# Prud Test - Landing Page





## Dependencies





Must have [Nodejs](https://nodejs.org/en/) installed.





You'll need to have **Node >= 10 && Node != 13.0.1** on your machine.




Install dependencies:





```
$ npm install
```







## Build for development





```
$ npm run start:dev
```



Open




[http://localhost:8081](http://localhost:8081)




## Build for production





```
$ npm run build
```



## Build for production for Heroku  with NodeJs :




Create an .env file and populate it with:



```
NODE_ENV='production'
PORT=5000
```




Simulate producation in Local:



```
$ node -r @babel/register server.js
```



Open



[http://localhost:5000](http://localhost:5000)




Heroku Demo Prod:




[https://prud-test.herokuapp.com/](https://prud-test.herokuapp.com/)




## Output files



Your generated files will be outputed on **/dist** folder.







## Authors







| [Paula Junqueira Bastos](https://bitbucket.org/paulajbastos/) |







## License







This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
