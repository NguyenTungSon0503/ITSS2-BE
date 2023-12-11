-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'approve', 'reject');

-- CreateTable
CREATE TABLE "ApplyJobs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "apply_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "messenger" TEXT NOT NULL,
    "cv_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "ApplyJobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ApplyJobs" ADD CONSTRAINT "ApplyJobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplyJobs" ADD CONSTRAINT "ApplyJobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
