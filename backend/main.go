package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	// Echo のインスタンスを作成
	e := echo.New()

	// ルートエンドポイントを設定
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	// サーバーをポート8080で起動
	e.Logger.Fatal(e.Start(":8080"))
}
