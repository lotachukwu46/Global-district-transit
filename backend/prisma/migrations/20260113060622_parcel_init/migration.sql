/*
  Warnings:

  - The primary key for the `Parcel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `carrier` on the `Parcel` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Parcel` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Made the column `destination` on table `Parcel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `origin` on table `Parcel` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "ParcelEvent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parcelId" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ParcelEvent_parcelId_fkey" FOREIGN KEY ("parcelId") REFERENCES "Parcel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parcel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trackingNumber" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Parcel" ("createdAt", "destination", "id", "origin", "status", "trackingNumber", "updatedAt") SELECT "createdAt", "destination", "id", "origin", "status", "trackingNumber", "updatedAt" FROM "Parcel";
DROP TABLE "Parcel";
ALTER TABLE "new_Parcel" RENAME TO "Parcel";
CREATE UNIQUE INDEX "Parcel_trackingNumber_key" ON "Parcel"("trackingNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
