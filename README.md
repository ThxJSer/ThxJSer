# **ThxJSer**

[![Parcel Build Status](https://img.shields.io/badge/parcel-passing-4FC921.svg)](https://github.com/ThxJSer/ThxJSer)
[![Latest Stable Version](https://img.shields.io/badge/version-1.0.0-1182C2.svg)](https://github.com/ThxJSer/ThxJSer)
[![Language](https://img.shields.io/badge/javascript-ES5/ES6-8892BF.svg)](https://github.com/ThxJSer/ThxJSer)
[![React version](https://img.shields.io/badge/React-%3E%3D%2017.0-8892BF.svg)](https://github.com/ThxJSer/ThxJSer)
[![License](https://img.shields.io/badge/license-MIT-98C611.svg)](https://github.com/ThxJSer/ThxJSer)

## What is ThxJSer

ThxJSer is a Single Page Application **(SPA)** frameworks

\- a toolkit - for people who build web sites using javaScript and [React](https://reactjs.org/).

## What is SPA

Different from traditional *server side rendering(SSR)*, SPA is a client side render(CSR) pattern.

SPA is separation of front-end and backend, making division clear.

Hence, you can deploy the frontend(views) without worrying about backend's language.

SPA load data dynamically from backend by using Ajax request(API call), this capability makes it no need to wait entire page's extra reloading.

So, SPA provide the faster performance and easily content render with APIs' JSON data.

## Live Demo

Demo : **<a href="https://thxjser.github.io/" target="_blank">https://thxjser.github.io/</a>**
</br></br></br>
sign in email : `demo8888@gmail.com`
</br>
sign in password : `88888888`

## ThxJSer benefits

ThxJSer is a CSR(Client Side Render) pattern :

- Faster speed & performance, shorter rendering times
- Efficient caching, doesn’t have to reload entire page
- Simple, without worrying about the backend, and ThxJSer is light-weight
- Easy, easy to develop components and debug
- **Support page's history change event handle!!!**

ThxJSer lets you creatively focus on your front-end project!

ThxJSer requires **zero** configuration!!


ThxJSer is dedicated to **all the front-end and js engineers, thanks y'all!**

## Installation

1. Run Requirements 
- Install nodejs version 9.11 or newer is recommended.
- Install npm version 5.6 or newer is recommended.

2. Copy the 3 items [ `index.html, src folder, package.json` ] to your project folder and command run
~~~
$ cd <your project folder>

$ npm install
~~~
wait installed...ok
~~~
$ npm start
~~~
wait built...ok

That's it!

3. Now, you can access `http://localhost:8888`. If you want to change others listen port, config is in the `package.json`.

## Usage

**1. Skill Requirements**
- Basic HTML DOM, CSS, JavaScripts(ES5, ES6).
- Concept of `js' callback function`, `Async/Sync/Promise` knowledge.
- `Components, life cycle, hook` of React, and Redux pattern.
</br></br>

**2. Development Guide**

If you want to know more develop's guideline, 

**CRUD instances** are mostly in the **`src/pages/TodoList.jsx`**, plz refer to this file.

<br/>

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
            <td>Page loader, and handle the pages' rendering</td>
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
            <td>index.html, src.xxxxxxxxx.js</td>
        </tr>
    </tbody>
</table>

<br/>

**3. The below guideline is provided for your reference.**

### Resources, User Guide & Reference

<table>
    <thead>
        <tr>
            <th>Theme</th>
            <th>Description</th>
            <th>Link</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Free Resource</td>
            <td>Page templates - you can download open-source code from mui</td>
            <td>
                1. https://mui.com/material-ui/getting-started/templates/
                <br/>
                2. (free at the bottom) https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=templates-store
            </td>
        </tr>
        <tr>
            <td>Free Resource</td>
            <td>Component templates - you can download open-source code from mui</td>
            <td>https://mui.com/material-ui/</td>
        </tr>
        <tr>
            <td>JS</td>
            <td>JS ES6 tutorial</td>
            <td>https://www.w3schools.com/js/js_es6.asp</td>
        </tr>
        <tr>
            <td>JS</td>
            <td>Demystifying JavaScript Closures, Callbacks and IIFEs</td>
            <td>https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/</td>
        </tr>
        <tr>
            <td>JS</td>
            <td>Aysnc/sync, promise tutorial</td>
            <td>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function</td>
        </tr>
        <tr>
            <td>Hooks</td>
            <td>React hooks tutorial</td>
            <td>https://reactjs.org/docs/hooks-state.html</td>
        </tr>
        <tr>
            <td>Hooks</td>
            <td>Redux hooks tutorial</td>
            <td>https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-terms-and-concepts</td>
        </tr>
        <tr>
            <td>Input Form</td>
            <td>React-hook-form document</td>
            <td>https://react-hook-form.com/api/useform/register</td>
        </tr>
        <tr>
            <td>Input Form</td>
            <td>Yup form validation lib document</td>
            <td>https://github.com/jquense/yup</td>
        </tr>
        <tr>
            <td>Input Form</td>
            <td>Yup validation live demo</td>
            <td>https://codesandbox.io/s/react-hook-form-validation-yup-mrv28?file=/src/index.js</td>
        </tr>
        <tr>
            <td>Input Form</td>
            <td>Yup validation tutorial</td>
            <td>https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98</td>
        </tr>
        <tr>
            <td>Datetime Handle</td>
            <td>Day.js date-time lib document</td>
            <td>https://github.com/iamkun/dayjs</td>
        </tr>
        <tr>
            <td>Api Calls</td>
            <td>Axios (http request/ajax) lib document</td>
            <td>https://github.com/axios/axios#axios-api</td>
        </tr>
        <tr>
            <td>Built Tool</td>
            <td>Parceljs document</td>
            <td>https://parceljs.org/getting-started/webapp/</td>
        </tr>
        <tr>
            <td>SPA Intro</td>
            <td>What are Single Page Applications</td>
            <td>https://geekflare.com/single-page-applications/</td>
        </tr>
    </tbody>
</table>

## Acknowledgement

ThxJSer powered by Axios, Day.js, Material UI, Parcel, React, React Hook Form, Redux and Yup. Thank you all very much.

Particular thanks Github, Google, Node.js, NPM, Parcel, React, Stack Overflow.

## License

This code has been developed and maintained by ThxJSer from October 2022.

If you discover vulnerability security issues, please send e-mail to thxjser@gmail.com , thank you.

ThxJSer framework is open-source, licensed under the [MIT license](https://opensource.org/licenses/MIT).
