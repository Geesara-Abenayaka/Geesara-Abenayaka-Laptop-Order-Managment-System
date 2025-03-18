/*
  Warnings:

  - Added the required column `userId` to the `cartlist` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cartlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseammount" INTEGER NOT NULL,
    "purchaseitems" JSONB NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "cartlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cartlist" ("id", "purchaseammount", "purchaseitems") SELECT "id", "purchaseammount", "purchaseitems" FROM "cartlist";
DROP TABLE "cartlist";
ALTER TABLE "new_cartlist" RENAME TO "cartlist";
CREATE UNIQUE INDEX "cartlist_userId_key" ON "cartlist"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
