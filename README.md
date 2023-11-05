# PianoRoll Frontend Task

## Introduction

You will be building on top of a demo code that generates a widget for browsing Piano Rolls - the core element of [Piano Roll](https://pianoroll.io).
The goal is to enhance the user interface and add an interactive component.

This is what the starting point looks like:

<img width="666" alt="image" src="https://github.com/Nospoko/pianoroll-frontend-challenge/assets/8056825/daf35d32-f4e5-4a00-bbe8-78ecec2f2011">

## Task description
### Part 1: Display

We want to implement an interface following the design similar to YouTube. There are two states we need to implement:
### Cover page
![image](https://github.com/Eraout/pianoroll-frontend-challenge/assets/115620563/540f3636-9639-4791-bb0c-7be27b856a04)

#### Grid layout

```
+--------------+   +--------------+   +--------------+
|              |   |              |   |              |
|  Piano Roll  |   |  Piano Roll  |   |  Piano Roll  |
|              |   |              |   |              |
+--------------+   +--------------+   +--------------+
+--------------+   +--------------+   +--------------+
|              |   |              |   |              |
|  Piano Roll  |   |  Piano Roll  |   |  Piano Roll  |
|              |   |              |   |              |
+--------------+   +--------------+   +--------------+
+--------------+   +--------------+   +--------------+
|              |   |              |   |              |
|  Piano Roll  |   |  Piano Roll  |   |  Piano Roll  |
|              |   |              |   |              |
+--------------+   +--------------+   +--------------+
```
##### Without interacive
![image](https://github.com/Eraout/pianoroll-frontend-challenge/assets/115620563/1d7397c1-2a49-406f-b3ec-cfc32bb726a0)
##### Active interactive
![image](https://github.com/Eraout/pianoroll-frontend-challenge/assets/115620563/c30cb7b3-eaff-409b-b6fb-b147abcfe441)

#### Main View

```
+-----------------------------------+  +--------------+
|                                   |  |              |
|                                   |  |  Piano Roll  |
|                                   |  |              |
|        Main Piano Roll            |  +--------------+
|                                   |  +--------------+
|                                   |  |              |
|                                   |  |  Piano Roll  |
+-----------------------------------+  |              |
                                       +--------------+
```
![image](https://github.com/Eraout/pianoroll-frontend-challenge/assets/115620563/d2e406db-e0a4-4c06-ad04-ba403e56a540)


## Overview of Features

Piano Roll is an innovative application for pianists, offering a unique user experience and extensive capabilities for practicing and sharing musical achievements.

### Interactive Cover
- Utilizes an **interactive cover** that changes the viewing perspective as the cursor moves, creating a sense of depth and dynamism in the interface.

### Particles.js Library
- Integrates the **Particles.js library** to create a "starry sky" or "dusty room" visual effect, giving the main page a unique atmosphere.

### Transition Button
- The "**Become a Tester**" button offers users the chance to be part of the testing process, smoothly redirecting to the main interface.

### Grid Structure Interface
- The main page includes a **grid structure** with three columns of cards that enlarge and shift perspective as the cursor hovers over them.

### Interactive Cards
- Clicking on a card activates an **expanded view**, where the selected card becomes central, increases in size, and takes a central position in the interface.

### Dynamic Card System
- In the expanded view, a **list of other cards** is presented, allowing for switching between different interface elements, dynamically changing the displayed information.

### Responsive Design
- The application is designed to be adaptive for various devices and screen sizes, ensuring comfortable access to functionality.
