-- CreateTable
CREATE TABLE "productdata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "vga" TEXT NOT NULL,
    "ssd" TEXT NOT NULL,
    "display" TEXT NOT NULL,
    "isinstock" BOOLEAN NOT NULL,
    "count" INTEGER NOT NULL
);
