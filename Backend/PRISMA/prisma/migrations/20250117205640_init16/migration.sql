-- CreateTable
CREATE TABLE "cartlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseammount" INTEGER NOT NULL,
    "purchaseitems" JSONB NOT NULL
);
