package main

import (
	"github.com/roball24/browser-music/backend-golang/api"
	"github.com/roball24/browser-music/backend-golang/config"
	"github.com/roball24/browser-music/backend-golang/system"
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
