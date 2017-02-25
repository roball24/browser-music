package config

import "os"

var (
	Debug    = os.Getenv("DEBUG")
	Port     = os.Getenv("PORT")
	CorsHost = os.Getenv("CORS_HOST")
)
