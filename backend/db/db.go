package db

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func OpenDB() *gorm.DB {
	// 開発環境の場合に.envファイルを読み込む
	if os.Getenv("DEV_ENV") == "dev" {
		err := godotenv.Load("/app/.env")
		if err != nil {
			log.Fatalln(err)
		}
	}

	// 必要な環境変数が設定されているかを確認
	requiredEnvVars := []string{"DB_USER", "DB_PASSWORD", "DB_HOST", "DB_PORT", "DB_NAME"}
		for _, envVar := range requiredEnvVars {
			if os.Getenv(envVar) == "" {
				log.Fatalf("Missing required environment variable: %s", envVar)
			}
		}

	// データベース接続用のURLを作成
	url := fmt.Sprintf("postgres://%s:%s@%s:%s/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
	)

	// データベースに接続
	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	// 接続成功メッセージをログに出力
	log.Println("Connected to the database successfully")

	return db
}

/* DB接続をクローズ **/
func CloseDB(db *gorm.DB) {
	sqlDB, _ := db.DB()
	if err := sqlDB.Close(); err != nil {
		log.Printf("Failed to close the database connection: %v", err)
	}
}