# Installing Node.js and npm on macOS

## You Need to Install Node.js First!

The error "npm: command not found" means Node.js is not installed on your Mac.

## Installation Steps

### Option 1: Using Official Installer (Recommended)

1. **Visit Node.js Website**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   
2. **Download LTS Version**
   - Click the "LTS" (Long Term Support) button
   - This will download a `.pkg` file
   
3. **Run the Installer**
   - Open the downloaded `.pkg` file
   - Follow the installation wizard
   - Click "Continue" → "Install" → Enter your password
   
4. **Verify Installation**
   - Open a NEW terminal window
   - Run these commands:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., v20.x.x and 10.x.x)

### Option 2: Using Homebrew

If you have Homebrew installed:

```bash
# Install Node.js
brew install node

# Verify installation
node --version
npm --version
```

### Option 3: Using nvm (Node Version Manager)

For more control over Node versions:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen terminal, then:
nvm install --lts
nvm use --lts

# Verify
node --version
npm --version
```

## After Installing Node.js

Once Node.js and npm are installed:

### 1. Navigate to Your Project
```bash
cd /Users/sandeep/Sandeep/Projects/sandeepstele.github.io
```

### 2. Install Dependencies
```bash
npm install
```

This will take a few minutes and install all required packages.

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Visit `http://localhost:5173`

## Troubleshooting

### "npm: command not found" after installation
- **Close and reopen your terminal** - This is important!
- The terminal needs to reload to recognize the new commands

### Permission errors during installation
- Don't use `sudo npm install` in the project
- If you see permission errors, fix npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### Installation is slow
- This is normal - npm needs to download many packages
- First install can take 2-5 minutes
- Be patient and let it complete

### "EACCES" permission errors
```bash
sudo chown -R $USER:$(id -gn $USER) ~/.npm
sudo chown -R $USER:$(id -gn $USER) ~/.config
```

## What Gets Installed

When you run `npm install`, it will install:
- React and React DOM
- TypeScript compiler
- Vite build tool
- Tailwind CSS
- Framer Motion
- React Router
- And 200+ other dependencies

Total size: ~300-500 MB

## Next Steps

After successful installation:

1. ✅ Node.js and npm installed
2. ✅ Run `npm install` in project directory
3. ✅ Run `npm run dev` to start server
4. ✅ Visit `http://localhost:5173` in browser
5. ✅ Test your portfolio!

## Quick Reference

```bash
# Check if Node.js is installed
node --version

# Check if npm is installed
npm --version

# Install project dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Need Help?

If you encounter issues:
1. Make sure you're using a NEW terminal window after installing Node.js
2. Check that Node.js v18 or higher is installed
3. Ensure you're in the correct directory
4. Try restarting your computer if commands still don't work

---

**Download Node.js now:** [https://nodejs.org/](https://nodejs.org/)

Choose the **LTS version** (left button) for best stability.
