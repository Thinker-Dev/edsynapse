-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_course_id_fkey";

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
