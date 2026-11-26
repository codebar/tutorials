/*
  roadmap.js

  This script adds three pieces of behaviour to the page:
    1. Clicking a node button expands or collapses it.
    2. Tabs switch between panels (mouse and keyboard), and the URL hash updates.
    3. Route toggle buttons highlight a route on each roadmap.
  It also opens the correct tab on page load if the URL has a hash like #web or #apps.

*/

(function () {
  'use strict';
	
  const allTabs = Array.from(document.querySelectorAll('[role="tab"]'));  // Get's all tab buttons on the page

  //
  // Expand / collapse nodes
	//
    document.addEventListener('click', function (event) {
    // Find the closest ancestor (or the element itself) that is a node button.
    const clickedButton = event.target.closest('.node-btn');

    // If the click wasn't on (or inside) a node button, do nothing.
    if (!clickedButton) {
      return;
    }

    // aria-expanded tells the page (and screen readers) whether the node is open.
    const isCurrentlyOpen = clickedButton.getAttribute('aria-expanded') === 'true';

    if (isCurrentlyOpen) {
      clickedButton.setAttribute('aria-expanded', 'false');
    } else {
      clickedButton.setAttribute('aria-expanded', 'true');
    }
  });


  //
  // Shows/Hides tabs
  //

  //   tabToSelect  - the tab button we want to activate
  //   moveFocus    - true if we should also move the keyboard focus onto it
  function selectTab(tabToSelect, moveFocus) {
    allTabs.forEach(function (tab) {
      const isTheChosenTab = (tab === tabToSelect);

      // Tell the browser / screen readers which tab is selected.
      tab.setAttribute('aria-selected', isTheChosenTab ? 'true' : 'false');

      // Only the selected tab can be reached with the Tab key (0 = reachable).
      // The others get -1, which means "focusable by script only".
      // Arrow keys are used to move between tabs instead.
      tab.tabIndex = isTheChosenTab ? 0 : -1;

      // Each tab points at its panel using the aria-controls attribute (the panel's id).
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);

      // Show the panel for the chosen tab, hide the rest.
      panel.hidden = !isTheChosenTab;
    });

    if (moveFocus) {
      tabToSelect.focus();
    }

    // Update the URL (e.g. #web) so the page can be bookmarked or shared.
    // The tab's id looks like "tab-web", so we remove "tab-" to get "web".
    const tabName = tabToSelect.id.replace('tab-', '');


    if (history.replaceState) {
      history.replaceState(null, '', '#' + tabName);
    }
  }

  // Attach click and keyboard behaviour to every tab.
  allTabs.forEach(function (tab, index) {

    // Mouse / touch: clicking a tab selects it.
    tab.addEventListener('click', function () {
      selectTab(tab, false);
    });

    // Keyboard: arrow keys, Home and End move between tabs.
    tab.addEventListener('keydown', function (event) {
      let tabToMoveTo = null;

      if (event.key === 'ArrowRight') {
        // Go to the next tab. The % (remainder) makes the last tab wrap back to the first.
        const nextIndex = (index + 1) % allTabs.length;
        tabToMoveTo = allTabs[nextIndex];

      } else if (event.key === 'ArrowLeft') {
        // Go to the previous tab. Adding allTabs.length first stops us going below 0,
        // so the first tab wraps round to the last.
        const previousIndex = (index - 1 + allTabs.length) % allTabs.length;
        tabToMoveTo = allTabs[previousIndex];

      } else if (event.key === 'Home') {
        tabToMoveTo = allTabs[0];

      } else if (event.key === 'End') {
        tabToMoveTo = allTabs[allTabs.length - 1];
      }

      // Only act if one of the keys above was pressed.
      if (tabToMoveTo) {
        // Stop the browser's default behaviour (e.g. arrow keys scrolling the page).
        event.preventDefault();
        selectTab(tabToMoveTo, true);
      }
    });
  });


  //
  // 3. Route highlight toggles (one set per roadmap)
  //

  // Each roadmap has a ".fork-label" element containing the toggle buttons.
  // The roadmap itself (the "fork") is the element directly after the label.
  const forkLabels = document.querySelectorAll('.fork-label');

  forkLabels.forEach(function (label) {
    const fork = label.nextElementSibling;
    const routeButtons = label.querySelectorAll('.route-toggle button');

    routeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Each button stores its route name in a data-route attribute, e.g. data-route="a".
        const chosenRoute = button.getAttribute('data-route');

        // Copy that onto the roadmap. The CSS can then highlight the matching route.
        fork.setAttribute('data-route', chosenRoute);

        // Mark only the clicked button as "pressed", and un-press the others.
        routeButtons.forEach(function (otherButton) {
          const isTheClickedButton = (otherButton === button);
          otherButton.setAttribute('aria-pressed', isTheClickedButton ? 'true' : 'false');
        });
      });
    });
  });


  //
  // 4. On page load open the tab named in the URL hash
  //
  const hashName = window.location.hash.replace('#', '');

  // Look for a tab with the matching id, e.g. "tab-web".
  const tabFromUrl = document.getElementById('tab-' + hashName);

  // If one exists, open it. If not (no hash, or an unknown one), the page's default stays.
  if (tabFromUrl) {
    selectTab(tabFromUrl, false);
  }

})();