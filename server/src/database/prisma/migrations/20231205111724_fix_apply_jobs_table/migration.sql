/*
  Warnings:

  - You are about to drop the column `messenger` on the `ApplyJobs` table. All the data in the column will be lost.
  - Added the required column `message` to the `ApplyJobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApplyJobs" DROP COLUMN "messenger",
ADD COLUMN     "message" TEXT NOT NULL;
