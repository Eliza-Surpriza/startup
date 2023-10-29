
## how to use git
- git clone link_to_terminal
- cd into repository
- change stuff
- git add .
- git commit -am "message"
- git push
- reload github
- change stuff in github and commit
- git pull

## my server
- IP address: 52.91.82.210

## midterm notes
1. In the following code, what does the link element do?
2. In the following code,  what does a div tag do?
3. In the following code, what is the difference between the #title and .grid selector?
4. In the following code, what is the difference between padding and margin?
   - thing, padding, border, margin
6. Given this HTML and this CSS how will the images be displayed using flex?
7. What does the following padding CSS do?
8.  What does the following code using arrow syntax function declaration do?
9. What does the following code using map with an array output?
10. What does the following code output using getElementByID and addEventListener?
11. What does the following line of Javascript do using a # selector?
12. Which of the following are true? (mark all that are true about the DOM)
13. By default, the HTML span element has a default CSS display property value of:
    - display: inline
15. How would you use CSS to change all the div elements to have a background color of red?
16. How would you display an image with a hyperlink in HTML?
17. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    -    - thing, padding, border, margin
19. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
20. What will the following code output when executed using a for loop and console.log?
21. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
22. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
23. How do you declare the document type to be html?
    - <!DOCTYPE html>
25. What is valid javascript syntax for if, else, for, while, switch statements?
```
if (condition) {
  //  block of code to be executed if the condition is true
}
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
//seems like if/elif/else
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
//Expression 1 is executed (one time) before the execution of the code block.
//Expression 2 defines the condition for executing the code block.
//Expression 3 is executed (every time) after the code block has been executed.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```
  - for - loops through a block of code a number of times
  - for/in - loops through the properties of an object
  - for/of - loops through the values of an iterable object
  - while - loops through a block of code while a specified condition is true
  - do/while - also loops through a block of code while a specified condition is true
27. What is the correct syntax for creating a javascript object?
```
const car = {type:"Fiat", model:"500", color:"white"};
```
28. Is is possible to add new properties to javascript objects?
    - yes
30. If you want to include JavaScript on an HTML page, which tag do you use?
```
<script src="focus.js"></script>
```
32. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
33. Which of the following correctly describes JSON?
34. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
    - chmod: control file permissions
    - pwd: print working directory
    - cd: change directory
    - ls: list
    - vim: opens vim editor
    - nano: opens nano editor
    - mkdir: make directory
    - mv: move files
    - rm: remove
    - man: display user manual
    - ssh: start an ssh session
    - ps: writes the status of active processes
    - wget: makes it possible to download files and interact with REST APIs
    - sudo: allows you to run programs with the security privileges of another user
36. Which of the following console command creates a remote shell session?
    - ssh
38. Which of the following is true when the -la parameter is specified for the ls console command?
```
(base) eliza@Kens-MBP startup % ls -la
total 120
drwxr-xr-x  17 eliza  staff   544 Oct 27 19:38 .
drwxr-xr-x@ 12 eliza  staff   384 Oct 25 11:35 ..
-rw-r--r--@  1 eliza  staff  6148 Sep 26 11:48 .DS_Store
drwxr-xr-x  15 eliza  staff   480 Oct 28 16:57 .git
-rw-r--r--   1 eliza  staff  2478 Oct 27 19:38 README.md
-rw-r--r--   1 eliza  staff  1409 Oct 28 17:00 about.html
-rw-r--r--   1 eliza  staff    52 Sep 19 21:03 conflictTest.md
-rwxr-xr-x   1 eliza  staff   780 Sep 28 19:14 deployFiles.sh
-rw-r--r--@  1 eliza  staff  1150 Sep 26 16:27 favicon.ico
-rw-r--r--   1 eliza  staff  1927 Oct 28 17:00 focus.html
-rw-r--r--   1 eliza  staff  1500 Oct 28 16:55 focus.js
-rw-r--r--   1 eliza  staff  2473 Oct 28 17:00 hours.html
-rw-r--r--   1 eliza  staff   784 Oct 28 16:53 hours.js
-rw-r--r--   1 eliza  staff  1908 Oct 28 17:00 index.html
-rw-r--r--   1 eliza  staff   166 Oct 27 19:30 index.js
-rw-r--r--   1 eliza  staff  2769 Oct 27 20:16 main.css
-rw-r--r--   1 eliza  staff   238 Sep 26 16:46 notes.md
```
40. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
41. Is a web certificate is necessary to use HTTPS.
    - an SSL certificate is necessary for an HTTPS web address
43. Can a DNS A record can point to an IP address or another A record.
    - A DNS A record is the most fundamental type of DNS record. The A stands for “Address,” and it's used to point a domain name to an IP address or host. You can only use an A record when you want to point to an IPv4 address.
45. Port 443, 80, 22 is reserved for which protocol?
    - Port 80 is assigned for HTTP communication. Port 443 is assigned for HTTP protocol over TLS or SSL (HTTPS). Its used for secure web browser communication. Also allowing verification to accept and establish secure connections.
    - 22 is ssh
47. What will the following code using Promises output when executed?
