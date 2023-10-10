-- AlterTable
ALTER TABLE "Matches" ALTER COLUMN "match_date" DROP NOT NULL,
ALTER COLUMN "match_time" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tournaments" ALTER COLUMN "start_date" DROP NOT NULL,
ALTER COLUMN "end_date" DROP NOT NULL;
