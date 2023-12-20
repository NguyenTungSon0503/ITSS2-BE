/*
  Warnings:

  - You are about to drop the column `jobId` on the `Jobs_type` table. All the data in the column will be lost.
  - Added the required column `jobs_type` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Jobs_type" DROP CONSTRAINT "Jobs_type_jobId_fkey";

-- AlterTable
ALTER TABLE "Jobs_type" DROP COLUMN "jobId";

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "jobs_type" TEXT NOT NULL;
