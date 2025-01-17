# Inconsistent Firebase onAuthStateChanged Trigger

This repository demonstrates a potential issue with the Firebase Authentication SDK's `onAuthStateChanged` listener.  Under rapid session changes (e.g., frequent sign-in/sign-out), the listener might not fire consistently, leading to unexpected application behavior.

## Problem

The `onAuthStateChanged` listener is designed to track changes in user authentication state. However, in scenarios involving rapid state changes, it may miss certain events, resulting in data inconsistencies or unexpected UI behavior.

## Solution

The provided solution implements debouncing to ensure only the most recent authentication state change is processed.  This prevents rapid-fire events from overwhelming the listener and causing inconsistencies.  The debounce function ensures a delay before firing the callback to handle the most updated state.