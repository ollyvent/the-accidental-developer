const { execSync } = require('child_process');
const readline = require('readline-sync');

// Function to execute shell commands
const executeCommand = (command) => {
  try {
    const result = execSync(command, { encoding: 'utf-8' });
    console.log(result.trim());
  } catch (error) {
    console.error(`Error executing command: ${error.stderr}`);
  }
};

// Prompt user for commit message
const commitMessage = readline.question('Enter your commit message: ');

// Stage changes
executeCommand('git add .');

// Commit changes with the provided message
executeCommand(`git commit -m "${commitMessage}"`);

// Push changes to the default branch (e.g., main)
executeCommand('git push origin main');

console.log('Changes staged, committed, and pushed successfully!');
