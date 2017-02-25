package main

import (
	"BrowserMusic/backend-golang/api"
	"BrowserMusic/backend-golang/config"
	"BrowserMusic/backend-golang/system"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	system.Init()
	api.Init()

	port := config.Port
	if port == "" {
		port = "8080"
	}

	api.Listen(":" + port)
}
