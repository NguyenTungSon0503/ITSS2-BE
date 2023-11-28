-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "website" VARCHAR(50),
    "phone_number" VARCHAR(20) NOT NULL,
    "hust_partner" BOOLEAN NOT NULL DEFAULT false,
    "logo_url" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_email_key" ON "companies"("email");
