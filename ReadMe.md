# Chatgpt Chrome Extension

A simple Google Chrome extension that integrates with OpenAI's API to provide answers to your questions.

## File Structure

```
Chatgpt-chrome-extension/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
├── popup.html
└-- popup.css

```

## Getting Started

Follow these instructions to get the extension up and running on your local machine.

### Installation

1. **Clone the repository** .

2. **Navigate to the project directory**:

   ```bash
   cd chatgpt-chrome-extension
   ```

3. **Add your OpenAI API key**:

   - Open `popup.js` and replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key.

4. **Load the extension in Chrome**:
   1. Open Chrome and go to `chrome://extensions/`.
   2. Enable "Developer mode" (top right corner).
   3. Click "Load unpacked" and select your project directory.

### Usage

1. Click the extension icon next to the Chrome address bar.
2. Type a question in the textarea.
3. Click "Ask" to see the response from OpenAI.

### Files

- **manifest.json**: This file tells Chrome about your extension and its capabilities.
- **popup.html**: The HTML file that creates the user interface of the extension.
- **popup.css**: The CSS file that styles the user interface of the extension.
- **popup.js**: The JavaScript file that handles the logic of communicating with the OpenAI API.
- **icons/**: A directory containing icon images for the extension.

# Chatgpt-Chrome-Extension
