/*
  Warnings:

  - Added the required column `majorsId` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "majorsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_majorsId_fkey" FOREIGN KEY ("majorsId") REFERENCES "majors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
