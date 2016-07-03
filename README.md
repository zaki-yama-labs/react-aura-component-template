React Lightning Component Template
----------------------------------

Lightning Component で React を使うためのテンプレート

### 使い方

`.env.json.sample` をコピーして `.env.json` を作成し、ユーザー名・パスワードを記入する。  
その後、以下のコマンドを実行する。

```zsh
$ npm install
$ npm install -g gulp
# JS のビルドとデプロイ
$ gulp
```

ブラウザで https://xxx.lightning.force.com/c/PreviewApp.app にアクセスする。

### カスタマイズ

##### コンポーネント名を変更する場合

`HereIsYourComponentName` と書かれている箇所を任意のコンポーネント名に変更する。

- `gulpfile.js` の `componentName`
- `pkg/aura` および `pkg/staticresources` 以下のディレクトリ＆ファイル名
- `pkg/aura/PreviewApp/PreviewApp.app` 内
- `pkg/aura/HereIsYourComponentName/HereIsYourComponentName.cmp` 内のJS＆CSSロード部分

##### ライブラリ名を変更する場合

`yourLibraryName` と書かれている箇所を任意のライブラリ名に変更する。

- `webpack.config.js` の `libraryName`
- `pkg/aura/HereIsYourComponentName/HereIsYourComponentNameController.js` 内
