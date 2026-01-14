-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "Character" (
    "id" UUID NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "maxHp" INTEGER NOT NULL,
    "currentHp" INTEGER NOT NULL,
    "maxAbs" INTEGER NOT NULL,
    "currentAbs" INTEGER NOT NULL,
    "currentItem" UUID,
    "classId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "background" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassRpg" (
    "id" UUID NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ClassRpg_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_currentItem_key" ON "Character"("currentItem");

-- CreateIndex
CREATE UNIQUE INDEX "Character_classId_key" ON "Character"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_userId_key" ON "Character"("userId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_classId_fkey" FOREIGN KEY ("classId") REFERENCES "ClassRpg"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
