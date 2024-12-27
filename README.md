# atodashizyannkenn

docker compose up frontend --build

docker compose up backend --build

マイグレーション方法
  1.コンテナの中に入る
    docker run -it --entrypoint /bin/sh atodashizyannkenn-backend
  2.マイグレーションを実行する
    cd migrate && go run main.go