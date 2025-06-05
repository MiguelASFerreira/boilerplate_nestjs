-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_businessId_fkey";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "business"("id") ON DELETE CASCADE ON UPDATE CASCADE;
