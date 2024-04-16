-- Green0meterDB.forms definition

CREATE TABLE `forms` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `description` text,
                         `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                         `title` varchar(255) NOT NULL,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Green0meterDB.respondents definition

CREATE TABLE `respondents` (
                               `id` int NOT NULL AUTO_INCREMENT,
                               `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                               `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                               `name` varchar(255) NOT NULL,
                               `email` varchar(255) NOT NULL,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Green0meterDB.form_respondents definition

CREATE TABLE `form_respondents` (
                                    `form_id` int NOT NULL,
                                    `respondent_id` int NOT NULL,
                                    PRIMARY KEY (`form_id`,`respondent_id`),
                                    KEY `respondent_id` (`respondent_id`),
                                    CONSTRAINT `form_respondents_ibfk_1` FOREIGN KEY (`form_id`) REFERENCES `forms` (`id`) ON DELETE CASCADE,
                                    CONSTRAINT `form_respondents_ibfk_2` FOREIGN KEY (`respondent_id`) REFERENCES `respondents` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Green0meterDB.questions definition

CREATE TABLE `questions` (
                             `id` int NOT NULL AUTO_INCREMENT,
                             `type` enum('text','radio','checkbox','select') NOT NULL DEFAULT 'text',
                             `options` json DEFAULT NULL,
                             `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                             `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                             `formId` int DEFAULT NULL,
                             `text` varchar(255) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Green0meterDB.submissions definition

CREATE TABLE `submissions` (
                               `id` int NOT NULL AUTO_INCREMENT,
                               `answers` json NOT NULL,
                               `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                               `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                               `formId` int DEFAULT NULL,
                               `respondentId` int DEFAULT NULL,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;