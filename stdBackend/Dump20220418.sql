CREATE DATABASE  IF NOT EXISTS `savethedate` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `savethedate`;
-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
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
  PRIMARY KEY (`id`),
  KEY `api_appointment_customer_id_ad345017_fk_api_customer_id` (`customer_id`),
  CONSTRAINT `api_appointment_customer_id_ad345017_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_appointment`
--

LOCK TABLES `api_appointment` WRITE;
/*!40000 ALTER TABLE `api_appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_appointment_serviceProvider`
--

DROP TABLE IF EXISTS `api_appointment_serviceProvider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_appointment_serviceProvider` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `appointment_id` bigint NOT NULL,
  `serviceprovider_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_appointment_serviceP_appointment_id_servicepr_31f9c6c7_uniq` (`appointment_id`,`serviceprovider_id`),
  KEY `api_appointment_serv_serviceprovider_id_08412733_fk_api_servi` (`serviceprovider_id`),
  CONSTRAINT `api_appointment_serv_appointment_id_c06536a2_fk_api_appoi` FOREIGN KEY (`appointment_id`) REFERENCES `api_appointment` (`id`),
  CONSTRAINT `api_appointment_serv_serviceprovider_id_08412733_fk_api_servi` FOREIGN KEY (`serviceprovider_id`) REFERENCES `api_serviceprovider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_appointment_serviceProvider`
--

LOCK TABLES `api_appointment_serviceProvider` WRITE;
/*!40000 ALTER TABLE `api_appointment_serviceProvider` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_appointment_serviceProvider` ENABLE KEYS */;
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
INSERT INTO `api_catering` VALUES (2,0,1);
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
/*!40000 ALTER TABLE `api_contentmaker` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_customer`
--

LOCK TABLES `api_customer` WRITE;
/*!40000 ALTER TABLE `api_customer` DISABLE KEYS */;
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
  `customer_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_party_customer_id_86d7bfe2_fk_api_customer_id` (`customer_id`),
  CONSTRAINT `api_party_customer_id_86d7bfe2_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_party`
--

LOCK TABLES `api_party` WRITE;
/*!40000 ALTER TABLE `api_party` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_party` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_party_serviceProviders`
--

DROP TABLE IF EXISTS `api_party_serviceProviders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_party_serviceProviders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `party_id` bigint NOT NULL,
  `serviceprovider_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_party_serviceProvide_party_id_serviceprovider_42d71c20_uniq` (`party_id`,`serviceprovider_id`),
  KEY `api_party_servicePro_serviceprovider_id_25a6e10d_fk_api_servi` (`serviceprovider_id`),
  CONSTRAINT `api_party_servicePro_serviceprovider_id_25a6e10d_fk_api_servi` FOREIGN KEY (`serviceprovider_id`) REFERENCES `api_serviceprovider` (`id`),
  CONSTRAINT `api_party_serviceProviders_party_id_5fd01cd6_fk_api_party_id` FOREIGN KEY (`party_id`) REFERENCES `api_party` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_party_serviceProviders`
--

LOCK TABLES `api_party_serviceProviders` WRITE;
/*!40000 ALTER TABLE `api_party_serviceProviders` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_party_serviceProviders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_payment`
--

DROP TABLE IF EXISTS `api_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_payment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `paymentTime` datetime(6) NOT NULL,
  `amount` decimal(11,2) NOT NULL,
  `vatAmount` decimal(11,2) NOT NULL,
  `customer_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_payment_customer_id_477a0340_fk_api_customer_id` (`customer_id`),
  CONSTRAINT `api_payment_customer_id_477a0340_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`)
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
-- Table structure for table `api_payment_serviceProvider`
--

DROP TABLE IF EXISTS `api_payment_serviceProvider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_payment_serviceProvider` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `payment_id` bigint NOT NULL,
  `serviceprovider_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_payment_serviceProvi_payment_id_serviceprovid_b0b8bd7f_uniq` (`payment_id`,`serviceprovider_id`),
  KEY `api_payment_serviceP_serviceprovider_id_41e18c58_fk_api_servi` (`serviceprovider_id`),
  CONSTRAINT `api_payment_serviceP_payment_id_b2436cd3_fk_api_payme` FOREIGN KEY (`payment_id`) REFERENCES `api_payment` (`id`),
  CONSTRAINT `api_payment_serviceP_serviceprovider_id_41e18c58_fk_api_servi` FOREIGN KEY (`serviceprovider_id`) REFERENCES `api_serviceprovider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_payment_serviceProvider`
--

LOCK TABLES `api_payment_serviceProvider` WRITE;
/*!40000 ALTER TABLE `api_payment_serviceProvider` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_payment_serviceProvider` ENABLE KEYS */;
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
  `date` date NOT NULL,
  `serviceProvider_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_review_serviceProvider_id_96845aca_fk_api_serviceprovider_id` (`serviceProvider_id`),
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_serviceprovider`
--

LOCK TABLES `api_serviceprovider` WRITE;
/*!40000 ALTER TABLE `api_serviceprovider` DISABLE KEYS */;
INSERT INTO `api_serviceprovider` VALUES (2,'',NULL),(3,'',NULL);
/*!40000 ALTER TABLE `api_serviceprovider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_venue`
--

DROP TABLE IF EXISTS `api_venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_venue` (
  `serviceprovider_ptr_id` bigint NOT NULL,
  `location` varchar(255) NOT NULL,
  `capacity` int NOT NULL,
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
INSERT INTO `api_venue` VALUES (3,'',0,1);
/*!40000 ALTER TABLE `api_venue` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add customer',6,'add_customer'),(22,'Can change customer',6,'change_customer'),(23,'Can delete customer',6,'delete_customer'),(24,'Can view customer',6,'view_customer'),(25,'Can add notification',7,'add_notification'),(26,'Can change notification',7,'change_notification'),(27,'Can delete notification',7,'delete_notification'),(28,'Can view notification',7,'view_notification'),(29,'Can add service provider',8,'add_serviceprovider'),(30,'Can change service provider',8,'change_serviceprovider'),(31,'Can delete service provider',8,'delete_serviceprovider'),(32,'Can view service provider',8,'view_serviceprovider'),(33,'Can add review',9,'add_review'),(34,'Can change review',9,'change_review'),(35,'Can delete review',9,'delete_review'),(36,'Can view review',9,'view_review'),(37,'Can add payment',10,'add_payment'),(38,'Can change payment',10,'change_payment'),(39,'Can delete payment',10,'delete_payment'),(40,'Can view payment',10,'view_payment'),(41,'Can add party',11,'add_party'),(42,'Can change party',11,'change_party'),(43,'Can delete party',11,'delete_party'),(44,'Can view party',11,'view_party'),(45,'Can add appointment',12,'add_appointment'),(46,'Can change appointment',12,'change_appointment'),(47,'Can delete appointment',12,'delete_appointment'),(48,'Can view appointment',12,'view_appointment'),(49,'Can add venue',13,'add_venue'),(50,'Can change venue',13,'change_venue'),(51,'Can delete venue',13,'delete_venue'),(52,'Can view venue',13,'view_venue'),(53,'Can add entertainer',14,'add_entertainer'),(54,'Can change entertainer',14,'change_entertainer'),(55,'Can delete entertainer',14,'delete_entertainer'),(56,'Can view entertainer',14,'view_entertainer'),(57,'Can add decorator',15,'add_decorator'),(58,'Can change decorator',15,'change_decorator'),(59,'Can delete decorator',15,'delete_decorator'),(60,'Can view decorator',15,'view_decorator'),(61,'Can add content maker',16,'add_contentmaker'),(62,'Can change content maker',16,'change_contentmaker'),(63,'Can delete content maker',16,'delete_contentmaker'),(64,'Can view content maker',16,'view_contentmaker'),(65,'Can add catering',17,'add_catering'),(66,'Can change catering',17,'change_catering'),(67,'Can delete catering',17,'delete_catering'),(68,'Can view catering',17,'view_catering'),(69,'Can add user',18,'add_user'),(70,'Can change user',18,'change_user'),(71,'Can delete user',18,'delete_user'),(72,'Can view user',18,'view_user');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_user`
--

LOCK TABLES `core_user` WRITE;
/*!40000 ALTER TABLE `core_user` DISABLE KEYS */;
INSERT INTO `core_user` VALUES (1,'pbkdf2_sha256$320000$pjJxcjIuLS676gufXuGPQo$zj/BaMO5HQQYFfVpFdDsNLnX8+ZNVaAbaT+0GmtBaRY=',NULL,0,'user1','user1','smith',0,1,'2022-04-18 14:19:43.645119','user1@domain.com','1234','customer');
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(12,'api','appointment'),(17,'api','catering'),(16,'api','contentmaker'),(6,'api','customer'),(15,'api','decorator'),(14,'api','entertainer'),(7,'api','notification'),(11,'api','party'),(10,'api','payment'),(9,'api','review'),(8,'api','serviceprovider'),(13,'api','venue'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(18,'core','user'),(5,'sessions','session');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-04-18 14:06:44.302683'),(2,'contenttypes','0002_remove_content_type_name','2022-04-18 14:06:44.312951'),(3,'auth','0001_initial','2022-04-18 14:06:44.349024'),(4,'auth','0002_alter_permission_name_max_length','2022-04-18 14:06:44.359620'),(5,'auth','0003_alter_user_email_max_length','2022-04-18 14:06:44.362651'),(6,'auth','0004_alter_user_username_opts','2022-04-18 14:06:44.366079'),(7,'auth','0005_alter_user_last_login_null','2022-04-18 14:06:44.369168'),(8,'auth','0006_require_contenttypes_0002','2022-04-18 14:06:44.369991'),(9,'auth','0007_alter_validators_add_error_messages','2022-04-18 14:06:44.372440'),(10,'auth','0008_alter_user_username_max_length','2022-04-18 14:06:44.374610'),(11,'auth','0009_alter_user_last_name_max_length','2022-04-18 14:06:44.376736'),(12,'auth','0010_alter_group_name_max_length','2022-04-18 14:06:44.381325'),(13,'auth','0011_update_proxy_permissions','2022-04-18 14:06:44.384446'),(14,'auth','0012_alter_user_first_name_max_length','2022-04-18 14:06:44.386849'),(15,'core','0001_initial','2022-04-18 14:06:44.426845'),(16,'admin','0001_initial','2022-04-18 14:06:44.445509'),(17,'admin','0002_logentry_remove_auto_add','2022-04-18 14:06:44.450056'),(18,'admin','0003_logentry_add_action_flag_choices','2022-04-18 14:06:44.453262'),(19,'api','0001_initial','2022-04-18 14:06:44.636747'),(20,'sessions','0001_initial','2022-04-18 14:06:44.643245');
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

-- Dump completed on 2022-04-18 21:12:42
