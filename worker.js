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
			debugger;
		},
	});
});
