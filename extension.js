const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('CommentLineDown is active');

	let disposable = vscode.commands.registerTextEditorCommand('commentLineDown.commentLineAndCursorDown', function () {
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

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
              