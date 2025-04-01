<p align=center>
<a target="_blank" style="text-decoration: none" href="https://oasiscabins.vercel.app">
    <img style="width: 350px" src="public/logo-dark.png" alt="wild oasis" />
</a>
    <br/>
    <br/>
   <img src="https://deploy-badge.vercel.app/vercel/oasiscabins" alt="Vercel Status" />
</p>
<br/>
<hr/>
<br/>
A <a target="_blank" href="https://oasiscabins.vercel.app/">web application</a> for hotel management. Lets the staff manage bookings, cabins and analyse general statistics 🏨

## 📸 Screenshots

### Login

![Login](screenshots/user-login.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Bookings

![Bookings](screenshots/bookings.png)

### Cabins

![Cabins](screenshots/cabins.png)

### New staff account creation

![New staff account](screenshots/new-staff-account.png)

### Settings

![Settings](screenshots/settings.png)

### Dark mode

![Dark mode](screenshots/dark-mode.png)

## 🧑‍💻 Technology Stack

<a target="_blank" style="text-decoration: none" href="https://react.dev">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
</a>&nbsp;&nbsp;
<a target="_blank" style="text-decoration: none" href="https://tanstack.com/query/latest">
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="react-query"/>
</a>&nbsp;&nbsp;
<a target="_blank" style="text-decoration: none" href="https://react-hook-form.com">
  <img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white" alt="react-forms"/>
</a>&nbsp;&nbsp;
<a target="_blank" style="text-decoration: none" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-components"/>
</a>

## Backend

- To store data and user authentication:

  <a target="_blank" style="text-decoration: none" href="https://supabase.com">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  </a>

## 🔧 Prerequisites

- > [node](https://nodejs.org/en/) >= v22.4.1
- > [npm](https://www.npmjs.com/) >= v10.8.1

## ⚙ Installation

1. Clone / Download [this](https://github.com/Pranav-Patani/wildoasis) repo.
2. Inside the project, open a terminal and run:

   ```
   npm install
   ```

   This will install all the dependencies.

3. Create your supabase account and find your supabase URL and supabase Key.

4. Find the services directory under the src directory and open the supabase.js file. Update it with your own URL and key.

   ```
   const supabaseUrl = yourSupabaseUrl
   const supabaseKey = yourSupabaseKey
   ```

   Replace _yourSupabaseUrl_ and _yourSupabaseKey_ with your own **Supabase URL** and **API Key**.

5. Go to supabase and create 4 tables - cabins, bookings, guests and settings. Create new policies, Insert, Delete, Update, Select, with user authentication for all of them.

6. Create storage buckets for storing cabin images (named cabins) and user avatars (named avatars) in supabase.

7. Manually create a user from supabse. Further can be created via the app through this user's account.

8. To start the development server run:
   ```
   npm run dev
   ```

## 🧑‍💼 Author

<a target="_blank" style="text-decoration: none" href="https://x.com/Prnv_Ptn">
<img src="https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white" />
</a>
<br/>
<a target="_blank" style="text-decoration: none" href="https://www.linkedin.com/in/pranavpatani/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
