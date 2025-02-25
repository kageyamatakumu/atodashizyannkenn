package model

import "time"

type Player struct {
	ID             uint         `json:"id" gorm:"primaryKey"`
	Email          string       `json:"email" gorm:"unique"`
	Password       string       `json:"password"`
	Name           string       `json:"name"`
	CreatedAt      time.Time    `json:"created_at"`
	UpdatedAt      time.Time    `json:"updated_at"`
}