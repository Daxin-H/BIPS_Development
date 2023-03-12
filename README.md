# BIPS_Development

## Using Guild
Since we use REACT to build the whole website, we need to first set up the enverinment. Make sure you are in the correct address. In the 
```BIPS_Development/test-sites``` folder, using command line typing:
```ruby
npm init
```
to start the initial process. Using tab or return to skip all the process.
After the initial, you should see 
```package.json``` and ```package-lock.json``` in the folder. Open ```package.json``` file and check the "scripts" content like this or not
```ruby
......
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "react-scripts start"
  },
```
Then to make sure include react package, use this command line

```ruby
npm install --save react react-dom @types/react @types/react-dom
```



If you miss the "start" command line, just copy and paste the code above
Then in the command line use
```ruby
npm start
```  

to inital the website in the computer. You should see a huge chart in the website.


<img width="671" alt="pic" src="https://user-images.githubusercontent.com/78289898/224536041-0255bca2-4d40-402f-aa29-58508fd6e652.png">

