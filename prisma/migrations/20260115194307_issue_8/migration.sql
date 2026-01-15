-- CreateTable
CREATE TABLE "Attributes" (
    "id" UUID NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterBaseAttributes" (
    "charId" UUID NOT NULL,
    "attrId" UUID NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "CharacterBaseAttributes_pkey" PRIMARY KEY ("charId","attrId")
);

-- CreateTable
CREATE TABLE "CharacterAttributes" (
    "charId" UUID NOT NULL,
    "attrId" UUID NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "CharacterAttributes_pkey" PRIMARY KEY ("charId","attrId")
);

-- AddForeignKey
ALTER TABLE "CharacterBaseAttributes" ADD CONSTRAINT "CharacterBaseAttributes_charId_fkey" FOREIGN KEY ("charId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterBaseAttributes" ADD CONSTRAINT "CharacterBaseAttributes_attrId_fkey" FOREIGN KEY ("attrId") REFERENCES "Attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAttributes" ADD CONSTRAINT "CharacterAttributes_charId_fkey" FOREIGN KEY ("charId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAttributes" ADD CONSTRAINT "CharacterAttributes_attrId_fkey" FOREIGN KEY ("attrId") REFERENCES "Attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
