CREATE DATABASE  IF NOT EXISTS `savethedate` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `savethedate`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: savethedate
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_appointment`
--

DROP TABLE IF EXISTS `api_appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_appointment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `Category` varchar(255) NOT NULL,
  `ScheduledAt` datetime(6) NOT NULL,
  `customer_id` bigint NOT NULL,
  `status` varchar(255) NOT NULL,
  `serviceProvider_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_appointment_customer_id_ad345017_fk_api_customer_id` (`customer_id`),
  KEY `api_appointment_serviceProvider_id_04bdc3d0_fk_api_servi` (`serviceProvider_id`),
  CONSTRAINT `api_appointment_customer_id_ad345017_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`),
  CONSTRAINT `api_appointment_serviceProvider_id_04bdc3d0_fk_api_servi` FOREIGN KEY (`serviceProvider_id`) REFERENCES `api_serviceprovider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_appointment`
--

LOCK TABLES `api_appointment` WRITE;
/*!40000 ALTER TABLE `api_appointment` DISABLE KEYS */;
INSERT INTO `api_appointment` VALUES (1,'','2023-05-05 16:00:00.000000',1,'accepted',1);
/*!40000 ALTER TABLE `api_appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_catering`
--

DROP TABLE IF EXISTS `api_catering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_catering` (
  `serviceprovider_ptr_id` bigint NOT NULL,
  `capacity` int NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`serviceprovider_ptr_id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `api_catering_serviceprovider_ptr__bd5b83e0_fk_api_servi` FOREIGN KEY (`serviceprovider_ptr_id`) REFERENCES `api_serviceprovider` (`id`),
  CONSTRAINT `api_catering_user_id_6a4f62f1_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_catering`
--

LOCK TABLES `api_catering` WRITE;
/*!40000 ALTER TABLE `api_catering` DISABLE KEYS */;
INSERT INTO `api_catering` VALUES (4,1500,5),(5,2000,6),(6,1000,7),(20,1000,21),(21,10000,22);
/*!40000 ALTER TABLE `api_catering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_contentmaker`
--

DROP TABLE IF EXISTS `api_contentmaker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_contentmaker` (
  `serviceprovider_ptr_id` bigint NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`serviceprovider_ptr_id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `api_contentmaker_serviceprovider_ptr__8c6731da_fk_api_servi` FOREIGN KEY (`serviceprovider_ptr_id`) REFERENCES `api_serviceprovider` (`id`),
  CONSTRAINT `api_contentmaker_user_id_81e22048_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_contentmaker`
--

LOCK TABLES `api_contentmaker` WRITE;
/*!40000 ALTER TABLE `api_contentmaker` DISABLE KEYS */;
INSERT INTO `api_contentmaker` VALUES (10,30000.00,11),(11,50000.00,12),(12,20000.00,13),(24,40000.00,25),(25,10000.00,26);
/*!40000 ALTER TABLE `api_contentmaker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_contentmakerslot`
--

DROP TABLE IF EXISTS `api_contentmakerslot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_contentmakerslot` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `startTime` datetime(6) NOT NULL,
  `endTime` datetime(6) NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `contentmaker_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_contentmakerslot_contentmaker_id_0034a66e_fk_api_conte` (`contentmaker_id`),
  CONSTRAINT `api_contentmakerslot_contentmaker_id_0034a66e_fk_api_conte` FOREIGN KEY (`contentmaker_id`) REFERENCES `api_contentmaker` (`serviceprovider_ptr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_contentmakerslot`
--

LOCK TABLES `api_contentmakerslot` WRITE;
/*!40000 ALTER TABLE `api_contentmakerslot` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_contentmakerslot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_customer`
--

DROP TABLE IF EXISTS `api_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_customer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `birthDate` date DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `api_customer_user_id_905bea02_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_customer`
--

LOCK TABLES `api_customer` WRITE;
/*!40000 ALTER TABLE `api_customer` DISABLE KEYS */;
INSERT INTO `api_customer` VALUES (1,'1999-08-05','Male',1);
/*!40000 ALTER TABLE `api_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_decorator`
--

DROP TABLE IF EXISTS `api_decorator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_decorator` (
  `serviceprovider_ptr_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `price` decimal(11,2) NOT NULL,
  PRIMARY KEY (`serviceprovider_ptr_id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `api_decorator_serviceprovider_ptr__c22e6592_fk_api_servi` FOREIGN KEY (`serviceprovider_ptr_id`) REFERENCES `api_serviceprovider` (`id`),
  CONSTRAINT `api_decorator_user_id_0f0aa76e_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_decorator`
--

LOCK TABLES `api_decorator` WRITE;
/*!40000 ALTER TABLE `api_decorator` DISABLE KEYS */;
INSERT INTO `api_decorator` VALUES (7,8,50000.00),(8,9,100000.00),(9,10,150000.00),(22,23,60000.00),(23,24,40000.00);
/*!40000 ALTER TABLE `api_decorator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_entertainer`
--

DROP TABLE IF EXISTS `api_entertainer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_entertainer` (
  `serviceprovider_ptr_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`serviceprovider_ptr_id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `api_entertainer_serviceprovider_ptr__f19e118d_fk_api_servi` FOREIGN KEY (`serviceprovider_ptr_id`) REFERENCES `api_serviceprovider` (`id`),
  CONSTRAINT `api_entertainer_user_id_89477fc5_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_entertainer`
--

LOCK TABLES `api_entertainer` WRITE;
/*!40000 ALTER TABLE `api_entertainer` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_entertainer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_foodcartitem`
--

DROP TABLE IF EXISTS `api_foodcartitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_foodcartitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` smallint unsigned NOT NULL,
  `fooditem_id` bigint NOT NULL,
  `party_id` bigint NOT NULL,
  `catering_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_foodcartitem_fooditem_id_75ab11f0_fk_api_fooditem_id` (`fooditem_id`),
  KEY `api_foodcartitem_party_id_0bc5b89c_fk_api_party_id` (`party_id`),
  KEY `api_foodcartitem_catering_id_0811c5df_fk_api_cater` (`catering_id`),
  CONSTRAINT `api_foodcartitem_catering_id_0811c5df_fk_api_cater` FOREIGN KEY (`catering_id`) REFERENCES `api_catering` (`serviceprovider_ptr_id`),
  CONSTRAINT `api_foodcartitem_fooditem_id_75ab11f0_fk_api_fooditem_id` FOREIGN KEY (`fooditem_id`) REFERENCES `api_fooditem` (`id`),
  CONSTRAINT `api_foodcartitem_party_id_0bc5b89c_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`),
  CONSTRAINT `api_foodcartitem_chk_1` CHECK ((`quantity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_foodcartitem`
--

LOCK TABLES `api_foodcartitem` WRITE;
/*!40000 ALTER TABLE `api_foodcartitem` DISABLE KEYS */;
INSERT INTO `api_foodcartitem` VALUES (2,500,1,1,4),(3,800,3,2,6),(4,300,2,3,5),(5,1200,2,4,5),(6,100,3,5,6),(7,1000,1,11,4),(8,1000,1,12,4),(9,1000,2,13,5),(10,1000,2,14,5),(11,1000,2,15,5),(12,1000,2,16,5),(13,1000,2,17,5),(14,1000,2,18,5),(15,500,4,19,20),(16,500,4,20,20),(17,600,4,21,20),(18,300,4,22,20),(19,500,4,23,20),(20,500,4,24,20),(21,500,4,25,20),(22,500,4,26,20),(23,500,4,27,20),(24,500,4,28,20),(25,500,4,29,20),(26,500,4,30,20),(27,500,4,31,20),(28,500,5,32,21),(29,500,5,33,21),(30,500,5,34,21),(31,500,5,35,21),(32,500,5,36,21),(33,200,5,37,21),(34,200,5,38,21),(35,200,5,39,21),(36,200,5,40,21),(37,200,5,41,21),(38,200,5,42,21),(39,200,5,43,21),(40,200,5,44,21),(41,200,5,45,21),(42,200,5,46,21),(43,200,5,47,21),(44,200,5,48,21),(45,200,5,49,21),(46,1000,5,50,21),(47,1000,5,51,21),(48,1000,5,52,21),(49,1000,5,53,21),(50,1000,5,54,21),(51,1000,5,55,21),(52,1000,5,56,21),(53,1000,5,57,21),(54,1000,5,58,21),(55,1000,5,59,21),(56,1000,3,60,6),(57,1000,3,61,6),(58,1000,3,62,6),(59,300,3,63,6),(60,300,3,64,6),(61,300,3,65,6),(62,300,3,66,6),(63,300,1,67,4),(64,300,1,68,4),(65,300,1,69,4),(66,300,1,70,4),(67,1000,1,71,4),(68,1000,1,72,4),(69,1000,1,73,4),(70,1000,1,74,4),(71,1000,1,75,4);
/*!40000 ALTER TABLE `api_foodcartitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_foodimage`
--

DROP TABLE IF EXISTS `api_foodimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_foodimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `fooditem_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_foodimage_fooditem_id_3a7ad16d_fk_api_fooditem_id` (`fooditem_id`),
  CONSTRAINT `api_foodimage_fooditem_id_3a7ad16d_fk_api_fooditem_id` FOREIGN KEY (`fooditem_id`) REFERENCES `api_fooditem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_foodimage`
--

LOCK TABLES `api_foodimage` WRITE;
/*!40000 ALTER TABLE `api_foodimage` DISABLE KEYS */;
INSERT INTO `api_foodimage` VALUES (1,'api/foodimage/1200px-Lasagne_-_stonesoup_QHdCZZm.jpg',1),(2,'api/foodimage/bir1_0TAw1AT.jpg',2),(3,'api/foodimage/kala-bhuna_99mLOcC.jpg',3),(4,'api/foodimage/bir1_7qMFcUG.jpg',4),(5,'api/foodimage/4.jpeg',5);
/*!40000 ALTER TABLE `api_foodimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_fooditem`
--

DROP TABLE IF EXISTS `api_fooditem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_fooditem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `unitPrice` decimal(11,2) NOT NULL,
  `catering_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_fooditem_catering_id_eebad295_fk_api_cater` (`catering_id`),
  CONSTRAINT `api_fooditem_catering_id_eebad295_fk_api_cater` FOREIGN KEY (`catering_id`) REFERENCES `api_catering` (`serviceprovider_ptr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_fooditem`
--

LOCK TABLES `api_fooditem` WRITE;
/*!40000 ALTER TABLE `api_fooditem` DISABLE KEYS */;
INSERT INTO `api_fooditem` VALUES (1,'Lasagna Package','Fried Rice, Chilli Chicken, Prawn, Beef Sizzling',1200.00,4),(2,'Biriyani','Mutton kacchi biriyani',800.00,5),(3,'Kala Bhuna','Beef Kala Bhuna with white pulao',600.00,6),(4,'Biriyani Package','Biriyani',1000.00,20),(5,'Biriyani Package','abc',750.00,21);
/*!40000 ALTER TABLE `api_fooditem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_notification`
--

DROP TABLE IF EXISTS `api_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_notification` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `notifiedAt` datetime(6) NOT NULL,
  `mobileNumber` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_notification`
--

LOCK TABLES `api_notification` WRITE;
/*!40000 ALTER TABLE `api_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_party`
--

DROP TABLE IF EXISTS `api_party`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_party` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `totalCost` decimal(11,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `customer_id` bigint NOT NULL,
  `guestCount` int NOT NULL,
  `locationLatitude` decimal(5,2) NOT NULL,
  `locationLongitude` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_party_customer_id_86d7bfe2_fk_api_customer_id` (`customer_id`),
  CONSTRAINT `api_party_customer_id_86d7bfe2_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_party`
--

LOCK TABLES `api_party` WRITE;
/*!40000 ALTER TABLE `api_party` DISABLE KEYS */;
INSERT INTO `api_party` VALUES (1,900000.00,'unconfirmed',1,500,23.81,90.41),(2,625000.00,'unconfirmed',1,800,23.81,90.41),(3,440000.00,'unconfirmed',1,300,23.81,90.41),(4,1155000.00,'unconfirmed',1,1200,23.81,90.41),(5,210000.00,'unconfirmed',1,0,23.81,90.41),(11,1395000.00,'unconfirmed',1,1000,23.81,90.41),(12,1400000.00,'unconfirmed',1,1000,23.81,90.41),(13,1020000.00,'unconfirmed',1,250,23.81,90.41),(14,1020000.00,'unconfirmed',1,250,23.81,90.41),(15,1000000.00,'unconfirmed',1,350,23.81,90.41),(16,1020000.00,'unconfirmed',1,550,23.81,90.41),(17,1050000.00,'unconfirmed',1,320,23.81,90.41),(18,1020000.00,'unconfirmed',1,250,23.89,91.89),(19,700000.00,'unconfirmed',1,500,23.89,91.89),(20,700000.00,'unconfirmed',1,500,23.89,91.89),(21,800000.00,'unconfirmed',1,600,23.89,91.89),(22,500000.00,'unconfirmed',1,300,23.89,91.89),(23,700000.00,'unconfirmed',1,500,23.89,91.89),(24,680000.00,'unconfirmed',1,500,23.89,91.89),(25,680000.00,'unconfirmed',1,500,23.89,91.89),(26,680000.00,'unconfirmed',1,500,23.89,91.89),(27,680000.00,'unconfirmed',1,500,23.89,91.89),(28,680000.00,'unconfirmed',1,500,23.89,91.89),(29,680000.00,'unconfirmed',1,500,23.89,91.89),(30,680000.00,'unconfirmed',1,500,23.89,91.89),(31,680000.00,'unconfirmed',1,500,23.89,91.89),(32,525000.00,'unconfirmed',1,500,24.37,88.60),(33,525000.00,'unconfirmed',1,500,24.37,88.60),(34,525000.00,'unconfirmed',1,500,24.37,88.60),(35,525000.00,'unconfirmed',1,500,24.37,88.60),(36,525000.00,'unconfirmed',1,500,24.37,88.60),(37,300000.00,'unconfirmed',1,200,24.37,88.60),(38,300000.00,'unconfirmed',1,200,24.37,88.60),(39,300000.00,'unconfirmed',1,200,24.37,88.60),(40,300000.00,'unconfirmed',1,200,24.37,88.60),(41,300000.00,'unconfirmed',1,200,24.37,88.60),(42,300000.00,'unconfirmed',1,200,24.37,88.60),(43,300000.00,'unconfirmed',1,200,24.37,88.60),(44,300000.00,'unconfirmed',1,200,24.37,88.60),(45,300000.00,'unconfirmed',1,200,24.37,88.60),(46,300000.00,'unconfirmed',1,200,24.37,88.60),(47,300000.00,'unconfirmed',1,200,24.37,88.60),(48,300000.00,'unconfirmed',1,200,24.37,88.60),(49,300000.00,'unconfirmed',1,200,24.37,88.60),(50,900000.00,'unconfirmed',1,1000,24.37,88.60),(51,900000.00,'unconfirmed',1,1000,24.37,88.60),(52,900000.00,'unconfirmed',1,1000,24.37,88.60),(53,900000.00,'unconfirmed',1,1000,24.37,88.60),(54,900000.00,'unconfirmed',1,1000,24.37,88.60),(55,900000.00,'unconfirmed',1,1000,24.37,88.60),(56,900000.00,'unconfirmed',1,1000,24.37,88.60),(57,900000.00,'unconfirmed',1,1000,24.37,88.60),(58,900000.00,'unconfirmed',1,1000,24.37,88.60),(59,900000.00,'unconfirmed',1,1000,24.37,88.60),(60,830000.00,'unconfirmed',1,1000,24.37,88.60),(61,830000.00,'unconfirmed',1,1000,24.37,88.60),(62,830000.00,'unconfirmed',1,1000,24.37,88.60),(63,410000.00,'unconfirmed',1,300,24.37,88.60),(64,410000.00,'unconfirmed',1,300,24.37,88.60),(65,410000.00,'unconfirmed',1,300,24.37,88.60),(66,410000.00,'unconfirmed',1,300,24.37,88.60),(67,660000.00,'unconfirmed',1,300,24.37,88.60),(68,660000.00,'unconfirmed',1,300,24.37,88.60),(69,660000.00,'unconfirmed',1,300,24.37,88.60),(70,660000.00,'unconfirmed',1,300,24.37,88.60),(71,1500000.00,'unconfirmed',1,1000,24.37,88.60),(72,1500000.00,'unconfirmed',1,1000,24.37,88.60),(73,1500000.00,'unconfirmed',1,1000,24.37,88.60),(74,1500000.00,'unconfirmed',1,1000,24.37,88.60),(75,1500000.00,'unconfirmed',1,1000,24.37,88.60);
/*!40000 ALTER TABLE `api_party` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_party_catering`
--

DROP TABLE IF EXISTS `api_party_catering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_party_catering` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `party_id` bigint NOT NULL,
  `catering_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_party_catering_party_id_catering_id_cfe57b14_uniq` (`party_id`,`catering_id`),
  KEY `api_party_catering_catering_id_56bdbd77_fk_api_cater` (`catering_id`),
  CONSTRAINT `api_party_catering_catering_id_56bdbd77_fk_api_cater` FOREIGN KEY (`catering_id`) REFERENCES `api_catering` (`serviceprovider_ptr_id`),
  CONSTRAINT `api_party_catering_party_id_e7a3d4fc_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_party_catering`
--

LOCK TABLES `api_party_catering` WRITE;
/*!40000 ALTER TABLE `api_party_catering` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_party_catering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_partycontentmaker`
--

DROP TABLE IF EXISTS `api_partycontentmaker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_partycontentmaker` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `contentmaker_id` bigint NOT NULL,
  `party_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_partycontentmake_contentmaker_id_716b91d1_fk_api_conte` (`contentmaker_id`),
  KEY `api_partycontentmaker_party_id_0cc1aff3_fk_api_party_id` (`party_id`),
  CONSTRAINT `api_partycontentmake_contentmaker_id_716b91d1_fk_api_conte` FOREIGN KEY (`contentmaker_id`) REFERENCES `api_contentmaker` (`serviceprovider_ptr_id`),
  CONSTRAINT `api_partycontentmaker_party_id_0cc1aff3_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_partycontentmaker`
--

LOCK TABLES `api_partycontentmaker` WRITE;
/*!40000 ALTER TABLE `api_partycontentmaker` DISABLE KEYS */;
INSERT INTO `api_partycontentmaker` VALUES (1,11,1),(2,12,2),(3,12,3),(4,12,4),(5,12,5),(7,12,11),(8,12,12),(9,12,13),(10,12,14),(11,12,15),(12,12,16),(13,11,17),(14,12,18),(15,24,19),(16,24,20),(17,24,21),(18,24,22),(19,24,23),(20,24,24),(21,24,25),(22,24,26),(23,24,27),(24,24,28),(25,24,29),(26,24,30),(27,24,31),(28,25,32),(29,25,33),(30,25,34),(31,25,35),(32,25,36),(33,25,37),(34,25,38),(35,25,39),(36,25,40),(37,25,41),(38,25,42),(39,25,43),(40,25,44),(41,25,45),(42,25,46),(43,25,47),(44,25,48),(45,25,49),(46,25,50),(47,25,51),(48,25,52),(49,25,53),(50,25,54),(51,25,55),(52,25,56),(53,25,57),(54,25,58),(55,25,59),(56,11,60),(57,11,61),(58,11,62),(59,11,63),(60,11,64),(61,11,65),(62,11,66),(63,11,67),(64,11,68),(65,11,69),(66,11,70),(67,11,71),(68,11,72),(69,11,73),(70,11,74),(71,11,75);
/*!40000 ALTER TABLE `api_partycontentmaker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_partycontentmakerslot`
--

DROP TABLE IF EXISTS `api_partycontentmakerslot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_partycontentmakerslot` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `contentmakerslot_id` bigint DEFAULT NULL,
  `party_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_partycontentmake_contentmakerslot_id_8a523af9_fk_api_conte` (`contentmakerslot_id`),
  KEY `api_partycontentmakerslot_party_id_e0297d32_fk_api_party_id` (`party_id`),
  CONSTRAINT `api_partycontentmake_contentmakerslot_id_8a523af9_fk_api_conte` FOREIGN KEY (`contentmakerslot_id`) REFERENCES `api_contentmakerslot` (`id`),
  CONSTRAINT `api_partycontentmakerslot_party_id_e0297d32_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_partycontentmakerslot`
--

LOCK TABLES `api_partycontentmakerslot` WRITE;
/*!40000 ALTER TABLE `api_partycontentmakerslot` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_partycontentmakerslot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_partydecorator`
--

DROP TABLE IF EXISTS `api_partydecorator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_partydecorator` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `party_id` bigint NOT NULL,
  `decorator_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_partydecorator_party_id_f2389954_fk_api_party_id` (`party_id`),
  KEY `api_partydecorator_decorator_id_b7314099_fk_api_decor` (`decorator_id`),
  CONSTRAINT `api_partydecorator_decorator_id_b7314099_fk_api_decor` FOREIGN KEY (`decorator_id`) REFERENCES `api_decorator` (`serviceprovider_ptr_id`),
  CONSTRAINT `api_partydecorator_party_id_f2389954_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_partydecorator`
--

LOCK TABLES `api_partydecorator` WRITE;
/*!40000 ALTER TABLE `api_partydecorator` DISABLE KEYS */;
INSERT INTO `api_partydecorator` VALUES (1,1,9),(2,2,7),(3,3,8),(4,4,8),(5,5,7),(7,11,8),(8,12,8),(9,13,8),(10,14,8),(11,15,8),(12,16,8),(13,17,8),(14,18,8),(15,19,22),(16,20,22),(17,21,22),(18,22,22),(19,23,22),(20,24,22),(21,25,22),(22,26,22),(23,27,22),(24,28,22),(25,29,22),(26,30,22),(27,31,22),(28,32,23),(29,33,23),(30,34,23),(31,35,23),(32,36,23),(33,37,23),(34,38,23),(35,39,23),(36,40,23),(37,41,23),(38,42,23),(39,43,23),(40,44,23),(41,45,23),(42,46,23),(43,47,23),(44,48,23),(45,49,23),(46,50,23),(47,51,23),(48,52,23),(49,53,23),(50,54,23),(51,55,23),(52,56,23),(53,57,23),(54,58,23),(55,59,23),(56,60,8),(57,61,8),(58,62,8),(59,63,8),(60,64,8),(61,65,8),(62,66,8),(63,67,9),(64,68,9),(65,69,9),(66,70,9),(67,71,9),(68,72,9),(69,73,9),(70,74,9),(71,75,9);
/*!40000 ALTER TABLE `api_partydecorator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_partythemeslot`
--

DROP TABLE IF EXISTS `api_partythemeslot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_partythemeslot` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `party_id` bigint NOT NULL,
  `theme_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_partythemeslot_party_id_ac9cb643_fk_api_party_id` (`party_id`),
  KEY `api_partythemeslot_theme_id_c5072c4d_fk_api_theme_id` (`theme_id`),
  CONSTRAINT `api_partythemeslot_party_id_ac9cb643_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`),
  CONSTRAINT `api_partythemeslot_theme_id_c5072c4d_fk_api_theme_id` FOREIGN KEY (`theme_id`) REFERENCES `api_theme` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_partythemeslot`
--

LOCK TABLES `api_partythemeslot` WRITE;
/*!40000 ALTER TABLE `api_partythemeslot` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_partythemeslot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_partyvenue`
--

DROP TABLE IF EXISTS `api_partyvenue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_partyvenue` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `party_id` bigint NOT NULL,
  `venue_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_partyvenue_party_id_c28c51bc_fk_api_party_id` (`party_id`),
  KEY `api_partyvenue_venue_id_155e03f3_fk_api_venue` (`venue_id`),
  CONSTRAINT `api_partyvenue_party_id_c28c51bc_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`),
  CONSTRAINT `api_partyvenue_venue_id_155e03f3_fk_api_venue` FOREIGN KEY (`venue_id`) REFERENCES `api_venue` (`serviceprovider_ptr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_partyvenue`
--

LOCK TABLES `api_partyvenue` WRITE;
/*!40000 ALTER TABLE `api_partyvenue` DISABLE KEYS */;
INSERT INTO `api_partyvenue` VALUES (1,1,3),(2,2,1),(3,3,2),(4,4,1),(5,5,2),(10,11,1),(11,12,2),(12,13,3),(13,14,3),(14,15,2),(15,16,3),(16,17,3),(17,18,3),(18,19,13),(19,20,13),(20,21,13),(21,22,13),(22,23,13),(23,24,15),(24,25,15),(25,26,15),(26,27,15),(27,28,15),(28,29,15),(29,30,15),(30,31,15),(31,32,14),(32,33,14),(33,34,14),(34,35,14),(35,36,14),(36,37,14),(37,38,14),(38,39,14),(39,40,14),(40,41,14),(41,42,14),(42,43,14),(43,44,14),(44,45,14),(45,46,14),(46,47,14),(47,48,14),(48,49,14),(49,50,14),(50,51,14),(51,52,14),(52,53,14),(53,54,14),(54,55,14),(55,56,14),(56,57,14),(57,58,14),(58,59,14),(59,60,2),(60,61,2),(61,62,2),(62,63,2),(63,64,2),(64,65,2),(65,66,2),(66,67,3),(67,68,3),(68,69,3),(69,70,3),(70,71,3),(71,72,3),(72,73,3),(73,74,3),(74,75,3);
/*!40000 ALTER TABLE `api_partyvenue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_partyvenueslot`
--

DROP TABLE IF EXISTS `api_partyvenueslot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_partyvenueslot` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `party_id` bigint NOT NULL,
  `venueslot_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_partyvenueslot_party_id_39f80243_fk_api_party_id` (`party_id`),
  KEY `api_partyvenueslot_venueslot_id_63620fa6_fk_api_venueslot_id` (`venueslot_id`),
  CONSTRAINT `api_partyvenueslot_party_id_39f80243_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`),
  CONSTRAINT `api_partyvenueslot_venueslot_id_63620fa6_fk_api_venueslot_id` FOREIGN KEY (`venueslot_id`) REFERENCES `api_venueslot` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_partyvenueslot`
--

LOCK TABLES `api_partyvenueslot` WRITE;
/*!40000 ALTER TABLE `api_partyvenueslot` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_partyvenueslot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_payment`
--

DROP TABLE IF EXISTS `api_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_payment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `paymentTime` datetime(6) NOT NULL,
  `amount` decimal(11,2) NOT NULL,
  `customer_id` bigint NOT NULL,
  `party_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_payment_customer_id_477a0340_fk_api_customer_id` (`customer_id`),
  KEY `api_payment_party_id_f17a52da_fk_api_party_id` (`party_id`),
  CONSTRAINT `api_payment_customer_id_477a0340_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`),
  CONSTRAINT `api_payment_party_id_f17a52da_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_payment`
--

LOCK TABLES `api_payment` WRITE;
/*!40000 ALTER TABLE `api_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_progress`
--

DROP TABLE IF EXISTS `api_progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_progress` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `party_id` bigint NOT NULL,
  `serviceProvider_id` bigint NOT NULL,
  `description` longtext,
  PRIMARY KEY (`id`),
  KEY `api_progress_party_id_12856393_fk_api_party_id` (`party_id`),
  KEY `api_progress_serviceProvider_id_4bafa399_fk_api_servi` (`serviceProvider_id`),
  CONSTRAINT `api_progress_party_id_12856393_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`),
  CONSTRAINT `api_progress_serviceProvider_id_4bafa399_fk_api_servi` FOREIGN KEY (`serviceProvider_id`) REFERENCES `api_serviceprovider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_progress`
--

LOCK TABLES `api_progress` WRITE;
/*!40000 ALTER TABLE `api_progress` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_providerimage`
--

DROP TABLE IF EXISTS `api_providerimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_providerimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `serviceProvider_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_providerimage_serviceProvider_id_1839cdd8_fk_api_servi` (`serviceProvider_id`),
  CONSTRAINT `api_providerimage_serviceProvider_id_1839cdd8_fk_api_servi` FOREIGN KEY (`serviceProvider_id`) REFERENCES `api_serviceprovider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_providerimage`
--

LOCK TABLES `api_providerimage` WRITE;
/*!40000 ALTER TABLE `api_providerimage` DISABLE KEYS */;
INSERT INTO `api_providerimage` VALUES (1,'api/images/one_Xbiia8W.jpeg',1),(2,'api/images/two_r1pnEHl.jpg',1),(3,'api/images/three_5T1rOCk.jpg',1),(4,'api/images/four_W0filIJ.jpg',1),(5,'api/images/1_7rvAezV.jpg',2),(6,'api/images/2_Ez4kLYd.jpg',2),(7,'api/images/3_FTA5Min.jpeg',2),(8,'api/images/4_elawdij.jpg',2),(9,'api/images/a_gfDvGeg.jpg',3),(10,'api/images/b_TYeV26M.jpg',3),(11,'api/images/c_PazY80c.jpg',3),(12,'api/images/d_HBvNs8k.jpg',3),(13,'api/images/one_sANoW9E.jpg',4),(14,'api/images/two_ybXenPR.jpg',4),(15,'api/images/three_eZvbxVv.jpg',4),(16,'api/images/four_frlqmGF.jpg',4),(17,'api/images/1_98AHixi.png',5),(18,'api/images/2_rsySy7h.jpg',5),(19,'api/images/3_fh9JG8W.jpg',5),(20,'api/images/4_pfdMfbm.jpeg',5),(21,'api/images/a_qzyDRkO.jpeg',6),(22,'api/images/b_IX1gzHM.jpg',6),(23,'api/images/c_xKD5YRo.jpg',6),(24,'api/images/d_CHibYVp.jpg',6),(25,'api/images/one_1Xyw0QW.jpg',7),(26,'api/images/two_iwB04nn.jpg',7),(27,'api/images/three_KhW9fzn.jpg',7),(28,'api/images/four_501smUS.jpg',7),(29,'api/images/1_BYkWC00.jpg',8),(30,'api/images/2_BLzUVLh.jpg',8),(31,'api/images/3_2WvIDgI.jpg',8),(32,'api/images/4_iC1qQyP.jpg',8),(33,'api/images/a_Wv9puvD.jpg',9),(34,'api/images/b_hAjFILu.jpg',9),(35,'api/images/c_Ny4GuPV.jpg',9),(36,'api/images/d_jq5ESYb.jpg',9),(37,'api/images/one_3n6UlWZ.jpg',10),(38,'api/images/two_9a9Q87y.jpg',10),(39,'api/images/three_CvIRy7c.jpg',10),(40,'api/images/Four_OA2UxaW.jpg',10),(41,'api/images/1_oHajVyN.jpg',11),(42,'api/images/2_08zTxyf.jpg',11),(43,'api/images/3_addK1Mz.jpg',11),(44,'api/images/4_qV8Vqd4.jpg',11),(45,'api/images/a_2ChPLJz.jpg',12),(46,'api/images/b_Ic2qUqj.jpg',12),(47,'api/images/c_3KnVQc6.jpg',12),(48,'api/images/d_30euT8N.jpg',12),(49,'api/images/3_BWyMcnY.jpeg',13),(50,'api/images/2_zM7HgTz.jpg',14),(51,'api/images/b_ksrCzJ7.jpg',20),(52,'api/images/three_0UG6CRJ.jpg',21),(53,'api/images/d_gMYqg1u.jpg',22),(54,'api/images/one_QAcDfss.jpg',23),(55,'api/images/Four_lg8FVcD.jpg',25),(56,'api/images/1_EcVmHpx.jpg',24),(57,'api/images/b_CuzW3DN.jpg',15),(58,'api/images/c_NfNaIiq.jpg',16),(59,'api/images/4_hSAlIok.jpg',17);
/*!40000 ALTER TABLE `api_providerimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_review`
--

DROP TABLE IF EXISTS `api_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_review` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `postedAt` datetime(6) NOT NULL,
  `customer_id` bigint NOT NULL,
  `serviceProvider_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_review_customer_id_683cc727_fk_api_customer_id` (`customer_id`),
  KEY `api_review_serviceProvider_id_96845aca_fk_api_serviceprovider_id` (`serviceProvider_id`),
  CONSTRAINT `api_review_customer_id_683cc727_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`),
  CONSTRAINT `api_review_serviceProvider_id_96845aca_fk_api_serviceprovider_id` FOREIGN KEY (`serviceProvider_id`) REFERENCES `api_serviceprovider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_review`
--

LOCK TABLES `api_review` WRITE;
/*!40000 ALTER TABLE `api_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_serviceprovider`
--

DROP TABLE IF EXISTS `api_serviceprovider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_serviceprovider` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext,
  `rating` decimal(3,2) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_serviceprovider`
--

LOCK TABLES `api_serviceprovider` WRITE;
/*!40000 ALTER TABLE `api_serviceprovider` DISABLE KEYS */;
INSERT INTO `api_serviceprovider` VALUES (1,'Shimanta Convention Hall','\"Shimanto Convention Center rent, price, details. সীমান্ত কনভেনশন সেন্টার Dhanmondi, Road 2, Near Pilkana inside Shimanto (Rifles) Square Market, Dhaka 1205.\r\n\r\nThe Basic Shift Rent is BDT 75,000TK/Shift\r\n\r\nFood Cost: Plain Pulao Starts from 575TK + 15% VAT + 10% Service Charge\r\n\r\nKacchi Starts from 625TK + 15% VAT + 10% Service Charge\"',NULL,'Dhanmondi, Dhaka'),(2,'Whitehall Convention Hall','\"Enjoyable and comfortable atmosphere in the heart of Dhanmondi. The White Hall Convention and Buffet is dedicated to providing the highest quality of service in order to create a fine dining atmosphere. We offer a grand buffet experience through our exquisite food in the warm & friendly ambiance complemented by the personalized customer service provided by our exceptional waitstaff.\r\nIn our all you can eat restaurant, with our food quality and taste, we have achieved a reputation and trust of becoming the best buffet restaurant in Dhanmondi with our ultimate goal towards becoming the most fancied buffet in Dhaka city.\"',NULL,'Mohammadpur, Dhaka'),(3,'Sugandha Community Centre','\"Place Types        :   Community Center\r\nAddress        :   Dhaka, Bangladesh\r\nCoordinate        :   3.7414206913, 90.3731833766       \r\nSocial        :  facebook.com/pages /Sugandha-Community-Centre\"',NULL,'Dhanmondi, Dhaka'),(4,'Alpha Catering','UNLIKE OTHER CATERERS, WE OFFER CUISINES RANGING FROM CONTINENTAL, THAI-CHINESE, INDIAN-BENGALI. OUR COOKING TEAM HAS A COMBINED EXPERIENCE OF OVER 120 YEARS AND CAN SHELL OUT MORE THAN 300 ITEMS.',NULL,'Dhanmondi, Dhaka'),(5,'Desh Catering','\"Unlike others, Desh Catering is devoted to delivering super delicious food and fabulous service to spice up your event.\r\n\r\nWhatever you’re planning – a gorgeous wedding, a high-end corporate event, new year party, or anything – we will create an amazing food experience suited to your taste.\"',NULL,'Dhanmondi, Dhaka'),(6,'Julie\'s Kitchen','Julie’s Kitchen is all about you. Chef Julie’s handpicked menu is designed to excite and satisfy you. Compare our quality, compare our prices. and check our specials. Our aim is to be a stand out from the crowd. As well as having the traditional popular indian dishes, we Server Veg and Non Veg Thali’s. Food journey for our customer started from April 2015.',NULL,'Mohammadpur, Dhaka'),(7,'BD Wedding Planner','Award winning BD Event Management & Wedding Planners offer a highly creative, friendly & Professional service to Bangladesh.',NULL,'Uttara, Dhaka'),(8,'Creative Wedding Planner & Event Management','Creative Wedding Planner & Event Management established a new era in wedding planning and event management service in Bangladesh with quality and excellence.',NULL,'Mohammadpur, Dhaka'),(9,'Ananta Events And Entertainment','\"Ananta Events Bangladesh one of the leading Event Management Company in Dhaka Bangladesh. We providing 360 Degree Event Management services Including Exhibition, Conferences, Activation, Seminars, Trade Fair, Communication, Fairs, MICE. \r\n\r\nWe are International Event Management Company in Bangladesh who providing Event execution services all over the world with our network partners. \r\n\r\nOur Services Including: \r\n# Corporate Events : Since 2008, Ananta Events is elevating standards of event planning in corporate and private sectors of Bangladesh and working with famous multinational and national brands.\r\n\r\n#Brand Activations\r\n#Team Building Activities\r\n# Catering \r\n#Wedding Event Management\r\n#Birthday Event Planning \"',NULL,'Dhanmondi, Dhaka'),(10,'Capital FilmsBD','Capital Films is a most economic professional cinematography and photography company that helps capture digital memories that will last a lifetime. From special events to weddings - our main focus is creating a final product with clarity, creativity, quality, with the utmost professionalism. , our main goal is to tell a great story that ultimately brings your special day to life - to share with friends and family, and to keep for years on end.',NULL,'Uttara, Dhaka'),(11,'Wedding Diary','Looking for a wedding photographer? We approach weddings in a documentary and artistic way, trying to tell the story of your day honestly and unobtrusively. Our images are warm, romantic, and intimate. We hope to give you images that make you feel, not just see.',NULL,'Mohammadpur, Dhaka'),(12,'PIN POINT Photography','\"“PIN POINT Photography” once knew as “Tanvir’s Photography” a name which takes you to the world of quality wedding photographs and cinematography for almost a decade. The journey started from “PIN POINT advertising” agency as its wing for product and corporate events photography. With time the elegant; snapper Tanvir Rahman discovered his pure talent as a photographer in Wedding and Events. It was during one of his partners wedding that he came in as an emergency wedding photographer, and after the events his taken pictures of the bride and groom were instant hits with every\r\nOne praising and asking him to be the official photographer for their upcoming weddings. It was 2008 and after 7 years Tanvir has completed more than 150 wedding assignments and some International weddings covered as well.\r\n\r\nNow “PIN POINT Photography” is a big team with highly experienced enthusiastic professionals who are quite versatile and are capable of catering to a variety of wedding style, regardless of the culture, religion or theme.\r\n\r\nPhotography is all about capturing moments. We don’t sell our customer only pictures or videos but we give them some priceless moments, a walk down the memory lane with their loved ones. We allow them to access to their special part of memory which they cherish throughout their lives. We make sure that while relieving those moments they are completely indulged in that rather than finding the faults in a Picture or in our Audio Visual.\r\n\r\n\r\n“PIN POINT Photography” believes in one mantra that is making your partners happy they will make sure to make you happy. We believe our clients are our partners as well, who will promote and give us the recognition and respect that we have been working on for more than 7 years in this arena. “PIN POINT Photography” has always given its best to serve each and every one of our clients. Our clear understanding of our specific client needs have made us so close to them we believe and want you too also believe in us.\"',NULL,'Dhanmondi, Dhaka'),(13,'Aziz Convention Hall','abcd',NULL,'Sylhet'),(14,'Salam Convention Hall','abc',NULL,'Rajshahi'),(15,'Rahim Convention Hall','abc',NULL,'Sylhet'),(16,'One','abc',NULL,'Khulna'),(17,'Two','abc',NULL,'Khulna'),(20,'Shopon Catering','abc',NULL,'Sylhet'),(21,'Motin Catering','abc',NULL,'Rajshahi'),(22,'Kamal Decorators','abc',NULL,'Sylhet'),(23,'Jamal Decorators','abc',NULL,'Rajshahi'),(24,'Classic Photography','abc',NULL,'Sylhet'),(25,'Alam Photography','abc',NULL,'Rajshahi');
/*!40000 ALTER TABLE `api_serviceprovider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_theme`
--

DROP TABLE IF EXISTS `api_theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_theme` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `decorator_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_theme_decorator_id_14ebb588_fk_api_decor` (`decorator_id`),
  CONSTRAINT `api_theme_decorator_id_14ebb588_fk_api_decor` FOREIGN KEY (`decorator_id`) REFERENCES `api_decorator` (`serviceprovider_ptr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_theme`
--

LOCK TABLES `api_theme` WRITE;
/*!40000 ALTER TABLE `api_theme` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_theme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_themeimage`
--

DROP TABLE IF EXISTS `api_themeimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_themeimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `theme_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_themeimage_theme_id_2172d009_fk_api_theme_id` (`theme_id`),
  CONSTRAINT `api_themeimage_theme_id_2172d009_fk_api_theme_id` FOREIGN KEY (`theme_id`) REFERENCES `api_theme` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_themeimage`
--

LOCK TABLES `api_themeimage` WRITE;
/*!40000 ALTER TABLE `api_themeimage` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_themeimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_venue`
--

DROP TABLE IF EXISTS `api_venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_venue` (
  `serviceprovider_ptr_id` bigint NOT NULL,
  `capacity` int NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`serviceprovider_ptr_id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `api_venue_serviceprovider_ptr__1ee8099d_fk_api_servi` FOREIGN KEY (`serviceprovider_ptr_id`) REFERENCES `api_serviceprovider` (`id`),
  CONSTRAINT `api_venue_user_id_1359e5e6_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_venue`
--

LOCK TABLES `api_venue` WRITE;
/*!40000 ALTER TABLE `api_venue` DISABLE KEYS */;
INSERT INTO `api_venue` VALUES (1,1200,75000.00,2),(2,1200,80000.00,3),(3,2000,100000.00,4),(13,1000,100000.00,14),(14,1000,100000.00,15),(15,1000,80000.00,16),(16,1000,120000.00,17),(17,1000,90000.00,18);
/*!40000 ALTER TABLE `api_venue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_venueslot`
--

DROP TABLE IF EXISTS `api_venueslot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_venueslot` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `startTime` datetime(6) NOT NULL,
  `endTime` datetime(6) NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `venue_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_venueslot_venue_id_df3e2cfc_fk_api_venue` (`venue_id`),
  CONSTRAINT `api_venueslot_venue_id_df3e2cfc_fk_api_venue` FOREIGN KEY (`venue_id`) REFERENCES `api_venue` (`serviceprovider_ptr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_venueslot`
--

LOCK TABLES `api_venueslot` WRITE;
/*!40000 ALTER TABLE `api_venueslot` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_venueslot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add customer',6,'add_customer'),(22,'Can change customer',6,'change_customer'),(23,'Can delete customer',6,'delete_customer'),(24,'Can view customer',6,'view_customer'),(25,'Can add food item',7,'add_fooditem'),(26,'Can change food item',7,'change_fooditem'),(27,'Can delete food item',7,'delete_fooditem'),(28,'Can view food item',7,'view_fooditem'),(29,'Can add notification',8,'add_notification'),(30,'Can change notification',8,'change_notification'),(31,'Can delete notification',8,'delete_notification'),(32,'Can view notification',8,'view_notification'),(33,'Can add party',9,'add_party'),(34,'Can change party',9,'change_party'),(35,'Can delete party',9,'delete_party'),(36,'Can view party',9,'view_party'),(37,'Can add service provider',10,'add_serviceprovider'),(38,'Can change service provider',10,'change_serviceprovider'),(39,'Can delete service provider',10,'delete_serviceprovider'),(40,'Can view service provider',10,'view_serviceprovider'),(41,'Can add theme',11,'add_theme'),(42,'Can change theme',11,'change_theme'),(43,'Can delete theme',11,'delete_theme'),(44,'Can view theme',11,'view_theme'),(45,'Can add venue slot',12,'add_venueslot'),(46,'Can change venue slot',12,'change_venueslot'),(47,'Can delete venue slot',12,'delete_venueslot'),(48,'Can view venue slot',12,'view_venueslot'),(49,'Can add catering',13,'add_catering'),(50,'Can change catering',13,'change_catering'),(51,'Can delete catering',13,'delete_catering'),(52,'Can view catering',13,'view_catering'),(53,'Can add decorator',14,'add_decorator'),(54,'Can change decorator',14,'change_decorator'),(55,'Can delete decorator',14,'delete_decorator'),(56,'Can view decorator',14,'view_decorator'),(57,'Can add venue',15,'add_venue'),(58,'Can change venue',15,'change_venue'),(59,'Can delete venue',15,'delete_venue'),(60,'Can view venue',15,'view_venue'),(61,'Can add theme image',16,'add_themeimage'),(62,'Can change theme image',16,'change_themeimage'),(63,'Can delete theme image',16,'delete_themeimage'),(64,'Can view theme image',16,'view_themeimage'),(65,'Can add review',17,'add_review'),(66,'Can change review',17,'change_review'),(67,'Can delete review',17,'delete_review'),(68,'Can view review',17,'view_review'),(69,'Can add provider image',18,'add_providerimage'),(70,'Can change provider image',18,'change_providerimage'),(71,'Can delete provider image',18,'delete_providerimage'),(72,'Can view provider image',18,'view_providerimage'),(73,'Can add payment',19,'add_payment'),(74,'Can change payment',19,'change_payment'),(75,'Can delete payment',19,'delete_payment'),(76,'Can view payment',19,'view_payment'),(77,'Can add party venue slot',20,'add_partyvenueslot'),(78,'Can change party venue slot',20,'change_partyvenueslot'),(79,'Can delete party venue slot',20,'delete_partyvenueslot'),(80,'Can view party venue slot',20,'view_partyvenueslot'),(81,'Can add party theme slot',21,'add_partythemeslot'),(82,'Can change party theme slot',21,'change_partythemeslot'),(83,'Can delete party theme slot',21,'delete_partythemeslot'),(84,'Can view party theme slot',21,'view_partythemeslot'),(85,'Can add food image',22,'add_foodimage'),(86,'Can change food image',22,'change_foodimage'),(87,'Can delete food image',22,'delete_foodimage'),(88,'Can view food image',22,'view_foodimage'),(89,'Can add food cart item',23,'add_foodcartitem'),(90,'Can change food cart item',23,'change_foodcartitem'),(91,'Can delete food cart item',23,'delete_foodcartitem'),(92,'Can view food cart item',23,'view_foodcartitem'),(93,'Can add appointment',24,'add_appointment'),(94,'Can change appointment',24,'change_appointment'),(95,'Can delete appointment',24,'delete_appointment'),(96,'Can view appointment',24,'view_appointment'),(97,'Can add entertainer',25,'add_entertainer'),(98,'Can change entertainer',25,'change_entertainer'),(99,'Can delete entertainer',25,'delete_entertainer'),(100,'Can view entertainer',25,'view_entertainer'),(101,'Can add content maker',26,'add_contentmaker'),(102,'Can change content maker',26,'change_contentmaker'),(103,'Can delete content maker',26,'delete_contentmaker'),(104,'Can view content maker',26,'view_contentmaker'),(105,'Can add content maker slot',27,'add_contentmakerslot'),(106,'Can change content maker slot',27,'change_contentmakerslot'),(107,'Can delete content maker slot',27,'delete_contentmakerslot'),(108,'Can view content maker slot',27,'view_contentmakerslot'),(109,'Can add party content maker slot',28,'add_partycontentmakerslot'),(110,'Can change party content maker slot',28,'change_partycontentmakerslot'),(111,'Can delete party content maker slot',28,'delete_partycontentmakerslot'),(112,'Can view party content maker slot',28,'view_partycontentmakerslot'),(113,'Can add progress',29,'add_progress'),(114,'Can change progress',29,'change_progress'),(115,'Can delete progress',29,'delete_progress'),(116,'Can view progress',29,'view_progress'),(117,'Can add party venue',30,'add_partyvenue'),(118,'Can change party venue',30,'change_partyvenue'),(119,'Can delete party venue',30,'delete_partyvenue'),(120,'Can view party venue',30,'view_partyvenue'),(121,'Can add party decorator',31,'add_partydecorator'),(122,'Can change party decorator',31,'change_partydecorator'),(123,'Can delete party decorator',31,'delete_partydecorator'),(124,'Can view party decorator',31,'view_partydecorator'),(125,'Can add party content maker',32,'add_partycontentmaker'),(126,'Can change party content maker',32,'change_partycontentmaker'),(127,'Can delete party content maker',32,'delete_partycontentmaker'),(128,'Can view party content maker',32,'view_partycontentmaker'),(129,'Can add user',33,'add_user'),(130,'Can change user',33,'change_user'),(131,'Can delete user',33,'delete_user'),(132,'Can view user',33,'view_user');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_user`
--

DROP TABLE IF EXISTS `core_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `userType` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_user`
--

LOCK TABLES `core_user` WRITE;
/*!40000 ALTER TABLE `core_user` DISABLE KEYS */;
INSERT INTO `core_user` VALUES (1,'pbkdf2_sha256$320000$TJ5prU0Rs7JXILxxFUt9hn$FLAk/qvzzCR9PYocTlQA5P6jc6J4qr21umc6NcYrCkk=',NULL,0,'adam05','Adam','Smith',0,1,'2022-06-07 08:11:05.823272','adam@gmail.com','12345','customer'),(2,'pbkdf2_sha256$320000$i48ROV6I2q9sYmJMq7Yrdq$ZYOQaXgdq/bNiRog+dphON5ItM++Pv79mCOO8BMPcDE=',NULL,0,'venue1','Shimanto','Convention Hall',0,1,'2022-06-07 08:14:17.641157','venue1@domain.com','12345','venue'),(3,'pbkdf2_sha256$320000$FKtaUheysQwItpvmDjix57$Tz9Jn9pSyPAbVxFg1CO1YaEdWzZ2GsoqzY5iDZEceNg=',NULL,0,'venue2','Whitehall','Convention Hall',0,1,'2022-06-07 08:26:31.760381','venue2@domain.com','1234','venue'),(4,'pbkdf2_sha256$320000$yfWRNBYu6vTAaqe03XgPtA$mE/X1ZNLHBitUhiuJo6wVocO2EuEyXPYLXXuBSrVPxk=',NULL,0,'venue3','Sugandha','Community Centre',0,1,'2022-06-07 08:38:08.053864','venue3@domain.com','1234','venue'),(5,'pbkdf2_sha256$320000$7i5SSpBkmiUI6LHoprZPsv$xKnwG4xn7RokGf4T2/Dn+jtm4AuGJHoCljVrfT/B55Q=',NULL,0,'catering1','Alpha','Catering',0,1,'2022-06-07 09:07:40.240732','catering1@domain.com','1234','catering'),(6,'pbkdf2_sha256$320000$Gll8mEkFyzgmctgh8TyiUq$d2qYU2Kd2kOXQtLiD/na7nN+ue7lPEK+NYNH5pD9K04=',NULL,0,'catering2','Desh','Catering',0,1,'2022-06-07 09:21:21.631410','catering2@domain.com','1234','catering'),(7,'pbkdf2_sha256$320000$fBvnHnCSMe90vICxHWWL45$i+94d3NGjyAZYs8ix9nPEkdEIyO7ahib+5CUgOI2jPo=',NULL,0,'catering3','Julie\'s','Kitchen',0,1,'2022-06-07 09:26:36.432084','catering3@domain.com','1234','catering'),(8,'pbkdf2_sha256$320000$MOa5hx9M85L8DCTu7NQkOr$IQvMJnAikT6opyVUjYBdmbRRdALMZjKHvKNNW3jy8Gs=',NULL,0,'decorator1','BD','Wedding Planner',0,1,'2022-06-07 09:54:13.898284','decorator1@domain.com','1234','decorator'),(9,'pbkdf2_sha256$320000$eWezzlMFE6Wiqv7ticoVEf$wFHG5MxuxCZyIMnSIMVdlZ5cwGjNfBit+Cd7JeQF0Kc=',NULL,0,'decorator2','Creative','Wedding Planner',0,1,'2022-06-07 09:59:51.979147','decorator2@domain.com','1234','decorator'),(10,'pbkdf2_sha256$320000$IFyjOFkOO5i1irWeLMU43w$WaO+PIKD/h2ugRoQgvmlu63XJxUm04ShlVZrNbWwu7I=',NULL,0,'decorator3','Ananta','Wedding Planner',0,1,'2022-06-07 10:13:57.228937','decorator3@domain.com','1234','decorator'),(11,'pbkdf2_sha256$320000$ZYzOG93YEWzGTYQvApPtiQ$w0jeV6tQsvHgDC1CYHRGjUo9BGzTcF7WzWAiizIAH2M=',NULL,0,'cm1','Capital Films','BD',0,1,'2022-06-07 10:19:35.086278','cm1@domain.com','1234','contentmaker'),(12,'pbkdf2_sha256$320000$3o5Tkktisydx3RTKoLPBEI$1hyjhVOT1mSdznHSKQhD/w0IzOMlJVwlGrJ2HXAiic0=',NULL,0,'cm2','Wedding','Diary',0,1,'2022-06-07 10:24:12.344618','cm2@domain.com','1234','contentmaker'),(13,'pbkdf2_sha256$320000$iXzaw1Q2LwyWpsuWKxsLfc$ZHyHQYkYdc0HYAjkz3qVNB5OIQHOAUeHc3VPmjYlSrA=',NULL,0,'cm3','PIN POINT','Photography',0,1,'2022-06-07 10:27:26.220758','cm3@domain.com','1234','contentmaker'),(14,'pbkdf2_sha256$320000$o2smESpETJe1DniD67uvfN$bSWq3O46pQRyvqPKgvfUTxwGI3GwQl6ekcVn+1IBoho=',NULL,0,'venue4','venue4','Smith',0,1,'2022-06-07 17:42:02.919648','venue4@domain.com','1234','venue'),(15,'pbkdf2_sha256$320000$MnNYsus9RknaDfxF7eiSZz$C05LhVoRAdb8eGNcG/o3+ts7qbrywXdUk+crMctTWak=',NULL,0,'venue5','venue5','Smith',0,1,'2022-06-07 17:42:13.393831','venue5@domain.com','1234','venue'),(16,'pbkdf2_sha256$320000$51TE1glWYjv3ZkCzl2lGn5$uNhToORuTibWFPyuTZ/fYjwC94Yxbr2FVmAzk2TUl3k=',NULL,0,'venue6','venue6','Smith',0,1,'2022-06-07 17:42:30.483735','venue6@domain.com','1234','venue'),(17,'pbkdf2_sha256$320000$PRO0m0HchgI9AmXm1uR17J$FyvX3p40LYr/6v/VjtcYUIWpnIw7pYlekp0SAf7863E=',NULL,0,'venue7','venue7','Smith',0,1,'2022-06-07 17:42:44.218911','venue7@domain.com','1234','venue'),(18,'pbkdf2_sha256$320000$gCOWmnfMGZcsgHuadK0oJZ$serVfQ+NS247VjTwPQNFo+vD9YYxnaaIoWSi3oXSo8Y=',NULL,0,'venue8','venue8','Smith',0,1,'2022-06-07 17:43:00.723547','venue8@domain.com','1234','venue'),(19,'pbkdf2_sha256$320000$4kVDAWXMfSqGaGkp4D6A1S$U7o+KSOI4VI4X7rNF6HUWHVtIi4N2ig+B/uZWcl33wE=',NULL,0,'venue9','venue9','Smith',0,1,'2022-06-07 17:43:14.034847','venue9@domain.com','1234','venue'),(20,'pbkdf2_sha256$320000$g3m5VLlNR0Y4do0TxGFUh3$Fh7+/0qqApCuFuaVidwQ6Xe7YFEkFsqqMDY1MeSBzTw=',NULL,0,'venue10','venue10','Smith',0,1,'2022-06-07 17:43:27.255835','venue10@domain.com','1234','venue'),(21,'pbkdf2_sha256$320000$0Fi8hdjG58FhsbQelEMlu2$FFfVOAS9GHFEXC2ecGZ2U8DqJQI5chenSJiODFWh71A=',NULL,0,'catering4','catering4','Smith',0,1,'2022-06-07 20:18:10.625758','catering4@domain.com','1234','catering'),(22,'pbkdf2_sha256$320000$4uCuPphH5EYvWYxkhN9EO0$zRIm5Vy81MpATNQvT/B6xYxWeYtYJv+SNu5glLHpIXs=',NULL,0,'catering5','catering5','Smith',0,1,'2022-06-07 20:18:32.188597','catering5@domain.com','1234','catering'),(23,'pbkdf2_sha256$320000$D1ugPbCyjUQF5tAM9rhIFz$myDOQUMlN0ybUZ2U8t6qKUVCxC2DZNXD+n5ZPxWBrCo=',NULL,0,'decorator4','decorator','Smith',0,1,'2022-06-07 20:27:13.306663','decorator4@domain.com','1234','decorator'),(24,'pbkdf2_sha256$320000$C0rP5XMnqVJ8q8AndU0MTr$hnMh2/ASFHViSa3t9JVt62unC+PFEtbd4rNQzNwsMjE=',NULL,0,'decorator5','decorator','Smith',0,1,'2022-06-07 20:27:26.562636','decorator5@domain.com','1234','decorator'),(25,'pbkdf2_sha256$320000$JZ6jKinu5r4e00OFn0mT7U$4QRCADVRMdtmZR3755AJHZ/43KcOpg1DIAAkbRz7GyQ=',NULL,0,'cm4','contentmaker','Smith',0,1,'2022-06-07 20:31:27.130671','cm4@domain.com','1234','contentmaker'),(26,'pbkdf2_sha256$320000$nfoXELm2Jo29MJDrKjrETw$8stprWOtS6JJPd5cdTuKBq08JNDNnH0v6RWtmvTfgQ0=',NULL,0,'cm5','contentmaker','Smith',0,1,'2022-06-07 20:31:37.299987','cm5@domain.com','1234','contentmaker');
/*!40000 ALTER TABLE `core_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_user_groups`
--

DROP TABLE IF EXISTS `core_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `core_user_groups_user_id_group_id_c82fcad1_uniq` (`user_id`,`group_id`),
  KEY `core_user_groups_group_id_fe8c697f_fk_auth_group_id` (`group_id`),
  CONSTRAINT `core_user_groups_group_id_fe8c697f_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `core_user_groups_user_id_70b4d9b8_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_user_groups`
--

LOCK TABLES `core_user_groups` WRITE;
/*!40000 ALTER TABLE `core_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `core_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_user_user_permissions`
--

DROP TABLE IF EXISTS `core_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `core_user_user_permissions_user_id_permission_id_73ea0daa_uniq` (`user_id`,`permission_id`),
  KEY `core_user_user_permi_permission_id_35ccf601_fk_auth_perm` (`permission_id`),
  CONSTRAINT `core_user_user_permi_permission_id_35ccf601_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `core_user_user_permissions_user_id_085123d3_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_user_user_permissions`
--

LOCK TABLES `core_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `core_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `core_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_core_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_core_user_id` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(24,'api','appointment'),(13,'api','catering'),(26,'api','contentmaker'),(27,'api','contentmakerslot'),(6,'api','customer'),(14,'api','decorator'),(25,'api','entertainer'),(23,'api','foodcartitem'),(22,'api','foodimage'),(7,'api','fooditem'),(8,'api','notification'),(9,'api','party'),(32,'api','partycontentmaker'),(28,'api','partycontentmakerslot'),(31,'api','partydecorator'),(21,'api','partythemeslot'),(30,'api','partyvenue'),(20,'api','partyvenueslot'),(19,'api','payment'),(29,'api','progress'),(18,'api','providerimage'),(17,'api','review'),(10,'api','serviceprovider'),(11,'api','theme'),(16,'api','themeimage'),(15,'api','venue'),(12,'api','venueslot'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(33,'core','user'),(5,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-06-07 08:09:23.110948'),(2,'contenttypes','0002_remove_content_type_name','2022-06-07 08:09:23.341545'),(3,'auth','0001_initial','2022-06-07 08:09:24.231775'),(4,'auth','0002_alter_permission_name_max_length','2022-06-07 08:09:24.350737'),(5,'auth','0003_alter_user_email_max_length','2022-06-07 08:09:24.362739'),(6,'auth','0004_alter_user_username_opts','2022-06-07 08:09:24.372704'),(7,'auth','0005_alter_user_last_login_null','2022-06-07 08:09:24.418496'),(8,'auth','0006_require_contenttypes_0002','2022-06-07 08:09:24.425476'),(9,'auth','0007_alter_validators_add_error_messages','2022-06-07 08:09:24.442849'),(10,'auth','0008_alter_user_username_max_length','2022-06-07 08:09:24.468720'),(11,'auth','0009_alter_user_last_name_max_length','2022-06-07 08:09:24.492742'),(12,'auth','0010_alter_group_name_max_length','2022-06-07 08:09:24.544060'),(13,'auth','0011_update_proxy_permissions','2022-06-07 08:09:24.564409'),(14,'auth','0012_alter_user_first_name_max_length','2022-06-07 08:09:24.575377'),(15,'core','0001_initial','2022-06-07 08:09:26.013764'),(16,'admin','0001_initial','2022-06-07 08:09:26.360165'),(17,'admin','0002_logentry_remove_auto_add','2022-06-07 08:09:26.372135'),(18,'admin','0003_logentry_add_action_flag_choices','2022-06-07 08:09:26.385103'),(19,'api','0001_initial','2022-06-07 08:09:31.885624'),(20,'api','0002_party_guestcount_party_locationlatitude_and_more','2022-06-07 08:09:32.078270'),(21,'api','0003_remove_party_pendingcost','2022-06-07 08:09:32.194287'),(22,'api','0004_contentmakerslot_partycontentmakerslot','2022-06-07 08:09:32.535768'),(23,'api','0005_appointment_status','2022-06-07 08:09:32.609703'),(24,'api','0006_remove_appointment_serviceprovider_and_more','2022-06-07 08:09:33.019326'),(25,'api','0007_alter_payment_party','2022-06-07 08:09:33.047800'),(26,'api','0008_progress','2022-06-07 08:09:33.282693'),(27,'api','0009_progress_description','2022-06-07 08:09:33.323597'),(28,'api','0010_decorator_price_partyvenue','2022-06-07 08:09:33.585506'),(29,'api','0011_partydecorator','2022-06-07 08:09:34.169734'),(30,'api','0012_remove_partydecorator_catering_and_more','2022-06-07 08:09:34.435609'),(31,'api','0013_partycontentmaker','2022-06-07 08:09:34.648255'),(32,'api','0014_alter_party_locationlatitude_and_more','2022-06-07 08:09:35.038760'),(33,'api','0015_foodcartitem_catering','2022-06-07 08:09:35.333868'),(34,'api','0016_rename_catering_foodcartitem_catering','2022-06-07 08:09:35.517647'),(35,'sessions','0001_initial','2022-06-07 08:09:35.589899'),(36,'api','0017_alter_contentmaker_price_alter_decorator_price_and_more','2022-06-07 11:55:43.423991');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-08  3:22:25
