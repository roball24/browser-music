FROM golang:1.8.1

WORKDIR /go/src/github.com/roball24/browser-music/backend-golang
ADD ./backend-golang /go/src/github.com/roball24/browser-music/backend-golang

RUN go get -u github.com/kardianos/govendor

RUN govendor sync

RUN go install github.com/roball24/browser-music/backend-golang

EXPOSE 9090

ENTRYPOINT ["/go/bin/backend-golang"]
