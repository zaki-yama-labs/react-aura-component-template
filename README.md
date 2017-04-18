React Lightning Component Template
----------------------------------

(For Japanese, please see [README.jp.md](README.jp.md))

A template for developing Lightning Component with React.  
This template automates the following things:

- Build JavaScript & CSS using webpack
- Compress all bundled files and create StaticResource (`.resource`)
- Deploy StaticResource and all other metadata to your Salesforce org
- Watch file changes and run re-build & deploy

### Installation

First you need to edit `.env` and input your Salesforce org credentials.  
Then run following command.

```zsh
$ npm install
$ npm install -g gulp

# Build JS/CSS & Create StaticResource & Deploy
$ gulp
```


### Customization

##### Rename Your Lightning Component Name

The default Lightning Component name is `HereIsYourComponentName`.  
You can rename it as you like.

Please rename the following:

- `componentName` variable in `gulpfile.js`
- All directories and files under `pkg/aura` and `pkg/staticresources`
- Inside `pkg/aura/PreviewApp/PreviewApp.app`
- Inside `pkg/aura/HereIsYourComponentName/HereIsYourComponentName.cmp` (At `ltng:require`)

##### Rename Your Library Name

The default library name is `yourLibraryName`.  
This name is used in client controller script of component.

Please rename the following:

- `libraryName` variable in `webpack.config.js`
- Inside `pkg/aura/HereIsYourComponentName/HereIsYourComponentNameController.js` (Where calling `init` method)

### License

MIT
