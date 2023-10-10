-- CreateTable
CREATE TABLE "Tournaments" (
    "id" SERIAL NOT NULL,
    "tournament_organiser" TEXT NOT NULL,
    "prizepool" INTEGER NOT NULL,
    "tournament_type" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tournaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "match_date" DATE NOT NULL,
    "match_time" TIME NOT NULL,
    "team_one" TEXT NOT NULL,
    "team_two" TEXT NOT NULL,
    "match_position" TEXT NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
