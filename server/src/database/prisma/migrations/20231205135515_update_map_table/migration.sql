/*
  Warnings:

  - You are about to drop the `ApplyJobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Field` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Jobs_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Majors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ApplyJobs" DROP CONSTRAINT "ApplyJobs_jobId_fkey";

-- DropForeignKey
ALTER TABLE "ApplyJobs" DROP CONSTRAINT "ApplyJobs_userId_fkey";

-- DropForeignKey
ALTER TABLE "Majors" DROP CONSTRAINT "Majors_fieldId_fkey";

-- DropTable
DROP TABLE "ApplyJobs";

-- DropTable
DROP TABLE "Field";

-- DropTable
DROP TABLE "Jobs_type";

-- DropTable
DROP TABLE "Majors";

-- CreateTable
CREATE TABLE "jobs_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "jobs_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fields" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "majors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "fieldId" INTEGER NOT NULL,

    CONSTRAINT "majors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apply_jobs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "apply_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT,
    "cv_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "apply_jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "majors" ADD CONSTRAINT "majors_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "fields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apply_jobs" ADD CONSTRAINT "apply_jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apply_jobs" ADD CONSTRAINT "apply_jobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
