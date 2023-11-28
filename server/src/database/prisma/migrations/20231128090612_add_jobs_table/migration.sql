-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT,
    "advantages" TEXT,
    "company_id" INTEGER NOT NULL,
    "salary_min" INTEGER NOT NULL,
    "salary_max" INTEGER NOT NULL,
    "years_of_experience" INTEGER NOT NULL,
    "job_location" VARCHAR(255) NOT NULL,
    "thumbnail_url" VARCHAR(255) NOT NULL,
    "majors" TEXT NOT NULL,
    "is_domestic" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
