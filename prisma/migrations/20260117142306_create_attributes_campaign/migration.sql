-- CreateTable
CREATE TABLE "AttributesCampaign" (
    "attrId" UUID NOT NULL,
    "campaignId" UUID NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttributesCampaign_pkey" PRIMARY KEY ("attrId","campaignId")
);

-- AddForeignKey
ALTER TABLE "AttributesCampaign" ADD CONSTRAINT "AttributesCampaign_attrId_fkey" FOREIGN KEY ("attrId") REFERENCES "Attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttributesCampaign" ADD CONSTRAINT "AttributesCampaign_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
