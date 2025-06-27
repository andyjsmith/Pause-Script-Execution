chrome.commands.onCommand.addListener(async (command) => {
	if (command !== "pause-script-execution") return;

	const currentTab = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	if (currentTab.length === 0) return;

	chrome.scripting.executeScript({
		injectImmediately: true,
		target: { tabId: currentTab[0].id },
		func: () => {
			let before = performance.now();

			// --- Pause script execution ---
			debugger;
			// --- Pause script execution ---

			if (performance.now() - before < 50) {
				console.log(
					"%c⚠️ How to fix Pause Script Execution ⚠️%c\nIt looks like Pause Script Execution did not work.\n\nTo fix this, open DevTools settings by clicking the ⚙️ settings icon at the top of DevTools (or press F1). Go to 'Ignore list' > 'General exclusion rules', and UNCHECK 'Content scripts injected by extensions'.\n\nThen, reload the page and try again.",
					"color:red;font-size:large;",
					""
				);
			}
		},
	});
});
