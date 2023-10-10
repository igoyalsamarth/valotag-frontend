/*
  Warnings:

  - You are about to drop the `Matches` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_tournament_id_fkey";

-- DropTable
DROP TABLE "Matches";
