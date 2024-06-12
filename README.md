
```
UniTrackHub
└─ Project
   ├─ .env
   ├─ assets
   │  └─ Img
   │     ├─ ESTG.webp
   │     └─ UniTrackHub.png
   ├─ backOffice
   │  ├─ Horario.html
   │  ├─ Horario.json
   │  ├─ HorariosTurmas.html
   │  ├─ Main.html
   │  ├─ turmaCRUD.html
   │  └─ userCRUD.html
   ├─ controllers
   │  └─ msql
   │     ├─ turmaController.js
   │     └─ userController.js
   ├─ data
   │  └─ prisma
   │     ├─ migrations
   │     │  ├─ 20240605174417_sync_fields
   │     │  │  └─ migration.sql
   │     │  ├─ 20240606083648_add_unique_constraint_to_email
   │     │  │  └─ migration.sql
   │     │  ├─ 20240608141514_add_is_admin_to_utilizadores
   │     │  │  └─ migration.sql
   │     │  ├─ 20240609115443_alterar_tamanho_passe
   │     │  │  └─ migration.sql
   │     │  ├─ 20240611175345_curso_turma
   │     │  │  └─ migration.sql
   │     │  ├─ 20240611175403_curso_turma
   │     │  │  └─ migration.sql
   │     │  ├─ 20240611193751_update_db
   │     │  │  └─ migration.sql
   │     │  └─ migration_lock.toml
   │     └─ schema.prisma
   ├─ frontEnd
   │  ├─ ForgotPass.html
   │  ├─ Index.html
   │  ├─ Login.html
   │  └─ Register.html
   ├─ middleware
   │  ├─ user.js
   │  └─ userAdmin.js
   ├─ package-lock.json
   ├─ package.json
   ├─ prisma
   │  └─ schema.prisma
   ├─ README.md
   ├─ routes
   │  ├─ msql
   │  │  ├─ index.js
   │  │  ├─ turmaRoute.js
   │  │  └─ userRoute.js
   │  ├─ privado.js
   │  └─ publico.js
   ├─ server.js
   ├─ styles
   │  ├─ Index.css
   │  └─ Main.css
   └─ utils
      └─ authenticate.js

```