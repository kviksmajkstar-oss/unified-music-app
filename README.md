# Unified Music App

Музыкальное приложение-агрегатор для поиска и прослушивания музыки из разных сервисов.

## Features

* поиск музыки из нескольких сервисов
* slowed / speed playback
* AI рекомендации
* современный UI
* Android / iOS приложение

## Stack

Backend

* Node.js
* Express
* MongoDB

Mobile

* React Native
* Expo

AI

* JS recommendation engine

---

## Install

### Backend

```
cd backend
npm install
cp .env.example .env
npm run dev
```

### Mobile

```
cd mobile
npm install
npx expo start
```

---

## API

```
GET /api/search?q=
POST /api/recommend
```
