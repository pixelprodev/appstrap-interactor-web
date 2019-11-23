# Interactor-Web
A web interface middleware for the [appstrap](https://appstrap.dev) interactor.

### Install
```bash
npm install --save-dev @appstrap/interactor-web
```

### Usage
Add the interface as a middleware to your appstrap instance as shown below:
```javascript
const Appstrap = require('@appstrap/core')
const InteractorWeb = require('@appstrap/interactor-web')

const strap = new Appstrap()
strap.use(new InteractorWeb())
```

The UI will be available at the `/__interactor` endpoint.
