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
    let packageJson = `{
      "name": "initial",
      "version": "0.0.0",
      "license": "MIT",
      "scripts": {
        "ng": "ng",
        "start": "ng serve --port 4201  --open --hmr",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e"
      },
      "private": true,
      "dependencies": {
        "@angular/animations": "^4.0.3",
        "@angular/common": "^4.0.3",
        "@angular/compiler": "^4.0.3",
        "@angular/core": "^4.0.3",
        "@angular/forms": "^4.0.3",
        "@angular/http": "^4.0.3",
        "@angular/material": "^2.0.0-beta.3",
        "@angular/platform-browser": "^4.0.3",
        "@angular/platform-browser-dynamic": "^4.0.3",
        "@angular/router": "^4.0.3",
        "@types/core-js": "^0.9.41",
        "@types/file-saver": "0.0.1",
        "@types/jszip": "0.0.32",
        "angularfire2": "^2.0.0-beta.8",
        "core-js": "^2.4.1",
        "file-saver": "^1.3.3",
        "firebase": "^3.9.0",
        "hammerjs": "^2.0.8",
        "jszip": "^3.1.3",
        "rxjs": "^5.3.0",
        "zone.js": "^0.8.9"
      },
      "devDependencies": {
        "@angular/cli": "1.0.1",
        "@angular/compiler-cli": "^4.0.3",
        "@types/firebase": "^2.4.31",
        "@types/jasmine": "^2.5.47",
        "@types/node": "^7.0.13",
        "@types/protractor": "^4.0.0",
        "codelyzer": "~2.0.1",
        "jasmine-core": "~2.5.2",
        "jasmine-spec-reporter": "~3.2.0",
        "karma": "~1.4.1",
        "karma-chrome-launcher": "~2.0.0",
        "karma-cli": "~1.0.1",
        "karma-coverage-istanbul-reporter": "^0.2.3",
        "karma-jasmine": "~1.1.0",
        "karma-jasmine-html-reporter": "^0.2.2",
        "protractor": "~5.1.1",
        "tslint": "~4.5.1",
        "typescript": "~2.2.2"
      }
    }`
    let tsconfig = `{
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
    let mainTs = `import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
`;

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
    let indexHtml =
      `<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>Initial</title>
  <base href="/" target="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>

<body>
  <app-root>Loading...</app-root>
</body>

</html>`;

    let appComponentHtml = `<div>App work</div>`;


    this.generateFile('package', this.extentions.json, packageJson);
    this.generateFile('tsconfig', this.extentions.json, tsconfig);
    this.generateFile('app/index', this.extentions.html, indexHtml);
    this.generateFile('app/main', this.extentions.ts, mainTs);
    this.generateFile('app/app.module', this.extentions.ts, appModule);
    this.generateFile('app/app.component', this.extentions.ts, appComponentTs);
    this.generateFile('app/app.component', this.extentions.html, appComponentHtml);
    this.jszip.generateAsync({ type: 'blob' }).then((data) => {
      fileSaver.saveAs(data, 'angular2-seed.zip');
    });
  }

  public generateJquery(options?: string | entities.IOptions): void {
    let indexhtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jqury project</title>
</head>
<body>
    <div>custom jquery template</div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
</body>
</html>`;
    this.generateFile('index', this.extentions.html, indexhtml);
    this.jszip.generateAsync({ type: 'blob' }).then((data) => {
      fileSaver.saveAs(data, 'jquery-seed.zip');
    });
  }
}
