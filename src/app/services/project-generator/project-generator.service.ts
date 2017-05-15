// @ts-check
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as JSZip from 'jszip';
import * as fileSaver from 'file-saver';

@Injectable()
export class ProjectGeneratorService {

  private jszip: JSZip = new JSZip();

  private extentions: entities.IDictionaryExtention = {
    json: 'json',
    txt: 'txt',
    html: 'html',
    css: 'css',
    ts: 'ts',
    dts: 'd.ts',
    ico: 'ico',
    png: 'png',
    jpg: 'jpg',
    jpeg: 'jpeg',
    md: 'md',
    js: 'js'
  };

  public constructor(
    private http$: Http
  ) { }

  public generateFile(path: string, extention: string | entities.IDictionaryExtention, data: string | File | Blob): JSZip {
    return this.jszip.file(`${path}.${extention}`, data);
  }

  public generateAngular(options?: string | entities.IOptions): void {

    let tsLintJson = `
    {
  "rulesDirectory": [
    "node_modules/codelyzer"
  ],
  "rules": {
    "callable-types": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "eofline": true,
    "forin": true,
    "import-blacklist": [true, "rxjs"],
    "import-spacing": true,
    "indent": [
      true,
      "spaces"
    ],
    "interface-over-type-literal": true,
    "label-position": true,
    "max-line-length": [
      true,
      140
    ],
    "member-access": false,
    "member-ordering": [
      true,
      "static-before-instance",
      "variables-before-functions"
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [true, "ignore-params"],
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "prefer-const": true,
    "quotemark": [
      true,
      "single"
    ],
    "radix": true,
    "semicolon": [
      "always"
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "typeof-compare": true,
    "unified-signatures": true,
    "variable-name": false,
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],

    "directive-selector": [true, "attribute", "app", "camelCase"],
    "component-selector": [true, "element", "app", "kebab-case"],
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "no-access-missing-member": true,
    "templates-use-public": true,
    "invoke-injectable": true
  }
}`;
    let tsconfigJson = `{
      "compileOnSave": false,
      "compilerOptions": {
        "outDir": "./dist/out-tsc",
        "baseUrl": "src",
        "sourceMap": true,
        "declaration": true,
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "strictNullChecks": false,
        "target": "es5",
        "typeRoots": [
          "node_modules/@types"
        ],
        "lib": [
          "es2016",
          "dom"
        ]
      }
    }`;

    let packageJson = `{
  "name": "mock",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.1.0",
    "zone.js": "^0.8.4"
  },
  "devDependencies": {
    "@angular/cli": "1.0.0",
    "@angular/compiler-cli": "^4.0.0",
    "@types/jasmine": "2.5.38",
    "@types/node": "~6.0.60",
    "codelyzer": "~2.0.0",
    "jasmine-core": "~2.5.2",
    "jasmine-spec-reporter": "~3.2.0",
    "karma": "~1.4.1",
    "karma-chrome-launcher": "~2.0.0",
    "karma-cli": "~1.0.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "karma-coverage-istanbul-reporter": "^0.2.0",
    "protractor": "~5.1.0",
    "ts-node": "~2.0.0",
    "tslint": "~4.5.0",
    "typescript": "~2.2.0"
  }
}`;

    let angularCliJson = `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "project": {
    "name": "mock"
  },
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "project": "src/tsconfig.app.json"
    },
    {
      "project": "src/tsconfig.spec.json"
    },
    {
      "project": "e2e/tsconfig.e2e.json"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "component": {}
  }
}`;

    let typingsDTs = `/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}`;

    let tsconfigSpecJson = `{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/spec",
    "module": "commonjs",
    "target": "es5",
    "baseUrl": "",
    "types": [
      "jasmine",
      "node"
    ]
  },
  "files": [
    "test.ts"
  ],
  "include": [
    "**/*.spec.ts",
    "**/*.d.ts"
  ]
}`;

    let tsconfigAppJson = `{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "module": "es2015",
    "baseUrl": "",
    "types": []
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts"
  ]
}`;

    let polyfillsTs = `import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

import 'zone.js/dist/zone';  // Included with Angular CLI.
`;

    let mainTs = `import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule);
`;

    let indexHtml = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Mock</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
`

    let appModule =
      `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

    let appComponentTs = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(

  ) { }

  public ngOnInit(): void {
  }
}`;

    let appComponentHtml = `<div>App work</div>`;

    this.generateFile('tslint', this.extentions.json, tsLintJson);
    this.generateFile('tsconfig', this.extentions.json, tsconfigJson);
    this.generateFile('package', this.extentions.json, packageJson);
    this.generateFile('.angular-cli', this.extentions.json, angularCliJson);
    this.generateFile('src/typings', this.extentions.dts, typingsDTs);
    this.generateFile('src/tsconfig.spec', this.extentions.json, tsconfigSpecJson);
    this.generateFile('src/tsconfig.app', this.extentions.json, tsconfigAppJson);
    this.generateFile('src/polyfills', this.extentions.ts, polyfillsTs);
    this.generateFile('src/main', this.extentions.ts, mainTs);
    this.generateFile('src/index', this.extentions.html, indexHtml);
    this.generateFile('src/app/app.module', this.extentions.ts, appModule);
    this.generateFile('src/app/app.component', this.extentions.ts, appComponentTs);
    this.generateFile('src/app/app.component', this.extentions.html, appComponentHtml);
    this.jszip.generateAsync({ type: 'blob' }).then((data) => {
      fileSaver.saveAs(data, 'angular2-seed(angular-cli).zip');
    });
  }

  public generateJquery(options?: string | entities.IOptions): void {
    let indexhtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1>App Work</h1>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="./index.js"></script>
</body>
</html>`;

    let indexJs = ``;

    let styleCss = ``;

    this.generateFile('index', this.extentions.html, indexhtml);
    this.generateFile('style', this.extentions.css, styleCss);
    this.generateFile('index', this.extentions.js, indexJs);

    this.jszip.generateAsync({ type: 'blob' }).then((data) => {
      fileSaver.saveAs(data, 'jquery-seed.zip');
    });
  }

  public generateReact(options?: string[]): void {
    let packegeJson = `{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^15.5.4",
    "react-dom": "^15.5.4"
  },
  "devDependencies": {
    "react-scripts": "0.9.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}`;
    let indexJs = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`;

    let indexCss = `body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}`;
    let appTestJs = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});`;
    let appJs = `import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
`;
    let appCss = `.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;
    let indexHtml = `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">

  <title>React App</title>
</head>

<body>
  <div id="root"></div>

</body>

</html>`;

    this.generateFile('package', this.extentions.json, packegeJson);
    this.generateFile('src/index', this.extentions.js, indexJs);
    this.generateFile('src/index', this.extentions.css, indexCss);
    this.generateFile('src/App.test', this.extentions.js, appTestJs);
    this.generateFile('src/App', this.extentions.css, appCss);
    this.generateFile('public/index ', this.extentions.html, indexHtml);

    this.jszip.generateAsync({ type: 'blob' }).then((data) => {
      fileSaver.saveAs(data, 'react-seed.zip');
    });
  }
}
