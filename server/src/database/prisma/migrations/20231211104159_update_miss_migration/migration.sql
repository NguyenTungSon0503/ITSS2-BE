/*
  Warnings:

  - The values [pending,approve,reject] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `jobs_type` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `majors` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the `jobs_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('PENDING', 'APPROVE', 'REJECT');
ALTER TABLE "apply_jobs" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "apply_jobs" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "apply_jobs" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropIndex
DROP INDEX "companies_email_key";

-- DropIndex
DROP INDEX "users_email_key";

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "apply_jobs" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "jobs_type",
DROP COLUMN "majors";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "avatar_url" SET DATA TYPE VARCHAR(255);

-- DropTable
DROP TABLE "jobs_type";

-- CreateTable
CREATE TABLE "job_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "job_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_type_to_job" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "job_type_to_job_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "job_type_to_job" ADD CONSTRAINT "job_type_to_job_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_type_to_job" ADD CONSTRAINT "job_type_to_job_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "job_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
