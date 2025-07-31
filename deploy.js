require("dotenv").config({ path: ".env.deploy.local" });
const ftp = require("basic-ftp");

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: process.env.FTP_SECURE === "true",
    });

    console.log(`Connected! Uploading files from /build to: ${process.env.FTP_REMOTE_PATH}`);

    await client.ensureDir(process.env.FTP_REMOTE_PATH);
    await client.clearWorkingDir();
    await client.uploadFromDir("build");

    console.log("✅ FTP Deployment complete!");
  } catch (err) {
    console.error("❌ FTP Deployment failed:", err);
  }

  client.close();
}

deploy();
