// @ts-check
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as JSZip from 'jszip';
import * as fileSaver from 'file-saver';
import { Subscription } from "rxjs/Rx";

@Injectable()
export class ProjectGeneratorService {

  private jszip: JSZip = new JSZip();
  private httpSubscribtion: Subscription;

  public constructor(
    private http$: Http
  ) { }

  public generateFile(filename: string, extention: string, data: Object, folderName?: string): JSZip {
    if (folderName) {
      return this.jszip.file(`${filename}.${extention}`, data).folder(folderName);
    } else {
      return this.jszip.file(`${filename}.${extention}`, data);
    }
  }

  public generateDownloadUrl() {
    debugger;
    let debug1 = 'hello';
    let debug2 = 'hello';

    let blob: Blob = new Blob([JSON.stringify(debug1, null, 2)], { type: 'application/json' });
    let file = new File([blob], 'test.txt');
    let downloadUrl = URL.createObjectURL(blob);
    this.httpSubscribtion = this.http$.get(downloadUrl).subscribe(data => {
      fileSaver.saveAs(file);
      this.httpSubscribtion.unsubscribe();
    });
  }
}

export enum Extention {
  json,
  txt,
  html,
  css,
  ts,
  dts,
  ico,
  png,
  jpg,
  jpeg,
  md,
  js
}
