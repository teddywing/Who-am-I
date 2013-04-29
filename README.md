Who am I?
=========

A mobile web app built for the [Viggle](http://www.viggle.com) platform. One half of the _Who am I?_ app. _Who am I?_ allows a user to record an impersonation of a character from a TV show. Other users can then watch the resulting video and pick which character they think was referenced. Picking the correct answer will get them [Viggle points](http://www.viggle.com/rewards).

The other half is a native iOS app written by [Billy](https://github.com/billyto) that allows users to pick a show, a character, and record a video of themselves acting out that character.

This half allows players to watch the recorded video and guess the character represented.

Written in [Node](http://nodejs.org) with [Express](http://expressjs.com) at [TVnext Hack 2013](http://www.tvnexthack.com). The app is functioning, but incomplete.


# Running

## Prerequisites
[Node](http://nodejs.org) (developed on node v0.8.21).

## TMS OnConnect API
Obtain an OnConnect API key from http://developer.tmsapi.com and export it as the `TMS_API_KEY` environment variable.

## Parse API
Create an application on [Parse](https://parse.com) and enter your application ID and JavaScript key in `public/javascripts/parse-interface.js`.

## Starting the application
	$ npm install
	$ node app

I recommend running using [node-supervisor](https://github.com/isaacs/node-supervisor): `supervisor node app`

# License
_Who am I?_ is licensed under 
