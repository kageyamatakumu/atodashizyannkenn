# atodashizyannkenn

### docker立ち上げ（DB）
docker compose up db

### 実行コマンド
1. バックエンド
cd backend
go run main.go
2. マイグレーション
go run migrate/migrate.go
3. フロントエンド
cd ../
cd frontend
npm run dev
