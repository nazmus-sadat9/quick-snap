#!/usr/bin/env node 

import { execSync } from 'child_process';
import pkg from "../package.json";

// command line input
const args = process.argv.slice(2);

// pkg version
if (args.includes("-v") || args.includes("--version")) {
  console.log(`lightingjs v${pkg.version}`);
  process.exit(0);
}

// pkg update
else if (args.includes("-u") || args.includes("--update")) {
  console.log("updating...");

  try {
    execSync("npm install lightingjs@latest");
    console.log("update complete.");
    console.log(`lightingjs v${pkg.version}`);
    
  } catch (error) {
    console.log("something went to wrong!");
  }

  process.exit(0);
}

else{
  console.log("command not found! use --help");
}
