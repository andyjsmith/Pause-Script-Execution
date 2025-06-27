# Pause Script Execution

Chrome Extension for easily pausing JavaScript execution using a hotkey to aid in debugging of websites. To use, just open Chrome DevTools and then press the hotkey (default Ctrl+Shift+S) to pause script execution. You can reload the page and press this hotkey quickly to time exactly when the execution pauses.

Change the hotkey to anything you want by going to Extensions -> Keyboard shortcuts (on the left) -> Pause Script Execution

### Extension not working?

As of Chrome 115, how may now have to go to DevTools settings > 'Ignore list' > 'General exclusion rules', and UNCHECK 'Content scripts injected by extensions' to allow extension scripts to use the `debugger` command.
