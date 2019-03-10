# _Ping Pong_

#### _This application takes a number input from the user and returns a list that counts from 1 to the user number with some list items being replaced by specific words depending on what they're divisible by. Latest version: March 2019_

#### By _**Imandra McKenzie**_

## Description

_After the user inputs a number the program returns a list counting from 1 to the user number. All numbers divisible by 3 are replaced with the word "ping". All numbers divisible by 5 are replaced with the word "pong". And all numbers divisible by 15 are replaced with the word "pingpong". The field can take any integer between 1 and 10,000._

## Setup/Installation Requirements

_This page doesn't require any setup, just click the link to the Github pages URL and scroll: https://imandradesign.github.io/ping-pong/index_

## Support and contact details

_There aren't any known issues or bugs with this page, but if you experience any problems email Imandra at indigoimandra@gmail.com._

## Technologies Used

* HTML
* CSS
* Bootstrap
* Jquery
* JavaScript

## Specs

* The program can count up to the user-inputted number.
  * _Example Input:2_
  * _Example Output: [1, 2]_
* The program replaces numbers divisible by 3 with the word "ping".
  * _Example Input: 6_
  * _Example Output: [1, 2, ping, 4, 5, ping]_
* The program replaces numbers divisible by 5 with the word "pong".
  * _Example Input: 6_
  * _Example Output: [1, 2, 3, 4, pong, 6]_
* The program replaces numbers divisible by 15 with the word "pingpong".
  * _Example Input: 16_
  * _Example Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, pingpong, 16]_
* The program returns a list on the page.
  * _Example Input: 16_
  * _Example Output: [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong, 16]_
* The program removes the previous result when a new number is submitted.
  * _Example First Input: 4_
  * _Example First Output: [1, 2, ping, 4]_
  * _Example Second Input: 3_
  * _Example Second Output: [1, 2, ping]_

### Legal

Copyright (c) 2019 **_Imandra McKenzie_**
<br>
This software is licensed under the MIT license.
