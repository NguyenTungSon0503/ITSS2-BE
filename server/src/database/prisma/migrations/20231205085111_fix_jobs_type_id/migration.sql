-- AlterTable
CREATE SEQUENCE jobs_type_id_seq;
ALTER TABLE "Jobs_type" ALTER COLUMN "id" SET DEFAULT nextval('jobs_type_id_seq');
ALTER SEQUENCE jobs_type_id_seq OWNED BY "Jobs_type"."id";
