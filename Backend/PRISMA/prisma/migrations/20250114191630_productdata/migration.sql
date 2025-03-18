/*
  Warnings:

  - Added the required column `image` to the `productdata` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_productdata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "model" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "vga" TEXT NOT NULL,
    "ssd" TEXT NOT NULL,
    "display" TEXT NOT NULL,
    "isinstock" BOOLEAN NOT NULL,
    "count" INTEGER NOT NULL
);
INSERT INTO "new_productdata" ("count", "display", "id", "isinstock", "model", "price", "processor", "ram", "ssd", "vga") SELECT "count", "display", "id", "isinstock", "model", "price", "processor", "ram", "ssd", "vga" FROM "productdata";
DROP TABLE "productdata";
ALTER TABLE "new_productdata" RENAME TO "productdata";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
