'use strict';
import * as vscode from 'vscode';
import { Explorer } from './views/Explorer';

export function activate(context: vscode.ExtensionContext) {
    // const { languages } = require('vscode');
    const disposables = [
        // new OpenChangedFilesCommand()
    ];

    disposables.push(
        vscode.window.registerTreeDataProvider(
            'ymp.properties.explorer',
            new Explorer(context)
        )
    );

    context.subscriptions.push(...disposables);
}
export function deactivate() {

}