import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3d4092f5-cbe9-4fc2-8300-057832f0f8d7', '9Orpha.Franey23@yahoo.com', 'Lisa Brown', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv012jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('908a89c6-572a-4fa4-8303-a995eea8a5e6', '17Michele_Grady69@gmail.com', 'Lisa Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('4a8b48a4-2e09-45a7-b495-776c2e5e7ef1', '25Dennis70@gmail.com', 'Lisa Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('4d8d9d57-0021-41ba-956d-f5f92e42a519', '33Demond_Roob@gmail.com', 'Michael Green', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('25e13e6a-93ab-4ce8-bfc2-17dcf8b26257', '41Etha_Hilpert51@gmail.com', 'Lisa Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0793ce27-389f-4b76-a564-faa4c438757d', '49Angelita_Goldner@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv456def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a0313927-e725-4dd1-9817-021ed0841fcd', '57Josiane.Tillman76@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('26b087bb-9bf2-4dd8-a6ad-5c409e83cd51', '65Murl42@yahoo.com', 'Lisa Brown', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('70511abc-75ae-43ff-b994-7767de14e95e', '73Earline31@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('df049d77-db9f-4135-893c-b3a0be277416', 'Renewable Dynamics Inc', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('00fa95eb-f365-4742-a404-f6c1da5a2551', 'EcoEnergy Solutions', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('74d0be71-8c6f-4c42-905d-f757cd817be9', 'EcoEnergy Solutions', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('35486f97-f0b5-4f3e-9d7b-38e4adc6d05b', 'GreenTech Innovations', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('1b19366f-d83c-436f-b528-b5ed1ee526fe', 'Clean Energy Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e6ae096b-ae55-434b-8866-525feccb5626', 'EcoEnergy Solutions', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a8616134-2e0f-4c32-8a1c-863801c11b27', 'Renewable Dynamics Inc', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('119bee69-77bb-46ea-8011-5f11bf43ed16', 'Sustainable Power Corp', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('52716cd8-da4d-4a55-b5a2-4e576f8550bc', 'Clean Energy Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a0a67dd8-a397-4f46-92aa-82732fa5f70a', 'GreenTech Innovations', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f040641e-d730-4fe5-8443-1457b5033236', 'ESG Compliance Specialist', '0793ce27-389f-4b76-a564-faa4c438757d', 'a8616134-2e0f-4c32-8a1c-863801c11b27');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8bdbd7af-ff05-44c4-8437-f3896376c06a', 'Chief Operations Officer', '26b087bb-9bf2-4dd8-a6ad-5c409e83cd51', 'a0a67dd8-a397-4f46-92aa-82732fa5f70a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('acc55b38-1500-4e98-82bc-e38fde83c341', 'Chief Operations Officer', '4d8d9d57-0021-41ba-956d-f5f92e42a519', '74d0be71-8c6f-4c42-905d-f757cd817be9');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('bbda1365-20b1-498e-a78f-927a176feade', 'Facilities Director', '4a8b48a4-2e09-45a7-b495-776c2e5e7ef1', '00fa95eb-f365-4742-a404-f6c1da5a2551');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c833df10-cb3e-44f7-b53d-842f3f14bfcd', 'Sustainability Officer', '25e13e6a-93ab-4ce8-bfc2-17dcf8b26257', '119bee69-77bb-46ea-8011-5f11bf43ed16');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f351d926-63bb-4256-9a0c-8e47a23d39a8', 'Chief Operations Officer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a0a67dd8-a397-4f46-92aa-82732fa5f70a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('6936f433-df1e-4581-b572-11d63b154e1d', 'Energy Manager', '4a8b48a4-2e09-45a7-b495-776c2e5e7ef1', 'df049d77-db9f-4135-893c-b3a0be277416');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('725c0a85-20a4-4edc-ac3d-293d6093cddf', 'Energy Manager', '26b087bb-9bf2-4dd8-a6ad-5c409e83cd51', 'df049d77-db9f-4135-893c-b3a0be277416');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('01bbcb5c-fad7-4eff-9343-6198acfa8192', 'Sustainability Officer', '908a89c6-572a-4fa4-8303-a995eea8a5e6', '74d0be71-8c6f-4c42-905d-f757cd817be9');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('1f71d912-8ff0-4763-a958-22a0d7df2a61', 'Sustainability Officer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '119bee69-77bb-46ea-8011-5f11bf43ed16');

INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('c3f3a3ae-0569-4825-9768-55f2c6e4cee4', 'CarbonNeutral Operations', '132 18 W 29th St, New York, NY 10001', '1b19366f-d83c-436f-b528-b5ed1ee526fe');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('e414e8a1-eef2-40cd-b35a-83a7624ecabc', 'Sustainable Energy Hub', '135 443 E 6th St, New York, NY 10009', '00fa95eb-f365-4742-a404-f6c1da5a2551');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('b45ed6f5-6756-4983-97f5-997d9fbf0ceb', 'EcoData Center', '138 430 Lafayette St, New York, NY 10003', '35486f97-f0b5-4f3e-9d7b-38e4adc6d05b');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('db03dd97-9512-42d7-a1de-3393bd695104', 'Sustainable Energy Hub', '141 18 Spring St, New York, NY 10012', '35486f97-f0b5-4f3e-9d7b-38e4adc6d05b');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('0177b68f-95b3-4209-9d0a-8c3e33ee9201', 'CarbonNeutral Operations', '144 430 Lafayette St, New York, NY 10003', '00fa95eb-f365-4742-a404-f6c1da5a2551');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('07fbabe2-9c45-477c-943f-a40f2e6940a6', 'Sustainable Energy Hub', '147 136 E 13th St, New York, NY 10003', '1b19366f-d83c-436f-b528-b5ed1ee526fe');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('425bdc90-17ef-4291-9a25-dfc833926594', 'GreenTech Manufacturing Plant', '150 430 Lafayette St, New York, NY 10003', '119bee69-77bb-46ea-8011-5f11bf43ed16');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('9fc94c31-d71a-417c-9e0a-e05aede2d1b0', 'EcoData Center', '153 42 E 20th St, New York, NY 10003', 'e6ae096b-ae55-434b-8866-525feccb5626');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('42f6e988-c7ca-4741-966b-66078e1b829f', 'Sustainable Energy Hub', '156 18 W 29th St, New York, NY 10001', '119bee69-77bb-46ea-8011-5f11bf43ed16');
INSERT INTO "Facility" ("id", "name", "address", "organizationId") VALUES ('7d55e811-f3bf-4da4-a716-51999ba24b62', 'GreenTech Manufacturing Plant', '159 430 Lafayette St, New York, NY 10003', '119bee69-77bb-46ea-8011-5f11bf43ed16');

INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('4c38ddf6-1eba-45c1-8f2e-266b9f6b1925', '2025-09-17T13:59:48.121Z', 57, 'kWh', '0177b68f-95b3-4209-9d0a-8c3e33ee9201');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('4ab7d1dd-8fd5-44f4-b9c2-63c8eaf01c02', '2024-11-20T01:21:19.453Z', 967, 'MWh', 'e414e8a1-eef2-40cd-b35a-83a7624ecabc');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('58ba70d4-099f-46e0-a1e0-fbd45b926429', '2025-05-09T21:01:41.325Z', 782, 'kWh', '7d55e811-f3bf-4da4-a716-51999ba24b62');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('52370db5-76e2-4122-9d0a-6fd377edc3ae', '2024-05-13T19:53:38.453Z', 525, 'kWh', 'c3f3a3ae-0569-4825-9768-55f2c6e4cee4');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('f4f4609e-aa59-4cc6-911d-91a3dbcdf092', '2025-09-03T09:51:24.790Z', 783, 'kWh', 'b45ed6f5-6756-4983-97f5-997d9fbf0ceb');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('e7b0f1ee-9bc6-4f7b-a385-967f4f881909', '2024-04-27T01:51:30.356Z', 942, 'MWh', '425bdc90-17ef-4291-9a25-dfc833926594');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('ca047208-379e-4462-a160-bd899bb82061', '2025-01-16T04:54:48.864Z', 379, 'MWh', 'e414e8a1-eef2-40cd-b35a-83a7624ecabc');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('3b78dfe0-42de-48ff-808f-9a072aa60083', '2025-05-05T00:09:19.642Z', 613, 'kWh', '425bdc90-17ef-4291-9a25-dfc833926594');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('6d2d96d1-e5b2-4c37-8fd3-84155ff0d4df', '2025-09-11T05:08:48.590Z', 127, 'MWh', '07fbabe2-9c45-477c-943f-a40f2e6940a6');
INSERT INTO "EnergyConsumption" ("id", "date", "amount", "unit", "facilityId") VALUES ('3e51dc82-d2ac-4b9d-933e-236b7e7ada2d', '2025-01-05T23:24:52.717Z', 439, 'kWh', '0177b68f-95b3-4209-9d0a-8c3e33ee9201');

INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('a5970456-4e09-4705-aa48-1ca6b5a1e2bf', '2024-11-02T10:28:21.686Z', 993, 'AUD', 'db03dd97-9512-42d7-a1de-3393bd695104');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('0841e7ed-e451-4abc-be24-2801011e96a5', '2025-01-28T23:55:49.480Z', 674, 'USD', '425bdc90-17ef-4291-9a25-dfc833926594');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('2107023a-d3fb-4139-b127-6af8b34db521', '2024-01-26T14:03:32.132Z', 709, 'AUD', 'db03dd97-9512-42d7-a1de-3393bd695104');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('7ab22dbd-e2fe-4016-a2dc-4bd0e3d8b13d', '2024-10-03T11:06:42.243Z', 987, 'JPY', 'c3f3a3ae-0569-4825-9768-55f2c6e4cee4');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('781d9d00-7d91-45c3-b401-38b8cebbd2bf', '2025-05-16T14:33:27.743Z', 564, 'AUD', '42f6e988-c7ca-4741-966b-66078e1b829f');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('bb0e0349-ea7a-4553-bc3e-966769c1a2e6', '2025-05-31T09:53:36.150Z', 825, 'EUR', '9fc94c31-d71a-417c-9e0a-e05aede2d1b0');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('77216ac2-9a8e-43ef-a130-703de463d79b', '2025-07-20T23:37:17.687Z', 301, 'AUD', '42f6e988-c7ca-4741-966b-66078e1b829f');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('52a9b3b1-0c65-4fb6-a7eb-f2b2909b980b', '2025-02-23T09:06:45.113Z', 386, 'JPY', 'e414e8a1-eef2-40cd-b35a-83a7624ecabc');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('6102aa24-a20b-48c1-a817-7147d393636e', '2025-02-19T01:39:30.928Z', 550, 'JPY', 'c3f3a3ae-0569-4825-9768-55f2c6e4cee4');
INSERT INTO "EnergyCost" ("id", "date", "amount", "currency", "facilityId") VALUES ('918b5e4e-d459-4e0f-a2e5-ba9b4f508bbd', '2024-01-08T05:19:25.078Z', 27, 'AUD', '42f6e988-c7ca-4741-966b-66078e1b829f');

INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('5eebfb21-a7e7-4306-a83b-ac4d59fc1006', '2024-01-31T08:40:25.617Z', 'Achieve 50 renewable energy usage by 2030', 841, '', '1b19366f-d83c-436f-b528-b5ed1ee526fe');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('5d435cb9-c235-4151-84ae-686f97d6f837', '2024-11-05T10:44:02.714Z', 'Decrease energy consumption by 15 annually', 730, '', 'a8616134-2e0f-4c32-8a1c-863801c11b27');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('41df7f91-be61-407b-87b3-2c7212d1886b', '2024-09-30T16:23:50.360Z', 'Decrease energy consumption by 15 annually', 996, '', '119bee69-77bb-46ea-8011-5f11bf43ed16');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('58712362-e787-4736-8489-401fda29cf5d', '2024-05-20T05:56:46.402Z', 'Achieve 50 renewable energy usage by 2030', 667, '', 'a8616134-2e0f-4c32-8a1c-863801c11b27');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('2aef3aba-d5b8-4e59-abd2-608213256a93', '2024-08-29T12:14:01.342Z', 'Decrease energy consumption by 15 annually', 886, '', 'a8616134-2e0f-4c32-8a1c-863801c11b27');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('a3195729-5989-4884-b253-a67335d61555', '2024-07-30T17:11:10.873Z', 'Implement zero waste policy by 2027', 239, '', 'df049d77-db9f-4135-893c-b3a0be277416');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('0d2f0f88-ff22-486e-878d-3779a74bac09', '2023-12-29T05:08:40.233Z', 'Implement zero waste policy by 2027', 440, '', '119bee69-77bb-46ea-8011-5f11bf43ed16');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('b0568056-f445-4226-aaec-e202128b6747', '2025-05-02T09:40:56.160Z', 'Increase energy efficiency by 10 within two years', 809, '', '1b19366f-d83c-436f-b528-b5ed1ee526fe');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('c4972412-8e68-4b12-8695-44b28984b20a', '2024-06-11T21:15:18.379Z', 'Achieve 50 renewable energy usage by 2030', 748, '', 'e6ae096b-ae55-434b-8866-525feccb5626');
INSERT INTO "SustainabilityGoal" ("id", "targetDate", "description", "targetValue", "unit", "organizationId") VALUES ('1e5a42d6-ecfd-4ec1-ab04-b4b606156c69', '2024-11-09T10:58:56.621Z', 'Achieve 50 renewable energy usage by 2030', 637, '', 'df049d77-db9f-4135-893c-b3a0be277416');

INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('0751b33e-fe5c-46db-b6e2-cad7f9f67714', 'Natural Gas', 680, 'MWh', '2023-12-24T22:29:18.336Z', 'https://i.imgur.com/YfJQV5z.png?id=295', '1b19366f-d83c-436f-b528-b5ed1ee526fe');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('6fb93d55-7f6b-49ab-bb75-8cd1ea26b661', 'Geothermal', 1, 'MWh', '2025-10-25T03:09:55.056Z', 'https://i.imgur.com/YfJQV5z.png?id=301', 'e6ae096b-ae55-434b-8866-525feccb5626');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('48fd57fe-f1a7-4af0-aabb-dc6a12b75dca', 'Wind', 0, 'MWh', '2025-05-26T22:50:48.746Z', 'https://i.imgur.com/YfJQV5z.png?id=307', 'df049d77-db9f-4135-893c-b3a0be277416');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('1333fd48-6625-4a4d-9c22-83c8e5de736e', 'Wind', 950, 'MWh', '2024-07-11T12:02:14.849Z', 'https://i.imgur.com/YfJQV5z.png?id=313', '35486f97-f0b5-4f3e-9d7b-38e4adc6d05b');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('9ebb2c6f-fef6-4174-a580-ae99165f2f7f', 'Wind', 255, 'MWh', '2024-05-07T20:55:12.418Z', 'https://i.imgur.com/YfJQV5z.png?id=319', 'df049d77-db9f-4135-893c-b3a0be277416');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('74b6a4b9-ac0a-4241-9d1e-0d3fd9136a54', 'Hydroelectric', 337, 'kWh', '2024-10-27T12:15:47.960Z', 'https://i.imgur.com/YfJQV5z.png?id=325', '35486f97-f0b5-4f3e-9d7b-38e4adc6d05b');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('f5d89553-63d0-424a-86bb-a47ebe39c069', 'Wind', 25, 'MWh', '2024-12-28T23:12:21.515Z', 'https://i.imgur.com/YfJQV5z.png?id=331', '52716cd8-da4d-4a55-b5a2-4e576f8550bc');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('acd43c7e-0251-4bb5-a822-23ec9905746b', 'Solar', 205, 'kWh', '2024-03-27T09:46:10.163Z', 'https://i.imgur.com/YfJQV5z.png?id=337', 'a0a67dd8-a397-4f46-92aa-82732fa5f70a');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('6622d2c1-6235-4fd0-bae9-47d66e5e59db', 'Geothermal', 652, 'MWh', '2025-09-14T19:52:07.002Z', 'https://i.imgur.com/YfJQV5z.png?id=343', 'a0a67dd8-a397-4f46-92aa-82732fa5f70a');
INSERT INTO "EnergyProcurement" ("id", "sourceType", "amount", "unit", "date", "contractUrl", "organizationId") VALUES ('d04a8212-3215-4439-acc4-2cb31f79d510', 'Geothermal', 487, 'kWh', '2025-10-18T06:30:24.997Z', 'https://i.imgur.com/YfJQV5z.png?id=349', 'e6ae096b-ae55-434b-8866-525feccb5626');

INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('2ed84a5b-a38a-49a2-8c23-98cdf4aed865', 'Energy Cost Spike', 'Carbon emissions have exceeded the allowable threshold.', 'a0313927-e725-4dd1-9817-021ed0841fcd', '9fc94c31-d71a-417c-9e0a-e05aede2d1b0');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('cb6e32e9-c3b3-414f-ae90-564b86a117e9', 'High Carbon Emissions Detected', 'Energy costs have increased by 15 this month.', '4d8d9d57-0021-41ba-956d-f5f92e42a519', '9fc94c31-d71a-417c-9e0a-e05aede2d1b0');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('30839b94-55cf-47f6-869a-e40680cea192', 'Energy Cost Spike', 'Carbon emissions have exceeded the allowable threshold.', '25e13e6a-93ab-4ce8-bfc2-17dcf8b26257', '42f6e988-c7ca-4741-966b-66078e1b829f');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('88728b78-c128-4ea7-b29c-0f29a1481236', 'High Carbon Emissions Detected', 'There is a disruption in the energy supply chain.', '4d8d9d57-0021-41ba-956d-f5f92e42a519', '0177b68f-95b3-4209-9d0a-8c3e33ee9201');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('7fa2bae7-8d4c-4ba4-ad9c-240f754fc555', 'Energy Supply Disruption', 'Predictive maintenance is required for the main generator.', '4d8d9d57-0021-41ba-956d-f5f92e42a519', 'b45ed6f5-6756-4983-97f5-997d9fbf0ceb');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('848598d3-72b5-4701-ba44-7d6a185affa0', 'Predictive Maintenance Required', 'Predictive maintenance is required for the main generator.', '4d8d9d57-0021-41ba-956d-f5f92e42a519', '425bdc90-17ef-4291-9a25-dfc833926594');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('3d028bf2-09b0-43ae-a47b-00603e6e9e99', 'Energy Cost Spike', 'Carbon emissions have exceeded the allowable threshold.', '908a89c6-572a-4fa4-8303-a995eea8a5e6', '0177b68f-95b3-4209-9d0a-8c3e33ee9201');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('3ead26e0-b78e-459b-9aaa-59a0de43aee2', 'Predictive Maintenance Required', 'Current sustainability targets are not being met.', '26b087bb-9bf2-4dd8-a6ad-5c409e83cd51', '9fc94c31-d71a-417c-9e0a-e05aede2d1b0');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('112673a8-51c0-497f-a336-f5d9b0c0ba16', 'Energy Supply Disruption', 'Current sustainability targets are not being met.', '25e13e6a-93ab-4ce8-bfc2-17dcf8b26257', 'b45ed6f5-6756-4983-97f5-997d9fbf0ceb');
INSERT INTO "Alert" ("id", "type", "message", "userId", "facilityId") VALUES ('a46c63c5-1c3b-4b28-b0ea-e455a469093f', 'Predictive Maintenance Required', 'Energy costs have increased by 15 this month.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e414e8a1-eef2-40cd-b35a-83a7624ecabc');

INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('c2a9e3d2-912d-418c-bc6d-9bbae07dcaa4', 'Annual Sustainability Performance Review', '2024-05-31T01:56:31.409Z', 'https://i.imgur.com/YfJQV5z.png?id=383', '3d4092f5-cbe9-4fc2-8300-057832f0f8d7', '1b19366f-d83c-436f-b528-b5ed1ee526fe');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('7ea8201b-bd3b-4c44-b979-e25cda70f7bf', 'Renewable Energy Integration Report', '2025-04-12T12:20:47.364Z', 'https://i.imgur.com/YfJQV5z.png?id=387', '908a89c6-572a-4fa4-8303-a995eea8a5e6', 'e6ae096b-ae55-434b-8866-525feccb5626');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('b17253a6-9218-4468-8ab4-59f1e2b5f5de', 'Monthly Energy Savings Report', '2024-06-21T09:21:02.394Z', 'https://i.imgur.com/YfJQV5z.png?id=391', '25e13e6a-93ab-4ce8-bfc2-17dcf8b26257', '35486f97-f0b5-4f3e-9d7b-38e4adc6d05b');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('e94df2f6-4458-4628-a791-3baf6b10334f', 'Annual Sustainability Performance Review', '2025-08-24T11:32:19.317Z', 'https://i.imgur.com/YfJQV5z.png?id=395', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'df049d77-db9f-4135-893c-b3a0be277416');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('44837f0e-0775-41b9-b69d-53e985cb8569', 'Annual Sustainability Performance Review', '2024-10-13T11:59:21.400Z', 'https://i.imgur.com/YfJQV5z.png?id=399', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '00fa95eb-f365-4742-a404-f6c1da5a2551');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('0532457b-4348-4072-ac92-4f868ae070e8', 'Monthly Energy Savings Report', '2025-06-24T05:28:31.048Z', 'https://i.imgur.com/YfJQV5z.png?id=403', '908a89c6-572a-4fa4-8303-a995eea8a5e6', '35486f97-f0b5-4f3e-9d7b-38e4adc6d05b');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('8393b170-b10b-496f-8cb2-7815ebae1d03', 'Energy Cost Optimization Analysis', '2025-05-08T10:55:12.986Z', 'https://i.imgur.com/YfJQV5z.png?id=407', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1b19366f-d83c-436f-b528-b5ed1ee526fe');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('81c21a91-ec51-475b-9376-aaea95b1d058', 'Quarterly Carbon Emissions Summary', '2023-12-16T04:35:43.298Z', 'https://i.imgur.com/YfJQV5z.png?id=411', '4a8b48a4-2e09-45a7-b495-776c2e5e7ef1', '35486f97-f0b5-4f3e-9d7b-38e4adc6d05b');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('e7354ac7-a59d-406f-9f3d-6da44cdd4deb', 'Annual Sustainability Performance Review', '2024-05-12T15:59:57.831Z', 'https://i.imgur.com/YfJQV5z.png?id=415', '0793ce27-389f-4b76-a564-faa4c438757d', '74d0be71-8c6f-4c42-905d-f757cd817be9');
INSERT INTO "Report" ("id", "type", "generatedAt", "reportUrl", "userId", "organizationId") VALUES ('ab5fb1a7-d087-401d-a4cb-4e2d291daa49', 'Annual Sustainability Performance Review', '2025-05-07T03:18:25.781Z', 'https://i.imgur.com/YfJQV5z.png?id=419', '3d4092f5-cbe9-4fc2-8300-057832f0f8d7', 'a0a67dd8-a397-4f46-92aa-82732fa5f70a');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
