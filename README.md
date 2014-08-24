This is a simple [Meteor](http://docs.meteor.com/) app to generate OAuth 2 access tokens for the [Uber API](https://developer.uber.com/), allowing you to begin playing around with the API with your own account quickly.

Uber does not as of yet provide an easy means of generating tokens for your own account for testing/exploratory purposes, so I built this to help everyone else save an hour or so from having to build the OAuth 2 process before doing anything with the API

# Local Installation

## Install Meteor and Meteorite

Install Meteor (the web framework)

	$ curl https://install.meteor.com | /bin/sh

Install Meteorite (the package manager)

	$ npm install -g meteorite

## Clone the repo and cd into it

	$ git clone https://github.com/seanrose/uber-tokens.git
	$ cd uber-tokens

## Install the package dependencies

	$ mrt install

## Update your Uber Redirect URI

[Create an app](https://login.uber.com/applications) and set the redirect URI field to `http://localhost:3000/token`

![Uber Deveoper Console Screenshot](https://www.evernote.com/shard/s146/sh/2730806c-afd1-44f3-b8ec-f52ba8cf04c0/061d545717358fc68b83950eba3d75c9/deep/0/8-23-14,-10-43-PM.png)

## Run the Meteor app locally

From the root of the project folder run

	$ meteor

## Visit the app

The app will run at [localhost:3000](http://localhost:3000). Enter your OAuth 2 credentials, and it will take you through the OAuth flow.

![App Landing Page Screenshot](https://www.evernote.com/shard/s146/sh/14042655-8ed3-40ec-92ae-5004b669acd5/2829c526952958a06bfffc0faa5b34ea/deep/0/8-23-14,-10-49-PM.png)
