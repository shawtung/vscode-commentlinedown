// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('CommentLineDown is active');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerTextEditorCommand('commentLineDown.commentLineAndCursorDown', function () {
		// The code you place here will be executed every time your command is executed

		vscode.commands.executeCommand('editor.action.commentLine');
    vscode.commands.executeCommand('cursorDown');
    
    const { cursorPosition } = vscode.workspace.getConfiguration('commentLineDown')

    if (cursorPosition === 'home') {
      vscode.commands.executeCommand('cursorHome');
    } else if (cursorPosition === 'end') {
      vscode.commands.executeCommand('cursorEnd');
    }
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
