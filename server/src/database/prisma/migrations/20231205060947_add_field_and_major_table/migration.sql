/*
  Warnings:

  - Added the required column `jobs_type` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Jobs_type" AS ENUM ('FULLTIME', 'PARTTIME', 'INTERN', 'REMOTE');

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "jobs_type" "Jobs_type" NOT NULL;

-- CreateTable
CREATE TABLE "Field" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Majors" (
    "id" SERIAL NOT NULL,
    "field_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Majors_pkey" PRIMARY KEY ("id")
);
