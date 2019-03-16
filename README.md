# react-redux
This is the basic tutorial of react-redux. :dart:
---

## about redux
* State Management library
* Makes creating complex application easier

## redux cycle
> Action Creator --> Action --> Dispatch --> Reducer --> State
 
**Action** are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using ``store.dispatch().``

**Reducers** specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

The **Store** is the object that brings them together. The store has the following responsibilities:
 * Holds application state;
 * Allows access to state via getState();
 * Allows state to be updated via dispatch(action);
 * Registers listeners via subscribe(listener);
 * Handles unregistering of listeners via the function returned by subscribe(listener).
 
