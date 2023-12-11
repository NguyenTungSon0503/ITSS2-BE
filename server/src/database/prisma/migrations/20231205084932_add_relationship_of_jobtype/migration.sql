/*
  Warnings:

  - You are about to drop the column `field_id` on the `Majors` table. All the data in the column will be lost.
  - You are about to drop the column `jobs_type` on the `jobs` table. All the data in the column will be lost.
  - Added the required column `fieldId` to the `Majors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Majors" DROP COLUMN "field_id",
ADD COLUMN     "fieldId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "jobs_type";

-- DropEnum
DROP TYPE "Jobs_type";

-- CreateTable
CREATE TABLE "Jobs_type" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "jobId" INTEGER,

    CONSTRAINT "Jobs_type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Jobs_type" ADD CONSTRAINT "Jobs_type_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Majors" ADD CONSTRAINT "Majors_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
