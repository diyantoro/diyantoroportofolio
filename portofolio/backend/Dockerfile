FROM golang:1.22-alpine AS build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/server .

FROM alpine:latest

WORKDIR /app

RUN apk --no-cache add ca-certificates tzdata

COPY --from=build /app/server .
COPY --from=build /app/uploads ./uploads
COPY --from=build /app/.env ./.env

EXPOSE 8080

CMD ["./server"]
