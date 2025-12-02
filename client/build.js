// server/build.js
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process'); // To run shell commands

// --- Configuration ---
// Adjust these paths based on your actual project structure

const paths = {
    root: path.resolve(__dirname, '..'), // Root project directory
    server: path.resolve(__dirname),      // Backend directory (where this script lives)
    client: path.resolve(__dirname, '..', 'client'), // Frontend directory
    serverBuild: path.resolve(__dirname, 'dist'),     // Backend distribution folder
    // --- *** CORRECTED FOR VITE *** ---
    clientBuild: path.resolve(__dirname, '..', 'client', 'dist'), // Frontend build output (Vite default)
    publicServe: path.resolve(__dirname, 'dist', 'public') // Where backend will serve static frontend files from
};

// --- Helper Functions --- (Keep the runCommand function as it was)

function runCommand(command, cwd, env = {}) {
    console.log(`\nRunning command in ${cwd}:\n${command}\n`);
    try {
        execSync(command, {
            cwd: cwd,           // Set working directory
            stdio: 'inherit',   // Show command output in console
            env: { ...process.env, ...env } // Merge environment variables
        });
        console.log(`\nCommand successful: ${command}`);
        return true;
    } catch (error) {
        console.error(`\nCommand failed: ${command}`);
        return false;
    }
}


// --- Main Build Function ---

async function build() {
    console.log('🚀 Starting comprehensive build process...');

    try {
        // 1. Clean previous builds
        console.log('\n🧹 Cleaning previous build directories...');
        await fs.emptyDir(paths.serverBuild);
        // Ensure client build directory exists before cleaning (Vite might not create it if build fails early)
        if (fs.existsSync(paths.clientBuild)) {
            await fs.emptyDir(paths.clientBuild);
        }
        console.log('Previous build directories cleaned.');

        // 2. Build Frontend Client (Keep this section as it was)
        console.log(`\n⚛️ Building frontend client in ${paths.client}...`);
        if (!fs.existsSync(path.join(paths.client, 'package.json'))) {
            throw new Error(`Client package.json not found in ${paths.client}`);
        }
        if (!runCommand('npm install --legacy-peer-deps', paths.client)) {
             throw new Error('Client dependency installation failed.');
        }
        if (!runCommand('npm run build', paths.client, { NODE_ENV: 'production' })) {
            throw new Error('Client build script failed.');
        }
        console.log('Frontend client built successfully.');


        // 3. Prepare Backend Server
        console.log(`\n⚙️ Preparing backend server in ${paths.serverBuild}...`);

        // 3a. Handle TypeScript compilation (if tsconfig.json exists)
        const tsconfigPath = path.join(paths.server, 'tsconfig.json');
        if (fs.existsSync(tsconfigPath)) {
            // (Keep the TypeScript handling logic as it was)
            console.log('TypeScript detected. Compiling backend...');
            if (!runCommand('npx tsc', paths.server)) {
                throw new Error('TypeScript compilation failed.');
            }
            console.log('Backend TypeScript compiled.');
        } else {
            // --- *** REFINED PLAIN JAVASCRIPT COPY LOGIC *** ---
            console.log('No tsconfig.json found. Assuming plain JavaScript backend.');
            console.log('Copying necessary backend files to dist...');

            // Define what needs to be copied (adjust as needed)
            const itemsToCopy = [
             'node_modules',
            //   'config',
            //   'controllers',
            //    'middleware',
            //    'models',
            //    'services',
            //     'utils',
            //     'routes', 
            //     '.git',
                '.env',
                'package.json',
                'package-lock.json', // or yarn.lock
                'app.js', // Or your main entry file if it's in the root
                // Add other essential files/folders here
                // Explicitly EXCLUDE: node_modules, dist, build.js, .git, .env, etc.
            ];

            await Promise.all(itemsToCopy.map(async (item) => {
                const sourcePath = path.join(paths.server, item);
                const destPath = path.join(paths.serverBuild, item);
                if (fs.existsSync(sourcePath)) {
                    console.log(`  Copying ${item}...`);
                    await fs.copy(sourcePath, destPath);
                } else {
                    console.log(`  Skipping ${item} (not found).`);
                }
            }));

            console.log('Finished copying backend source files.');
             // --- *** END REFINED COPY LOGIC *** ---
        }

        // 3b. Copy essential files like package.json (Keep this section as it was)
        console.log('Copying package.json and package-lock.json for production dependencies...');
        await fs.copy(path.join(paths.server, 'package.json'), path.join(paths.serverBuild, 'package.json'));
        if (fs.existsSync(path.join(paths.server, 'package-lock.json'))) {
            await fs.copy(path.join(paths.server, 'package-lock.json'), path.join(paths.serverBuild, 'package-lock.json'));
        } else if (fs.existsSync(path.join(paths.server, 'yarn.lock'))) {
             await fs.copy(path.join(paths.server, 'yarn.lock'), path.join(paths.serverBuild, 'yarn.lock'));
        }
        // Consider copying .env.production or similar if needed


        // 4. Integrate Frontend Build into Backend (Keep this section as it was)
        console.log(`\n🔗 Integrating frontend build (${paths.clientBuild}) into server serve directory (${paths.publicServe})...`);
        if (!fs.existsSync(paths.clientBuild)) {
            throw new Error(`Client build output not found at ${paths.clientBuild}. Check client build process.`);
        }
        await fs.ensureDir(paths.publicServe);
        await fs.copy(paths.clientBuild, paths.publicServe);
        console.log('Frontend assets copied to server public directory.');


        // 5. Final Instructions / Completion (Keep this section as it was)
        console.log('\n✅ Build process completed successfully!');
        console.log(`\n   Server build ready in: ${paths.serverBuild}`);
        console.log(`   Frontend assets served from: ${paths.publicServe}`);
        console.log('\n   To run in production (from server/dist directory):');
        console.log('     1. cd dist');
        console.log('     2. npm install --production');
        console.log('     3. Set necessary environment variables (NODE_ENV=production, etc.)');
        console.log('     4. node index.js'); // Adjust entry point if needed

        process.exit(0); // Exit successfully

    } catch (error) {
        console.error('\n❌ Build process failed!');
        console.error(error);
        process.exit(1); // Exit with failure code
    }
}

// --- Run the build ---
build();