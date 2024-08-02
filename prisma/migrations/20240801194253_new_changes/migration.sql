/*
  Warnings:

  - Added the required column `course_id` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "course_id" TEXT NOT NULL,
ADD COLUMN     "position" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
