-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "match_date" DATE,
    "match_time" TIME,
    "team_one" TEXT NOT NULL,
    "team_two" TEXT NOT NULL,
    "match_position" TEXT NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
