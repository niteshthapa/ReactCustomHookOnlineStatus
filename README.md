# ReactCustomHookOnlineStatus
To create an online status custom hook in React, you can use the useEffect hook to add event listeners for the online and offline events.
In this example, we define a custom hook called useOnlineStatus. It uses the useState hook to keep track of the online status, initializing it with the value of navigator.onLine.

Inside the useEffect hook, we add event listeners for the online and offline events. When the online event is triggered, we update the isOnline state to true, and when the offline event is triggered, we update it to false.

To use this custom hook in a component, you can import and invoke it like this:

In this example, the isOnline variable holds the current online status value returned by the useOnlineStatus hook. It is then rendered in the component, displaying either "Online" or "Offline" based on the value.






