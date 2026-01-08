# Engineering Journal – MedSync Adherence System

---

## Bug ID: #001
**Timestamp:**  
**Context:** Project setup – folder and file creation

### 1. Assumption  
I thought creating folders and files would be simple.

### 2. Reality  
I was confused about creating folders inside folders.

### 3. Investigation  
- Attempt 1: Tried creating folders but wasn’t sure where they went.
- Attempt 2: Asked for step-by-step guidance.

### 4. Solution  
Created folders by opening the parent folder first.

### 5. Lesson (Root Cause Analysis)  
Folders must be created inside the correct parent directory.
---

## Bug ID: #002
**Timestamp:** [Put today’s date & time]
**Context:** Checking Node.js installation in VS Code terminal

### 1. Assumption  
I assumed Node.js was already installed on my system.

### 2. Reality  
The terminal showed:  
"node is not recognized as the name of a cmdlet..."

### 3. Investigation  
- Attempt 1: Ran `node -v` in VS Code terminal → Failed
- Attempt 2: Verified error message
- AI Prompt Used: "node is not recognized in windows terminal"

### 4. Solution  
Node.js was not installed. Installed Node.js LTS from the official website.

### 5. Lesson (Root Cause Analysis)  
Node.js must be installed and added to system PATH for terminal commands to work.
---

## Bug ID: #003
**Timestamp:** [today’s date & time]
**Context:** Saving project to GitHub using git commands

### 1. Assumption  
I assumed Git was already installed on my system.

### 2. Reality  
The terminal showed:  
"git is not recognized as the name of a cmdlet..."

### 3. Investigation  
- Attempt 1: Ran `git add .` in terminal → Failed
- AI Prompt Used: "git is not recognized in windows"

### 4. Solution  
Installed Git for Windows and verified installation.

### 5. Lesson (Root Cause Analysis)  
Git must be installed and available in PATH to use version control commands.
---

## Bug ID: #011
**Timestamp:** [today’s date & time]
**Context:** Firestore database creation blocked due to billing requirement

### 1. Assumption  
I assumed Firestore test mode could be used without enabling billing.

### 2. Reality  
Firebase required a billing account to create Firestore, and I did not have access to a payment method.

### 3. Investigation  
- Reviewed Firebase error message
- Researched Firebase free-tier billing requirements
- Considered alternative approaches

### 4. Solution  
Implemented backend logic using a mock data layer that mirrors Firestore structure, allowing all APIs and logic to be developed without billing.

### 5. Lesson (Root Cause Analysis)  
Engineering solutions must adapt to real-world constraints while preserving system design and intent.
