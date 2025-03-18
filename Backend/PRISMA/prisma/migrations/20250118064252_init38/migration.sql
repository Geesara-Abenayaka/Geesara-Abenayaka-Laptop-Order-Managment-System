-- CreateTable
CREATE TABLE "cartlistitem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseammount" INTEGER NOT NULL,
    "purchaseitems" JSONB NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "cartlistitem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "cartlistitem_userId_key" ON "cartlistitem"("userId");
