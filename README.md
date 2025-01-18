# atodashizyannkenn

### docker立ち上げ（DB）
docker compose up db

### 実行コマンド
1. バックエンド
cd backend && go run main.go
2. フロントエンド
cd frontend && npm run dev
3. マイグレーション
go run backend/migrate/migrate.go