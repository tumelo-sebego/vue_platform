# platform-app/platform-app/README.md

# Platform App

This project is a native app shell built using Capacitor and Vue.js. It provides a user-friendly interface for accessing a SQLite database and restoring cached content when offline.

## Features

- Main shell layout defined in `AppShell.vue`
- User input form with an input field and button in `CacheForm.vue`
- SQLite database interaction through `DatabaseService`
- Caching logic to handle offline scenarios

## Project Structure

```
platform-app
├── src
│   ├── components
│   │   ├── AppShell.vue
│   │   ├── CacheForm.vue
│   │   └── DatabaseService.ts
│   ├── services
│   │   ├── sqlite.service.ts 
│   │   └── cache.service.ts
│   ├── App.vue
│   ├── main.ts
│   └── types
│       └── index.ts
├── capacitor.config.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd platform-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm run serve
   ```

## Usage

- Open the app to access the main shell.
- Enter a link in the input field and click the button to interact with the database.
- The app will cache content for offline access.

## License

This project is licensed under the MIT License.