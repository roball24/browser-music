package errors

import (
	"github.com/gin-gonic/gin"
)

type appError interface {
	Error() string
}

type apiError struct {
	message string
}

func New(m string) appError {
	return &apiError{m}
}

func (e *apiError) Error() string {
	return e.message
}

func Response(c *gin.Context, code int, message string, err interface{}) {

	e, ok := err.(appError)
	if ok {
		message = message + "; " + e.Error()
	}

	c.Abort()
	c.JSON(code, gin.H{
		"code":    code,
		"message": message,
	})

	return
}
