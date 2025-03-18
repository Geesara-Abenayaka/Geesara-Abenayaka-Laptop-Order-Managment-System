PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

-- Create the new table with the `userId` column
CREATE TABLE "new_extenduser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "extenduser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Populate the new table with existing data, ensuring `userId` is populated
-- You need to define the logic for how to populate `userId`. For example, if `userId` is based on some logic or another table, use that. 
-- For now, I'll assume `userId` is copied from the `id` column in the existing `extenduser` table (you can adjust as needed).
INSERT INTO "new_extenduser" ("city", "email", "fname", "id", "lname", "phone", "userId")
SELECT "city", "email", "fname", "id", "lname", "phone", "id" FROM "extenduser"; 

-- Drop the old table
DROP TABLE "extenduser";

-- Rename the new table to the original name
ALTER TABLE "new_extenduser" RENAME TO "extenduser";

-- Optionally, you can modify the `userId` column to set a default value
-- ALTER TABLE "extenduser" ADD COLUMN "userId" INTEGER NOT NULL DEFAULT 1;

-- Create a unique index on `userId` if necessary
CREATE UNIQUE INDEX "extenduser_userId_key" ON "extenduser"("userId");

-- Re-enable foreign key checks
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
