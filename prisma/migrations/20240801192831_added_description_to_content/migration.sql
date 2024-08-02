/*
  Warnings:

  - The `type` column on the `Content` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('VIDEO', 'PPT');

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "description" TEXT,
DROP COLUMN "type",
ADD COLUMN     "type" "ContentType" NOT NULL DEFAULT 'VIDEO';
