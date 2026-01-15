/*
  Warnings:

  - You are about to drop the column `classId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `currentAbs` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `currentHp` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `currentItem` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `maxAbs` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `maxHp` on the `Character` table. All the data in the column will be lost.
  - Added the required column `xp` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_classId_fkey";

-- DropIndex
DROP INDEX "Character_classId_key";

-- DropIndex
DROP INDEX "Character_currentItem_key";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "classId",
DROP COLUMN "currentAbs",
DROP COLUMN "currentHp",
DROP COLUMN "currentItem",
DROP COLUMN "maxAbs",
DROP COLUMN "maxHp",
ADD COLUMN     "xp" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Campaign" (
    "id" UUID NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "master" VARCHAR(255) NOT NULL,
    "background" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignCharacter" (
    "charId" UUID NOT NULL,
    "campaignId" UUID NOT NULL,
    "finalDesc" TEXT NOT NULL,

    CONSTRAINT "CampaignCharacter_pkey" PRIMARY KEY ("charId","campaignId")
);

-- AddForeignKey
ALTER TABLE "CampaignCharacter" ADD CONSTRAINT "CampaignCharacter_charId_fkey" FOREIGN KEY ("charId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignCharacter" ADD CONSTRAINT "CampaignCharacter_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
