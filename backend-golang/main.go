package main

import (
	"BrowserMusic/backend-golang/api"
	"BrowserMusic/backend-golang/config"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	port := config.Port

	api.Init()

	if port == "" {
		port = "8080"
	}

	api.Listen(":" + port)
}
