import "dotenv/config";
import { seedDatabase } from "./src/db/seed";

async function main() {
  console.log("🌱 Seeding database...");
  try {
    const workspaceId = await seedDatabase();
    console.log(`✅ Seeding complete! Workspace ID: ${workspaceId}`);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

main();
