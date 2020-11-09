# DSC Webathon

## Frontend

Frontend is built in React.js and deployed on GCP App engine.
URL : <https://dscwow.tech/>

### Deploying on GCP App engine

- Go the [GCP Console](https://console.cloud.google.com/)
- Create a new project and give it a cool name.
- Activate google cloud shell using the cloud shell ![cloud_shell](https://user-images.githubusercontent.com/31778302/97112839-97dfb900-170c-11eb-9cc0-de158a1b7cf4.png) icon on the top right.
- Clone the repo in cloud shell using `git clone https://github.com/Diversity-In-DSC/dsc-webathon.git`
- Change directory `cd dsc-webathon`
- Install the dependencies `npm install` or `npm i`
- Build the React.js app `npm run build`
- Remove all the other files/folder except for the `build/` folder `sudo rm -rf <file_name>`
- Create a new file named `app.yaml` in the same directory as that of the `build/` folder using any command line editor of your choice: `nano app.yaml`
- Paste the following contents in the newly created file.

```yaml
runtime: nodejs12
handlers:
    - url: /(.*\..+)$
      static_files: build/\1
      upload: build/(.*\..+)$
    - url: /.*
      static_files: build/index.html
      upload: build/index.html
```

- Deploy the app on GCP App engine using `gcloud app deploy`
    > Note: You need to be the same directory as that of the `app.yaml` file in order to deploy the app
- Choose the region where you want to deploy the app.
    > Mumbai, India region lies at `asia-south1`.
- Wait, for it deploy and go to deployment URL shown after running `gcloud app deploy` or check the deployment URL using `gcloud app browse`

## Backend

### About

It is an API to help conduct online hackathons/team events. It consists of user auth, team forming and project submission.

Users have to register individually, and they have the option to either create a new team or join an existing team.
Joining existing team worked similar to that of devfolio. After creating a new team, a token is generated and other team members can join the team using that token (max 4 members per team).
Each team can submit one projects with project_name, git_link, deployment_link, description, etc.

##### New Repo
The backend repo has been moved to https://github.com/ShauryaAg/Webathon-Backend
