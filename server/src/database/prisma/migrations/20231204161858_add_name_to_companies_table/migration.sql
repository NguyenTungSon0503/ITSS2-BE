/*
  Warnings:

  - Added the required column `name` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "name" VARCHAR(50) NOT NULL;
