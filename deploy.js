// deploy.js
require('dotenv').config({ path: '.env.deploy.local' });
const ftp = require('basic-ftp');

;(async () => {
  const client = new ftp.Client();
  client.ftp.verbose = true;  // turn on detailed logging

  try {
    // 1) Connect using your .env.deploy.local values
    await client.access({
      host:     process.env.FTP_HOST,
      user:     process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure:   process.env.FTP_SECURE === 'true'
    });
    console.log('🟢 Connected to FTP');

    // 2) Determine the remote path (fallback provided)
    const remotePath = process.env.FTP_REMOTE_PATH || '/theHillenGroup';
    console.log('📁 Deploying to:', remotePath);

    // 3) Ensure the directory exists, then clear it out
    await client.ensureDir(remotePath);
    await client.clearWorkingDir();

    // 4) Upload every file & folder from your local build/
    await client.uploadFromDir('build', remotePath);

    console.log('✅ FTP Deployment complete!');
  } catch (err) {
    console.error('❌ FTP Deployment failed:', err);
    process.exit(1);
  } finally {
    client.close();
  }
})();
