# **ThxJSer**

[![Parcel Build Status](https://img.shields.io/badge/parcel-passing-4FC921.svg)](https://github.com/ThxJSer/ThxJSer)
[![Latest Stable Version](https://img.shields.io/badge/version-1.0.0-1182C2.svg)](https://github.com/ThxJSer/ThxJSer)
[![Language](https://img.shields.io/badge/javascript-ES5/ES6-8892BF.svg)](https://github.com/ThxJSer/ThxJSer)
[![React version](https://img.shields.io/badge/React-%3E%3D%2017.0-8892BF.svg)](https://github.com/ThxJSer/ThxJSer)
[![License](https://img.shields.io/badge/license-MIT-98C611.svg)](https://github.com/ThxJSer/ThxJSer)

## What is ThxJSer

ThxJSer is a Single Page Application **(SPA)** frameworks

\- a toolkit - for people who build web sites using javaScript and React.

## What is SPA

Different from traditional *server side rendering(SSR)*, SPA is separation of front-end and backend, making division clear.

Using SPA, you can deploy the frontend(views) without worrying about backend's language.

SPA load data from backend dynamically by using Ajax request(API call), this capability makes it no need to wait entire page's extra reloading.

Hence, SPA has faster performance and easily content render with JSON data from APIs.

## Live Demo

Demo : **<a href="https://thxjser.github.io/" target="_blank">https://thxjser.github.io/</a>**
</br></br></br>
sign in email : `demo8888@gmail.com`
</br>
sign in password : `88888888`

## ThxJSer benefits

- Faster speed & performance, shorter rendering times
- Efficient caching, doesn’t have to reload entire page
- Simple, without worrying about the backend
- Easy, easy to develop and debug

ThxJSer lets you creatively focus on your front-end project!

ThxJSer requires *zero* configuration!!

ThxJSer is dedicated to **all the front-end and js engineers, thanks y'all!**

## Installation

1. Run Requirements 
- Install nodejs version 9.11 or newer is recommended.
- Install npm version 5.6 or newer is recommended.

2. Copy the 3 items [ `index.html, src folder, package.json` ] to your project folder and command run
~~~
cd <your project folder>

$ npm install
~~~
wait installed...ok
~~~
$ npm start
~~~
wait built...ok

That's it!

3. Now, you can access `http://localhost:8888`, if you want to change others listen port, config is in the `package.json`.

## Usage

**1. Skill Requirements**
- Basic HTML DOM, CSS, JavaScripts(ES5, ES6).
- Concept of `js' callback function, Async/Sync/Promise` knowledge.
- `Components, life cycle, hook` of React, and Redux pattern.
</br></br>

**2. Development Guide**
<table>
    <thead>
        <tr>
            <th>Files</th>
            <th>Description</th>
            <th>Examples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>src/Main.jsx</td>
            <td>Handle all the pages' rendering</td>
            <td></td>
        </tr>
        <tr>
            <td>src/pages/*.jsx</td>
            <td>Pages with different responsibilities</td>
            <td>SignIn, SignUp, TodoList...</td>
        </tr>
        <tr>
            <td>src/components/*.jsx</td>
            <td>Small components for common use in most pages</td>
            <td>AlertDialog, Copyright, MyDatePicker...</td>
        </tr>
        <tr>
            <td>src/service/*js</td>
            <td>Handle api calls</td>
            <td>TodoListApi, UserApi</td>
        </tr>
        <tr>
            <td>dist/service/*</td>
            <td>Bulid result</td>
            <td>index.html, src.XXXXXXXXX.js</td>
        </tr>
    </tbody>
</table>

<br/>

### Resources, User Guide & Reference

- [What are Single Page Applications](https://geekflare.com/single-page-applications/) - https://geekflare.com/single-page-applications/

## Acknowledgement

ThxJSer powered by Axios, Day.js, Material UI, Parcel, React, React Hook Form, Redux and Yup. Thank you all.

Particular thanks Github, Google, Node.js, NPM, Parcel, React, Stack Overflow.

## License

This code has been developed and maintained by ThxJSer from October 2022.

ThxJSer framework is open-source, licensed under the [MIT license](https://opensource.org/licenses/MIT).
