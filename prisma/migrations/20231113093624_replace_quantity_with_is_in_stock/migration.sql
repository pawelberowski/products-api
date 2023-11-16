
-- AlterTable
ALTER TABLE "Product" RENAME CONSTRAINT "Products_pkey" TO "Product_pkey";
ALTER TABLE "Product" ALTER "quantity" TYPE bool USING CASE WHEN "quantity"=0 THEN FALSE ELSE TRUE END;
ALTER TABLE "Product" RENAME COLUMN "quantity" TO "isInStock";
