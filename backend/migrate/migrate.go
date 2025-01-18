package main

import (
	"backend/db"
	"backend/model"
	"fmt"
)

func main() {
	dbConn := db.OpenDB()
	defer fmt.Println("Successfully Migrated!")
	defer db.CloseDB(dbConn)
	dbConn.AutoMigrate(
		&model.Player{},
	)
}