/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TestBed} from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import {AppDemoDialog} from './app.demo-dialog.component';
import {
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material';

describe('app-demo-dialog component spec', function () {
    var comp;
    var fixture;

    beforeEach(async function (done) {
        TestBed.resetTestEnvironment();

        TestBed.initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());

        TestBed.configureTestingModule({
            declarations: [
                AppDemoDialog
            ],
            providers: [
                { provide: MatDialogRef, useValue: { close: () => {} } },
                { provide: MAT_DIALOG_DATA, useValue: [] }
            ]
        })
        .compileComponents()
        .then(function () {
            fixture = TestBed.createComponent(AppDemoDialog);
            fixture.detectChanges();
            comp = fixture.componentInstance;

            done();
        });
    });

    it('should create component', function () {
        //assertions
        expect(comp).toBeDefined();
    });
});
