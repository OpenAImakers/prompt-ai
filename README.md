# prompt-ai
  # p-ai
prompt-ai: An open-source AI chat platform designed for seamless interaction with multiple AI models.

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- [npm](https://www.npmjs.com/) (usually included with Node.js)
- [Git](https://git-scm.com/) (for cloning the repository)

## Installation

Follow these steps to set up and run the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/OpenAImakers/prompt-ai.git
   cd prompt-ai
   ```

2. **Install Dependencies**:
   The project uses Node.js dependencies listed in `package.json`. Run the following command to install them:
   ```bash
   npm install
   ```
   This will create a `node_modules/` directory with all required packages. **Note**: Do not manually modify the `node_modules/` directory, as it’s automatically generated.

3. **Run the Project and Development**:
   Once dependencies are installed, start the project with:
   under development in the www folder:
         run
   npm run start-livereload
   and the project can be viewed in the browser

   otherwise compile the app and view it in your phone in the project root by running
   cordova build android --verbose
   cordova run android ( ensure your device is connected via usb port to your pc)
   

## Git Ignore

To keep your repository clean, the following files and directories are excluded from version control via the `.gitignore` file:

```
node_modules/
platforms/
plugins/
build/
*.log
```

- **`node_modules/`**: Contains Node.js dependencies, which should be installed via `npm install` rather than committed.
- **`platforms/`**: Platform-specific files (e.g., for Cordova or Capacitor projects).
- **`plugins/`**: Plugin-related files (e.g., for Cordova plugins).
- **`build/`**: Compiled or built output files.
- **`*.log`**: Log files generated during development or runtime.

**Important**: Ensure you do not commit these files to your repository. Run `git add .` carefully, as the `.gitignore` file prevents these from being tracked.



## Troubleshooting

- **Missing Dependencies**: If you encounter errors like `module not found`, ensure you’ve run `npm install` in the project root plus others.

## Contributing
Contributions are welcome!

Do you want me to refine this README further, add specific template examples, or focus on something else like a particular framework?
